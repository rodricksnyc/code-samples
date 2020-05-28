let pageModule = {
  config: {
    classes: {
      activeLevel: '.activeLevel',
      numberCounter: '.numberCounter',
      groupCheckbox : '.addCategories input:checkbox',
      globalCheckbox: 'input:checkbox',
      groupButton : '.combine',
      showModal : '#reorderCategories',
      groupWords : '.groupTopics',
      checked : ".addCategories input:checkbox:checked",
      removeLevel :'.removeLevel',
      removeRow: '#rowTopics .removeLevel',
      removeColumn: '#columnTopics .removeLevel',
      reorderOptions : '.categories li .custom-control',
      mergedCategories :'.merged .custom-control',
      addCustomControl : '.addCategories li .custom-control',
      modalList:'.addCategories li',
      modal: '.categoriesModal',
      reorderOptions : '.reorderOptions',
      add: '.addCategories',
      closeModal : '.closeCategoryModal',
      save: '.save',
      expand: '.orangeCircle',
      plusRow: '.plusRow',
      mergedCheckbox: '.merged .custom-checkbox',
      mergedCheck : ".merged input:checkbox",
      activeLi: 'li .reorderActive',
      separate: '.separate',
      merged : '.merged',
      groupedCategories :'.groupedCategories',
      rowLevel: '#rowTopic .levels',
      columnLevel : '#columnTopic .levels',
      layerLevel: '#layerTopic .levels',
      analysisLevel: '#analysisTopic .levels'



    }
  },
  modalFunc: function() {
    var modal = pageModule.config.classes.modal
    var showModal = pageModule.config.classes.showModal
    var add = pageModule.config.classes.add
    var addCustomControl  = pageModule.config.classes.addCustomControl
    var modalInputs = pageModule.config.classes.groupCheckbox
    var button = pageModule.config.classes.groupButton
    var words = pageModule.config.classes.groupWords
    var checkedInputs = pageModule.config.classes.checked
    var groupNumber =  $(checkedInputs).length;
    var closeModal = pageModule.config.classes.closeModal
    var save = pageModule.config.classes.save
    var remove = pageModule.config.classes.removeLevel
    var mergedCheck = pageModule.config.classes.mergedCheck
    var inputs = pageModule.config.classes.globalCheckbox
    var mergedCategories = pageModule.config.classes.mergedCategories
    var mergedCheckbox = pageModule.config.classes.mergedCheckbox
    var checkedInputs = pageModule.config.classes.checked
    var modalList = pageModule.config.classes.modalList
    var mergedCheck = pageModule.config.classes.mergedCheck
    var separate = pageModule.config.classes.separate
    var groupedCategories = pageModule.config.classes.groupedCategories
    var merged = pageModule.config.classes.merged
    var reorderOptions = pageModule.config.classes.reorderOptions
    var rowLevel = pageModule.config.classes.rowLevel
    var columnLevel = pageModule.config.classes.columnLevel
    var layerLevel = pageModule.config.classes.layerLevel
    var analysisLevel = pageModule.config.classes.analysisLevel

    var horizontal = "";
    var original = "";
    $(modal).on('click', function() {
      $(showModal).modal('show');
      var categoryLi =  $(this).closest('.levels').find('.categories')
      var horizontal =  $(this).closest('.levels').find('.horizontal:eq(1)')

      var original = $(categoryLi).clone();

      $(add).append(categoryLi)
      $(reorderOptions).removeClass('hidden')

      $(modalInputs).change( function(){

        if($(this).prop("checked")==true){

          $(this).closest('li').find('.custom-checkbox').addClass('reorderActive')
        }

        else{

          $(this).closest('li').find('.custom-checkbox').removeClass('reorderActive')

        };

        let groupNumber =  $(checkedInputs).length;

        let groupCounter = `Combine ${groupNumber}`;

        if($(checkedInputs).length >= 2) {
          $(button).addClass('brightBlue')
          $(words).html(groupCounter)
        }
        else {
          $(button).removeClass('brightBlue')
          $(words).html('Select to group')
        }

      })

      $(addCustomControl).removeClass('hidden')

      var emptyModal = function (){

        console.log(original)

        $(horizontal).empty().append(original)

        $(add).empty()
        $(button).removeClass('brightBlue')
        $(words).html('Select to group')

      }
      $(closeModal).keypress(
        emptyModal

      ).click(
        emptyModal
      );

      var saveModal = function (){
        $(horizontal).empty().append(categoryLi)

        $(add).empty()

        $(showModal).modal('hide');
        $(button).removeClass('brightBlue')
        $(words).html('Select to group')

      }
      $(save).keypress(
        saveModal

      ).click(
        saveModal
      );

      $(button).click(function() {
        var active  = $(this).closest('.modal-content').find('.reorderActive').parent()
        $(groupedCategories).append(`<div class="merged"><ul class="mergedUL"></ul><button class="separate" tabindex="0" role="button"><p>Separate</p><div class="across4"><i class="fal fa-arrow-left"></i>&nbsp;|&nbsp;<i class="fal fa-arrow-right"></i></div></button></div>`)

        $('.groupedCategories .mergedUL').append(active)

        $(mergedCategories).removeClass('reorderActive').addClass('bottomZero')
        $(mergedCheck).removeAttr('checked');

        $(words).html('Select to group')
        $(button).removeClass('brightBlue')

        if ($(addCustomControl).length == 1) {
          $(button).off("click")

        }
        else {
          $(button).on("click")
        }

        $(separate).click(function(){

          var item = $(this).closest('.merged').find('input:checkbox:checked').parent().parent()

          $('.addCategories .categories').append(item)
          $(addCustomControl).removeClass('reorderActive').removeClass('bottomZero')
          $(modalInputs).removeAttr('checked');

          if ($('.mergedUL li').length == 1) {
            $(separate).css('top', '24%')
          }

          if ($('.mergedUL li').length == 0) {
            $(this).closest('.merged').remove()

          }

        })

      })

    })

    $('#rowTopic').on('click', '.removeLevel' , function() {
      $(horizontal).empty().append(original)

      var el = $(this).closest('.levels').find('input[data-level]').val()

      var putBack = $(this).closest('.levels')

      $('.listArea .topicLevels').append(putBack)
      $('.addRow').closest('.levels').find(`input[data-level='${el}']`).prop("checked", false);

      if ($(rowLevel).length < 3 ) {
        $('#rowTopic').animate({
          minHeight: "none",
          maxHeight:"85px",
          height:"auto"

        },400);

      }

      if ($(rowLevel).length >3 ) {
        $('.whiteBar').fadeOut('slow')
      }

      if($(rowLevel).length == 0) {
        $('.plusRow').hide();
      }

      $('.numberCounter').html(function(i, val) { return val*1 - 1 });

      $(".allLevels input").prop('checked', false).change();
      var el = $(this).closest('.levels').find('input[data-level]').val()

      if ($(rowLevel).length <= 2 ) {
        $('.plusRow').removeClass('green')

      }

    })


  },

  getnumberFunc: function() {
    var number = pageModule.config.classes.numberCounter
    let showNumber =  $(number).html(function(i, activeLevel ) { return activeLevel*1 + 1 });
    return showNumber;

  },

  showExpandFunc: function() {
    var expand = pageModule.config.classes.expand
    var plus = pageModule.config.classes.plusRow
    var rowLevel = pageModule.config.classes.rowLevel
    var columnLevel = pageModule.config.classes.columnLevel
    var layerLevel = pageModule.config.classes.layerLevel
    var analysisLevel = pageModule.config.classes.analysisLevel
    var showExpand = function() {
      if ($(rowLevel).length > 0 || $(columnLevel).length > 0 || $(layerLevel).length > 0 || $(analysisLevel).length > 0) {
        $(expand).show()
      }
      else {
        $(expand).hide()
      }
    }

    $('body').keypress(
      showExpand

    ).click(
      showExpand
    );

  },

  globalRemoveFunc: function() {
    var inputs = pageModule.config.classes.globalCheckbox
    var remove = pageModule.config.classes.removeLevel
    var save = pageModule.config.classes.save
    var reorderOptions = pageModule.config.classes.reorderOptions
    $(remove).click(function() {
      $(inputs).removeAttr('checked');
      $(inputs).parents().removeClass('reorderActive');
      $(reorderOptions).addClass('hidden')
    })

    $(save).click(function() {
      $(inputs).removeAttr('checked');
      $(inputs).parents().removeClass('reorderActive');
      $(reorderOptions).addClass('hidden')
    })

  },


  init: function() {

    let self = this;

    console.log('this is started');


  },

}

pageModule.init();
pageModule.modalFunc()
pageModule.globalRemoveFunc()
pageModule.getnumberFunc()
pageModule.showExpandFunc()
