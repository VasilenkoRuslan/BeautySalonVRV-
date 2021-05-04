<div class="navbar navbar-expand-sm navbar-right">
	<form role="search" class="form-inline" method="get" id="searchform" action="<?php echo home_url('/') ?>">
			<label class="screen-reader-text" for="s"><?php _e('Search'); ?>: </label>
			<input type="text" class="form-control" value="<?php echo get_search_query() ?>" name="s" id="s"/>
		<input type="submit" class="btn btn-success" id="searchsubmit" value="<?php _e('to find'); ?>"/>
	</form>
</div>
