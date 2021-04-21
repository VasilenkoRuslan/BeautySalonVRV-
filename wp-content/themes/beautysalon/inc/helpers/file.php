<?php
/**
 * Get real path to assets
 */
function asset_path($asset) {
	$assets_file = THEME_DIR .'/dist/assets.json';

	if(file_exists($assets_file)) {
		$assets = file_get_contents($assets_file);
		$json = json_decode($assets, true);

		return THEME_DIR_URI .'/dist/'. $json[$asset];
	} else {
		return THEME_DIR_URI .'/dist/'. $asset;
	}
}
