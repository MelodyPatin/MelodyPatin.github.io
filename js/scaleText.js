const scaleText = {

    init :function () {
        const textBox = document.querySelector(".textBox");
        const boxWidth = textBox.clientWidth;
        const scaleFactor = 2.3;

        const textElements = Array.from(textBox.querySelectorAll("p"));
        for (const element of textElements) {
            const textLength = element.textContent.length;
            const fontSize = (boxWidth / textLength) * scaleFactor;
            element.style.fontSize = fontSize + "px";
    }
}
};
    
window.addEventListener('resize', scaleText.init);
