var dictionary = {
        'scion': 
		{
            'na': 'scion',
            'jp': 'successor',
        },
		'translate': 
		{
            'na': 'Switch to JP terms',
            'jp': 'Switch to NA terms',
        },
		'Perfect Attack': 
		{
            'na': 'Perfect Attack',
            'jp': 'Just Attack',
        },
		'30% of your HP': 
		{
            'na': '30% of your HP',
            'jp': '20% of your HP',
        },
		'focus': 
		{
            'na': 'focus',
            'jp': 'gear',
        },
		'Heroic Boost': 
		{
            'na': 'Heroic Boost',
            'jp': 'Hero Boost',
        },
		'60% attack boost': 
		{
            'na': '60% attack boost',
            'jp': '80% attack boost',
        },
		'Bulletblitz': 
		{
            'na': 'Bulletblitz',
            'jp': 'Vapor Bullet',
        },
		'Sleightshot Gambit': 
		{
            'na': 'Sleightshot Gambit',
            'jp': 'Moment Trick',
        },
		'Edgeracer Gambit': 
		{
            'na': 'Edgeracer Gambit',
            'jp': 'Racer Edge',
        },
		'Houndblade': 
		{
            'na': 'Houndblade',
            'jp': 'Wise Hound',
        },
		'Focus': 
		{
            'na': 'Focus',
            'jp': 'Gear',
        },
		'Starfire Squall': 
		{
            'na': 'Starfire Squall',
            'jp': 'Brand New Star',
        },
		'Sleightshot Gambit': 
		{
            'na': 'Sleightshot Gambit',
            'jp': 'Moment Trick',
        },
		'Hero Encore Jump': 
		{
            'na': 'Hero Encore Jump',
            'jp': 'One More Jump',
        },
		'Brightblade Buster': 
		{
            'na': 'Brightblade Buster',
            'jp': 'Brightness End',
        },
		'60%': 
		{
            'na': '60%',
            'jp': '80%',
        },
		'Atomizer Fanatic': 
		{
            'na': 'Atomizer Fanatic',
            'jp': 'Atomizer Lovers',
        },
		'Mate Maniac': 
		{
            'na': 'Mate Maniac',
            'jp': 'Mate Lovers',
        },
		'Party Toughness': 
		{
            'na': 'Party Toughness',
            'jp': 'Party Of Toughness',
        },
		'Leaping Dodge': 
		{
            'na': 'Leaping Dodge',
            'jp': 'Jumping Dodge',
        },
		'Mag Excitement': 
		{
            'na': 'Mag Excitement',
            'jp': 'Mag Excite',
        },
		'Perfectionist': 
		{
            'na': 'Perfectionist',
            'jp': 'P-Keeper',
        },
		'Critical Strike': 
		{
            'na': 'Critical Strike',
            'jp': 'C-Strike',
        },
		'Voelkermord': 
		{
            'na': 'Massenvernichtungs',
            'jp': 'Voelkermord',
        },
		'Folterzeit': 
		{
            'na': 'Folterzeit',
            'jp': 'Folter Zeit',
        },
		'Phantom Lock-On Bomb': 
		{
            'na': 'Phantom Lock-On Bomb',
            'jp': 'Phantom Lock-On Bomb',
        },
		'Shifted Nachtangriff': 
		{
            'na': 'Shifted Nachtangriff',
            'jp': 'Shifted Nachtangriff',
        },
		'Soaring Blades': 
		{
            'na': 'Soaring Blades',
            'jp': 'Dual Blades',
        },
		'Black Hole Rapture': 
		{
            'na': 'Black Hole Rapture',
            'jp': 'Black Hole Rupture',
        },
		'Cofy': 
		{
            'na': 'Cofy',
            'jp': 'Koffie',
        },
		'Gunblade': 
		{
            'na': 'Gunblade',
            'jp': 'Gunslash',
        },		
		'Gunblades': 
		{
            'na': 'Gunblades',
            'jp': 'Gunslashes',
        },
		'techter': 
		{
            'na': 'techter',
            'jp': 'techer',
        }
};
var langs = ['na', 'jp'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function() {
    current_lang_index = ++current_lang_index % 2;
    current_lang = langs[current_lang_index];
    translate();
}

function translate() {
	try 
	{
		var LastEntry = "";
		$("[data-translate]").each(function(){
			LastEntry = $(this).data('translate');
			var key = $(this).data('translate');
			$(this).html(dictionary[key][current_lang] || "N/A");
		});
	}
	catch(err)
	{
		window.alert("Translation script failed! Couldn't find an entry for " + LastEntry);
	}
}

translate();

