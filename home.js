import wixWindowFrontend from 'wix-window-frontend';
import wixLocation from 'wix-loaction'

$w.onReady(function () {
	
	function openOptions(parent, box) {
		$w(parent).onClick(() => {
			if ($w(box).hidden) {
				$w(box).show()
			}
			else {
				$w(box).hide()
			}
		})
	}
	let bedroom = 0.00;
	let bathroom = 5.00;
	let recurrence = 0.00;

	function handleClick(text, parentText, parent) {
		$w(text).onClick(() => {
			let textVal = $w(text).text
			console.log(textVal)
			$w(parentText).text = textVal
			$w(parent).hide()
			if (parentText == '#text77') {
				let check;
				//let standard = 0;
				if (check != 'studio' && text == '#text76') {
					check = 'studio'
					bedroom = 0.00
				}
				else if (check != '1' && text == '#text87') {
					// let num = $w('#text118').text;
					// let res = +(num) + 5;
					// $w('#text118').text = res.toString()
					check = '1'
					bedroom = 5.00
				}
				else if (check != '2' && text == '#text88') {
					check = '2'
					bedroom = 25.00
				}
				else if (check != '3' && text == '#text89') {
					check = '3'
					bedroom = 45.00
				}
				else if (check != '4' && text == '#text90') {
					check = '4'
					bedroom = 60.00
				}
				else if (check != '5' && text == '#text91') {
					check = '5'
					bedroom = 85.00
				}
				else if (check != '6' && text == '#text93') {
					check = '6'
					bedroom = 115.00
				}
				else if (check != '7' && text == '#text92') {
					check = '7'
					bedroom = 135.00
				}
			}
			if (parentText == '#text102' ) {
				let bathCheck;
				if (bathCheck != '1' && text == '#text101') {
					bathroom = 5.00
					bathCheck = '1'
				}
				else if (bathCheck != '2' && text == '#text100') {
					bathroom = 20.00
					bathCheck = '2'
				}
				else if (bathCheck != '3' && text == '#text98') {
					bathroom = 45.00
					bathCheck = '3'
				}
				else if (bathCheck != '4' && text == '#text99') {
					bathroom = 65.00
					bathCheck = '4'
				}
				else if (bathCheck != '5' && text == '#text96') {
					bathroom = 80.00
					bathCheck = '5'
				}
				else if (bathCheck != '6' && text == '#text97') {
					bathroom = 90.00
					bathCheck = '6'
				}
			}
			if (parentText == '#text111') {
				let recCheck;
				//let standard = 0;
				// if (recCheck != 'rec' && text == '#text110') {
				// 	recCheck = 'rec'
				// 	recurrence = 0.00
				// }
				if (recCheck != '1time' && text == '#text109') {
					recurrence = 165.00
					recCheck = '1time'
				}
				else if (recCheck != 'weekly' && text == '#text107') {
					recurrence = 90.00
					recCheck = 'weekly'
				}
				else if (recCheck != '2weeks' && text == '#text108') {
					recurrence = 110.00
					recCheck = '2weeks'
				}
				else if (recCheck != '4weeks' && text == '#text106') {
					recurrence = 130.00
					recCheck = '4weeks'
				}
			}
			let price = bedroom + bathroom + recurrence
			$w('#text118').text = '$' + price.toString() + '.00'
		})
	}
	openOptions('#box10', '#box11');
	openOptions('#box17', '#box16');
	openOptions('#box49', '#box48')
	openOptions('#box60', '#box59')
	openOptions('#box62', '#box69')
	handleClick('#text74', '#text70', '#box11')
	handleClick('#text73', '#text70', '#box11')
	handleClick('#text76', '#text77', '#box16')
	for (let i=87; i<=93; i++) {
		handleClick('#text'+i, '#text77', '#box16')
	}
	for (let i=101; i>=96; i--) {
		handleClick('#text'+i, '#text102', '#box48')
	}
	for (let i=109; i>=106; i--) {
		handleClick('#text'+i, '#text111', '#box59')
	}
	for (let i=117; i>=115; i--) {
		handleClick('#text'+i, '#text112', '#box69')
	}

});


export function box9_mouseOut(event) {
	if (wixWindowFrontend.formFactor == 'Desktop') {
		$w('#box11').hide()
	}
}
export function box50_mouseOut(event) {
	if (wixWindowFrontend.formFactor == 'Desktop') {
		$w('#box48').hide()
	}
}
export function box61_mouseOut(event) {
	if (wixWindowFrontend.formFactor == 'Desktop') {
		$w('#box59').hide()
	}
}
export function box18_mouseOut(event) {
	if (wixWindowFrontend.formFactor == 'Desktop') {
		$w('#box16').hide()
	}
}