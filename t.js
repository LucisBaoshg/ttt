auto.waitFor();

sleep(1000);

if(!device.isScreenOn()){
    device.wakeUp()
}
