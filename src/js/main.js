import noUiSlider from 'nouislider';

//import $ from '../local_modules/jquery/dist/jquery.min';

import '../local_modules/slick-carousel/slick/slick.min';

import './modules/header-nav';

import './modules/choice-select';

import './modules/select';

import './modules/accordion';

//import './modules/stepper';

import './modules/blog-widget';

let stepsSlider = document.getElementById('steps-slider');
let input0 = document.getElementById('input-with-keypress-0');
let input1 = document.getElementById('input-with-keypress-1');
let inputs = [input0, input1];
noUiSlider.create(stepsSlider, {
	start: [200, 1800], 
	step: 50,
	connect: true,
	range: {
        'min': [50], 
        'max': [2000]    
	},
	//format. use int number
	format: {
    	to: function (value) {
    		return parseInt(value);
    	},        
		from: function (value) {
			return parseInt(value);
		}
	}
});
stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});
// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        stepsSlider.noUiSlider.setHandle(handle, this.value);
    });
    input.addEventListener('keydown', function (e) {
        let values = stepsSlider.noUiSlider.get();
        let value = Number(values[handle]);
        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        let steps = stepsSlider.noUiSlider.steps();
        // [down, up]
        let step = steps[handle];
        let position;
        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {
            case 13:
                stepsSlider.noUiSlider.setHandle(handle, this.value);
                break;
            case 38:
                // Get step to go increase slider value (up)
                position = step[1];
                // false = no step is set
                if (position === false) {
                    position = 1;
                }
                // null = edge of slider
                if (position !== null) {
                    stepsSlider.noUiSlider.setHandle(handle, value + position);
                }
                break;
            case 40:
                position = step[0];
                if (position === false) {
                    position = 1;
                }
                if (position !== null) {
                    stepsSlider.noUiSlider.setHandle(handle, value - position);
                }
                break;
        }
    });
});
