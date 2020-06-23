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
      stimulus: "<p>PART 1: CALIBRATION</p>",
      choices: ["Play sound"]
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
/////////////////////////// TONGUE TWISTERS ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
    var tonguetwistersList_A_timeline_variables = [
        {tongueTwist: 'Teich Deich Teich Deich', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Teich Deich Teich Deich'}},
        {tongueTwist: 'Till Dill Till Dill', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Till Dill Till Dill'}},
        {tongueTwist: 'Tier Dir Tier Dir', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Tier Dir Tier Dir'}},
        {tongueTwist: 'Torf Dorf Torf Dorf', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Torf Dorf Torf Dorf'}},
        {tongueTwist: 'Tick Dick Tick Dick', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Tick Dick Tick Dick'}},
        {tongueTwist: 'Tipp Dip Tipp Dip', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Tipp Dip Tipp Dip'}},
        {tongueTwist: 'Tank Dank Tank Dank', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Tank Dank Tank Dank'}},
        {tongueTwist: 'Tal Dal Tal Dal', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Tal Dal Tal Dal'}},
        {tongueTwist: 'Beil Peil Beil Peil', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Beil Peil Beil Peil'}},
        {tongueTwist: 'Bin Pin Bin Pin', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bin Pin Bin Pin'}},
        {tongueTwist: 'Bein Pein Bein Pein', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bein Pein Bein Pein'}},
        {tongueTwist: 'Bier Pier Bier Pier', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bier Pier Bier Pier'}},
        {tongueTwist: 'Bar Paar Bar Paar', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bar Paar Bar Paar'}},
        {tongueTwist: 'Bett Pet Bett Pet', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bett Pet Bett Pet'}},
        {tongueTwist: 'Bellt Pellt Bellt Pellt', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bellt Pellt Bellt Pellt'}},
        {tongueTwist: 'Back Pack Back Pack', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Back Pack Back Pack'}},
        {tongueTwist: 'Kern Gern Kern Gern', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kern Gern Kern Gern'}},
        {tongueTwist: 'Kuss Guss Kuss Guss', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kuss Guss Kuss Guss'}},
        {tongueTwist: 'Kurt Gurt Kurt Gurt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kurt Gurt Kurt Gurt'}},
        {tongueTwist: 'Kalt Galt Kalt Galt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kalt Galt Kalt Galt'}},
        {tongueTwist: 'Kaff Gaff Kaff Gaff', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kaff Gaff Kaff Gaff'}},
        {tongueTwist: 'Keil Geil Keil Geil', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Keil Geil Keil Geil'}},
        {tongueTwist: 'Kur Gur Kur Gur', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kur Gur Kur Gur'}},
        {tongueTwist: 'Kilt Gilt Kilt Gilt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kilt Gilt Kilt Gilt'}}
    ];

    var tonguetwistersList_B_timeline_variables = [
        {tongueTwist: 'Deich Teich Deich Teich', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Deich Teich Deich Teich'}},
        {tongueTwist: 'Dill Till Dill Till', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dill Till Dill Till'}},
        {tongueTwist: 'Dir Tier Dir Tier', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dir Tier Dir Tier'}},
        {tongueTwist: 'Dorf Torf Dorf Torf', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dorf Torf Dorf Torf'}},
        {tongueTwist: 'Dick Tick Dick Tick', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dick Tick Dick Tick'}},
        {tongueTwist: 'Dip Tipp Dip Tipp', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dip Tipp Dip Tipp'}},
        {tongueTwist: 'Dank Tank Dank Tank', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dank Tank Dank Tank'}},
        {tongueTwist: 'Dal Tal Dal Tal', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dal Tal Dal Tal'}},
        {tongueTwist: 'Peil Beil Peil Beil', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Peil Beil Peil Beil'}},
        {tongueTwist: 'Pin Bin Pin Bin', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pin Bin Pin Bin'}},
        {tongueTwist: 'Pein Bein Pein Bein', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pein Bein Pein Bein'}},
        {tongueTwist: 'Pier Bier Pier Bier', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pier Bier Pier Bier'}},
        {tongueTwist: 'Paar Bar Paar Bar', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Paar Bar Paar Bar'}},
        {tongueTwist: 'Pet Bett Pet Bett', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pet Bett Pet Bett'}},
        {tongueTwist: 'Pellt Bellt Pellt Bellt', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pellt Bellt Pellt Bellt'}},
        {tongueTwist: 'Pack Back Pack Back', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pack Back Pack Back'}},
        {tongueTwist: 'Gern Kern Gern Kern', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Gern Kern Gern Kern'}},
        {tongueTwist: 'Guss Kuss Guss Kuss', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Guss Kuss Guss Kuss'}},
        {tongueTwist: 'Gurt Kurt Gurt Kurt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Gurt Kurt Gurt Kurt'}},
        {tongueTwist: 'Galt Kalt Galt Kalt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Galt Kalt Galt Kalt'}},
        {tongueTwist: 'Gaff Kaff Gaff Kaff', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Gaff Kaff Gaff Kaff'}},
        {tongueTwist: 'Geil Keil Geil Keil', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Geil Keil Geil Keil'}},
        {tongueTwist: 'Gur Kur Gur Kur', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Gur Kur Gur Kur'}},
        {tongueTwist: 'Gilt Kilt Gilt Kilt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Gilt Kilt Gilt Kilt'}}
    ];

    var tonguetwistersList_C_timeline_variables = [
        {tongueTwist: 'Teich Deich Deich Teich', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Teich Deich Deich Teich'}},
        {tongueTwist: 'Till Dill Dill Till', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Till Dill Dill Till'}},
        {tongueTwist: 'Tier Dir Dir Tier', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Tier Dir Dir Tier'}},
        {tongueTwist: 'Torf Dorf Dorf Torf', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Torf Dorf Dorf Torf'}},
        {tongueTwist: 'Tick Dick Dick Tick', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Tick Dick Dick Tick'}},
        {tongueTwist: 'Tipp Dip Dip Tipp', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Tipp Dip Dip Tipp'}},
        {tongueTwist: 'Tank Dank Dank Tank', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Tank Dank Dank Tank'}},
        {tongueTwist: 'Tal Dal Dal Tal', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Tal Dal Dal Tal'}},
        {tongueTwist: 'Beil Peil Peil Beil', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Beil Peil Peil Beil'}},
        {tongueTwist: 'Bin Pin Pin Bin', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bin Pin Pin Bin'}},
        {tongueTwist: 'Bein Pein Pein Bein', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bein Pein Pein Bein'}},
        {tongueTwist: 'Bier Pier Pier Bier', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bier Pier Pier Bier'}},
        {tongueTwist: 'Bar Paar Paar Bar', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bar Paar Paar Bar'}},
        {tongueTwist: 'Bett Pet Pet Bett', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bett Pet Pet Bett'}},
        {tongueTwist: 'Bellt Pellt Pellt Bellt', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bellt Pellt Pellt Bellt'}},
        {tongueTwist: 'Back Pack Pack Back', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Back Pack Pack Back'}},
        {tongueTwist: 'Kern Gern Gern Kern', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kern Gern Gern Kern'}},
        {tongueTwist: 'Kuss Guss Guss Kuss', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kuss Guss Guss Kuss'}},
        {tongueTwist: 'Kurt Gurt Gurt Kurt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kurt Gurt Gurt Kurt'}},
        {tongueTwist: 'Kalt Galt Galt Kalt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kalt Galt Galt Kalt'}},
        {tongueTwist: 'Kaff Gaff Gaff Kaff', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kaff Gaff Gaff Kaff'}},
        {tongueTwist: 'Keil Geil Geil Keil', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Keil Geil Geil Keil'}},
        {tongueTwist: 'Kur Gur Gur Kur', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kur Gur Gur Kur'}},
        {tongueTwist: 'Kilt Gilt Gilt Kilt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kilt Gilt Gilt Kilt'}}
    ];

    var tonguetwistersList_D_timeline_variables = [
        {tongueTwist: 'Deich Teich Teich Deich', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Deich Teich Teich Deich'}},
        {tongueTwist: 'Dill Till Till Dill', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dill Till Till Dill'}},
        {tongueTwist: 'Dir Tier Tier Dir', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dir Tier Tier Dir'}},
        {tongueTwist: 'Dorf Torf Torf Dorf', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dorf Torf Torf Dorf'}},
        {tongueTwist: 'Dick Tick Tick Dick', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dick Tick Tick Dick'}},
        {tongueTwist: 'Dip Tipp Tipp Dip', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dip Tipp Tipp Dip'}},
        {tongueTwist: 'Dank Tank Tank Dank', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dank Tank Tank Dank'}},
        {tongueTwist: 'Dal Tal Tal Dal', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dal Tal Tal Dal'}},
        {tongueTwist: 'Peil Beil Beil Peil', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Peil Beil Beil Peil'}},
        {tongueTwist: 'Pin Bin Bin Pin', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pin Bin Bin Pin'}},
        {tongueTwist: 'Pein Bein Bein Pein', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pein Bein Bein Pein'}},
        {tongueTwist: 'Pier Bier Bier Pier', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pier Bier Bier Pier'}},
        {tongueTwist: 'Paar Bar Bar Paar', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Paar Bar Bar Paar'}},
        {tongueTwist: 'Pet Bett Bett Pet', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pet Bett Bett Pet'}},
        {tongueTwist: 'Pellt Bellt Bellt Pellt', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pellt Bellt Bellt Pellt'}},
        {tongueTwist: 'Pack Back Back Pack', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pack Back Back Pack'}},
        {tongueTwist: 'Gern Kern Kern Gern', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Gern Kern Kern Gern'}},
        {tongueTwist: 'Guss Kuss Kuss Guss', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Guss Kuss Kuss Guss'}},
        {tongueTwist: 'Gurt Kurt Kurt Gurt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Gurt Kurt Kurt Gurt'}},
        {tongueTwist: 'Galt Kalt Kalt Galt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Galt Kalt Kalt Galt'}},
        {tongueTwist: 'Gaff Kaff Kaff Gaff', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Gaff Kaff Kaff Gaff'}},
        {tongueTwist: 'Geil Keil Keil Geil', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Geil Keil Keil Geil'}},
        {tongueTwist: 'Gur Kur Kur Gur', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Gur Kur Kur Gur'}},
        {tongueTwist: 'Gilt Kilt Kilt Gilt', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Gilt Kilt Kilt Gilt'}}
    ];

///////////////////

        var TT_pre_trial = {
          type: 'html-button-response',
          stimulus: jsPsych.timelineVariable('tongueTwist'),
          choices: ['Start practice trial']
        };

        var TT_practice = {
            type: "audio-audio-down",
            audio_out: '../../stimuli/TT/met1HzSoft_2min.wav',
            choices: ['Stop practice trial and start recording'],
            prompt:  jsPsych.timelineVariable('tongueTwist')
        };

        var TT_trial = {
            type: "audio-audio-down",
            audio_out: '../../stimuli/TT/met2_5HzSoft_2min.wav',
            choices: ['Stop trial and go to next item'],
            prompt:  jsPsych.timelineVariable('tongueTwist')
        };

///////////////////

    var TTtest_procedure_blockA = {
      timeline: [TT_pre_trial, TT_practice, TT_trial],
      timeline_variables: tonguetwistersList_A_timeline_variables,
      randomize_order: true
      // repetitions: 1
    };
    // timeline.push(TTtest_procedure_blockA);

    var TTtest_procedure_blockB = {
      timeline: [TT_pre_trial, TT_practice, TT_trial],
      timeline_variables: tonguetwistersList_B_timeline_variables,
      randomize_order: true
      // repetitions: 1
    };
    // timeline.push(TTtest_procedure_blockB);

    var TTtest_procedure_blockC = {
      timeline: [TT_pre_trial, TT_practice, TT_trial],
      timeline_variables: tonguetwistersList_C_timeline_variables,
      randomize_order: true
      // repetitions: 1
    };
    // timeline.push(TTtest_procedure_blockC);

    var TTtest_procedure_blockD = {
      timeline: [TT_pre_trial, TT_practice, TT_trial],
      timeline_variables: tonguetwistersList_D_timeline_variables,
      randomize_order: true
      // repetitions: 1
    };
    // timeline.push(TTtest_procedure_blockD);

    var randomizedTTblocks = jsPsych.randomization.shuffle([TTtest_procedure_blockA, TTtest_procedure_blockB, TTtest_procedure_blockC, TTtest_procedure_blockD]);

    /* pages 2-4. Instructions */
    var TTinstructions = {
      data: {
        screen_ID: "TTinstructions"
      },
      type: "TTinstructions",
      pages: [
        // page 2:
        "<p>PART 2: TONGUE TWISTERS</p>" +
        "<p>Insert instructions here.</p>"
      ],
      show_clickable_nav: true
    }

      // TT_timeline = TT_timeline.timeline.concat(randomizedTTblocks);
      TT_timeline.timeline = [TTinstructions, randomizedTTblocks];

/////// PUSH CALIBRATION TRIALS TO CALIBRATION TIMELINE /////////
    // TT_timeline.timeline.push(TTtest_procedure_blockA);
    // TT_timeline.timeline.push(TTtest_procedure_blockB);
    // TT_timeline.timeline.push(TTtest_procedure_blockC);
    // TT_timeline.timeline.push(TTtest_procedure_blockD);
    timeline.push(TT_timeline);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// SiNRT ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var instructions_SRT = {
  data: {screen_id: "instructions_SRT"},
  type: 'html-button-response',
  stimulus: "<p>PART 3: SRT</p>" +
  "<p>Insert instructions here.</p>",
  choices: ['Continue'],
  on_finish: function(data){
          }
};
// timeline.push(pre_audio);

var instructions_SiNRT = {
  data: {screen_id: "instructions_SiNRT"},
  type: 'html-button-response',
  stimulus: "<p>As part of this test, you will hear numbers from 0 to 9 in German" +
  " that are difficult to unserdtand because they are embedded in noise.</p>" +
  "<p>Your task is to select the button corresponding to the correct number.</p>" +
  "<p>Noise levels are increased throughout the test, meaning that it will become" +
  " harder over time and you will not get feedback for your responses.</p>" +
  "<p>Press 'Continue' to proceed to a practice trial</p>" +
  "<p> </p>" +
  "<p> </p>" +
  "<p>NOTE : the script is initialised with the `use_webaudio` parameter" +
  "of jspsych.init set to `false` for testing on local machine; "  +
  "remember to change for testing on server</p>",
  choices: ['Continue'],
  on_finish: function(data){
          }
};
// timeline.push(pre_audio);

var fixation_cross = {
  data: {screen_id: "fixation"},
  type: 'html-keyboard-response',
  stimulus: "<div style='font-size: 60px'><b>+</b></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000
}

var stimDir_SiN = "../../stimuli/SRT/SiN/";

var practice_trial_SiN = {
  type: 'audio-button-response-simple',
  data: {screen_id: "practice_trial", dB_SNR:0, speaker:25, digit_id: "6"},
  stimulus:stimDir_SiN + "AAA_practiceTrial_Speaker25_Digit6_0dB_SNR.wav",
  choices: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  prompt: "<p>What number was said?</p>",
  on_finish: function(data){
    if (data.button_pressed == data.digit_id){
      data.accuracy = 1
    } else {
      data.accuracy = 0
    }
  }
};

var start_SiNRT = {
  data: {screen_id: "start_SiNRT"},
  type: 'html-button-response',
  stimulus: "<p>Click 'Start Test' to get started</p>",
  choices: ['Start Test'],
  on_finish: function(data){
          }
};

var stimuli_0dB = [
  {stimulus: stimDir_SiN + "Speaker01_Digit5_0dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:0, speaker:1, digit_id: "8"}},
  {stimulus: stimDir_SiN + "Speaker05_Digit8_0dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:0, speaker:5, digit_id: "5"}},
  {stimulus: stimDir_SiN + "Speaker06_Digit6_0dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:0, speaker:6, digit_id: "6"}},
  {stimulus: stimDir_SiN + "Speaker07_Digit3_0dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:0, speaker:7, digit_id: "3"}},
  {stimulus: stimDir_SiN + "Speaker08_Digit2_0dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:0, speaker:8, digit_id: "2"}}
];

var stimuli_minus2dB = [
  {stimulus: stimDir_SiN + "Speaker10_Digit8_-2dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-2, speaker:10, digit_id: "8"}},
  {stimulus: stimDir_SiN + "Speaker12_Digit1_-2dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-2, speaker:12, digit_id: "1"}},
  {stimulus: stimDir_SiN + "Speaker13_Digit4_-2dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-2, speaker:13, digit_id: "4"}},
  {stimulus: stimDir_SiN + "Speaker14_Digit9_-2dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-2, speaker:14, digit_id: "9"}},
  {stimulus: stimDir_SiN + "Speaker16_Digit2_-2dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-2, speaker:16, digit_id: "2"}}
];

var stimuli_minus4dB = [
  {stimulus: stimDir_SiN + "Speaker21_Digit0_-4dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-4, speaker:21, digit_id: "0"}},
  {stimulus: stimDir_SiN + "Speaker25_Digit9_-4dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-4, speaker:25, digit_id: "9"}},
  {stimulus: stimDir_SiN + "Speaker33_Digit6_-4dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-4, speaker:33, digit_id: "6"}},
  {stimulus: stimDir_SiN + "Speaker48_Digit3_-4dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-4, speaker:48, digit_id: "3"}},
  {stimulus: stimDir_SiN + "Speaker49_Digit1_-4dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-4, speaker:49, digit_id: "1"}}
];

var stimuli_minus6dB = [
  {stimulus: stimDir_SiN + "Speaker61_Digit3_-6dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-6, speaker:61, digit_id: "3"}},
  {stimulus: stimDir_SiN + "Speaker01_Digit8_-6dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-6, speaker:01, digit_id: "8"}},
  {stimulus: stimDir_SiN + "Speaker05_Digit5_-6dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-6, speaker:05, digit_id: "5"}},
  {stimulus: stimDir_SiN + "Speaker06_Digit1_-6dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-6, speaker:06, digit_id: "1"}},
  {stimulus: stimDir_SiN + "Speaker07_Digit6_-6dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-6, speaker:07, digit_id: "6"}}
];

var stimuli_minus8dB = [
  {stimulus: stimDir_SiN + "Speaker08_Digit4_-8dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-8, speaker:08, digit_id: "4"}},
  {stimulus: stimDir_SiN + "Speaker10_Digit9_-8dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-8, speaker:10, digit_id: "9"}},
  {stimulus: stimDir_SiN + "Speaker12_Digit0_-8dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-8, speaker:12, digit_id: "0"}},
  {stimulus: stimDir_SiN + "Speaker13_Digit1_-8dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-8, speaker:13, digit_id: "1"}},
  {stimulus: stimDir_SiN + "Speaker14_Digit3_-8dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-8, speaker:14, digit_id: "3"}}
];

var stimuli_minus10dB = [
  {stimulus: stimDir_SiN + "Speaker16_Digit6_-10dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-10, speaker:16, digit_id: "6"}},
  {stimulus: stimDir_SiN + "Speaker21_Digit5_-10dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-10, speaker:21, digit_id: "5"}},
  {stimulus: stimDir_SiN + "Speaker25_Digit8_-10dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-10, speaker:25, digit_id: "8"}},
  {stimulus: stimDir_SiN + "Speaker33_Digit2_-10dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-10, speaker:33, digit_id: "2"}},
  {stimulus: stimDir_SiN + "Speaker48_Digit4_-10dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-10, speaker:48, digit_id: "4"}}
];

var stimuli_minus12dB = [
  {stimulus: stimDir_SiN + "Speaker49_Digit9_-12dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-12, speaker:49, digit_id: "9"}},
  {stimulus: stimDir_SiN + "Speaker61_Digit0_-12dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-12, speaker:61, digit_id: "0"}},
  {stimulus: stimDir_SiN + "Speaker01_Digit5_-12dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-12, speaker:01, digit_id: "5"}},
  {stimulus: stimDir_SiN + "Speaker05_Digit6_-12dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-12, speaker:05, digit_id: "6"}},
  {stimulus: stimDir_SiN + "Speaker06_Digit8_-12dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-12, speaker:06, digit_id: "8"}}
];

var stimuli_minus14dB = [
  {stimulus: stimDir_SiN + "Speaker07_Digit4_-14dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-14, speaker:07, digit_id: "4"}},
  {stimulus: stimDir_SiN + "Speaker08_Digit5_-14dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-14, speaker:08, digit_id: "5"}},
  {stimulus: stimDir_SiN + "Speaker10_Digit2_-14dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-14, speaker:10, digit_id: "2"}},
  {stimulus: stimDir_SiN + "Speaker12_Digit1_-14dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-14, speaker:12, digit_id: "1"}},
  {stimulus: stimDir_SiN + "Speaker13_Digit3_-14dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-14, speaker:13, digit_id: "3"}}
];

var stimuli_minus16dB = [
  {stimulus: stimDir_SiN + "Speaker14_Digit5_-16dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-16, speaker:14, digit_id: "5"}},
  {stimulus: stimDir_SiN + "Speaker16_Digit9_-16dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-16, speaker:16, digit_id: "9"}},
  {stimulus: stimDir_SiN + "Speaker21_Digit8_-16dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-16, speaker:21, digit_id: "8"}},
  {stimulus: stimDir_SiN + "Speaker25_Digit1_-16dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-16, speaker:25, digit_id: "1"}},
  {stimulus: stimDir_SiN + "Speaker33_Digit2_-16dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-16, speaker:33, digit_id: "2"}}
];

var stimuli_minus18dB = [
  {stimulus: stimDir_SiN + "Speaker48_Digit9_-18dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-18, speaker:48, digit_id: "9"}},
  {stimulus: stimDir_SiN + "Speaker49_Digit6_-18dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-18, speaker:49, digit_id: "6"}},
  {stimulus: stimDir_SiN + "Speaker61_Digit3_-18dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-18, speaker:61, digit_id: "3"}},
  {stimulus: stimDir_SiN + "Speaker01_Digit1_-18dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-18, speaker:01, digit_id: "1"}},
  {stimulus: stimDir_SiN + "Speaker05_Digit4_-18dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-18, speaker:05, digit_id: "4"}}
];

var stimuli_minus20dB = [
  {stimulus: stimDir_SiN + "Speaker06_Digit0_-20dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-20, speaker:06, digit_id: "0"}},
  {stimulus: stimDir_SiN + "Speaker07_Digit2_-20dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-20, speaker:07, digit_id: "2"}},
  {stimulus: stimDir_SiN + "Speaker08_Digit1_-20dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-20, speaker:08, digit_id: "1"}},
  {stimulus: stimDir_SiN + "Speaker10_Digit4_-20dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-20, speaker:10, digit_id: "4"}},
  {stimulus: stimDir_SiN + "Speaker12_Digit9_-20dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-20, speaker:12, digit_id: "9"}}
];

var stimuli_minus22dB = [
  {stimulus: stimDir_SiN + "Speaker13_Digit4_-22dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-22, speaker:13, digit_id: "4"}},
  {stimulus: stimDir_SiN + "Speaker14_Digit0_-22dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-22, speaker:14, digit_id: "0"}},
  {stimulus: stimDir_SiN + "Speaker16_Digit3_-22dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-22, speaker:16, digit_id: "3"}},
  {stimulus: stimDir_SiN + "Speaker21_Digit1_-22dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-22, speaker:21, digit_id: "1"}},
  {stimulus: stimDir_SiN + "Speaker25_Digit9_-22dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-22, speaker:25, digit_id: "9"}}
];

var stimuli_minus24dB = [
  {stimulus: stimDir_SiN + "Speaker33_Digit5_-24dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-24, speaker:33, digit_id: "5"}},
  {stimulus: stimDir_SiN + "Speaker48_Digit2_-24dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-24, speaker:48, digit_id: "2"}},
  {stimulus: stimDir_SiN + "Speaker49_Digit6_-24dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-24, speaker:49, digit_id: "6"}},
  {stimulus: stimDir_SiN + "Speaker61_Digit0_-24dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-24, speaker:61, digit_id: "0"}},
  {stimulus: stimDir_SiN + "Speaker01_Digit4_-24dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-24, speaker:01, digit_id: "4"}}
];

var stimuli_minus26dB = [
  {stimulus: stimDir_SiN + "Speaker05_Digit0_-26dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-26, speaker:05, digit_id: "0"}},
  {stimulus: stimDir_SiN + "Speaker06_Digit5_-26dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-26, speaker:06, digit_id: "5"}},
  {stimulus: stimDir_SiN + "Speaker07_Digit8_-26dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-26, speaker:07, digit_id: "8"}},
  {stimulus: stimDir_SiN + "Speaker08_Digit1_-26dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-26, speaker:08, digit_id: "1"}},
  {stimulus: stimDir_SiN + "Speaker10_Digit3_-26dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-26, speaker:10, digit_id: "3"}}
];

var stimuli_minus28dB = [
  {stimulus: stimDir_SiN + "Speaker12_Digit8_-28dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-28, speaker:12, digit_id: "8"}},
  {stimulus: stimDir_SiN + "Speaker13_Digit3_-28dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-28, speaker:13, digit_id: "3"}},
  {stimulus: stimDir_SiN + "Speaker14_Digit5_-28dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-28, speaker:14, digit_id: "5"}},
  {stimulus: stimDir_SiN + "Speaker16_Digit0_-28dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-28, speaker:16, digit_id: "0"}},
  {stimulus: stimDir_SiN + "Speaker21_Digit2_-28dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-28, speaker:21, digit_id: "2"}}
];

var stimuli_minus30dB = [
  {stimulus: stimDir_SiN + "Speaker25_Digit6_-30dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-30, speaker:25, digit_id: "6"}},
  {stimulus: stimDir_SiN + "Speaker33_Digit4_-30dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-30, speaker:33, digit_id: "4"}},
  {stimulus: stimDir_SiN + "Speaker48_Digit9_-30dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-30, speaker:48, digit_id: "9"}},
  {stimulus: stimDir_SiN + "Speaker49_Digit2_-30dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-30, speaker:49, digit_id: "2"}},
  {stimulus: stimDir_SiN + "Speaker61_Digit8_-30dB_SNR.wav", data: {screen_id: SiNRT_trials, dB_SNR:-30, speaker:61, digit_id: "8"}}
];

 var block_count = 0;
 // var keep_going = 1;
 var next_block = 0;

var SiNRT_trials = {
  type: 'audio-button-response-simple',
  data: jsPsych.timelineVariable("data"),
  stimulus: jsPsych.timelineVariable("stimulus"),
  choices: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  prompt: "<p>What number was said?</p>",
  on_finish: function(data){
    if (data.button_pressed == data.digit_id){
      data.accuracy = 1,
      block_count += 1
    } else {
      data.accuracy = 0
    }
  }
};

var after_block = {
  data: {screen_id: "fixation"},
  type: 'html-keyboard-response',
  stimulus: "<div style='font-size: 60px'><b>+</b></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 100,
  on_finish: function(){
    console.log("MOVING TO NEXT BLOCK..."),
    console.log("COUNTER BEFORE RESET = " + block_count)
    if (block_count != 0){
        next_block = 1;
        block_count = 0;
      } else {
        next_block = 0;
      }
    console.log("COUNTER AFTER BLOCK RESET = " + block_count)
    }
}

var procedure_practiceSiNRT = {
  timeline: [fixation_cross, practice_trial_SiN, start_SiNRT]
};

var procedure_0dB = {
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_0dB,
  on_finish: function(){
    console.log("block 1/16 count = " + block_count)
  }
};
// timeline.push(procedure_0dB);

var procedure_minus2dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 2/16 count = " + block_count)
    // console.log("CONDITIONAL keep_going: " + keep_going)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus2dB,
};
// timeline.push(procedure_minus2dB);

var procedure_minus4dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 3/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus4dB,
};

var procedure_minus6dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 4/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus6dB,
};

var procedure_minus8dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 5/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus8dB,
};

var procedure_minus10dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 6/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus10dB,
};

var procedure_minus12dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 7/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus12dB,
};

var procedure_minus14dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 8/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus14dB,
};

var procedure_minus16dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 9/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus16dB,
};

var procedure_minus18dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 10/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus18dB,
};

var procedure_minus20dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 11/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus20dB,
};

var procedure_minus22dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 12/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus22dB,
};

var procedure_minus24dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 13/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus24dB,
};

var procedure_minus26dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 14/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus26dB,
};

var procedure_minus28dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 15/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus28dB,
};

var procedure_minus30dB = {
  chunk_type: 'if',
  conditional_function: function() {
    console.log("block 16/16 count = " + block_count)
    if(next_block == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [fixation_cross, SiNRT_trials],
  timeline_variables: stimuli_minus30dB,
};

/////// PUSH SiNRT TRIALS TO SiNRT TIMELINE ///////////
    SiNRT_timeline.timeline.push(instructions_SiNRT);
    SiNRT_timeline.timeline.push(procedure_practiceSiNRT);
    SiNRT_timeline.timeline.push(procedure_0dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus2dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus4dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus6dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus8dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus10dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus12dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus14dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus16dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus18dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus20dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus22dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus24dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus26dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus28dB);
    SiNRT_timeline.timeline.push(after_block);
    SiNRT_timeline.timeline.push(procedure_minus30dB);
    // SiNRT_timeline.timeline.push(wrapUp_SiNRT);
    // timeline.push(SiNRT_timeline);
    /////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// NVSRT ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
    var instructions_NVSRT = {
      data: {screen_id: "instructions_NVSRT"},
      type: 'html-button-response',
      stimulus: "<p>As part of this test, you will hear once more numbers from 0 to 9 in German" +
      " that are again difficult to understand.</p>" +
      "<p>Your task is to select the button corresponding to the correct number.</p>" +
      "<p>Again, the test will become" +
      " harder over time and you will not get feedback for your responses.</p>" +
      "<p>Press 'Continue' to proceed to a practice trial</p>" +
      "<p> </p>" +
      "<p> </p>" +
      "<p>NOTE : the script is initialised with the `use_webaudio` parameter" +
      "of jspsych.init set to `false` for testing on local machine; "  +
      "remember to change for testing on server</p>",
      choices: ['Continue'],
      on_finish: function(data){
              }
    };
    // timeline.push(pre_audio);

    var fixation_cross = {
      data: {screen_id: "fixation"},
      type: 'html-keyboard-response',
      stimulus: "<div style='font-size: 60px'><b>+</b></div>",
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    }

    var stimDir_NVS = "../../stimuli/SRT/NVS/32envSmooth/"; //5channels/32envSmooth/";

        var practice_trial_NVS = {
          type: 'audio-button-response-simple',
          data: {screen_id: "practice_trial", envDep_pt:120, speaker:25, digit_id: "8"},
          stimulus:stimDir_NVS + "AAA_practiceTrial_Speaker25_Digit8_120envDep_pt.wav",
          choices: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          prompt: "<p>What number was said?</p>",
          on_finish: function(data){
            if (data.button_pressed == data.digit_id){
              data.accuracy = 1
            } else {
              data.accuracy = 0
            }
          }
        };

        var start_NVSRT = {
          data: {screen_id: "start_NVSRT"},
          type: 'html-button-response',
          stimulus: "<p>Click 'Start Test' to get started</p>",
          choices: ['Start Test'],
          on_finish: function(data){
                  }
        };

    var stimuli_120pt = [
      {stimulus: stimDir_NVS + "Speaker16_Digit4_120envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:120, speaker:16, digit_id: "4"}},
      {stimulus: stimDir_NVS + "Speaker21_Digit9_120envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:120, speaker:21, digit_id: "9"}},
      {stimulus: stimDir_NVS + "Speaker25_Digit3_120envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:120, speaker:25, digit_id: "3"}},
      {stimulus: stimDir_NVS + "Speaker33_Digit0_120envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:120, speaker:33, digit_id: "0"}},
      {stimulus: stimDir_NVS + "Speaker48_Digit5_120envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:120, speaker:48, digit_id: "5"}}
    ];

    var stimuli_112_5pt = [
      {stimulus: stimDir_NVS + "Speaker49_Digit9_112.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:112.5, speaker:49, digit_id: "9"}},
      {stimulus: stimDir_NVS + "Speaker61_Digit3_112.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:112.5, speaker:61, digit_id: "3"}},
      {stimulus: stimDir_NVS + "Speaker01_Digit6_112.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:112.5, speaker:01, digit_id: "6"}},
      {stimulus: stimDir_NVS + "Speaker05_Digit2_112.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:112.5, speaker:05, digit_id: "2"}},
      {stimulus: stimDir_NVS + "Speaker06_Digit5_112.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:112.5, speaker:06, digit_id: "5"}}
    ];

    var stimuli_105pt = [
      {stimulus: stimDir_NVS + "Speaker07_Digit9_105envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:105, speaker:07, digit_id: "9"}},
      {stimulus: stimDir_NVS + "Speaker08_Digit2_105envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:105, speaker:08, digit_id: "2"}},
      {stimulus: stimDir_NVS + "Speaker10_Digit4_105envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:105, speaker:10, digit_id: "4"}},
      {stimulus: stimDir_NVS + "Speaker12_Digit3_105envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:105, speaker:12, digit_id: "3"}},
      {stimulus: stimDir_NVS + "Speaker13_Digit8_105envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:105, speaker:13, digit_id: "8"}}
    ];

    var stimuli_97_5pt = [
      {stimulus: stimDir_NVS + "Speaker14_Digit4_97.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:97.5, speaker:14, digit_id: "4"}},
      {stimulus: stimDir_NVS + "Speaker16_Digit6_97.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:97.5, speaker:16, digit_id: "6"}},
      {stimulus: stimDir_NVS + "Speaker21_Digit1_97.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:97.5, speaker:21, digit_id: "1"}},
      {stimulus: stimDir_NVS + "Speaker25_Digit5_97.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:97.5, speaker:25, digit_id: "5"}},
      {stimulus: stimDir_NVS + "Speaker33_Digit3_97.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:97.5, speaker:33, digit_id: "3"}}
    ];

    var stimuli_90pt = [
      {stimulus: stimDir_NVS + "Speaker48_Digit2_90envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:90, speaker:48, digit_id: "2"}},
      {stimulus: stimDir_NVS + "Speaker49_Digit4_90envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:90, speaker:49, digit_id: "4"}},
      {stimulus: stimDir_NVS + "Speaker61_Digit6_90envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:90, speaker:61, digit_id: "6"}},
      {stimulus: stimDir_NVS + "Speaker01_Digit8_90envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:90, speaker:01, digit_id: "8"}},
      {stimulus: stimDir_NVS + "Speaker05_Digit5_90envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:90, speaker:05, digit_id: "5"}}
    ];

    var stimuli_82_5pt = [
      {stimulus: stimDir_NVS + "Speaker06_Digit0_82.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:82.5, speaker:06, digit_id: "0"}},
      {stimulus: stimDir_NVS + "Speaker07_Digit4_82.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:82.5, speaker:07, digit_id: "4"}},
      {stimulus: stimDir_NVS + "Speaker08_Digit1_82.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:82.5, speaker:08, digit_id: "1"}},
      {stimulus: stimDir_NVS + "Speaker10_Digit3_82.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:82.5, speaker:10, digit_id: "3"}},
      {stimulus: stimDir_NVS + "Speaker12_Digit8_82.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:82.5, speaker:12, digit_id: "8"}}
    ];

    var stimuli_75pt = [
      {stimulus: stimDir_NVS + "Speaker13_Digit1_75envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:75, speaker:13, digit_id: "1"}},
      {stimulus: stimDir_NVS + "Speaker14_Digit2_75envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:75, speaker:14, digit_id: "2"}},
      {stimulus: stimDir_NVS + "Speaker16_Digit9_75envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:75, speaker:16, digit_id: "9"}},
      {stimulus: stimDir_NVS + "Speaker21_Digit0_75envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:75, speaker:21, digit_id: "0"}},
      {stimulus: stimDir_NVS + "Speaker25_Digit6_75envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:75, speaker:25, digit_id: "6"}}
    ];

    var stimuli_67_5pt = [
      {stimulus: stimDir_NVS + "Speaker33_Digit9_67.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:67.5, speaker:33, digit_id: "9"}},
      {stimulus: stimDir_NVS + "Speaker48_Digit4_67.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:67.5, speaker:48, digit_id: "4"}},
      {stimulus: stimDir_NVS + "Speaker49_Digit0_67.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:67.5, speaker:49, digit_id: "0"}},
      {stimulus: stimDir_NVS + "Speaker61_Digit1_67.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:67.5, speaker:61, digit_id: "1"}},
      {stimulus: stimDir_NVS + "Speaker01_Digit3_67.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:67.5, speaker:01, digit_id: "3"}}
    ];

    var stimuli_60pt = [
      {stimulus: stimDir_NVS + "Speaker05_Digit4_60envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:60, speaker:05, digit_id: "4"}},
      {stimulus: stimDir_NVS + "Speaker06_Digit5_60envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:60, speaker:06, digit_id: "5"}},
      {stimulus: stimDir_NVS + "Speaker07_Digit2_60envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:60, speaker:07, digit_id: "2"}},
      {stimulus: stimDir_NVS + "Speaker08_Digit9_60envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:60, speaker:08, digit_id: "9"}},
      {stimulus: stimDir_NVS + "Speaker10_Digit0_60envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:60, speaker:10, digit_id: "0"}}
    ];

    var stimuli_52_5pt = [
      {stimulus: stimDir_NVS + "Speaker12_Digit6_52.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:52.5, speaker:12, digit_id: "6"}},
      {stimulus: stimDir_NVS + "Speaker13_Digit5_52.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:52.5, speaker:13, digit_id: "5"}},
      {stimulus: stimDir_NVS + "Speaker14_Digit3_52.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:52.5, speaker:14, digit_id: "3"}},
      {stimulus: stimDir_NVS + "Speaker16_Digit1_52.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:52.5, speaker:16, digit_id: "1"}},
      {stimulus: stimDir_NVS + "Speaker21_Digit8_52.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:52.5, speaker:21, digit_id: "8"}}
    ];

    var stimuli_45pt = [
      {stimulus: stimDir_NVS + "Speaker25_Digit0_45envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:45, speaker:25, digit_id: "0"}},
      {stimulus: stimDir_NVS + "Speaker33_Digit3_45envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:45, speaker:33, digit_id: "3"}},
      {stimulus: stimDir_NVS + "Speaker48_Digit5_45envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:45, speaker:48, digit_id: "5"}},
      {stimulus: stimDir_NVS + "Speaker49_Digit8_45envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:45, speaker:49, digit_id: "8"}},
      {stimulus: stimDir_NVS + "Speaker61_Digit2_45envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:45, speaker:61, digit_id: "2"}}
    ];

    var stimuli_37_5pt = [
      {stimulus: stimDir_NVS + "Speaker01_Digit0_37.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:37.5, speaker:1, digit_id: "0"}},
      {stimulus: stimDir_NVS + "Speaker05_Digit8_37.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:37.5, speaker:5, digit_id: "8"}},
      {stimulus: stimDir_NVS + "Speaker06_Digit2_37.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:37.5, speaker:6, digit_id: "2"}},
      {stimulus: stimDir_NVS + "Speaker07_Digit9_37.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:37.5, speaker:7, digit_id: "9"}},
      {stimulus: stimDir_NVS + "Speaker08_Digit6_37.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:37.5, speaker:8, digit_id: "6"}}
    ];

    var stimuli_30pt = [
      {stimulus: stimDir_NVS + "Speaker10_Digit4_30envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:30, speaker:10, digit_id: "4"}},
      {stimulus: stimDir_NVS + "Speaker12_Digit1_30envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:30, speaker:12, digit_id: "1"}},
      {stimulus: stimDir_NVS + "Speaker13_Digit8_30envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:30, speaker:13, digit_id: "8"}},
      {stimulus: stimDir_NVS + "Speaker14_Digit3_30envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:30, speaker:14, digit_id: "3"}},
      {stimulus: stimDir_NVS + "Speaker16_Digit0_30envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:30, speaker:16, digit_id: "0"}}
    ];

    var stimuli_22_5pt = [
      {stimulus: stimDir_NVS + "Speaker21_Digit6_22.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:22.5, speaker:21, digit_id: "6"}},
      {stimulus: stimDir_NVS + "Speaker25_Digit1_22.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:22.5, speaker:25, digit_id: "1"}},
      {stimulus: stimDir_NVS + "Speaker33_Digit5_22.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:22.5, speaker:33, digit_id: "5"}},
      {stimulus: stimDir_NVS + "Speaker48_Digit2_22.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:22.5, speaker:48, digit_id: "2"}},
      {stimulus: stimDir_NVS + "Speaker49_Digit9_22.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:22.5, speaker:49, digit_id: "9"}}
    ];

    var stimuli_15pt = [
      {stimulus: stimDir_NVS + "Speaker61_Digit0_15envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:15, speaker:61, digit_id: "0"}},
      {stimulus: stimDir_NVS + "Speaker01_Digit4_15envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:15, speaker:01, digit_id: "4"}},
      {stimulus: stimDir_NVS + "Speaker05_Digit6_15envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:15, speaker:05, digit_id: "6"}},
      {stimulus: stimDir_NVS + "Speaker06_Digit9_15envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:15, speaker:06, digit_id: "9"}},
      {stimulus: stimDir_NVS + "Speaker07_Digit1_15envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:15, speaker:07, digit_id: "1"}}
    ];

    var stimuli_7_5pt = [
      {stimulus: stimDir_NVS + "Speaker08_Digit8_7.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:7.5, speaker:08, digit_id: "8"}},
      {stimulus: stimDir_NVS + "Speaker10_Digit1_7.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:7.5, speaker:10, digit_id: "1"}},
      {stimulus: stimDir_NVS + "Speaker12_Digit5_7.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:7.5, speaker:12, digit_id: "5"}},
      {stimulus: stimDir_NVS + "Speaker13_Digit6_7.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:7.5, speaker:13, digit_id: "6"}},
      {stimulus: stimDir_NVS + "Speaker14_Digit2_7.5envDep_pt.wav", data: {screen_id: NVSRT_trials, envDep_pt:7.5, speaker:14, digit_id: "2"}}
    ];

     var block_count = 0;
     // var keep_going = 1;
     var next_block = 0;

    var NVSRT_trials = {
      type: 'audio-button-response-simple',
      data: jsPsych.timelineVariable("data"),
      stimulus: jsPsych.timelineVariable("stimulus"),
      choices: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      prompt: "<p>What number was said?</p>",
      on_finish: function(data){
        if (data.button_pressed == data.digit_id){
          data.accuracy = 1,
          block_count += 1
        } else {
          data.accuracy = 0
        }
      }
    };

    var after_block = {
      data: {screen_id: "fixation"},
      type: 'html-keyboard-response',
      stimulus: "<div style='font-size: 60px'><b>+</b></div>",
      choices: jsPsych.NO_KEYS,
      trial_duration: 100,
      on_finish: function(){
        console.log("MOVING TO NEXT BLOCK..."),
        console.log("COUNTER BEFORE RESET = " + block_count)
        if (block_count != 0){
            next_block = 1;
            block_count = 0;
          } else {
            next_block = 0;
          }
        console.log("COUNTER AFTER BLOCK RESET = " + block_count)
        }
    }

    var procedure_practiceNVSRT = {
      timeline: [fixation_cross, practice_trial_NVS, start_NVSRT]
    };

    var procedure_120pt = {
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_120pt,
      on_finish: function(){
        console.log("block 1/16 count = " + block_count)
      }
    };

    var procedure_112_5pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 2/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_112_5pt,
    };

    var procedure_105pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 3/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_105pt,
    };

    var procedure_97_5pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 4/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_97_5pt,
    };

    var procedure_90pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 5/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_90pt,
    };

    var procedure_82_5pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 6/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_82_5pt,
    };

    var procedure_75pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 7/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_75pt,
    };

    var procedure_67_5pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 8/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_67_5pt,
    };

    var procedure_60pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 9/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_60pt,
    };

    var procedure_52_5pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 10/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_52_5pt,
    };

    var procedure_45pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 11/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_45pt,
    };

    var procedure_37_5pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 12/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_37_5pt,
    };

    var procedure_30pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 13/16 count = " + block_count)
        // console.log("CONDITIONAL keep_going: " + keep_going)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_30pt,
    };
    // timeline.push(procedure_0dB);

    var procedure_22_5pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 14/16 count = " + block_count)
        // console.log("CONDITIONAL keep_going: " + keep_going)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_22_5pt,
    };
    // timeline.push(procedure_minus2dB);

    var procedure_15pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 15/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_15pt,
    };

    var procedure_7_5pt = {
      chunk_type: 'if',
      conditional_function: function() {
        console.log("block 16/16 count = " + block_count)
        if(next_block == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [fixation_cross, NVSRT_trials],
      timeline_variables: stimuli_7_5pt,
    };

/////// PUSH NVSRT TRIALS TO SiNRT TIMELINE ///////////
    NVSRT_timeline.timeline.push(instructions_NVSRT);
    NVSRT_timeline.timeline.push(procedure_practiceNVSRT);
    NVSRT_timeline.timeline.push(procedure_120pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_112_5pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_105pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_97_5pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_90pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_82_5pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_75pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_67_5pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_60pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_52_5pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_45pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_37_5pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_30pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_22_5pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_15pt);
    NVSRT_timeline.timeline.push(after_block);
    NVSRT_timeline.timeline.push(procedure_7_5pt);
    // SiNRT_timeline.timeline.push(wrapUp_SiNRT);
    // timeline.push(NVSRT_timeline);

//////////////////////// randomise order of SRTs ///////////////////////////////
    var randomizedSRTblocks = jsPsych.randomization.shuffle([SiNRT_timeline, NVSRT_timeline]);

      // TT_timeline = TT_timeline.timeline.concat(randomizedTTblocks);
      SRT_timeline.timeline = [instructions_SRT, randomizedSRTblocks];
      timeline.push(SRT_timeline);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// FWDS ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
    var instructions_DS = {
      data: {screen_id: "instructions_DS"},
      type: 'html-button-response',
      stimulus: '<p>PART 4: DIGIT SPAN</p>' +
      '<p>Insert instructions here.',
      choices: ['Continue']
    }

    var next_list = 0;
    var do_2nd_pres = 0;

    var stimDir_FWDS = "../../stimuli/digitSpan/FWDS/";

    var instructions_FWDS = {
      data: {screen_id: "instructions_FWDS"},
      type: 'html-button-response',
      stimulus: 'Please report the numbers you have heard in the same order as they were presented',
      choices: ['Continue']
    }

    var trial1_FWDS_audio = {
      on_start: function() {
          console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
          console.log("TRIAL 1: next list? " + next_list)
      },
      type: 'audio-keyboard-response-simple',
      data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "6439", odd_even: "odd"},
      stimulus: stimDir_FWDS + "originalFWDS_list1.wav",
      prompt: "<div style='font-size: 60px'><b>+</b></div>",
      trial_ends_after_audio: true
    };

    var trial1_FWDS_resp = {
      on_start: function(data) {
        data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
          // data.list_count = 0;
          // data.next_list = 0;
          // console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
          // console.log("TRIAL 1: next list? " + next_list)
      },
      data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "6439", odd_even: "odd"},
      type: 'survey-text',
      questions: [
        {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
      ],
      button_label: 'Submit response',
      on_finish: function(data){
          data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
          jsPsych.data.getLastTrialData().values()[0].responses[8] +
          jsPsych.data.getLastTrialData().values()[0].responses[9] +
          jsPsych.data.getLastTrialData().values()[0].responses[10];
        // },
        if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
          data.accuracy = 1;
          // list_count += 1;
          // data.list_count += 1;
          next_list = 1;
          // data.next_list = 1;
          do_2nd_pres = 0;
          // data.do_2nd_pres = 0;
        } else {
          data.accuracy = 0;
          do_2nd_pres = 1;
          // data.do_2nd_pres = 1;
          next_list = 0;
        }
      }
    }

    var FWDS_trial_1 = {
      timeline: [instructions_FWDS, trial1_FWDS_audio, trial1_FWDS_resp]
    }


    var trial2_FWDS_audio = {
      on_start: function() {
          console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
          console.log("TRIAL 2: next list? " + next_list)
      },
      type: 'audio-keyboard-response-simple',
      data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "7286", odd_even: "even"},
      stimulus: stimDir_FWDS + "originalFWDS_list2.wav",
      prompt: "<div style='font-size: 60px'><b>+</b></div>",
      trial_ends_after_audio: true
    };

    var trial2_FWDS_resp = {
      on_start: function(data) {
        data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
          // console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
          // console.log("TRIAL 2: next list? " + next_list)
      },
      data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "7286", odd_even: "even"},
      type: 'survey-text',
      questions: [
        {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
      ],
      button_label: 'Submit response',
      on_finish: function(data){
          data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
          jsPsych.data.getLastTrialData().values()[0].responses[8] +
          jsPsych.data.getLastTrialData().values()[0].responses[9] +
          jsPsych.data.getLastTrialData().values()[0].responses[10];
        // }
        if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
          data.accuracy = 1;
          // list_count += 1;
          // data.list_count += 1;
          next_list = 1;
          do_2nd_pres = 0;
          // data.next_list = 1;
        } else {
          data.accuracy = 0;
          do_2nd_pres = 0;
          next_list = 0;
        }
      }
    }

    var FWDS_trial_2 = {
      chunk_type: 'if',
      conditional_function: function() {
        if(do_2nd_pres == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [trial2_FWDS_audio, trial2_FWDS_resp]
    }


    var trial3_FWDS_audio = {
      on_start: function() {
          console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
          console.log("TRIAL 3: next list? " + next_list)
      },
      type: 'audio-keyboard-response-simple',
      data: {screen_id: "audio_out", nr_items:5, speaker:35, correct_response: "42731", odd_even: "odd"},
      stimulus: stimDir_FWDS + "originalFWDS_list3.wav",
      prompt: "<div style='font-size: 60px'><b>+</b></div>",
      trial_ends_after_audio: true
    };

    var trial3_FWDS_resp = {
      on_start: function(data) {
        data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
          list_count = 0;
          next_list = 0;
          // console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
          // console.log("TRIAL 3: next list? " + next_list)
      },
      data: {screen_id: "audio_out", nr_items:5, speaker:35, correct_response: "42731", odd_even: "odd"},
      type: 'survey-text',
      questions: [
        {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
      ],
      button_label: 'Submit response',
      on_finish: function(data){
          data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
          jsPsych.data.getLastTrialData().values()[0].responses[8] +
          jsPsych.data.getLastTrialData().values()[0].responses[9] +
          jsPsych.data.getLastTrialData().values()[0].responses[10] +
          jsPsych.data.getLastTrialData().values()[0].responses[11];
        // },
        if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
          data.accuracy = 1;
          // list_count += 1;
          // data.list_count += 1;
          next_list = 1;
          // data.next_list = 1;
          do_2nd_pres = 0;
          // data.do_2nd_pres = 0;
        } else {
          data.accuracy = 0;
          do_2nd_pres = 1;
          // data.do_2nd_pres = 1;
          next_list = 0;
        }
      }
    }

    var FWDS_trial_3 = {
      chunk_type: 'if',
      conditional_function: function() {
        if(next_list == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [trial3_FWDS_audio, trial3_FWDS_resp]
    }


    var trial4_FWDS_audio = {
      on_start: function() {
          console.log("TRIAL 4: do_2nd_pres? " + do_2nd_pres)
          console.log("TRIAL 4: next list? " + next_list)
      },
      type: 'audio-keyboard-response-simple',
      data: {screen_id: "audio_out", nr_items:5, speaker:35, correct_response: "75836", odd_even: "even"},
      stimulus: stimDir_FWDS + "originalFWDS_list4.wav",
      prompt: "<div style='font-size: 60px'><b>+</b></div>",
      trial_ends_after_audio: true
    };

    var trial4_FWDS_resp = {
      on_start: function(data) {
        data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
          // data.list_count = 0;
          // data.next_list = 0;
          // console.log("TRIAL 4: do_2nd_pres? " + do_2nd_pres)
          // console.log("TRIAL 4: next list? " + next_list)
      },
      data: {screen_id: "audio_out", nr_items:5, speaker:35, correct_response: "75836", odd_even: "even"},
      type: 'survey-text',
      questions: [
        {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
      ],
      button_label: 'Submit response',
      on_finish: function(data){
          data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
          jsPsych.data.getLastTrialData().values()[0].responses[8] +
          jsPsych.data.getLastTrialData().values()[0].responses[9] +
          jsPsych.data.getLastTrialData().values()[0].responses[10] +
          jsPsych.data.getLastTrialData().values()[0].responses[11];
        // }
        if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
          data.accuracy = 1;
          // list_count += 1;
          // data.list_count += 1;
          do_2nd_pres = 0;
          next_list = 1;
          // data.next_list = 1;
        } else {
          data.accuracy = 0;
          next_list = 0;
          do_2nd_pres = 0;
        }
      }
    }

    var FWDS_trial_4 = {
      chunk_type: 'if',
      conditional_function: function() {
        if(do_2nd_pres == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [trial4_FWDS_audio, trial4_FWDS_resp]
    }


    var trial5_FWDS_audio = {
      on_start: function() {
          console.log("TRIAL 5: do_2nd_pres? " + do_2nd_pres)
          console.log("TRIAL 5: next list? " + next_list)
      },
      type: 'audio-keyboard-response-simple',
      data: {screen_id: "audio_out", nr_items:6, speaker:35, correct_response: "619473", odd_even: "odd"},
      stimulus: stimDir_FWDS + "originalFWDS_list5.wav",
      prompt: "<div style='font-size: 60px'><b>+</b></div>",
      trial_ends_after_audio: true
    };

    var trial5_FWDS_resp = {
      on_start: function(data) {
        data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
          // data.list_count = 0;
          // data.next_list = 0;
          // console.log("TRIAL 5: do_2nd_pres? " + do_2nd_pres)
          // console.log("TRIAL 5: next list? " + next_list)
      },
      data: {screen_id: "audio_out", nr_items:6, speaker:35, correct_response: "619473", odd_even: "odd"},
      type: 'survey-text',
      questions: [
        {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
      ],
      button_label: 'Submit response',
      on_finish: function(data){
          data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
          jsPsych.data.getLastTrialData().values()[0].responses[8] +
          jsPsych.data.getLastTrialData().values()[0].responses[9] +
          jsPsych.data.getLastTrialData().values()[0].responses[10] +
          jsPsych.data.getLastTrialData().values()[0].responses[11] +
          jsPsych.data.getLastTrialData().values()[0].responses[12];
        // },
        if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
          data.accuracy = 1;
          // list_count += 1;
          // data.list_count += 1;
          next_list = 1;
          // data.next_list = 1;
          do_2nd_pres = 0;
          // data.do_2nd_pres = 0;
        } else {
          data.accuracy = 0;
          do_2nd_pres = 1;
          // data.do_2nd_pres = 1;
          next_list = 0;
        }
      }
    }

    var FWDS_trial_5 = {
      chunk_type: 'if',
      conditional_function: function() {
        if(next_list == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [trial5_FWDS_audio, trial5_FWDS_resp]
    }


    var trial6_FWDS_audio = {
      on_start: function() {
          console.log("TRIAL 6: do_2nd_pres? " + do_2nd_pres)
          console.log("TRIAL 6: next list? " + next_list)
      },
      type: 'audio-keyboard-response-simple',
      data: {screen_id: "audio_out", nr_items:6, speaker:35, correct_response: "392486", odd_even: "even"},
      stimulus: stimDir_FWDS + "originalFWDS_list6.wav",
      prompt: "<div style='font-size: 60px'><b>+</b></div>",
      trial_ends_after_audio: true
    };

    var trial6_FWDS_resp = {
      on_start: function(data) {
        data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
          // console.log("TRIAL 6: do_2nd_pres? " + do_2nd_pres)
          // console.log("TRIAL 6: next list? " + next_list)
      },
      data: {screen_id: "audio_out", nr_items:6, speaker:35, correct_response: "392486", odd_even: "even"},
      type: 'survey-text',
      questions: [
        {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
      ],
      button_label: 'Submit response',
      on_finish: function(data){
          data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
          jsPsych.data.getLastTrialData().values()[0].responses[8] +
          jsPsych.data.getLastTrialData().values()[0].responses[9] +
          jsPsych.data.getLastTrialData().values()[0].responses[10] +
          jsPsych.data.getLastTrialData().values()[0].responses[11] +
          jsPsych.data.getLastTrialData().values()[0].responses[12];
        // }
        if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
          data.accuracy = 1;
          // list_count += 1;
          // data.list_count += 1;
          next_list = 1;
          do_2nd_pres = 0;
          // data.next_list = 1;
        } else {
          data.accuracy = 0;
          next_list = 0;
          do_2nd_pres = 0;
        }
      }
    }

    var FWDS_trial_6 = {
      chunk_type: 'if',
      conditional_function: function() {
        if(do_2nd_pres == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [trial6_FWDS_audio, trial6_FWDS_resp]
    }


    var trial7_FWDS_audio = {
      on_start: function() {
          console.log("TRIAL 7: do_2nd_pres? " + do_2nd_pres)
          console.log("TRIAL 7: next list? " + next_list)
      },
      type: 'audio-keyboard-response-simple',
      data: {screen_id: "audio_out", nr_items:7, speaker:35, correct_response: "5917423", odd_even: "odd"},
      stimulus: stimDir_FWDS + "originalFWDS_list7.wav",
      prompt: "<div style='font-size: 60px'><b>+</b></div>",
      trial_ends_after_audio: true
    };

    var trial7_FWDS_resp = {
      on_start: function(data) {
        data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
          // list_count = 0;
          next_list = 0;
          // console.log("TRIAL 7: do_2nd_pres? " + do_2nd_pres)
          // console.log("TRIAL 7: next list? " + next_list)
      },
      data: {screen_id: "audio_out", nr_items:7, speaker:35, correct_response: "5917423", odd_even: "odd"},
      type: 'survey-text',
      questions: [
        {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
      ],
      button_label: 'Submit response',
      on_finish: function(data){
          data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
          jsPsych.data.getLastTrialData().values()[0].responses[8] +
          jsPsych.data.getLastTrialData().values()[0].responses[9] +
          jsPsych.data.getLastTrialData().values()[0].responses[10] +
          jsPsych.data.getLastTrialData().values()[0].responses[11] +
          jsPsych.data.getLastTrialData().values()[0].responses[12] +
          jsPsych.data.getLastTrialData().values()[0].responses[13];
        // },
        if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
          data.accuracy = 1;
          // list_count += 1;
          // data.list_count += 1;
          next_list = 1;
          // data.next_list = 1;
          do_2nd_pres = 0;
          // data.do_2nd_pres = 0;
        } else {
          data.accuracy = 0;
          do_2nd_pres = 1;
          // data.do_2nd_pres = 1;
          next_list = 0;
        }
      }
    }

    var FWDS_trial_7 = {
      chunk_type: 'if',
      conditional_function: function() {
        if(next_list == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [trial7_FWDS_audio, trial7_FWDS_resp]
    }


    var trial8_FWDS_audio = {
      on_start: function() {
          console.log("TRIAL 8: do_2nd_pres? " + do_2nd_pres)
          console.log("TRIAL 8: next list? " + next_list)
      },
      type: 'audio-keyboard-response-simple',
      data:  {screen_id: "audio_out", nr_items:7, speaker:35, correct_response: "4179386", odd_even: "even"},
      stimulus: stimDir_FWDS + "originalFWDS_list8.wav",
      prompt: "<div style='font-size: 60px'><b>+</b></div>",
      trial_ends_after_audio: true
    };

    var trial8_FWDS_resp = {
      on_start: function(data) {
        data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
          // data.list_count = 0;
          // data.next_list = 0;
          // console.log("TRIAL 8: do_2nd_pres? " + do_2nd_pres)
          // console.log("TRIAL 8: next list? " + next_list)
      },
      data:  {screen_id: "audio_out", nr_items:7, speaker:35, correct_response: "4179386", odd_even: "even"},
      type: 'survey-text',
      questions: [
        {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
      ],
      button_label: 'Submit response',
      on_finish: function(data){
          data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
          jsPsych.data.getLastTrialData().values()[0].responses[8] +
          jsPsych.data.getLastTrialData().values()[0].responses[9] +
          jsPsych.data.getLastTrialData().values()[0].responses[10] +
          jsPsych.data.getLastTrialData().values()[0].responses[11] +
          jsPsych.data.getLastTrialData().values()[0].responses[12] +
          jsPsych.data.getLastTrialData().values()[0].responses[13];
        // }
        if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
          data.accuracy = 1;
          // list_count += 1;
          // data.list_count += 1;
          next_list = 1;
          // data.next_list = 1;
        } else {
          data.accuracy = 0;
          next_list = 0;
          do_2nd_pres = 0;
        }
      }
    }

    var FWDS_trial_8 = {
      chunk_type: 'if',
      conditional_function: function() {
        if(do_2nd_pres == 0) {
          return false;
        } else {
          return true;
        }
      },
      timeline: [trial8_FWDS_audio, trial8_FWDS_resp]
    }


      var trial9_FWDS_audio = {
        on_start: function() {
            console.log("TRIAL 9: do_2nd_pres? " + do_2nd_pres)
            console.log("TRIAL 9: next list? " + next_list)
        },
        type: 'audio-keyboard-response-simple',
        data: {screen_id: "audio_out", nr_items:8, speaker:35, correct_response: "58192647", odd_even: "odd"},
        stimulus: stimDir_FWDS + "originalFWDS_list9.wav",
        prompt: "<div style='font-size: 60px'><b>+</b></div>",
        trial_ends_after_audio: true
      };

      var trial9_FWDS_resp = {
        on_start: function(data) {
          data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
            // list_count = 0;
            next_list = 0;
            // console.log("TRIAL 9: do_2nd_pres? " + do_2nd_pres)
            // console.log("TRIAL 9: next list? " + next_list)
        },
        data: {screen_id: "audio_out", nr_items:8, speaker:35, correct_response: "58192647", odd_even: "odd"},
        type: 'survey-text',
        questions: [
          {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
        ],
        button_label: 'Submit response',
        on_finish: function(data){
            data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
            jsPsych.data.getLastTrialData().values()[0].responses[8] +
            jsPsych.data.getLastTrialData().values()[0].responses[9] +
            jsPsych.data.getLastTrialData().values()[0].responses[10] +
            jsPsych.data.getLastTrialData().values()[0].responses[11] +
            jsPsych.data.getLastTrialData().values()[0].responses[12] +
            jsPsych.data.getLastTrialData().values()[0].responses[13] +
            jsPsych.data.getLastTrialData().values()[0].responses[14];
          // },
          if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
            data.accuracy = 1;
            // list_count += 1;
            // data.list_count += 1;
            next_list = 1;
            // data.next_list = 1;
            do_2nd_pres = 0;
            // data.do_2nd_pres = 0;
          } else {
            data.accuracy = 0;
            do_2nd_pres = 1;
            // data.do_2nd_pres = 1;
            next_list = 0;
          }
        }
      }

      var FWDS_trial_9 = {
        chunk_type: 'if',
        conditional_function: function() {
          if(next_list == 0) {
            return false;
          } else {
            return true;
          }
        },
        timeline: [trial9_FWDS_audio, trial9_FWDS_resp]
      }


      var trial10_FWDS_audio = {
        on_start: function() {
            console.log("TRIAL 10: do_2nd_pres? " + do_2nd_pres)
            console.log("TRIAL 10: next list? " + next_list)
        },
        type: 'audio-keyboard-response-simple',
        data: {screen_id: "audio_out", nr_items:8, speaker:35, correct_response: "38295174", odd_even: "even"},
        stimulus: stimDir_FWDS + "originalFWDS_list10.wav",
        prompt: "<div style='font-size: 60px'><b>+</b></div>",
        trial_ends_after_audio: true
      };

      var trial10_FWDS_resp = {
        on_start: function(data) {
          data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
            // data.list_count = 0;
            // data.next_list = 0;
            // console.log("TRIAL 10: do_2nd_pres? " + do_2nd_pres)
            // console.log("TRIAL 10: next list? " + next_list)
        },
        data: {screen_id: "audio_out", nr_items:8, speaker:35, correct_response: "38295174", odd_even: "even"},
        type: 'survey-text',
        questions: [
          {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
        ],
        button_label: 'Submit response',
        on_finish: function(data){
            data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
            jsPsych.data.getLastTrialData().values()[0].responses[8] +
            jsPsych.data.getLastTrialData().values()[0].responses[9] +
            jsPsych.data.getLastTrialData().values()[0].responses[10] +
            jsPsych.data.getLastTrialData().values()[0].responses[11] +
            jsPsych.data.getLastTrialData().values()[0].responses[12] +
            jsPsych.data.getLastTrialData().values()[0].responses[13] +
            jsPsych.data.getLastTrialData().values()[0].responses[14];
          // }
          if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
            data.accuracy = 1;
            // list_count += 1;
            // data.list_count += 1;
            do_2nd_pres = 0;
            next_list = 1;
            // data.next_list = 1;
          } else {
            data.accuracy = 0;
            next_list = 0;
            do_2nd_pres = 0;
          }
        }
      }

      var FWDS_trial_10 = {
        chunk_type: 'if',
        conditional_function: function() {
          if(do_2nd_pres == 0) {
            return false;
          } else {
            return true;
          }
        },
        timeline: [trial10_FWDS_audio, trial10_FWDS_resp]
      }

      /////// PUSH FWDS TRIALS TO SiNRT TIMELINE ///////////
          FWDS_timeline.timeline.push(instructions_DS);
          FWDS_timeline.timeline.push(FWDS_trial_1);
          FWDS_timeline.timeline.push(FWDS_trial_2);
          FWDS_timeline.timeline.push(FWDS_trial_3);
          FWDS_timeline.timeline.push(FWDS_trial_4);
          FWDS_timeline.timeline.push(FWDS_trial_5);
          FWDS_timeline.timeline.push(FWDS_trial_6);
          FWDS_timeline.timeline.push(FWDS_trial_7);
          FWDS_timeline.timeline.push(FWDS_trial_8);
          FWDS_timeline.timeline.push(FWDS_trial_9);
          FWDS_timeline.timeline.push(FWDS_trial_10);
          timeline.push(FWDS_timeline);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// BWDS ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
      next_list = 0;
      do_2nd_pres = 0;

      var stimDir_BWDS = "../../stimuli/digitSpan/BWDS/";

      var instructions_BWDS = {
        data: {screen_id: "instructions_BWDS"},
        type: 'html-button-response',
        stimulus: 'Please enter the digit you heard IN REVERSED ORDER.',
        choices: ['Continue']
      }

      var trial1_BWDS_audio = {
        on_start: function() {
            console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
            console.log("TRIAL 1: next list? " + next_list)
        },
        type: 'audio-keyboard-response-simple',
        data: {screen_id: "audio_out", nr_items:3, speaker:35, input: "263", correct_response: "362", odd_even: "odd"},
        stimulus: stimDir_BWDS + "originalBWDS_list1.wav",
        prompt: "<div style='font-size: 60px'><b>+</b></div>",
        trial_ends_after_audio: true
      };

      var trial1_BWDS_resp = {
        on_start: function(data) {
          data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
            // data.list_count = 0;
            // data.next_list = 0;
            // console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
            // console.log("TRIAL 1: next list? " + next_list)
        },
        data: {screen_id: "audio_out", nr_items:3, speaker:35, input: "263", correct_response: "362", odd_even: "odd"},
        type: 'survey-text',
        questions: [
          {prompt: 'Enter the numbers in reversed order',  columns: 12}
        ],
        button_label: 'Submit response',
        on_finish: function(data){
            data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
            jsPsych.data.getLastTrialData().values()[0].responses[8] +
            jsPsych.data.getLastTrialData().values()[0].responses[9];
          // },
          if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
            data.accuracy = 1;
            // list_count += 1;
            // data.list_count += 1;
            next_list = 1;
            // data.next_list = 1;
            do_2nd_pres = 0;
            // data.do_2nd_pres = 0;
          } else {
            data.accuracy = 0;
            do_2nd_pres = 1;
            // data.do_2nd_pres = 1;
            next_list = 0;
          }
        }
      }

      var BWDS_trial_1 = {
        timeline: [instructions_BWDS, trial1_BWDS_audio, trial1_BWDS_resp]
      };

      var trial2_BWDS_audio = {
        on_start: function() {
            console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
            console.log("TRIAL 2: next list? " + next_list)
        },
        type: 'audio-keyboard-response-simple',
        data: {screen_id: "audio_out", nr_items:3, speaker:35, input:"415", correct_response: "514", odd_even: "even"},
        stimulus: stimDir_BWDS + "originalBWDS_list2.wav",
        prompt: "<div style='font-size: 60px'><b>+</b></div>",
        trial_ends_after_audio: true
      };

      var trial2_BWDS_resp = {
        on_start: function(data) {
          data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
            // console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
            // console.log("TRIAL 2: next list? " + next_list)
        },
        data: {screen_id: "audio_out", nr_items:3, speaker:35, input:"415", correct_response: "514", odd_even: "even"},
        type: 'survey-text',
        questions: [
          {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
        ],
        button_label: 'Submit response',
        on_finish: function(data){
            data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
            jsPsych.data.getLastTrialData().values()[0].responses[8] +
            jsPsych.data.getLastTrialData().values()[0].responses[9];
          // }
          if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
            data.accuracy = 1;
            // list_count += 1;
            // data.list_count += 1;
            next_list = 1;
            do_2nd_pres = 0;
            // data.next_list = 1;
          } else {
            data.accuracy = 0;
            do_2nd_pres = 0;
            next_list = 0;
          }
        }
      }

      var BWDS_trial_2 = {
        chunk_type: 'if',
        conditional_function: function() {
          if(do_2nd_pres == 0) {
            return false;
          } else {
            return true;
          }
        },
        timeline: [trial2_BWDS_audio, trial2_BWDS_resp]
      }


      var trial3_BWDS_audio = {
        on_start: function() {
            console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
            console.log("TRIAL 3: next list? " + next_list)
        },
        type: 'audio-keyboard-response-simple',
        data: {screen_id: "audio_out", nr_items:4, speaker:35, input:"3279", correct_response: "9723", odd_even: "odd"},
        stimulus: stimDir_BWDS + "originalBWDS_list3.wav",
        prompt: "<div style='font-size: 60px'><b>+</b></div>",
        trial_ends_after_audio: true
      };

      var trial3_BWDS_resp = {
        on_start: function(data) {
          data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
            // list_count = 0;
            next_list = 0;
            // console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
            // console.log("TRIAL 3: next list? " + next_list)
        },
        data: {screen_id: "audio_out", nr_items:4, speaker:35, input:"3279", correct_response: "9723", odd_even: "odd"},
        type: 'survey-text',
        questions: [
          {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
        ],
        button_label: 'Submit response',
        on_finish: function(data){
            data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
            jsPsych.data.getLastTrialData().values()[0].responses[8] +
            jsPsych.data.getLastTrialData().values()[0].responses[9] +
            jsPsych.data.getLastTrialData().values()[0].responses[10];
          // },
          if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
            data.accuracy = 1;
            // list_count += 1;
            // data.list_count += 1;
            next_list = 1;
            // data.next_list = 1;
            do_2nd_pres = 0;
            // data.do_2nd_pres = 0;
          } else {
            data.accuracy = 0;
            do_2nd_pres = 1;
            // data.do_2nd_pres = 1;
            next_list = 0;
          }
        }
      }

      var BWDS_trial_3 = {
        chunk_type: 'if',
        conditional_function: function() {
          if(next_list == 0) {
            return false;
          } else {
            return true;
          }
        },
        timeline: [trial3_BWDS_audio, trial3_BWDS_resp]
      }


      var trial4_BWDS_audio = {
        on_start: function() {
            console.log("TRIAL 4: do_2nd_pres? " + do_2nd_pres)
            console.log("TRIAL 4: next list? " + next_list)
        },
        type: 'audio-keyboard-response-simple',
        data: {screen_id: "audio_out", nr_items:4, speaker:35, input:"4968", correct_response: "8694", odd_even: "even"},
        stimulus: stimDir_BWDS + "originalBWDS_list4.wav",
        prompt: "<div style='font-size: 60px'><b>+</b></div>",
        trial_ends_after_audio: true
      };

      var trial4_BWDS_resp = {
        on_start: function(data) {
          data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
            // data.list_count = 0;
            // data.next_list = 0;
            // console.log("TRIAL 4: do_2nd_pres? " + do_2nd_pres)
            // console.log("TRIAL 4: next list? " + next_list)
        },
        data: {screen_id: "audio_out", nr_items:4, speaker:35, input:"4968", correct_response: "8694", odd_even: "even"},
        type: 'survey-text',
        questions: [
          {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
        ],
        button_label: 'Submit response',
        on_finish: function(data){
            data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
            jsPsych.data.getLastTrialData().values()[0].responses[8] +
            jsPsych.data.getLastTrialData().values()[0].responses[9] +
            jsPsych.data.getLastTrialData().values()[0].responses[10];
          // }
          if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
            data.accuracy = 1;
            // list_count += 1;
            // data.list_count += 1;
            do_2nd_pres = 0;
            next_list = 1;
            // data.next_list = 1;
          } else {
            data.accuracy = 0;
            next_list = 0;
            do_2nd_pres = 0;
          }
        }
      }

      var BWDS_trial_4 = {
        chunk_type: 'if',
        conditional_function: function() {
          if(do_2nd_pres == 0) {
            return false;
          } else {
            return true;
          }
        },
        timeline: [trial4_BWDS_audio, trial4_BWDS_resp]
      }


      var trial5_BWDS_audio = {
        on_start: function() {
            console.log("TRIAL 5: do_2nd_pres? " + do_2nd_pres)
            console.log("TRIAL 5: next list? " + next_list)
        },
        type: 'audio-keyboard-response-simple',
        data: {screen_id: "audio_out", nr_items:5, speaker:35, input:"15286", correct_response: "68251", odd_even: "odd"},
        stimulus: stimDir_BWDS + "originalBWDS_list5.wav",
        prompt: "<div style='font-size: 60px'><b>+</b></div>",
        trial_ends_after_audio: true
      };

      var trial5_BWDS_resp = {
        on_start: function(data) {
          data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
            // data.list_count = 0;
            // data.next_list = 0;
            // console.log("TRIAL 5: do_2nd_pres? " + do_2nd_pres)
            // console.log("TRIAL 5: next list? " + next_list)
        },
        data: {screen_id: "audio_out", nr_items:5, speaker:35, input:"15286", correct_response: "68251", odd_even: "odd"},
        type: 'survey-text',
        questions: [
          {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
        ],
        button_label: 'Submit response',
        on_finish: function(data){
            data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
            jsPsych.data.getLastTrialData().values()[0].responses[8] +
            jsPsych.data.getLastTrialData().values()[0].responses[9] +
            jsPsych.data.getLastTrialData().values()[0].responses[10] +
            jsPsych.data.getLastTrialData().values()[0].responses[11];
          // },
          if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
            data.accuracy = 1;
            // list_count += 1;
            // data.list_count += 1;
            next_list = 1;
            // data.next_list = 1;
            do_2nd_pres = 0;
            // data.do_2nd_pres = 0;
          } else {
            data.accuracy = 0;
            do_2nd_pres = 1;
            // data.do_2nd_pres = 1;
            next_list = 0;
          }
        }
      }

      var BWDS_trial_5 = {
        chunk_type: 'if',
        conditional_function: function() {
          if(next_list == 0) {
            return false;
          } else {
            return true;
          }
        },
        timeline: [trial5_BWDS_audio, trial5_BWDS_resp]
      }


      var trial6_BWDS_audio = {
        on_start: function() {
            console.log("TRIAL 6: do_2nd_pres? " + do_2nd_pres)
            console.log("TRIAL 6: next list? " + next_list)
        },
        type: 'audio-keyboard-response-simple',
        data: {screen_id: "audio_out", nr_items:5, speaker:35, input:"61843", correct_response: "34816", odd_even: "even"},
        stimulus: stimDir_BWDS + "originalBWDS_list6.wav",
        prompt: "<div style='font-size: 60px'><b>+</b></div>",
        trial_ends_after_audio: true
      };

      var trial6_BWDS_resp = {
        on_start: function(data) {
          data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
            // console.log("TRIAL 6: do_2nd_pres? " + do_2nd_pres)
            // console.log("TRIAL 6: next list? " + next_list)
        },
        data: {screen_id: "audio_out", nr_items:5, speaker:35, input:"61843", correct_response: "34816", odd_even: "even"},
        type: 'survey-text',
        questions: [
          {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
        ],
        button_label: 'Submit response',
        on_finish: function(data){
            data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
            jsPsych.data.getLastTrialData().values()[0].responses[8] +
            jsPsych.data.getLastTrialData().values()[0].responses[9] +
            jsPsych.data.getLastTrialData().values()[0].responses[10] +
            jsPsych.data.getLastTrialData().values()[0].responses[11];
          // }
          if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
            data.accuracy = 1;
            // list_count += 1;
            // data.list_count += 1;
            next_list = 1;
            do_2nd_pres = 0;
            // data.next_list = 1;
          } else {
            data.accuracy = 0;
            next_list = 0;
            do_2nd_pres = 0;
          }
        }
      }

      var BWDS_trial_6 = {
        chunk_type: 'if',
        conditional_function: function() {
          if(do_2nd_pres == 0) {
            return false;
          } else {
            return true;
          }
        },
        timeline: [trial6_BWDS_audio, trial6_BWDS_resp]
      }


      var trial7_BWDS_audio = {
        on_start: function() {
            console.log("TRIAL 7: do_2nd_pres? " + do_2nd_pres)
            console.log("TRIAL 7: next list? " + next_list)
        },
        type: 'audio-keyboard-response-simple',
        data: {screen_id: "audio_out", nr_items:6, speaker:35, input:"539418", correct_response: "814935", odd_even: "odd"},
        stimulus: stimDir_BWDS + "originalBWDS_list7.wav",
        prompt: "<div style='font-size: 60px'><b>+</b></div>",
        trial_ends_after_audio: true
      };

      var trial7_BWDS_resp = {
        on_start: function(data) {
          data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
            // list_count = 0;
            next_list = 0;
            // console.log("TRIAL 7: do_2nd_pres? " + do_2nd_pres)
            // console.log("TRIAL 7: next list? " + next_list)
        },
        data: {screen_id: "audio_out", nr_items:6, speaker:35, input:"539418", correct_response: "814935", odd_even: "odd"},
        type: 'survey-text',
        questions: [
          {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
        ],
        button_label: 'Submit response',
        on_finish: function(data){
            data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
            jsPsych.data.getLastTrialData().values()[0].responses[8] +
            jsPsych.data.getLastTrialData().values()[0].responses[9] +
            jsPsych.data.getLastTrialData().values()[0].responses[10] +
            jsPsych.data.getLastTrialData().values()[0].responses[11] +
            jsPsych.data.getLastTrialData().values()[0].responses[12];
          // },
          if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
            data.accuracy = 1;
            // list_count += 1;
            // data.list_count += 1;
            next_list = 1;
            // data.next_list = 1;
            do_2nd_pres = 0;
            // data.do_2nd_pres = 0;
          } else {
            data.accuracy = 0;
            do_2nd_pres = 1;
            // data.do_2nd_pres = 1;
            next_list = 0;
          }
        }
      }

      var BWDS_trial_7 = {
        chunk_type: 'if',
        conditional_function: function() {
          if(next_list == 0) {
            return false;
          } else {
            return true;
          }
        },
        timeline: [trial7_BWDS_audio, trial7_BWDS_resp]
      }


      var trial8_BWDS_audio = {
        on_start: function() {
            console.log("TRIAL 8: do_2nd_pres? " + do_2nd_pres)
            console.log("TRIAL 8: next list? " + next_list)
        },
        type: 'audio-keyboard-response-simple',
        data:  {screen_id: "audio_out", nr_items:6, speaker:35, input:"724856", correct_response: "658427", odd_even: "even"},
        stimulus: stimDir_BWDS + "originalBWDS_list8.wav",
        prompt: "<div style='font-size: 60px'><b>+</b></div>",
        trial_ends_after_audio: true
      };

      var trial8_BWDS_resp = {
        on_start: function(data) {
          data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
            // data.list_count = 0;
            // data.next_list = 0;
            // console.log("TRIAL 8: do_2nd_pres? " + do_2nd_pres)
            // console.log("TRIAL 8: next list? " + next_list)
        },
        data:  {screen_id: "audio_out", nr_items:6, speaker:35, input:"724856", correct_response: "658427", odd_even: "even"},
        type: 'survey-text',
        questions: [
          {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
        ],
        button_label: 'Submit response',
        on_finish: function(data){
            data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
            jsPsych.data.getLastTrialData().values()[0].responses[8] +
            jsPsych.data.getLastTrialData().values()[0].responses[9] +
            jsPsych.data.getLastTrialData().values()[0].responses[10] +
            jsPsych.data.getLastTrialData().values()[0].responses[11] +
            jsPsych.data.getLastTrialData().values()[0].responses[12];
          // }
          if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
            data.accuracy = 1;
            // list_count += 1;
            // data.list_count += 1;
            next_list = 1;
            // data.next_list = 1;
          } else {
            data.accuracy = 0;
            next_list = 0;
            do_2nd_pres = 0;
          }
        }
      }

      var BWDS_trial_8 = {
        chunk_type: 'if',
        conditional_function: function() {
          if(do_2nd_pres == 0) {
            return false;
          } else {
            return true;
          }
        },
        timeline: [trial8_BWDS_audio, trial8_BWDS_resp]
      }


        var trial9_BWDS_audio = {
          on_start: function() {
              console.log("TRIAL 9: do_2nd_pres? " + do_2nd_pres)
              console.log("TRIAL 9: next list? " + next_list)
          },
          type: 'audio-keyboard-response-simple',
          data: {screen_id: "audio_out", nr_items:7, speaker:35, input:"3129365", correct_response: "5639213", odd_even: "odd"},
          stimulus: stimDir_BWDS + "originalBWDS_list9.wav",
          prompt: "<div style='font-size: 60px'><b>+</b></div>",
          trial_ends_after_audio: true
        };

        var trial9_BWDS_resp = {
          on_start: function(data) {
            data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
              // list_count = 0;
              next_list = 0;
              // console.log("TRIAL 9: do_2nd_pres? " + do_2nd_pres)
              // console.log("TRIAL 9: next list? " + next_list)
          },
          data: {screen_id: "audio_out", nr_items:7, speaker:35, input:"3129365", correct_response: "5639213", odd_even: "odd"},
          type: 'survey-text',
          questions: [
            {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
          ],
          button_label: 'Submit response',
          on_finish: function(data){
              data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
              jsPsych.data.getLastTrialData().values()[0].responses[8] +
              jsPsych.data.getLastTrialData().values()[0].responses[9] +
              jsPsych.data.getLastTrialData().values()[0].responses[10] +
              jsPsych.data.getLastTrialData().values()[0].responses[11] +
              jsPsych.data.getLastTrialData().values()[0].responses[12] +
              jsPsych.data.getLastTrialData().values()[0].responses[13];
            // },
            if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
              data.accuracy = 1;
              // list_count += 1;
              // data.list_count += 1;
              next_list = 1;
              // data.next_list = 1;
              do_2nd_pres = 0;
              // data.do_2nd_pres = 0;
            } else {
              data.accuracy = 0;
              do_2nd_pres = 1;
              // data.do_2nd_pres = 1;
              next_list = 0;
            }
          }
        }

        var BWDS_trial_9 = {
          chunk_type: 'if',
          conditional_function: function() {
            if(next_list == 0) {
              return false;
            } else {
              return true;
            }
          },
          timeline: [trial9_BWDS_audio, trial9_BWDS_resp]
        }


        var trial10_BWDS_audio = {
          on_start: function() {
              console.log("TRIAL 10: do_2nd_pres? " + do_2nd_pres)
              console.log("TRIAL 10: next list? " + next_list)
          },
          type: 'audio-keyboard-response-simple',
          data: {screen_id: "audio_out", nr_items:7, speaker:35, input:"4739128", correct_response: "8219374", odd_even: "even"},
          stimulus: stimDir_BWDS + "originalBWDS_list10.wav",
          prompt: "<div style='font-size: 60px'><b>+</b></div>",
          trial_ends_after_audio: true
        };

        var trial10_BWDS_resp = {
          on_start: function(data) {
            data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
              // data.list_count = 0;
              // data.next_list = 0;
              // console.log("TRIAL 10: do_2nd_pres? " + do_2nd_pres)
              // console.log("TRIAL 10: next list? " + next_list)
          },
          data: {screen_id: "audio_out", nr_items:7, speaker:35, input:"4739128", correct_response: "8219374", odd_even: "even"},
          type: 'survey-text',
          questions: [
            {prompt: 'Enter the numbers in the order of presentation',  columns: 12}
          ],
          button_label: 'Submit response',
          on_finish: function(data){
              data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
              jsPsych.data.getLastTrialData().values()[0].responses[8] +
              jsPsych.data.getLastTrialData().values()[0].responses[9] +
              jsPsych.data.getLastTrialData().values()[0].responses[10] +
              jsPsych.data.getLastTrialData().values()[0].responses[11] +
              jsPsych.data.getLastTrialData().values()[0].responses[12] +
              jsPsych.data.getLastTrialData().values()[0].responses[13];
            // }
            if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
              data.accuracy = 1;
              // list_count += 1;
              // data.list_count += 1;
              do_2nd_pres = 0;
              next_list = 1;
              // data.next_list = 1;
            } else {
              data.accuracy = 0;
              next_list = 0;
              do_2nd_pres = 0;
            }
          }
        }

        var BWDS_trial_10 = {
          chunk_type: 'if',
          conditional_function: function() {
            if(do_2nd_pres == 0) {
              return false;
            } else {
              return true;
            }
          },
          timeline: [trial10_BWDS_audio, trial10_BWDS_resp]
        }

        /////// PUSH BWDS TRIALS TO ITS TIMELINE ///////////
            BWDS_timeline.timeline.push(BWDS_trial_1);
            BWDS_timeline.timeline.push(BWDS_trial_2);
            BWDS_timeline.timeline.push(BWDS_trial_3);
            BWDS_timeline.timeline.push(BWDS_trial_4);
            BWDS_timeline.timeline.push(BWDS_trial_5);
            BWDS_timeline.timeline.push(BWDS_trial_6);
            BWDS_timeline.timeline.push(BWDS_trial_7);
            BWDS_timeline.timeline.push(BWDS_trial_8);
            BWDS_timeline.timeline.push(BWDS_trial_9);
            BWDS_timeline.timeline.push(BWDS_trial_10);
            timeline.push(BWDS_timeline);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////// Word Rec SiN ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var instructions_wordRec = {
  data: {screen_id: "instructions_SiNRT"},
  type: 'html-button-response',
  stimulus: "<p>PART 5: WORD RECOGNITION.</p>" +
  "<p>Insert instructions here.</p>",
  choices: ['Continue'],
  on_finish: function(data){
          }
};

var instructions_wordRec_SiN = {
  data: {screen_id: "instructions_SiNRT"},
  type: 'html-button-response',
  stimulus: "<p>As part of this test, you will hear some words in German" +
  " that are difficult to unserdtand because they are embedded in noise.</p>" +
  "<p>Your task is to repeat aloud the word heard when you are prompted to do so.</p>" +
  "<p>The fixation cross indicates that a word is being presented and a red " +
  " 'recording dot' indicates that you should repeat the word.</p>" +
  "<p>When you are not sure, please try to guess.</p>" +
  "<p>If you really have no idea about what was said, please say 'Keine Anhung'.</p>" +
  "<p>Press 'Continue' to start the test.</p>" +
  "<p>NOTE : the script is initialised with the `use_webaudio` parameter" +
  "of jspsych.init set to `false` for testing on local machine; "  +
  "remember to change for testing on server</p>",
  choices: ['Continue'],
  on_finish: function(data){
          }
};
// timeline.push(instructions_wordRec_SiN);

// var fixation_cross = {
//   data: {screen_id: "fixation"},
//   type: 'html-keyboard-response',
//   stimulus: "<div style='font-size: 60px'><b>+</b></div>",
//   choices: jsPsych.NO_KEYS,
//   trial_duration: 1000
// }

var stimDir_SiNwords_list1 = "../../stimuli/wordRec/SiN/0dB_SNR/List1/";

var start_wordRecSiN = {
  data: {screen_id: "start_wordRecSiN"},
  type: 'html-button-response',
  stimulus: "<p>Click 'Start Test' to get started</p>",
  choices: ['Start Test'],
  on_finish: function(data){
          }
};
// timeline.push(start_wordRecSiN);

var stimuli_list1SiN = [
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Affe.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Affe"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Bogen.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Bogen"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Bohne.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Bohne"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Ei.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Ei"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Erdbeere.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Erdbeere"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Film.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Film"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Fisch.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Fisch"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Gewebe.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Gewebe"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Hammer.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Hammer"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Hemd.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Hemd"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Hotel.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Hotel"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Kabine.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Kabine"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Kasino.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Kasino"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Luft.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Luft"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Nudel.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Nudel"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Park.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Park"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Pferd.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Pferd"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Radio.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Radio"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Rahmen.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Rahmen"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Schulter.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Schulter"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Tankstelle.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Tankstelle"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Tempel.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Tempel"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Treppe.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Treppe"}},
  {stimulus_list1SiN: stimDir_SiNwords_list1 + "Wal.wav", data_list1SiN: {screen_id: audioOut_list1SiN, dB_SNR:0, word_id: "Wal"}}
];

var preAudio_wordRecSiN = {
  data: {screen_id: "preAudio_wordRecSiN"},
  type: 'html-button-response',
  stimulus: "<p>Click 'Play' to hear the word</p>",
  choices: ['Play']
};

var audioOut_list1SiN = {
  // type: 'audio-keyboard-response-simple',
  type: 'audio-button-response-simple',
  data: jsPsych.timelineVariable("data_list1SiN"),
  stimulus: jsPsych.timelineVariable("stimulus_list1SiN"),
  // trial_ends_after_audio: true
  choices: ['record'],
};

var audioIn_list1SiN = {
    // type: "image-audio-response-II",
    type: "download-audio",
    choices: ['Stop']
};

var procedure_list1SiN = {
  timeline: [preAudio_wordRecSiN, audioOut_list1SiN, audioIn_list1SiN],
  timeline_variables: stimuli_list1SiN,
  randomize_order: true
};

/////// PUSH wordRec TRIALS TO ITS TIMELINE ///////////
    wordRecSiN_timeline.timeline.push(instructions_wordRec_SiN);
    wordRecSiN_timeline.timeline.push(start_wordRecSiN);
    wordRecSiN_timeline.timeline.push(procedure_list1SiN);
    // timeline.push(wordRecSiN_timeline);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////// Word Rec NVS ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var instructions_wordRec_NVS = {
  data: {screen_id: "instructions_NVSRT"},
  type: 'html-button-response',
  stimulus: "<p>As part of this test, you will hear some words in German" +
  " that are difficult to unserdtand because they are embedded in noise.</p>" +
  "<p>Your task is to repeat aloud the word heard when you are prompted to do so.</p>" +
  "<p>The fixation cross indicates that a word is being presented and a red " +
  " 'recording dot' indicates that you should repeat the word.</p>" +
  "<p>When you are not sure, please try to guess.</p>" +
  "<p>If you really have no idea about what was said, please say 'Keine Anhung'.</p>" +
  "<p>Press 'Continue' to start the test.</p>" +
  "<p>NOTE : the script is initialised with the `use_webaudio` parameter" +
  "of jspsych.init set to `false` for testing on local machine; "  +
  "remember to change for testing on server</p>",
  choices: ['Continue'],
  on_finish: function(data){
          }
};
// timeline.push(instructions_wordRec_NVS);

// var fixation_cross = {
//   data: {screen_id: "fixation"},
//   type: 'html-keyboard-response',
//   stimulus: "<div style='font-size: 60px'><b>+</b></div>",
//   choices: jsPsych.NO_KEYS,
//   trial_duration: 1000
// }

var stimDir_NVSwords_list1 = "../../stimuli/wordRec/NVS/5chan/List1/";

var start_wordRecNVS = {
  data: {screen_id: "start_wordRecNVS"},
  type: 'html-button-response',
  stimulus: "<p>Click 'Start Test' to get started</p>",
  choices: ['Start Test'],
  on_finish: function(data){
          }
};
// timeline.push(start_wordRecNVS);

var stimuli_list1NVS = [
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Bank.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Bank"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Baum.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Baum"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Birne.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Birne"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Blume.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Blume"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Brille.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Brille"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Flugzeug.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Flugzeug"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Geschenk.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Geschenk"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Handgelenk.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Handgelenk"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Hase.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Hase"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Höle.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Höle"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Koffer.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Koffer"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Kostum.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Kostum"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Löwe.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Löwe"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Pflanze.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Pflanze"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Restaurant.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Restaurant"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Salz.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Salz"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Schere.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Schere"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Suppe.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Suppe"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Tablette.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Tablette"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Telefon.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Telefon"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Uhr.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Uhr"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Villa.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Villa"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Weste.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Weste"}},
  {stimulus_list1NVS: stimDir_NVSwords_list1 + "Ziege.wav", data_list1NVS: {screen_id: audioOut_list1NVS, nrNvChan:5, word_id: "Ziege"}}
];

var preAudio_wordRecNVS = {
  data: {screen_id: "preAudio_wordRecNVS"},
  type: 'html-button-response',
  stimulus: "<p>Click 'Play' to hear the word</p>",
  choices: ['Play']
};

var audioOut_list1NVS = {
  // type: 'audio-keyboard-response-simple',
  type: 'audio-button-response-simple',
  data: jsPsych.timelineVariable("data_list1NVS"),
  stimulus: jsPsych.timelineVariable("stimulus_list1NVS"),
  // trial_ends_after_audio: true
  choices: ['record'],
};

var audioIn_list1NVS = {
    // type: "image-audio-response-II",
    type: "download-audio",
    choices: ['Stop']
};

var procedure_list1NVS = {
  timeline: [preAudio_wordRecNVS, audioOut_list1NVS, audioIn_list1NVS],
  timeline_variables: stimuli_list1NVS,
  randomize_order: true
};
// timeline.push(procedure_list1NVS);

/////// PUSH wordRec TRIALS TO ITS TIMELINE ///////////
    wordRecNVS_timeline.timeline.push(instructions_wordRec_NVS);
    wordRecNVS_timeline.timeline.push(start_wordRecNVS);
    wordRecNVS_timeline.timeline.push(procedure_list1NVS);
    // timeline.push(wordRecNVS_timeline);
////////////////////////////////////////////////////////////////////////////////


////////////////////////// randomise SiN and NVS ///////////////////////////////
var randomizedWordRecBlocks = jsPsych.randomization.shuffle([wordRecSiN_timeline, wordRecNVS_timeline]);

  wordRec_timeline.timeline = [instructions_wordRec, randomizedWordRecBlocks];
  timeline.push(wordRec_timeline);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//////////////////////// START EXPERIMENT //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function startExp() {
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
      $.ajax({
        type: "POST",
        url: "/experiment-data",
        data: JSON.stringify(jsPsych.data.get().values()),
        contentType: "application/json"
      })

      .done(function(){
        window.location.href = "finish";
        // alert("You have completed the experiment and the data have been saved!");
      })

      .fail(function(){
        alert("Problem occurred while writing data to Dropbox. " +
              "Data will be saved to your computer. " +
              "Please contact the experimenter!");
        var csv = jsPsych.data.get().csv();
        var filename = "ACexp_part" + jsPsych.data.get().values()[0].part_ID + "_" + DATE + ".csv";
        // var filename = "ACexp_part" + jsPsych.data.get().values()[0].Part_ID + "_" + " + DATE + " + ".csv";
        downloadCSV(csv,filename);
        // window.location.href = "finish";
      })

      // jsPsych.data.displayData();
    }
  });
};
