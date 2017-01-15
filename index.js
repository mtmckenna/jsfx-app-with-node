var jsfx = require('jsfx-audio');

var library = {
    "select": {"Volume":{"Sustain":0.1,"Decay":0.15,"Punch":0.55}},
      "long": {"Volume":{"Sustain":0.1,"Decay":0.5,"Punch":1}}
};

window.sfx = jsfx.Sounds(library);

