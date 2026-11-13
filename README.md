# WAI-ARIA WordPress Walker

Nav menu walker for WP dropdown menus. Since 1.3.0 it adds no ARIA attributes to menu items.

## Install

**[Detailed explanation in a blogpost](https://codeable.io/community/wordpress-accessibility-creating-accessible-dropdown-menus/).**

1. You can install this class using [Composer](https://getcomposer.org/) (preferred method) or manually copying [this file](https://github.com/ProteusThemes/WAI-ARIA-Walker_Nav_Menu/blob/master/aria-walker-nav-menu.php) to your theme / project.

1. After that, include it in your theme, probably something like (assuming you installed it using Composer):
  ```php
require_once 'vendor/proteusthemes/wai-aria-walker-nav-menu/aria-walker-nav-menu.php';
```

  Since 1.3.0 the walker doesn't add `aria-haspopup`, `aria-expanded` or `tabindex` to parent `<li>` elements: those ARIA attributes aren't allowed on a list item, and the `tabindex` added an extra Tab stop on every parent item. [wai-aria.js](https://github.com/ProteusThemes/WAI-ARIA-Walker_Nav_Menu/blob/master/wai-aria.js) now has nothing to update, so you don't need to enqueue it; it stays in the package so themes that already enqueue it keep working. To open submenus for keyboard users, add `:focus-within` next to the `:hover` rules that show them.

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

Current version is compatible with WP core **4.5**.

### Contributing

No need to explain - fork me and create a pull request.

#### Created by [@primozcigler](//twitter.com/primozcigler) and [@Prelc](//twitter.com/Prelc).
