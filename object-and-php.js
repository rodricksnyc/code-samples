
          var calendarEl = document.getElementById('calendar');
          var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: [ 'list', 'dayGrid' ],
            timeZone: 'UTC',
            defaultView: 'listMonth',
            views: {
              listWeek: { buttonText: 'list week' },
              listMonth: { buttonText: 'list month' }
            },
            header: {
              right: 'dayGridMonth,listYear'
            },



          });

          calendar.render();


        <?php

if(!isset($events)) {
  $events = tribe_get_events(array(
    'posts_per_page' => 50
    // 'eventDisplay' => 'list' // only upcoming
  ), true);
}

?>

<?php if ($events->have_posts()) : ?>

  events: [
  <?php while ($events->have_posts()) : $events->the_post(); ?>
    {
      title: "<?php the_title(); ?>",
      url: "<?php the_permalink(); ?>",
      allDay: true,
      start: '<?php echo tribe_get_start_date(null, true, 'Y-m-d'); ?>',
      end: '<?php echo tribe_get_end_date(null, true, 'Y-m-d'); ?>',

    },
  <?php endwhile; ?>
  ],

<?php endif;
wp_reset_postdata(); ?>
