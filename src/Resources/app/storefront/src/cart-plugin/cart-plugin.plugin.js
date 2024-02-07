import Plugin from 'src/plugin-system/plugin.class';

export default class CartPlugin extends Plugin {
    init() {
            // Add submit event listener to each .buy-widget
            document.querySelectorAll('.buy-widget').forEach(function(buyWidget) {
                buyWidget.addEventListener('submit', function(event) {
                    // Find the .btn-buy element within the .buy-widget that was submitted
                    const btnBuy = event.currentTarget.querySelector('.btn-buy');

                    // Store the original background color and text
                    const originalColor = btnBuy.style.backgroundColor;
                    const originalText = btnBuy.textContent;

                    // Use the color as the new background color and change the text
                    btnBuy.style.backgroundColor = userBackgroundColor;
                    btnBuy.textContent = userText;
                    // Change the values back to their defaults after 1 second
                    setTimeout(function() {
                        btnBuy.style.backgroundColor = originalColor;
                        btnBuy.textContent = originalText;
                    }, 1000);
                });
            });
    }
}