 for (i = 0; i <= 10; i++) {
         document.write("</br>");
        for (j = 0; j > 10 - i; j--) {
            document.write("&nbsp&nbsp");
        }
        for (j = 6 - i; j <= 5; j++) {

            document.write("#");
        }
    }