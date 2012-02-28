//small images for front of skills tile
var skillImagesFront = [    { alt:"AJAX", src:"/img/images/1_01.png" },
                            { alt: "Android", src: "/img/images/1_02.png" },
                            { alt: "ASP.net", src: "/img/images/1_03.png" },
                            { alt: "CSS3", src: "/img/images/1_04.png" },
                            { alt: "dotnet", src: "/img/images/1_05.png" },
                            { alt: "HTML5", src: "/img/images/1_06.png" },
                            { alt: "iOS", src: "/img/images/1_07.png" },
                            { alt: "JSON", src: "/img/images/1_08.png" },
                            { alt: "jQuery", src: "/img/images/1_09.png" },
                            { alt: "Kinect", src: "/img/images/1_01.png" },
                            { alt: "MCSD", src: "/img/images/1_05.png" },
                            { alt: "MonoDev", src: "/img/images/1_05.png" },
                            { alt: "MVC", src: "/img/images/1_08.png" },
                            { alt: "Sharepoint", src: "/img/images/1_05.png" },
                            { alt: "Silverlight", src: "/img/images/1_08.png" },
                            { alt: "Sitefinity", src: "/img/images/1_05.png" },
                            { alt: "Telerik", src: "/img/images/1_08.png" },
                            { alt: "Visual Studio", src: "/img/images/1_05.png" },
                            { alt: "W3C", src: "/img/images/1_08.png" },
                            { alt: "Windows Mobile", src: "/img/images/1_05.png" },
                            { alt: "Windows Phone", src: "/img/images/1_08.png" },
                            { alt: "X Code", src: "/img/images/1_05.png" },
                            { alt: "XML", src: "/img/images/1_08.png" },
                            { alt: "XNA", src: "/img/images/1_08.png" }
                        ];
