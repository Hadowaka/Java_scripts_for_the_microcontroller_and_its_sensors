defineRule("dat_dvish_kran", {
    whenChanged:"wb-msw-v3_64/Current Motion",
    then: function(newValue, devName, cellName) {
      if(newValue > 600)
         dev["water_control/valve"] = true;
       else
         dev["water_control/valve"] = false;
    }
});
