// Symptoms Quiz
$(function () {
    $('#SymptomsQuiz').slickQuiz({
        skipStartButton: true,
        perQuestionResponseMessaging: false,
        preventUnanswered: true,
        preventUnansweredText: 'أخطار اجابة يعيشك',
        questionCountText: 'سؤال %current من %total ',
        nextQuestionText: 'السؤال لي بعدو',
        json: {
            "info": {
                "name": "إرشادات حول الأعراض",
                "main": "<p>جاوب معانا عالأسلة هاذم باش تتعرف على حالتك</p>",
                "results": "حسب الأجابات متعك :",
                "level1": "حط روحك في الحجر الذاتي، ابعد على الناس إلي قرابلك و إتصل بالرقم الأخضر.",
                "level2": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.",
                "level3": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.",
                "level4": "حتى لو كان ماعندكش الأعراض الكل، إبعد على الناس الي تعز عليك حتى تتأكد أنك لباس و أكيد اتصل بالرقم الأخضر.",
                "level5": "تلهى بصحتك و إتصل بالرقم الأخضر كان حسيت عندك الأعراض هذه."
            },
            "questions": [
                {
                    "q": "تكح الأيامات الفائتة ؟",
                    "a": [
                        {"option": "أي", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "خشمك يجري ؟",
                    "a": [
                        {"option": "أي", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "عندك وجيعة في الحلق ؟",
                    "a": [
                        {"option": "أي", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "عندك السخانة ؟",
                    "a": [
                        {"option": "أي", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                }
            ]
        },
    });
});

// Prevention Quiz
$(function () {
    $('#PreventionQuiz').slickQuiz({
        skipStartButton: true,
        perQuestionResponseMessaging: false,
        preventUnanswered: true,
        preventUnansweredText: 'أخطار اجابة يعيشك',
        questionCountText: 'سؤال %current من %total ',
        nextQuestionText: 'السؤال لي بعدو',
        json: {
            "info": {
                "name": "إرشادات حول الوقاية",
                "main": "<p>جاوب معانا عالأسلة هاذم باش تتعرف على حالتك</p>",
                "results": "حسب الأجابات متعك :",
                "level1": "هايل ياسر ، بالتزامك الإجراءات ، أنت تنقذ الناس من حولك.",
                "level2": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
                "level3": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
                "level4": "ناسي بعض المبادئ التوجيهية . الوقاية هي أهم شيء باش نحميو الناس إلي العزاز علينا.",
                "level5": " ابدأ في ممارسة المبادئ التوجيهية لمنظمة الصحة العالمية و وزارة الصحة."
            },
            "questions": [
                {
                    "q": "تغسل يديك بعد ما تكح ولا تعطس ؟",
                    "a": [
                        {"option": "أي", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "تغسل يديك عديد المرات في النهار ؟",
                    "a": [
                        {"option": "أي", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "تستعمل في المطهر ؟",
                    "a": [
                        {"option": "أي", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "تستعمل قناع الوجه كي تخرج ؟",
                    "a": [
                        {"option": "أي", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                },
                {
                    "q": "إتبع في الإرشادات الوقائية للوزارة الصحة ؟",
                    "a": [
                        {"option": "أي", "correct": true},
                        {"option": "لا", "correct": false}
                    ]
                }
            ]
        }
    });
});
