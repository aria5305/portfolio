/* TypeWriter fucntion*/

    const typing = (() => {
        // select the elements
        const typedTextSpan = 
            document.querySelector(".typewriter__text"); 
        
        const cursorSpan = 
            document.querySelector(".cursor");
        
            //Array of words to type out 
        const textArray = ["a front end developer.", "self-taught.", "motivated.", "passionate about webDev."];
        const typingDelay = 90; 
        const eraseDelay = 100; 
        const newTextDelay = 1500;
        
        // index to select the word from textArray
        let textArrayIndex = 0; 
        // character index to select the individual character from word
        let charIndex = 0; 
        
        
        function type (){
            // if the charIndex is less than the length of the word selected
            if (charIndex < textArray[textArrayIndex].length){
                // & if the cursor doesn't contain typing 
                if(!cursorSpan.classList.contains("typing")) 
                // add typing class to cursor  - to make the cursor stay while typing
                cursorSpan.classList.add("typing");
        
                // // if the charIndex is less than the length of the word selected
                // then the empty text selected will get the individual character added there. 
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
        
                // each character will appear with a delay of .9s 
                setTimeout(type,typingDelay);
            }
            else{
                // if it reaches the end of the word, then remove the class typing to allow for animation to take effect
                cursorSpan.classList.remove("typing");
                //wait for 1.5s then set off erase function
                setTimeout(erase,newTextDelay);
            }
        }
        
        function erase(){
            // as long as charIndex is bigger than 0
            if(charIndex > 0){
                if(!cursorSpan.classList.contains("typing")) 
                cursorSpan.classList.add("typing");
        
                // one by one, removing the last character of the word
                typedTextSpan.textContent = 
                textArray[textArrayIndex].substring(0, charIndex -1);
        
                // -1 charIndex while going
                charIndex--;
                // do it again
                setTimeout(erase,eraseDelay);
            }
            else{
                // when charIndex reaches 0. 
                cursorSpan.classList.remove("typing");
                // move on to the next word 
                textArrayIndex++;
                // if it reaches the end of the word list - set the textArrayIndex back to 0 
                if(textArrayIndex>=textArray.length)textArrayIndex = 0;
                // then initiate typing again. 
                setTimeout(type,typingDelay +1100);
                }
            }
        
        
        document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
            if(textArray.length) setTimeout(type, newTextDelay + 250);
        })
        })();
        
        
    
        
        
        
          

           var checkbox = document.querySelector('.toggle');

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark')
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'light')
            }
        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000)
        }