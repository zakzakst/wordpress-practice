<?php
// 共通設定ページのID
$common_page_id = 9;
$common_page_data = get_post($common_page_id);
$common_page_title = $common_page_data->post_title;
// 固定ページのタイトルを出力
echo $common_page_title;

// デフォルトディスクリプション
$default_description = get_field('description', $common_page_id);

if( $default_description ) {
  echo $default_description;
}

$ogp_image = get_field('ogp_image');
if( $ogp_image ) {
  echo $ogp_image;
}