//large images for back of skills
var skillImagesBack = [     { alt: "AJAX", src:"/content/images/skills/ajax.jpg" },
                            { alt: "Android", src:"/content/images/skills/android.jpg" },
                            { alt: "ASP.net", src:"/content/images/skills/aspnet.jpg" },
                            { alt: "back the attack", src:"/content/images/skills/back-the-attack.png" },
                            { alt: "dotnet", src:"/content/images/skills/dotnet.jpg" },
                            { alt: "iOS", src:"/content/images/skills/ios.jpg" },
                            { alt: "JSON", src:"/content/images/skills/json.jpg" },
                            { alt: "jQuery", src:"/content/images/skills/jquery.jpg" },
                            { alt: "Kinect", src:"/content/images/skills/kinect.jpg" },
                            { alt: "MCSD", src:"/content/images/skills/mcsd.jpg" },
                            { alt: "MonoDev", src:"/content/images/skills/monodev.jpg" },
                            { alt: "MVC", src:"/content/images/skills/mvc.jpg" },
                            { alt: "Sharepoint", src:"/content/images/skills/sharepoint.jpg" },
                            { alt: "Silverlight", src:"/content/images/skills/silverlight.jpg" },
                            { alt: "Sitefinity", src:"/content/images/skills/sitefinity.jpg" },
                            { alt: "Telerik", src:"/content/images/skills/telerik.jpg" },
                            { alt: "Visual Studio", src:"/content/images/skills/vstudio.jpg" },
                            { alt: "W3C", src:"/content/images/skills/w3c.jpg" },
                            { alt: "Windows Mobile", src:"/content/images/skills/winmobile.jpg" },
                            { alt: "Windows Phone", src:"/content/images/skills/winphone.jpg" },
                            { alt: "X Code", src:"/content/images/skills/xcode.png" },
                            { alt: "XML", src:"/content/images/skills/xml.jpg" },
                            { alt: "XNA", src:"/content/images/skills/xna.jpg" }];

                            $(document).ready(function () {
                                $(".live-tile").not(".exclude, .projects").each(function () {
                                    var delayAmount = 3001 + (Math.random() * 3001);
                                    var revealAmount = (Math.random() * 51) > 25 ? 50 : 0;
                                    $(this).liveTile({
                                        delay: delayAmount,
                                        stops: revealAmount,
                                        mode: $(this).hasClass('flip') ? 'flip' : 'slide'
                                    });
                                });
                                window.setTimeout(function () {
                                    $(".live-tile.projects>div").last().fadeOut(function () {
                                        $(".live-tile.projects").liveTile({
                                            mode: 'slide',
                                            frontImages: [
                                                        { alt: "WordStreamer", src: "/content/images/projects/wordstreamer.png", href: "/projects" },
                                                        { alt: "LeapFrog Interactive Kinect", src: "/content/images/projects/leapfrog-kinect.jpg", href: "/projects" },
                                                        { alt: "MetroJS", src: "/content/images/projects/metro-js.png", href: "/projects" },
                                                        { alt: "Sitefinity controls", src: "/content/images/projects/archived-projects.png", href: "/projects" },
                                                        { alt: "Archived Projects on SkyDrive", src: "/content/images/projects/sitefinity-controls.png", href: "/projects"}],
                                            frontIsRandom: false,
                                            preloadImage: true,
                                            stops: "100%"
                                        });
                                        $(this).fadeIn();
                                    });
                                }, 3000);


                                $(".flip-list").first().liveTile({ mode: 'flip-list', flipListOnHover: true });
                                $(".flip-list").last().liveTile({ mode: 'flip-list',
                                    alwaysTrigger: true,
                                    frontImages: skillImagesFront,
                                    backImages: skillImagesBack,
                                    backIsRandom: false,
                                    backIsBackgroundImage: true,
                                    backIsInGrid: true
                                });                                
                                $.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?screen_name=vijaypaliwal&include_rts=true&count=6&callback=?", function (data) {
                                    var $cont = $("<div></div>").appendTo("#twitterFeed");
                                    $.each(data, function (i, item) {
                                        var status = (typeof (item.retweeted_status) == 'undefined') ? item : item.retweeted_status;
                                        ct = ' ' + item.text;
                                        // parse regular links http://www.codinghorror.com/blog/2008/10/the-problem-with-urls.html
                                        ct = ct.replace(/http:\/\/([-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|])/g, '[<a rel="nofollow" href="http://$1" target="_blank" title="http://$1" onclick="javascript:_gaq.push([\'_trackPageview\',\'/outgoing/$1\']);">link</a>]');
                                        // parse errant links that clipped off to the actual tweet
                                        ct = ct.replace(/\/(t.co(\/)?)[\u0022\u0027]/g, '/twitter.com/' + status.user.screen_name + '/status/' + status.id_str + '"');
                                        // parse @ links
                                        ct = ct.replace(/(\$|\s|\^)(@)([a-zA-Z0-9_]+)/g, ' @<a rel="nofollow" onclick="javascript:_gaq.push([\'_trackPageview\',\'/outgoing/twitter.com/$3\']);" href="http://twitter.com/$3" target="_blank">$3</a>');
                                        //parse # links
                                        ct = ct.replace(/\s(#)(\w+)(\.)?/g, ' #<a rel="nofollow" onclick="javascript:_gaq.push([\'_trackPageview\',\'/outgoing/search.twitter.com/search?q=%23\']);" href="http://search.twitter.com/search?q=%23$2" target="_blank">$2</a>');
                                        var track = "javascript:_gaq.push(['_trackPageView','/outgoing/twitter.com/' + status.user.screen_name])";
                                        var pic = '<a rel="nofollow" class="pic" href="http://twitter.com/' + status.user.screen_name + '" onclick="' + track + '" target="_blank"><img src="' + status.user.profile_image_url + '" alt="' + status.user.name + '" /></a>';
                                        ct = pic + ct;
                                        $cont.append('<div>' + ct + '</div>');
                                    });
                                });                                
                            });