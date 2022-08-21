
    $(document).ready(function() 
    {
		var options=
		{
			tab						: 'left',
			className				: 'checkmark',			
			slideImageIndexPage		: 1,
			slideImageIndexPageHome	: 1,
			showMenuSlider			: true,
			showMenuAtStart			: false,
			startPage				: 'menu'
		};
		
        var slide=
		[
			{image:'media/image/background/the_unknown_bg.png',title:'<span class="supersized-caption-title">Halle Kearney<br/>By Robby Mueller</span><br/><br/>Well, today was Halle Kearney\'s first senior picture session in Akron, OH and I decided to go with something a little different here.<br/><br/>This is not going to be used as one of her senior pictures (As far as I know).<br/><br/>We took a different spin on things and I\'m a tad bit stoked on it.<br/><br/><a href="http://www.flickr.com/photos/ro2b3yface/5623260278/in/photostream/">Author Website</a>'},
		];
		
		var audio=
		[
			// {mp3:'media/audio/Kondor-Love-Your-Life-Outro-track.mp3'}
		];
		
		var page=
		{
			'about.html'		: {tab:'left',className:'checkmark',slideImageIndexPage:1},
			'services.html'		: {tab:'right',className:'features',slideImageIndexPage:2},
			'portfolio.html'	: {tab:'left',className:'image',slideImageIndexPage:3},
			'blog.php'			: {tab:'right',className:'info',slideImageIndexPage:4},
			'contact.php'		: {tab:'left',className:'mail',slideImageIndexPage:5},
			'post.html'			: {tab:'right',className:'info',slideImageIndexPage:6}
		};
		
        $('#nostalgia').nostalgia(options,page,slide,audio,config,configDefault);
    });