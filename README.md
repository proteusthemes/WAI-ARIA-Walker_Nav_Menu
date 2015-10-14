# WAI-ARIA WordPress Walker

Nav menu walker for WP with correct WAI-ARIA roles for dropdown menus.

## Install

**[Detailed explanation in a blogpost](https://codeable.io/community/wordpress-accessibility-creating-accessible-dropdown-menus/).**

1. You can install this class using [Composer](https://getcomposer.org/) (preferred method) or manually copying [this file](https://github.com/ProteusThemes/WAI-ARIA-Walker_Nav_Menu/blob/master/aria-walker-nav-menu.php) to your theme / project.

1. After that, include it in your theme, probably something like (assuming you installed it using Composer):
  ```php
require_once 'vendor/proteusthemes/wai-aria-walker-nav-menu/aria-walker-nav-menu.php';
```

  You must [enqueue](https://codex.wordpress.org/Function_Reference/wp_enqueue_script) [wai-aria.js](https://github.com/ProteusThemes/WAI-ARIA-Walker_Nav_Menu/blob/master/wai-aria.js) as well, because the `aria-expanded` attributes needs to be updated with JS.

1. Finally, include the menus in your theme files as per example below:

  ```html
<nav class="collapse  navbar-collapse" role="navigation" aria-label="<?php _e( 'Main Menu', 'your-textdomain' ); ?>">
	<?php
		if ( has_nav_menu( 'your-menu' ) ) {
			wp_nav_menu( array(
				'theme_location' => 'your-menu',
				'container'      => false,
				'menu_class'     => 'main-navigation',
				'walker'         => new Aria_Walker_Nav_Menu(),
				'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
			) );
		}
	?>
</nav>
  ```

  Mind:

  - `'walker' => new Aria_Walker_Nav_Menu(),`
  - `<nav>` wrapping element and `'container' => false` in the arguments
  - `role="navigation"`
  - `aria-label="<?php _e( 'Main Menu', 'your-textdomain' ); ?>"`
  - `'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',`

### Compatibility with WP

This repo aims to be 1:1 compatible with latest WP version, mainly with the class `Walker_Nav_Menu` in the file `/<path-to-wp>/wp-includes/nav-menu-template.php`.

Current version is compatible with WP core **4.3**.

### Contributing

No need to explain - fork me and create a pull request.

#### Created by [@primozcigler](//twitter.com/primozcigler) and [@Prelc](//twitter.com/Prelc).
