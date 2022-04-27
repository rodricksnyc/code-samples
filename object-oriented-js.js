$(document).ready(function () {

    //dropdown array
    const data = [
        ['<option value="Corn Neo" data-value="13">Miravis Neo</option>', '<option value="Soybeans Neo" data-value="7">Miravis Neo</option>', '<option value="Soybeans Top" data-value="8" >Miravis Top</option>', '<option value="Wheat" data-value="11.8">Miravis Ace</option>', '<option selected="selected"></option>']
    ]

    const corn = (data[0][0])
    const soyNeo = (data[0][1])
    const soyTop = (data[0][2])
    const wheat = (data[0][3])
    const empty = (data[0][4])

    //create js classes
    let pageModule = {
        config: {
            classes: {
                acres: '#numAcres',
                crop: '#crop',
                brand: "#brand",
                cornNumber: $(corn).attr("data-value"),
                soyNeoNumber: $(soyNeo).attr("data-value"),
                soyTopNumber: $(soyTop).attr("data-value"),
                wheatNumber: $(wheat).attr("data-value"),
                calculate: '#calculate',
                selectedBrand: '#brand :selected',
                slider: '.slider',
                slide: '.slide img, .slide p',
                recalculate: '#recalculate'

            }

        },
        //only allow 5 digits
        countFunc: function () {
            var acres = pageModule.config.classes.acres
            $(acres).keyup(function (e) {
                var max = $(acres).attr('max').length;
                if ($(this).val().length >= max) {
                    $(this).val($(this).val().substr(0, max));

                }
            });

        },
        //slick slider
        sliderFunc: function () {
            var slider = pageModule.config.classes.slider

            $(slider).slick({
                slidesToShow: 1,
                centerMode: false,
                centerPadding: "45%",
                arrows: true,
                dots: true,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        arrows: false
                    }
                }]
            });


        },

        //append correct dropdown options
        appendFunc: function () {
            var empty = pageModule.config.classes.empty
            var crop = pageModule.config.classes.crop
            var brand = pageModule.config.classes.brand
            $(crop).change(function () {
                $(brand).empty()
                if ($(this).val() == 'Corn') {
                    $(brand).append(corn);
                }
                if ($(this).val() == 'Soybeans') {
                    $(brand).append(empty, soyNeo, soyTop);

                }
                if ($(this).val() == 'Wheat') {
                    $(brand).append(wheat);
                }
            });

        },

        //calculator function
        calculateFunc: function () {
            var acres = pageModule.config.classes.acres
            var crop = pageModule.config.classes.crop
            var brand = pageModule.config.classes.brand
            var calculate = pageModule.config.classes.calculate
            var cornNumber = pageModule.config.classes.cornNumber
            var soyNeoNumber = pageModule.config.classes.soyNeoNumber
            var soyTopNumber = pageModule.config.classes.soyTopNumber
            var wheatNumber = pageModule.config.classes.wheatNumber
            var selectedBrand = pageModule.config.classes.selectedBrand
            var slide = pageModule.config.classes.slide

            $(calculate).click((e) => {
                //create objects
                var elementHtmlList = [];

                elementHtmlList.push({
                    Element: '.one .num',
                    Corn: Math.round($(corn).attr("data-value") * 7.49 * $('#numAcres').val()),
                    SoyNeo: Math.round($(soyNeo).attr("data-value") * 15.21 * $('#numAcres').val()),
                    SoyTop: Math.round($(soyTop).attr("data-value") * 15.21 * $('#numAcres').val()),
                    Wheat: Math.round($(wheat).attr("data-value") * 10.93 * $('#numAcres').val())
                });

                elementHtmlList.push({
                    Element: '.two .num',
                    Corn: Math.round(11 * 7.49 * $(acres).val()),
                    SoyNeo: Math.round(3 * 15.21 * $(acres).val()),
                    SoyTop: Math.round(4 * 15.21 * $(acres).val()),
                    Wheat: Math.round(5.7 * 10.93 * $(acres).val())
                });

                elementHtmlList.push({
                    Element: '.three .num',
                    Corn: Math.round(6 * 7.49 * $(acres).val()),
                    SoyNeo: Math.round(2 * 15.21 * $(acres).val()),
                    SoyTop: Math.round(1 * 15.21 * $(acres).val()),
                    Wheat: Math.round(2.8 * 10.93 * $(acres).val())
                });

                elementHtmlList.push({
                    Element: '.one .output',
                    Corn: cornNumber,
                    SoyNeo: soyNeoNumber,
                    SoyTop: soyTopNumber,
                    Wheat: wheatNumber
                });

                elementHtmlList.push({
                    Element: '.two .output',
                    Corn: 11,
                    SoyNeo: 3,
                    SoyTop: 4,
                    Wheat: 5.7
                });

                elementHtmlList.push({
                    Element: '.three .output',
                    Corn: 6,
                    SoyNeo: 2,
                    SoyTop: 1,
                    Wheat: 2.8
                });

                elementHtmlList.push({
                    Element: '.one .brandChoice, .brand',
                    Corn: 'Miravis<sup>&reg;</sup> Neo',
                    SoyNeo: 'Miravis<sup>&reg;</sup> Neo',
                    SoyTop: 'Miravis<sup>&reg;</sup> Top',
                    Wheat: 'Miravis<sup>&reg;</sup> Ace'
                });

                elementHtmlList.push({
                    Element: '.two .brandChoice',
                    Corn: 'Delaro<sup>&reg;</sup> 325 SC <sup class="light">2</sup>',
                    SoyNeo: 'Delaro<sup>&reg;</sup> 325 SC <sup class="light">2</sup>',
                    SoyTop: 'Delaro<sup>&reg;</sup> 325 SC <sup class="light">2</sup>',
                    Wheat: 'Prosaro<sup>&reg;</sup> 421 SC <sup class="light">2</sup>'
                });

                elementHtmlList.push({
                    Element: '.three .brandChoice',
                    Corn: 'Veltyma<sup>&trade;</sup> <sup class="light">3</sup>',
                    SoyNeo: 'Revytek<sup>&reg;</sup> <sup class="light">3</sup>',
                    SoyTop: 'Revytek<sup>&reg;</sup> <sup class="light">3</sup>',
                    Wheat: 'Caramba<sup>&reg;</sup> <sup class="light">3</sup>'
                });

                elementHtmlList.push({
                    Element: '.legal',
                    Corn: '<li><sup>1</sup> 150 on farm grower/strip trials. Application rate and timing: Miravis Neo 13.7 fl. oz/A applied at VT/R1. IA, IL, IN, KS, MN, MO, NE, OH, SD, WI; 2018-2020.</li><li><sup>2</sup> 6 on farm grower/strip trials. Application rates and timing: Miravis Neo 13.7 fl. oz/A and Delaro 325 SC 8 fl. oz/A applied at VT/R1. IA(2), IL (3), IN (1); 2020.</li><li><sup>3</sup> 25 on farm grower/strip trials. Application rates and timing: Miravis Neo 13.7 fl. oz/A and Veltyma 7 fl. oz/A applied at VT/R1. IA (3), IL (10), IN (2), MN (2), NE (3), OH (4), WI (1); 2019-2020.</li>',
                    SoyNeo: '<li><sup>1</sup> 40 non-replicated on-farm grower/strip trials. Miravis Neo 13.7 fl. oz/A applied at R3. IL (4), IN (1), KS (1), MO (5), OH (9), WI (20); 2019-2020.</li><li><sup>2</sup> 8 on farm grower/strip trials. Application rates and timing: Miravis Neo 13.7 fl. oz/A and Delaro 325 SC 8 fl. oz/A applied at R3. IA (5), NE (3); 2019-2020.</li><li><sup>3</sup> Application rates and timing: Miravis Neo 13.7 fl. oz/A and Revytek 8 fl. oz/A applied at R3. IA (2), MN (10), MO (1), NE (2), OH (7), WI (1); 2019-2020.</li>',
                    SoyTop: '<li><sup>1</sup> 199 COI and on farm grower/strip trials. Application rate and timing: Miravis Top 13.7 fl. oz/A applied at R3. AR, KY, LA, MS, and TN contain some replicated trials. AR (39), IL (55), IN (11), KS (6), KY (1), LA (27), MO (26), MS (22), TN (12); 2020.</li><li><sup>2</sup> Application rates and timing: Miravis Top 13.7 fl. oz/A and Delaro 325 SC 8 fl. oz/A applied at R3. AR, KY, LA, MS, and TN contain some replicated trials. AR (9), IL (3), IN (1), LA (4), MO (8), MS (3), TN (1); 2018-2020.</li><li><sup>3</sup> 37 COI and on farm grower/strip trials. Application rates and timing: Miravis Top 13.7 fl. oz/A and Revytek 8 fl. oz/A applied at R3. AR, LA, and MS contain some replicated trials. AR (20), IL (4), IN (2), LA (5), MO (5), MS (1); 2019-2020.</li>',
                    Wheat: '<li><sup>1</sup> 39 on farm grower/strip trials. Application rate and timing: Miravis Ace 13.7 fl. oz/A applied at Feekes 10.5-10.5.1. AR (5), IL (1), LA (8), MO (5), OH (2), WI (18); 2017-2020.</li><li><sup>2</sup> 24 on farm grower/strip trials. Application rates and timing: Miravis Ace 13.7 fl. oz/A and Prosaro 421 SC 6.5-8.2 fl. oz/A at Feekes 10.5-10.5.1. AR (5), GA (1), IL (2), IN (2), KS (1), LA (8), MO (2), OH (1), WI (2); 2017-2020.</li><li><sup>3</sup> 9 on farm grower/strip trials. Application rates and timing: Miravis Ace 13.7 fl. oz/A and Caramba 13.5 fl. oz/A at Feekes 10.5-10.5.1. AR (2), LA (5), MO (2); 2018-2020.</li>'
                });


                if ($(acres).val() == '') {
                    $('.error-message').show()
                    e.preventDefault();

                }

                else {
                    updateNumbers()
                    $('.error').hide()
                    $('.secondDiv').fadeIn()
                    $('.firstDiv').fadeOut()

                    //font size changes

                    if ($(".one .biggest .num").text().length >= 6 && $(document).innerWidth() > 1024) {
                        $('.biggest, .big').addClass('smallerFont')
                    }
                    //hacky way of using a or an

                    $(".output").each(function () {
                        if ($(this).html() == 8 || $(this).html() == 11 || $(this).html() == 11.8) {
                            $(this).closest('.col-md-4').find('.vowel').html('an')
                        }

                    })
                }

                function updateNumbers() {
                    //iterate through objects
                    $.each(elementHtmlList, function (index, val) {

                       //corn

                        if ($(selectedBrand).val() == 'Corn Neo') {
                            $(val.Element).append(val.Corn);

                            $(slide).each(function () {
                                if ($(this).hasClass("cornImg")) {
                                    $(this).show()
                                }
                                else {
                                    $(this).hide()
                                }
                            })
                        }
                        //soy neo

                        if ($(selectedBrand).val() == 'Soybeans Neo') {

                            $(val.Element).append(val.SoyNeo)

                            $(slide).each(function () {
                                if ($(this).hasClass("soyNeo")) {
                                    $(this).show()
                                }
                                else {
                                    $(this).hide()
                                }
                            })

                        }

                        //soy top

                        if ($(selectedBrand).val() == 'Soybeans Top') {
                            $(val.Element).append(val.SoyTop)

                            $(slide).each(function () {
                                if ($(this).hasClass("soyTop")) {
                                    $(this).show()
                                }
                                else {
                                    $(this).hide()
                                }
                            })
                        }

                        //wheat

                        if ($(selectedBrand).val() == 'Wheat') {
                            $(val.Element).append(val.Wheat)
                            $(slide).each(function () {
                                if ($(this).hasClass("wheatImg")) {
                                    $(this).show()
                                }
                                else {
                                    $(this).hide()
                                }
                            })
                        }


                    });

                }

                //add commas
                function numberWithCommas(number) {
                    var parts = number.toString().split(".");
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    return parts.join(".");
                }

                $(".num").each(function () {
                    var num = $(this).text();
                    var commaNum = numberWithCommas(num);
                    $(this).text(commaNum);
                });

                //hide show
                $('.sliderDiv').removeClass('hidden')
                $('.slider').slick('refresh');


            })


        },
        //recalculate and clear fields
        recalculateFunc: function () {
            var acres = pageModule.config.classes.acres
            $(recalculate).click((e) => {
                $('.secondDiv').fadeOut()

                $('.firstDiv').fadeIn()
                $('.secondDiv').hide();
                $("select").val("0");
                $(acres).val('');
                $('.num, .output, .brandChoice, .brand, .legal, #brand').empty()
                $('.sliderDiv').addClass('hidden')
                $('.biggest, .big').removeClass('smallerFont')
                $('.vowel').html('a')

            })


        },

        init: function () {
            let self = this;

        },

    }

    pageModule.init()
    pageModule.countFunc()
    pageModule.sliderFunc()
    pageModule.appendFunc()
    pageModule.calculateFunc()
    pageModule.recalculateFunc()

})
