defineRule("krik_lampa_ispug",{
  whenChanged: "wb-msw-v3_64/Sound Level",
  then:function (newValue, devName, cellName) {
    var y, x= newValue, x_min = 20, x_max = 70, y_max = 100, y_min = 0;
    y = (x-x_min)*((y_max-y_min)/(x_max-x_min))+y_min;
      dev["wb-mdm3_57/K1"] = true;
      dev["wb-mdm3_57/Channel 1"] = y;
      log(y);
  }
});
