

let fadeInContentAnimation = function() {

};


$(function () {

    // Content fade in animation
    // ========================

    const mWidth = 576;

    const mainAnimDuration = 1.5;
    const animEase = Sine.easeInOut;

    fadeInContentAnimation = function () {

        // show main content after the globe animations

        const $main = $('main');

        TweenMax.to( $main, mainAnimDuration, { opacity: 1, ease: animEase } );
        TweenMax.to( $main, mainAnimDuration, { y: 0, ease: animEase } );

    };

    if (window.innerWidth <= mWidth) {
        fadeInContentAnimation();
    }

    const $nav = $('nav');
    const $info_btn = $('section.info-btn');

    TweenMax.to( $nav, mainAnimDuration, { opacity: 1, ease: animEase } );
    TweenMax.to( $info_btn, mainAnimDuration, { opacity: 1, ease: animEase } );

    // quiz logic
    // ========================

    $.modal.defaults.fadeDuration = 500;
    $.modal.defaults.fadeDelay = 0;

    // Symptoms Quiz

    $('#symptoms-quiz').on($.modal.OPEN, function () {
        $('body').removeClass('blurred').addClass('blurred');
    }).on($.modal.CLOSE, function () {
        $('body').removeClass('blurred');
    });
    $('#SymptomsQuiz').slickQuiz({
        skipStartButton: true,
        perQuestionResponseMessaging: false,
        preventUnanswered: true,
        preventUnansweredText: 'أخطار إجابة يعيشك',
        questionCountText: '%current/%total',
        questionTemplateText: '%text',
        json: {
            "info": {
                "name": "إرشادات حول الأعراض",
                "main": "<small><span>COVID-19</span>جاوب معانا عالأسئلة هاذم كانك شاك انو عندك الـ </small>",
                "results": "حسب الإجابات متعك :",
                "level1": "حط روحك في الحجر الذاتي، ابعد على الناس إلي قرابلك و إتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
                "level2": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
                "level3": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
                "level4": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.<p class='green-num'>80 10 19 19</p>",
                "level5": "تلهى بصحتك و إتصل بالرقم الأخضر كان حسيت عندك الأعراض هذه.<p class='green-num'>80 10 19 19</p>"
            },
            "questions": [
                {
                    "q": "تكح الأيامات الفائتة ؟",
                    "a": [
                        {"option": "نعم", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "خشمك يجري ؟",
                    "a": [
                        {"option": "نعم", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "عندك وجيعة في الحلق ؟",
                    "a": [
                        {"option": "نعم", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "عندك السخانة ؟",
                    "a": [
                        {"option": "نعم", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                }
            ]
        },
    });


    // Prevention Quiz

    $('#prevention-quiz').on($.modal.OPEN, function () {
        $('body').removeClass('blurred').addClass('blurred');
    }).on($.modal.CLOSE, function () {
        $('body').removeClass('blurred');
    });
    $('#PreventionQuiz').slickQuiz({
        skipStartButton: true,
        perQuestionResponseMessaging: false,
        preventUnanswered: true,
        preventUnansweredText: 'أخطار إجابة يعيشك',
        questionCountText: '%current/%total',
        questionTemplateText: '%text',
        json: {
            "info": {
                "name": "إرشادات حول الوقاية",
                "main": "<p>جاوب معانا عالأسلة هاذم باش تتعرف على حالتك</p>",
                "results": "حسب الإجابات متعك :",
                "level1": "هايل ياسر ، بالتزامك الإجراءات ، أنت تنقذ الناس من حولك.",
                "level2": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
                "level3": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
                "level4": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
                "level5": " أبدا في ممارسة المبادئ التوجيهية لمنظمة الصحة العالمية و وزارة الصحة."
            },
            "questions": [
                {
                    "q": "تغسل يديك بعد ما تكح ولا تعطس ؟",
                    "a": [
                        {"option": "نعم", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "تغسل يديك عديد المرات في النهار ؟",
                    "a": [
                        {"option": "نعم", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "تستعمل في المطهر ؟",
                    "a": [
                        {"option": "نعم", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "تستعمل قناع الوجه كي تخرج ؟",
                    "a": [
                        {"option": "نعم", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "إتبع في الإرشادات الوقائية للوزارة الصحة ؟",
                    "a": [
                        {"option": "نعم", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                }
            ]
        }
    });


    // info popup logic
    // ========================

    $('#info-btn').on('click', function () {
        $(this).toggleClass('opened');
    });
});
