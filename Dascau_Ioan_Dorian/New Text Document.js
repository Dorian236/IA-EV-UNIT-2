var slideIndex = 0;

function slideshow() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	
	for(i = 0;i < slides.length; i++) {
		slides[i].style.margin="0 auto";
		slides[i].style.display="none";
	}
	
	slideIndex++;
	if(slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display= "block";
	setTimeout(slideshow,3000);
}