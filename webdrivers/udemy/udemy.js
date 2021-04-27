const _tempjs = document.createElement('SCRIPT'); _tempjs.src = "https://underscorejs.org/underscore-min.js";  document.head.appendChild(_tempjs);

const _mc = {};
_mc.user = _.pick(UD.me, '_class','encrypted_id','name','is_authenticated','learning_languages','country','has_made_paid_purchase','created','surname','locale','user_id','job_title','initials','language','email','organization','display_name','time_zone','number_of_courses_purchased','image_50x50','image_100x10','title');
_mc.app = {}; _mc.app.app_name = UD.Config.app_name; _mc.app.country = UD.Config.marketplace_country.id; _mc.app.google_tag_manager_id = UD.Config.third_party.google_tag_manager_id; _mc.app.google_analytics_id = UD.Config.third_party.google_analytics_id_for_course_taking;
_mc.visitor = _.pick(UD.visiting, 'visitor_uuid','first_visit_time','is_first_time_visitor');
_mc.device = _.pick(UD.request, 'isTablet','isPC');

const v = document.getElementsByTagName('video')[0];
v.playbackRate = 0.5;

