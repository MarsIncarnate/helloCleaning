import wixLocation from 'wix-location';

$w.onReady(function () {
    let bedroom = 0.00;
    let bathroom = 5.00;
    let recurrence = 0.00;
    let selectedData = { 'bedroom': '', 'bathroom': '', 'frequency': '', 'type': '', 'price': '' }

    const dropdown1 = $w('#dropdown1');
    dropdown1.onChange((event) => {
        let value = event.target.value
        selectedData.bedroom = value
        let check;
        if (check != 'studio' && value == 'Studio') {
            check = 'studio'
            bedroom = 0.00
        }
        else if (check != '1' && value == '1 Bedroom') {
            check = '1'
            bedroom = 5.00
        }
        else if (check != '2' && value == '2 Bedrooms') {
            check = '2'
            bedroom = 25.00
        }
        else if (check != '3' && value == '3 Bedrooms') {
            check = '3'
            bedroom = 45.00
        }
        else if (check != '4' && value == '4 Bedrooms') {
            check = '4'
            bedroom = 60.00
        }
        else if (check != '5' && value == '5 Bedrooms') {
            check = '5'
            bedroom = 85.00
        }
        else if (check != '6' && value == '6 Bedrooms') {
            check = '6'
            bedroom = 115.00
        }
        else if (check != '7' && value == '7 Bedrooms') {
            check = '7'
            bedroom = 135.00
        }
        let price = bedroom + bathroom + recurrence
        $w('#text118').text = '$' + price.toString() + '.00'
    });

    const dropdown2 = $w('#dropdown2')
    dropdown2.onChange((event) => {
        let value = event.target.value
        selectedData.bathroom = value
        let bathCheck;
        if (bathCheck != '1' && value == '1 Bathroom') {
            bathroom = 5.00
            bathCheck = '1'
        } else if (bathCheck != '2' && value == '2 Bathrooms') {
            bathroom = 20.00
            bathCheck = '2'
        } else if (bathCheck != '3' && value == '3 Bathrooms') {
            bathroom = 45.00
            bathCheck = '3'
        } else if (bathCheck != '4' && value == '4 Bathrooms') {
            bathroom = 65.00
            bathCheck = '4'
        } else if (bathCheck != '5' && value == '5 Bathrooms') {
            bathroom = 80.00
            bathCheck = '5'
        } else if (bathCheck != '6' && value == '6 Bathrooms') {
            bathroom = 90.00
            bathCheck = '6'
        }
        let price = bedroom + bathroom + recurrence
        $w('#text118').text = '$' + price.toString() + '.00'
    })

    const dropdown3 = $w('#dropdown3')
    dropdown3.onChange((event) => {
        let value = event.target.value
        selectedData.frequency = value
        let recCheck
        if (recCheck != '1time' && value == 'One Time Deep Clean') {
            recurrence = 165.00
            recCheck = '1time'
        } else if (recCheck != 'weekly' && value == 'Weekly') {
            recurrence = 90.00
            recCheck = 'weekly'
        } else if (recCheck != '2weeks' && value == 'Every 2 Weeks') {
            recurrence = 110.00
            recCheck = '2weeks'
        } else if (recCheck != '4weeks' && value == 'Every 4 Weeks') {
            recurrence = 130.00
            recCheck = '4weeks'
        }
        let price = bedroom + bathroom + recurrence
        let priceTxt =  '$' + price.toString() + '.00'
        $w('#text118').text = priceTxt
        selectedData.price = priceTxt
    })
    const dropdown5 = $w('#dropdown5')
    dropdown5.onChange((event) => {
        selectedData.type = event.target.value
    })

    $w('#button63').onClick(() => {
		let data = JSON.stringify(selectedData)
		wixLocation.to(`/quote?selectedData=${encodeURIComponent(data)}`)
	})
});