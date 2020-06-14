////////////////////////////////////////////////////////////////////////////////
////////////////////////////// CONSTANTS ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var TODAY = new Date();
var DD = String(TODAY.getDate()).padStart(2, '0');
var MM = String(TODAY.getMonth() + 1).padStart(2, '0');
var YYYY = String(TODAY.getFullYear());
var DATE = YYYY + MM + DD;
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////////// DEFINE TIMELINE /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
          /* create timeline */
          var timeline = [];
          var calib_timeline = {
            timeline: []
          };
          var TT_timeline = {
            timeline: []
          };
          var SRT_timeline = {
            timeline: []
          };
          var SiNRT_timeline = {
            timeline: []
          };
          var NVSRT_timeline = {
            timeline: []
          };
          var FWDS_timeline = {
            timeline: []
          };
          var BWDS_timeline = {
            timeline: []
          };
          var wordRec_timeline = {
            timeline: []
          };
          var wordRecSiN_timeline = {
            timeline: []
          };
          var wordRecNVS_timeline = {
            timeline: []
          };
              // task1.timeline.push(first_trial)
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////////// CALIBRATION /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
    /* page 1. welcome */
    var welcome = {
      data: {
        screen_ID: "Welcome"
      },
      type: "survey-html-form",
      preamble: "<p>Welcome to the experiment!</p>" +
        "Please complete the form",
      html: "<p>Participant ID: <input name='Part_ID' type='text' /></p>",
      // html:  <input name='Part_ID type='text' />
      on_finish: function(data){
        data.responses = JSON.parse(data.responses);
        // console.log("data.responses:" + data.responses)
        jsPsych.data.addProperties({
          part_ID: data.responses.Part_ID,
        });
        // jsPsych.data.displayData();
        // console.log("part_ID:" + part_ID);
        // console.log("data.responses:" + data.responses);
      }
    };

    /* pages 2-4. Instructions */
    var instructions_general = {
      data: {
        screen_ID: "Instructions"
      },
      type: "instructions",
      pages: [
        // page 2:
        "<p>This experiment is about speech recognition.</p>" +
        "<p>To begin with, make sure that you are in a silent environment.</p>" +
        "<div style='float: left;'><img src='../../stimuli/calibration/nN3.jpg' width='100' height='100' /img></div>" +
        "<div style='float: right;'><img src='../../stimuli/calibration/nN1.jpg' width='100' height='100' /img></div>" +
        "<div><img src='../../stimuli/calibration/nN2.jpg' width='100' height='100' /img></div>",
        // "<div style="width: 500px;"> +
        //   <div style="float: left; width: 200px;"><img src='jspsych-6.1.0/examples/img/SRT/nN3.jpg'/img></div> +
        //   <div style="float: left; width: 100px;"><img src='jspsych-6.1.0/examples/img/SRT/nN1.jpg'/img></div> +
        //   <div style="float: left; width: 200px;"><img src='jspsych-6.1.0/examples/img/SRT/nN2.jpg'/img></div> +
        //   <br style="clear: left;" />
        // </div>",
        // "<div><img src='jspsych-6.1.0/examples/img/SRT/nN3.jpg' align="left" /> +
        // <img src='jspsych-6.1.0/examples/img/SRT/nN1.jpg' align="left" /> +
        // <img src='jspsych-6.1.0/examples/img/SRT/nN2.jpg' /></div>",
        // page 3:
        "<p>Please, wear headphones and make yourself comfortable.</p>" +
        "<div style='float: left;'><img src='../../stimuli/calibration/he.jpg' width='100' height='100' /img></div>" +
        "<div style='float: right;'><img src='../../stimuli/calibration/re.jpg' width='100' height='100' /img></div>",
        // page 4:
        "<p>Before starting the experiment, we ask you to regulate the volume " +
        "of your loudspeakers while listening to a sound (in the next page) " +
        "to a level that allows you to easily hear the sound, but which is, " +
        "at the same time, comfortable.</p>"
      ],
      show_clickable_nav: true
    }

    var calib_preAudio = {
      type: 'html-button-response',
      stimulus: "<p>N0TE 1: Recent versions of Chrome require the user to " +
      "interact with a page before it can play audio.</p>" +
      "<p>Clicking the button below counts as an interaction.</p>" +
      "<p>N0TE 2: the script is initialised with the `use_webaudio` parameter " +
      "of jspsych.init set to `false` for testing on local machine; " +
      "remember to change for testing on server</p>",
      choices: ["play"]
    };

    var calib_audioOut = {
      type: 'audio-keyboard-response',
      stimulus: '../../stimuli/calibration/partyCrowd11sec_eq.wav',
      choices: jsPsych.NO_KEYS,
      trial_duration: 10000,
      prompt: "Regulate volume.",
    response_ends_trial: false
    }

    var calib_postAudio = {
      type: 'html-button-response',
      stimulus: "<p>If you have set the volume, proceed to the experiment, " +
      "else replay the sound</p>",
      choices: ["replay", "proceed"]
    };

    var calib_node = {
      timeline: [calib_audioOut, calib_postAudio],
      loop_function: function(data){
        if(jsPsych.data.get().last(1).values()[0].button_pressed == 0){
            return true;
        } else {
            return false;
        }
      }
    }

/////// PUSH CALIBRATION TRIALS TO CALIBRATION TIMELINE /////////
    calib_timeline.timeline.push(welcome);
    calib_timeline.timeline.push(instructions_general);
    calib_timeline.timeline.push(calib_preAudio);
    calib_timeline.timeline.push(calib_node);
    timeline.push(calib_timeline);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//////////////////////// START EXPERIMENT //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function startExpDebug() {
  console.log("startExp reached")
  /* start the experiment */
  jsPsych.init({
    timeline: timeline,
    use_webaudio: false,
    // on_interaction_data_update: function(data) {
    //   var trial = jsPsych.currentTrial();
    //   trial.data.event = data.event;
    // },
    on_finish: function() {
      var csv = jsPsych.data.get().csv();
      var filename = "ACexp_part" + jsPsych.data.get().values()[0].part_ID + "_" + DATE + ".csv";
      // var filename = "ACexp_part" + jsPsych.data.get().values()[0].Part_ID + "_" + " + DATE + " + ".csv";
      downloadCSV(csv,filename);
      jsPsych.data.displayData();
    }
  });
};
