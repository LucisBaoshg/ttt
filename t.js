let _win_svc = context.getSystemService(context.WINDOW_SERVICE);
let _win_svc_disp = _win_svc.getDefaultDisplay();
let _H = _win_svc_disp.getHeight()
let _W = _win_svc_disp.getWidth()

app.launch("com.zhiliaoapp.musically")

sleep(2000)
i=7
while(i!==0){
    swipe(_W/2, _H/3*2, _W/2, _H/8, 1000)
    i=i-1
    var c = random(10000,15000)
    sleep(c)
    }