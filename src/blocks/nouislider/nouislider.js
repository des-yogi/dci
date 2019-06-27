document.addEventListener('DOMContentLoaded', function(){

  var rangeControl = document.getElementById('range-slider');
  var inputMin = document.getElementById('inputMin');
  var inputMax = document.getElementById('inputMax');
  var inputs = [inputMin, inputMax];

  if (!rangeControl) {
    return;
  }

  noUiSlider.create(rangeControl, {
      start: [50, 30000],
      margin: 3000,
      connect: true,
      range: {
          'min': 50,
          'max': 100000
      },
      step: 10
  });

  rangeControl.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });

  // Listen to keydown events on the input field.
  inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        rangeControl.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

        var values = rangeControl.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = rangeControl.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

          case 13:
              rangeControl.noUiSlider.setHandle(handle, this.value);
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
                  rangeControl.noUiSlider.setHandle(handle, value + position);
              }
              break;
          case 40:
              position = step[0];
              if (position === false) {
                  position = 1;
              }
              if (position !== null) {
                  rangeControl.noUiSlider.setHandle(handle, value - position);
              }
              break;
          }
      });
  });

});
