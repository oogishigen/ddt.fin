window.onload = function () {
    document.getElementById("button").onclick = function () {
        var text = document.getElementById("sendText").value;
       location.href = "./test_name.html?data=" + encodeURIComponent(text);
    }
}
