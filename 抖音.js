auto.waitFor();//判断和等待开启无障碍
app.launchApp('抖音短视频')
sleep(5000)
let see_count = rawInput('请输入你想要打招呼的内容', '');
sleep(5000)

threads.start(function () {
    while (true) {
        if(id("text1").className("android.widget.TextView").text("用户").exists()){
            sleep(2000)
            swipe(500, 1000, 500, 800, 500)
            sleep(2000)
        }
    };
});
for (i = 1; i < 1000; i++) {
    var widget = className("android.widget.FrameLayout").row(i).findOne()
    if (className("android.widget.FrameLayout").row(i).exists()) {
        log(i + '在')
        click(widget.bounds().centerX(), widget.bounds().centerY())
        sleep(1000)
        id("ei5").waitFor()
        sleep(1000)
        if (id("ei5").exists()) {
            sleep(1000)
            var widget1 = id("dni").findOne()
            click(widget1.bounds().centerX(), widget1.bounds().centerY())
            sleep(1000)
            id("f_o").findOne().click()
            sleep(1000)
            if (id("djz").exists()) {
                className("android.widget.ImageView").clickable(true).selected(true).findOne().click()
                sleep(1000)
                id("dob").findOne().setText(see_count)
                sleep(1000)
                var widget = className("android.widget.FrameLayout").depth("12").indexInParent("1").drawingOrder("2").findOne()
                click(widget.bounds().centerX(), widget.bounds().centerY())
                sleep(1000)
                back()
                sleep(1000)
                back()
                sleep(1000)
            } else {
                id("dob").findOne().setText(see_count)
                sleep(1000)
                var widget = className("android.widget.FrameLayout").depth("12").indexInParent("1").drawingOrder("2").findOne()
                click(widget.bounds().centerX(), widget.bounds().centerY())
                sleep(1000)
                back()
                sleep(1000)
                back()
                sleep(1000)
            }
        }
    }
}
