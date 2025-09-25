import React from 'react'
import { Link } from 'react-router-dom'

const Resource = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="max-image-preview:large" />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\n        img:is([sizes="auto" i], [sizes^="auto," i]) {\n            contain-intrinsic-size: 3000px 1500px\n        }\n    '
                }}
            />
            <title>Resources – GTL Towers</title>
            <link
                rel="alternate"
                type="application/rss+xml"
                title="GTL Towers » Feed"
                href="https://gtltowers.in/feed/"
            />
            <link
                rel="alternate"
                type="application/rss+xml"
                title="GTL Towers » Comments Feed"
                href="https://gtltowers.in/comments/feed/"
            />
            <style
                id="wp-block-site-logo-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-block-site-logo {\n            box-sizing: border-box;\n            line-height: 0\n        }\n\n        .wp-block-site-logo a {\n            display: inline-block;\n            line-height: 0\n        }\n\n        .wp-block-site-logo.is-default-size img {\n            height: auto;\n            width: 120px\n        }\n\n        .wp-block-site-logo img {\n            height: auto;\n            max-width: 100%\n        }\n\n        .wp-block-site-logo a,\n        .wp-block-site-logo img {\n            border-radius: inherit\n        }\n\n        .wp-block-site-logo.aligncenter {\n            margin-left: auto;\n            margin-right: auto;\n            text-align: center\n        }\n\n        :root :where(.wp-block-site-logo.is-style-rounded) {\n            border-radius: 9999px\n        }\n    "
                }}
            />
            <style
                id="wp-block-site-title-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-block-site-title {\n            box-sizing: border-box\n        }\n\n        .wp-block-site-title :where(a) {\n            color: inherit;\n            font-family: inherit;\n            font-size: inherit;\n            font-style: inherit;\n            font-weight: inherit;\n            letter-spacing: inherit;\n            line-height: inherit;\n            text-decoration: inherit\n        }\n    "
                }}
            />
            <style
                id="wp-block-group-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-block-group {\n            box-sizing: border-box\n        }\n\n        :where(.wp-block-group.wp-block-group-is-layout-constrained) {\n            position: relative\n        }\n    "
                }}
            />
            <style
                id="wp-block-group-theme-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        :where(.wp-block-group.has-background) {\n            padding: 1.25em 2.375em\n        }\n    "
                }}
            />
            <style
                id="wp-block-navigation-link-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-block-navigation .wp-block-navigation-item__label {\n            overflow-wrap: break-word\n        }\n\n        .wp-block-navigation .wp-block-navigation-item__description {\n            display: none\n        }\n\n        .link-ui-tools {\n            border-top: 1px solid #f0f0f0;\n            padding: 8px\n        }\n\n        .link-ui-block-inserter {\n            padding-top: 8px\n        }\n\n        .link-ui-block-inserter__back {\n            margin-left: 8px;\n            text-transform: uppercase\n        }\n    "
                }}
            />
            <link
                rel="stylesheet"
                id="wp-block-navigation-css"
                href="https://gtltowers.in/wp-includes/blocks/navigation/style.min.css?ver=6.8.2"
                media="all"
            />
            <style
                id="wp-block-site-tagline-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-block-site-tagline {\n            box-sizing: border-box\n        }\n    "
                }}
            />
            <style
                id="wp-block-template-part-theme-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        :root :where(.wp-block-template-part.has-background) {\n            margin-bottom: 0;\n            margin-top: 0;\n            padding: 1.25em 2.375em\n        }\n    "
                }}
            />
            <style
                id="wp-block-heading-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        h1.has-background,\n        h2.has-background,\n        h3.has-background,\n        h4.has-background,\n        h5.has-background,\n        h6.has-background {\n            padding: 1.25em 2.375em\n        }\n\n        h1.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),\n        h1.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),\n        h2.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),\n        h2.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),\n        h3.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),\n        h3.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),\n        h4.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),\n        h4.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),\n        h5.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),\n        h5.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]),\n        h6.has-text-align-left[style*=writing-mode]:where([style*=vertical-lr]),\n        h6.has-text-align-right[style*=writing-mode]:where([style*=vertical-rl]) {\n            rotate: 180deg\n        }\n    "
                }}
            />
            <style
                id="wp-block-paragraph-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        '\n        .is-small-text {\n            font-size: .875em\n        }\n\n        .is-regular-text {\n            font-size: 1em\n        }\n\n        .is-large-text {\n            font-size: 2.25em\n        }\n\n        .is-larger-text {\n            font-size: 3em\n        }\n\n        .has-drop-cap:not(:focus):first-letter {\n            float: left;\n            font-size: 8.4em;\n            font-style: normal;\n            font-weight: 100;\n            line-height: .68;\n            margin: .05em .1em 0 0;\n            text-transform: uppercase\n        }\n\n        body.rtl .has-drop-cap:not(:focus):first-letter {\n            float: none;\n            margin-left: .1em\n        }\n\n        p.has-drop-cap.has-background {\n            overflow: hidden\n        }\n\n        :root :where(p.has-background) {\n            padding: 1.25em 2.375em\n        }\n\n        :where(p.has-text-color:not(.has-link-color)) a {\n            color: inherit\n        }\n\n        p.has-text-align-left[style*="writing-mode:vertical-lr"],\n        p.has-text-align-right[style*="writing-mode:vertical-rl"] {\n            rotate: 180deg\n        }\n    '
                }}
            />
            <style
                id="wp-block-image-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        '\n        .wp-block-image>a,\n        .wp-block-image>figure>a {\n            display: inline-block\n        }\n\n        .wp-block-image img {\n            box-sizing: border-box;\n            height: auto;\n            max-width: 100%;\n            vertical-align: bottom\n        }\n\n        @media not (prefers-reduced-motion) {\n            .wp-block-image img.hide {\n                visibility: hidden\n            }\n\n            .wp-block-image img.show {\n                animation: show-content-image .4s\n            }\n        }\n\n        .wp-block-image[style*=border-radius] img,\n        .wp-block-image[style*=border-radius]>a {\n            border-radius: inherit\n        }\n\n        .wp-block-image.has-custom-border img {\n            box-sizing: border-box\n        }\n\n        .wp-block-image.aligncenter {\n            text-align: center\n        }\n\n        .wp-block-image.alignfull>a,\n        .wp-block-image.alignwide>a {\n            width: 100%\n        }\n\n        .wp-block-image.alignfull img,\n        .wp-block-image.alignwide img {\n            height: auto;\n            width: 100%\n        }\n\n        .wp-block-image .aligncenter,\n        .wp-block-image .alignleft,\n        .wp-block-image .alignright,\n        .wp-block-image.aligncenter,\n        .wp-block-image.alignleft,\n        .wp-block-image.alignright {\n            display: table\n        }\n\n        .wp-block-image .aligncenter>figcaption,\n        .wp-block-image .alignleft>figcaption,\n        .wp-block-image .alignright>figcaption,\n        .wp-block-image.aligncenter>figcaption,\n        .wp-block-image.alignleft>figcaption,\n        .wp-block-image.alignright>figcaption {\n            caption-side: bottom;\n            display: table-caption\n        }\n\n        .wp-block-image .alignleft {\n            float: left;\n            margin: .5em 1em .5em 0\n        }\n\n        .wp-block-image .alignright {\n            float: right;\n            margin: .5em 0 .5em 1em\n        }\n\n        .wp-block-image .aligncenter {\n            margin-left: auto;\n            margin-right: auto\n        }\n\n        .wp-block-image :where(figcaption) {\n            margin-bottom: 1em;\n            margin-top: .5em\n        }\n\n        .wp-block-image.is-style-circle-mask img {\n            border-radius: 9999px\n        }\n\n        @supports ((-webkit-mask-image:none) or (mask-image:none)) or (-webkit-mask-image:none) {\n            .wp-block-image.is-style-circle-mask img {\n                border-radius: 0;\n                -webkit-mask-image: url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>\');\n                mask-image: url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>\');\n                mask-mode: alpha;\n                -webkit-mask-position: center;\n                mask-position: center;\n                -webkit-mask-repeat: no-repeat;\n                mask-repeat: no-repeat;\n                -webkit-mask-size: contain;\n                mask-size: contain\n            }\n        }\n\n        :root :where(.wp-block-image.is-style-rounded img, .wp-block-image .is-style-rounded img) {\n            border-radius: 9999px\n        }\n\n        .wp-block-image figure {\n            margin: 0\n        }\n\n        .wp-lightbox-container {\n            display: flex;\n            flex-direction: column;\n            position: relative\n        }\n\n        .wp-lightbox-container img {\n            cursor: zoom-in\n        }\n\n        .wp-lightbox-container img:hover+button {\n            opacity: 1\n        }\n\n        .wp-lightbox-container button {\n            align-items: center;\n            -webkit-backdrop-filter: blur(16px) saturate(180%);\n            backdrop-filter: blur(16px) saturate(180%);\n            background-color: #5a5a5a40;\n            border: none;\n            border-radius: 4px;\n            cursor: zoom-in;\n            display: flex;\n            height: 20px;\n            justify-content: center;\n            opacity: 0;\n            padding: 0;\n            position: absolute;\n            right: 16px;\n            text-align: center;\n            top: 16px;\n            width: 20px;\n            z-index: 100\n        }\n\n        @media not (prefers-reduced-motion) {\n            .wp-lightbox-container button {\n                transition: opacity .2s ease\n            }\n        }\n\n        .wp-lightbox-container button:focus-visible {\n            outline: 3px auto #5a5a5a40;\n            outline: 3px auto -webkit-focus-ring-color;\n            outline-offset: 3px\n        }\n\n        .wp-lightbox-container button:hover {\n            cursor: pointer;\n            opacity: 1\n        }\n\n        .wp-lightbox-container button:focus {\n            opacity: 1\n        }\n\n        .wp-lightbox-container button:focus,\n        .wp-lightbox-container button:hover,\n        .wp-lightbox-container button:not(:hover):not(:active):not(.has-background) {\n            background-color: #5a5a5a40;\n            border: none\n        }\n\n        .wp-lightbox-overlay {\n            box-sizing: border-box;\n            cursor: zoom-out;\n            height: 100vh;\n            left: 0;\n            overflow: hidden;\n            position: fixed;\n            top: 0;\n            visibility: hidden;\n            width: 100%;\n            z-index: 100000\n        }\n\n        .wp-lightbox-overlay .close-button {\n            align-items: center;\n            cursor: pointer;\n            display: flex;\n            justify-content: center;\n            min-height: 40px;\n            min-width: 40px;\n            padding: 0;\n            position: absolute;\n            right: calc(env(safe-area-inset-right) + 16px);\n            top: calc(env(safe-area-inset-top) + 16px);\n            z-index: 5000000\n        }\n\n        .wp-lightbox-overlay .close-button:focus,\n        .wp-lightbox-overlay .close-button:hover,\n        .wp-lightbox-overlay .close-button:not(:hover):not(:active):not(.has-background) {\n            background: none;\n            border: none\n        }\n\n        .wp-lightbox-overlay .lightbox-image-container {\n            height: var(--wp--lightbox-container-height);\n            left: 50%;\n            overflow: hidden;\n            position: absolute;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            transform-origin: top left;\n            width: var(--wp--lightbox-container-width);\n            z-index: 9999999999\n        }\n\n        .wp-lightbox-overlay .wp-block-image {\n            align-items: center;\n            box-sizing: border-box;\n            display: flex;\n            height: 100%;\n            justify-content: center;\n            margin: 0;\n            position: relative;\n            transform-origin: 0 0;\n            width: 100%;\n            z-index: 3000000\n        }\n\n        .wp-lightbox-overlay .wp-block-image img {\n            height: var(--wp--lightbox-image-height);\n            min-height: var(--wp--lightbox-image-height);\n            min-width: var(--wp--lightbox-image-width);\n            width: var(--wp--lightbox-image-width)\n        }\n\n        .wp-lightbox-overlay .wp-block-image figcaption {\n            display: none\n        }\n\n        .wp-lightbox-overlay button {\n            background: none;\n            border: none\n        }\n\n        .wp-lightbox-overlay .scrim {\n            background-color: #fff;\n            height: 100%;\n            opacity: .9;\n            position: absolute;\n            width: 100%;\n            z-index: 2000000\n        }\n\n        .wp-lightbox-overlay.active {\n            visibility: visible\n        }\n\n        @media not (prefers-reduced-motion) {\n            .wp-lightbox-overlay.active {\n                animation: turn-on-visibility .25s both\n            }\n\n            .wp-lightbox-overlay.active img {\n                animation: turn-on-visibility .35s both\n            }\n\n            .wp-lightbox-overlay.show-closing-animation:not(.active) {\n                animation: turn-off-visibility .35s both\n            }\n\n            .wp-lightbox-overlay.show-closing-animation:not(.active) img {\n                animation: turn-off-visibility .25s both\n            }\n\n            .wp-lightbox-overlay.zoom.active {\n                animation: none;\n                opacity: 1;\n                visibility: visible\n            }\n\n            .wp-lightbox-overlay.zoom.active .lightbox-image-container {\n                animation: lightbox-zoom-in .4s\n            }\n\n            .wp-lightbox-overlay.zoom.active .lightbox-image-container img {\n                animation: none\n            }\n\n            .wp-lightbox-overlay.zoom.active .scrim {\n                animation: turn-on-visibility .4s forwards\n            }\n\n            .wp-lightbox-overlay.zoom.show-closing-animation:not(.active) {\n                animation: none\n            }\n\n            .wp-lightbox-overlay.zoom.show-closing-animation:not(.active) .lightbox-image-container {\n                animation: lightbox-zoom-out .4s\n            }\n\n            .wp-lightbox-overlay.zoom.show-closing-animation:not(.active) .lightbox-image-container img {\n                animation: none\n            }\n\n            .wp-lightbox-overlay.zoom.show-closing-animation:not(.active) .scrim {\n                animation: turn-off-visibility .4s forwards\n            }\n        }\n\n        @keyframes show-content-image {\n            0% {\n                visibility: hidden\n            }\n\n            99% {\n                visibility: hidden\n            }\n\n            to {\n                visibility: visible\n            }\n        }\n\n        @keyframes turn-on-visibility {\n            0% {\n                opacity: 0\n            }\n\n            to {\n                opacity: 1\n            }\n        }\n\n        @keyframes turn-off-visibility {\n            0% {\n                opacity: 1;\n                visibility: visible\n            }\n\n            99% {\n                opacity: 0;\n                visibility: visible\n            }\n\n            to {\n                opacity: 0;\n                visibility: hidden\n            }\n        }\n\n        @keyframes lightbox-zoom-in {\n            0% {\n                transform: translate(calc((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position)), calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale))\n            }\n\n            to {\n                transform: translate(-50%, -50%) scale(1)\n            }\n        }\n\n        @keyframes lightbox-zoom-out {\n            0% {\n                transform: translate(-50%, -50%) scale(1);\n                visibility: visible\n            }\n\n            99% {\n                visibility: visible\n            }\n\n            to {\n                transform: translate(calc((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position)), calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale));\n                visibility: hidden\n            }\n        }\n    '
                }}
            />
            <style
                id="wp-block-image-theme-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        :root :where(.wp-block-image figcaption) {\n            color: #555;\n            font-size: 13px;\n            text-align: center\n        }\n\n        .is-dark-theme :root :where(.wp-block-image figcaption) {\n            color: #ffffffa6\n        }\n\n        .wp-block-image {\n            margin: 0 0 1em\n        }\n    "
                }}
            />
            <style
                id="wp-block-button-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-block-button__link {\n            align-content: center;\n            box-sizing: border-box;\n            cursor: pointer;\n            display: inline-block;\n            height: 100%;\n            text-align: center;\n            word-break: break-word\n        }\n\n        .wp-block-button__link.aligncenter {\n            text-align: center\n        }\n\n        .wp-block-button__link.alignright {\n            text-align: right\n        }\n\n        :where(.wp-block-button__link) {\n            border-radius: 9999px;\n            box-shadow: none;\n            padding: calc(.667em + 2px) calc(1.333em + 2px);\n            text-decoration: none\n        }\n\n        .wp-block-button[style*=text-decoration] .wp-block-button__link {\n            text-decoration: inherit\n        }\n\n        .wp-block-buttons>.wp-block-button.has-custom-width {\n            max-width: none\n        }\n\n        .wp-block-buttons>.wp-block-button.has-custom-width .wp-block-button__link {\n            width: 100%\n        }\n\n        .wp-block-buttons>.wp-block-button.has-custom-font-size .wp-block-button__link {\n            font-size: inherit\n        }\n\n        .wp-block-buttons>.wp-block-button.wp-block-button__width-25 {\n            width: calc(25% - var(--wp--style--block-gap, .5em)*.75)\n        }\n\n        .wp-block-buttons>.wp-block-button.wp-block-button__width-50 {\n            width: calc(50% - var(--wp--style--block-gap, .5em)*.5)\n        }\n\n        .wp-block-buttons>.wp-block-button.wp-block-button__width-75 {\n            width: calc(75% - var(--wp--style--block-gap, .5em)*.25)\n        }\n\n        .wp-block-buttons>.wp-block-button.wp-block-button__width-100 {\n            flex-basis: 100%;\n            width: 100%\n        }\n\n        .wp-block-buttons.is-vertical>.wp-block-button.wp-block-button__width-25 {\n            width: 25%\n        }\n\n        .wp-block-buttons.is-vertical>.wp-block-button.wp-block-button__width-50 {\n            width: 50%\n        }\n\n        .wp-block-buttons.is-vertical>.wp-block-button.wp-block-button__width-75 {\n            width: 75%\n        }\n\n        .wp-block-button.is-style-squared,\n        .wp-block-button__link.wp-block-button.is-style-squared {\n            border-radius: 0\n        }\n\n        .wp-block-button.no-border-radius,\n        .wp-block-button__link.no-border-radius {\n            border-radius: 0 !important\n        }\n\n        :root :where(.wp-block-button .wp-block-button__link.is-style-outline),\n        :root :where(.wp-block-button.is-style-outline>.wp-block-button__link) {\n            border: 2px solid;\n            padding: .667em 1.333em\n        }\n\n        :root :where(.wp-block-button .wp-block-button__link.is-style-outline:not(.has-text-color)),\n        :root :where(.wp-block-button.is-style-outline>.wp-block-button__link:not(.has-text-color)) {\n            color: currentColor\n        }\n\n        :root :where(.wp-block-button .wp-block-button__link.is-style-outline:not(.has-background)),\n        :root :where(.wp-block-button.is-style-outline>.wp-block-button__link:not(.has-background)) {\n            background-color: initial;\n            background-image: none\n        }\n    "
                }}
            />
            <style
                id="wp-block-buttons-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-block-buttons {\n            box-sizing: border-box\n        }\n\n        .wp-block-buttons.is-vertical {\n            flex-direction: column\n        }\n\n        .wp-block-buttons.is-vertical>.wp-block-button:last-child {\n            margin-bottom: 0\n        }\n\n        .wp-block-buttons>.wp-block-button {\n            display: inline-block;\n            margin: 0\n        }\n\n        .wp-block-buttons.is-content-justification-left {\n            justify-content: flex-start\n        }\n\n        .wp-block-buttons.is-content-justification-left.is-vertical {\n            align-items: flex-start\n        }\n\n        .wp-block-buttons.is-content-justification-center {\n            justify-content: center\n        }\n\n        .wp-block-buttons.is-content-justification-center.is-vertical {\n            align-items: center\n        }\n\n        .wp-block-buttons.is-content-justification-right {\n            justify-content: flex-end\n        }\n\n        .wp-block-buttons.is-content-justification-right.is-vertical {\n            align-items: flex-end\n        }\n\n        .wp-block-buttons.is-content-justification-space-between {\n            justify-content: space-between\n        }\n\n        .wp-block-buttons.aligncenter {\n            text-align: center\n        }\n\n        .wp-block-buttons:not(.is-content-justification-space-between, .is-content-justification-right, .is-content-justification-left, .is-content-justification-center) .wp-block-button.aligncenter {\n            margin-left: auto;\n            margin-right: auto;\n            width: 100%\n        }\n\n        .wp-block-buttons[style*=text-decoration] .wp-block-button,\n        .wp-block-buttons[style*=text-decoration] .wp-block-button__link {\n            text-decoration: inherit\n        }\n\n        .wp-block-buttons.has-custom-font-size .wp-block-button__link {\n            font-size: inherit\n        }\n\n        .wp-block-buttons .wp-block-button__link {\n            width: 100%\n        }\n\n        .wp-block-button.aligncenter {\n            text-align: center\n        }\n    "
                }}
            />
            <style
                id="wp-block-columns-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-block-columns {\n            align-items: normal !important;\n            box-sizing: border-box;\n            display: flex;\n            flex-wrap: wrap !important\n        }\n\n        @media (min-width:782px) {\n            .wp-block-columns {\n                flex-wrap: nowrap !important\n            }\n        }\n\n        .wp-block-columns.are-vertically-aligned-top {\n            align-items: flex-start\n        }\n\n        .wp-block-columns.are-vertically-aligned-center {\n            align-items: center\n        }\n\n        .wp-block-columns.are-vertically-aligned-bottom {\n            align-items: flex-end\n        }\n\n        @media (max-width:781px) {\n            .wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column {\n                flex-basis: 100% !important\n            }\n        }\n\n        @media (min-width:782px) {\n            .wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column {\n                flex-basis: 0;\n                flex-grow: 1\n            }\n\n            .wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column[style*=flex-basis] {\n                flex-grow: 0\n            }\n        }\n\n        .wp-block-columns.is-not-stacked-on-mobile {\n            flex-wrap: nowrap !important\n        }\n\n        .wp-block-columns.is-not-stacked-on-mobile>.wp-block-column {\n            flex-basis: 0;\n            flex-grow: 1\n        }\n\n        .wp-block-columns.is-not-stacked-on-mobile>.wp-block-column[style*=flex-basis] {\n            flex-grow: 0\n        }\n\n        :where(.wp-block-columns) {\n            margin-bottom: 1.75em\n        }\n\n        :where(.wp-block-columns.has-background) {\n            padding: 1.25em 2.375em\n        }\n\n        .wp-block-column {\n            flex-grow: 1;\n            min-width: 0;\n            overflow-wrap: break-word;\n            word-break: break-word\n        }\n\n        .wp-block-column.is-vertically-aligned-top {\n            align-self: flex-start\n        }\n\n        .wp-block-column.is-vertically-aligned-center {\n            align-self: center\n        }\n\n        .wp-block-column.is-vertically-aligned-bottom {\n            align-self: flex-end\n        }\n\n        .wp-block-column.is-vertically-aligned-stretch {\n            align-self: stretch\n        }\n\n        .wp-block-column.is-vertically-aligned-bottom,\n        .wp-block-column.is-vertically-aligned-center,\n        .wp-block-column.is-vertically-aligned-top {\n            width: 100%\n        }\n    "
                }}
            />
            <style
                id="wp-block-post-content-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-block-post-content {\n            display: flow-root\n        }\n    "
                }}
            />
            <style
                id="wp-block-spacer-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-block-spacer {\n            clear: both\n        }\n    "
                }}
            />
            <link
                rel="stylesheet"
                id="hfe-widgets-style-css"
                href="https://gtltowers.in/wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend.css?ver=2.4.9"
                media="all"
            />
            <style
                id="wp-emoji-styles-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        img.wp-smiley,\n        img.emoji {\n            display: inline !important;\n            border: none !important;\n            box-shadow: none !important;\n            height: 1em !important;\n            width: 1em !important;\n            margin: 0 0.07em !important;\n            vertical-align: -0.1em !important;\n            background: none !important;\n            padding: 0 !important;\n        }\n    "
                }}
            />
            <style
                id="wp-block-library-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        '\n        :root {\n            --wp-admin-theme-color: #007cba;\n            --wp-admin-theme-color--rgb: 0, 124, 186;\n            --wp-admin-theme-color-darker-10: #006ba1;\n            --wp-admin-theme-color-darker-10--rgb: 0, 107, 161;\n            --wp-admin-theme-color-darker-20: #005a87;\n            --wp-admin-theme-color-darker-20--rgb: 0, 90, 135;\n            --wp-admin-border-width-focus: 2px;\n            --wp-block-synced-color: #7a00df;\n            --wp-block-synced-color--rgb: 122, 0, 223;\n            --wp-bound-block-color: var(--wp-block-synced-color)\n        }\n\n        @media (min-resolution:192dpi) {\n            :root {\n                --wp-admin-border-width-focus: 1.5px\n            }\n        }\n\n        .wp-element-button {\n            cursor: pointer\n        }\n\n        :root {\n            --wp--preset--font-size--normal: 16px;\n            --wp--preset--font-size--huge: 42px\n        }\n\n        :root .has-very-light-gray-background-color {\n            background-color: #eee\n        }\n\n        :root .has-very-dark-gray-background-color {\n            background-color: #313131\n        }\n\n        :root .has-very-light-gray-color {\n            color: #eee\n        }\n\n        :root .has-very-dark-gray-color {\n            color: #313131\n        }\n\n        :root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background {\n            background: linear-gradient(135deg, #00d084, #0693e3)\n        }\n\n        :root .has-purple-crush-gradient-background {\n            background: linear-gradient(135deg, #34e2e4, #4721fb 50%, #ab1dfe)\n        }\n\n        :root .has-hazy-dawn-gradient-background {\n            background: linear-gradient(135deg, #faaca8, #dad0ec)\n        }\n\n        :root .has-subdued-olive-gradient-background {\n            background: linear-gradient(135deg, #fafae1, #67a671)\n        }\n\n        :root .has-atomic-cream-gradient-background {\n            background: linear-gradient(135deg, #fdd79a, #004a59)\n        }\n\n        :root .has-nightshade-gradient-background {\n            background: linear-gradient(135deg, #330968, #31cdcf)\n        }\n\n        :root .has-midnight-gradient-background {\n            background: linear-gradient(135deg, #020381, #2874fc)\n        }\n\n        .has-regular-font-size {\n            font-size: 1em\n        }\n\n        .has-larger-font-size {\n            font-size: 2.625em\n        }\n\n        .has-normal-font-size {\n            font-size: var(--wp--preset--font-size--normal)\n        }\n\n        .has-huge-font-size {\n            font-size: var(--wp--preset--font-size--huge)\n        }\n\n        .has-text-align-center {\n            text-align: center\n        }\n\n        .has-text-align-left {\n            text-align: left\n        }\n\n        .has-text-align-right {\n            text-align: right\n        }\n\n        #end-resizable-editor-section {\n            display: none\n        }\n\n        .aligncenter {\n            clear: both\n        }\n\n        .items-justified-left {\n            justify-content: flex-start\n        }\n\n        .items-justified-center {\n            justify-content: center\n        }\n\n        .items-justified-right {\n            justify-content: flex-end\n        }\n\n        .items-justified-space-between {\n            justify-content: space-between\n        }\n\n        .screen-reader-text {\n            border: 0;\n            clip-path: inset(50%);\n            height: 1px;\n            margin: -1px;\n            overflow: hidden;\n            padding: 0;\n            position: absolute;\n            width: 1px;\n            word-wrap: normal !important\n        }\n\n        .screen-reader-text:focus {\n            background-color: #ddd;\n            clip-path: none;\n            color: #444;\n            display: block;\n            font-size: 1em;\n            height: auto;\n            left: 5px;\n            line-height: normal;\n            padding: 15px 23px 14px;\n            text-decoration: none;\n            top: 5px;\n            width: auto;\n            z-index: 100000\n        }\n\n        html :where(.has-border-color) {\n            border-style: solid\n        }\n\n        html :where([style*=border-top-color]) {\n            border-top-style: solid\n        }\n\n        html :where([style*=border-right-color]) {\n            border-right-style: solid\n        }\n\n        html :where([style*=border-bottom-color]) {\n            border-bottom-style: solid\n        }\n\n        html :where([style*=border-left-color]) {\n            border-left-style: solid\n        }\n\n        html :where([style*=border-width]) {\n            border-style: solid\n        }\n\n        html :where([style*=border-top-width]) {\n            border-top-style: solid\n        }\n\n        html :where([style*=border-right-width]) {\n            border-right-style: solid\n        }\n\n        html :where([style*=border-bottom-width]) {\n            border-bottom-style: solid\n        }\n\n        html :where([style*=border-left-width]) {\n            border-left-style: solid\n        }\n\n        html :where(img[class*=wp-image-]) {\n            height: auto;\n            max-width: 100%\n        }\n\n        :where(figure) {\n            margin: 0 0 1em\n        }\n\n        html :where(.is-position-sticky) {\n            --wp-admin--admin-bar--position-offset: var(--wp-admin--admin-bar--height, 0px)\n        }\n\n        @media screen and (max-width:600px) {\n            html :where(.is-position-sticky) {\n                --wp-admin--admin-bar--position-offset: 0px\n            }\n        }\n\n        .wp-block-site-logo img[src*=\'extendify-demo-\'] {\n            filter: url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><filter id="solid-color"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values="0 0 0 0 0.13725490196078 0 0 0 0 0.46274509803922 0 0 0 0 0.27843137254902 0 0 0 1 0"/></filter></svg>#solid-color\') !important;\n        }\n    '
                }}
            />
            <style
                id="global-styles-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        '\n        :root {\n            --wp--preset--aspect-ratio--square: 1;\n            --wp--preset--aspect-ratio--4-3: 4/3;\n            --wp--preset--aspect-ratio--3-4: 3/4;\n            --wp--preset--aspect-ratio--3-2: 3/2;\n            --wp--preset--aspect-ratio--2-3: 2/3;\n            --wp--preset--aspect-ratio--16-9: 16/9;\n            --wp--preset--aspect-ratio--9-16: 9/16;\n            --wp--preset--color--black: #000000;\n            --wp--preset--color--cyan-bluish-gray: #abb8c3;\n            --wp--preset--color--white: #ffffff;\n            --wp--preset--color--pale-pink: #f78da7;\n            --wp--preset--color--vivid-red: #cf2e2e;\n            --wp--preset--color--luminous-vivid-orange: #ff6900;\n            --wp--preset--color--luminous-vivid-amber: #fcb900;\n            --wp--preset--color--light-green-cyan: #7bdcb5;\n            --wp--preset--color--vivid-green-cyan: #00d084;\n            --wp--preset--color--pale-cyan-blue: #8ed1fc;\n            --wp--preset--color--vivid-cyan-blue: #0693e3;\n            --wp--preset--color--vivid-purple: #9b51e0;\n            --wp--preset--color--foreground: #010101;\n            --wp--preset--color--background: #fbfbfb;\n            --wp--preset--color--primary: #174c2f;\n            --wp--preset--color--secondary: #ffd800;\n            --wp--preset--color--tertiary: #A8E1FF;\n            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);\n            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);\n            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);\n            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);\n            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);\n            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);\n            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);\n            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);\n            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);\n            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);\n            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);\n            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);\n            --wp--preset--gradient--vertical-secondary-to-tertiary: linear-gradient(to bottom, var(--wp--preset--color--secondary) 0%, var(--wp--preset--color--tertiary) 100%);\n            --wp--preset--gradient--vertical-secondary-to-background: linear-gradient(to bottom, var(--wp--preset--color--secondary) 0%, var(--wp--preset--color--background) 100%);\n            --wp--preset--gradient--vertical-tertiary-to-background: linear-gradient(to bottom, var(--wp--preset--color--tertiary) 0%, var(--wp--preset--color--background) 100%);\n            --wp--preset--gradient--diagonal-primary-to-foreground: linear-gradient(to bottom right, var(--wp--preset--color--primary) 0%, var(--wp--preset--color--foreground) 100%);\n            --wp--preset--gradient--diagonal-secondary-to-background: linear-gradient(to bottom right, var(--wp--preset--color--secondary) 50%, var(--wp--preset--color--background) 50%);\n            --wp--preset--gradient--diagonal-background-to-secondary: linear-gradient(to bottom right, var(--wp--preset--color--background) 50%, var(--wp--preset--color--secondary) 50%);\n            --wp--preset--gradient--diagonal-tertiary-to-background: linear-gradient(to bottom right, var(--wp--preset--color--tertiary) 50%, var(--wp--preset--color--background) 50%);\n            --wp--preset--gradient--diagonal-background-to-tertiary: linear-gradient(to bottom right, var(--wp--preset--color--background) 50%, var(--wp--preset--color--tertiary) 50%);\n            --wp--preset--font-size--small: 1rem;\n            --wp--preset--font-size--medium: 1.25rem;\n            --wp--preset--font-size--large: clamp(1.39rem, 1.39rem + ((1vw - 0.2rem) * 1.433), 2.25rem);\n            --wp--preset--font-size--x-large: clamp(1.85rem, 1.85rem + ((1vw - 0.2rem) * 1.917), 3rem);\n            --wp--preset--font-size--xx-large: clamp(2.25rem, 2.25rem + ((1vw - 0.2rem) * 2.5), 3.75rem);\n            --wp--preset--font-family--archivo: "Archivo", sans-serif;\n            --wp--preset--font-family--arsenal: "Arsenal", serif;\n            --wp--preset--font-family--baloo-tamma-2: "Baloo Tamma 2", sans-serif;\n            --wp--preset--font-family--geom: "Geom", sans-serif;\n            --wp--preset--font-family--gotu: "Gotu", sans-serif;\n            --wp--preset--font-family--heebo: "Heebo", sans-serif;\n            --wp--preset--font-family--body: "Hind", sans-serif;\n            --wp--preset--font-family--ibm-plex-sans: \'IBM Plex Sans\', sans-serif;\n            --wp--preset--font-family--inconsolata: "Inconsolata", sans-serif;\n            --wp--preset--font-family--inter: "Inter", sans-serif;\n            --wp--preset--font-family--jost: "Jost", sans-serif;\n            --wp--preset--font-family--karla: "Karla", sans-serif;\n            --wp--preset--font-family--koulen: "Koulen", sans-serif;\n            --wp--preset--font-family--manrope: "Manrope", sans-serif;\n            --wp--preset--font-family--marcellus: \'Marcellus\', serif;\n            --wp--preset--font-family--montserrat: "Montserrat", sans-serif;\n            --wp--preset--font-family--mulish: "Mulish", sans-serif;\n            --wp--preset--font-family--noto-serif-display: "Noto Serif Display", serif;\n            --wp--preset--font-family--oswald: "Oswald", sans-serif;\n            --wp--preset--font-family--radio-canada: "Radio Canada", sans-serif;\n            --wp--preset--font-family--roboto-flex: "Roboto Flex", sans-serif;\n            --wp--preset--font-family--rubik: "Rubik", sans-serif;\n            --wp--preset--font-family--source-serif-pro: "Source Serif Pro", serif;\n            --wp--preset--font-family--space-mono: "Space Mono", monospace;\n            --wp--preset--font-family--lato: Lato;\n            --wp--preset--spacing--20: 1rem;\n            --wp--preset--spacing--30: min(2rem, 5vw);\n            --wp--preset--spacing--40: min(3rem, 6vw);\n            --wp--preset--spacing--50: min(4rem, 7vw);\n            --wp--preset--spacing--60: min(6rem, 8vw);\n            --wp--preset--spacing--70: min(7rem, 10vw);\n            --wp--preset--spacing--80: min(8rem, 12vw);\n            --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);\n            --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);\n            --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);\n            --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);\n            --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);\n            --wp--custom--blocks--core-table--variant-stripes--color--background: var(--wp--preset--color--tertiary);\n            --wp--custom--typography--font-smoothing--moz: auto;\n            --wp--custom--typography--font-smoothing--webkit: auto;\n            --wp--custom--typography--font-weight--black: 900;\n            --wp--custom--typography--font-weight--extra-bold: 800;\n            --wp--custom--typography--font-weight--bold: 700;\n            --wp--custom--typography--font-weight--semi-bold: 600;\n            --wp--custom--typography--font-weight--medium: 500;\n            --wp--custom--typography--font-weight--regular: 400;\n            --wp--custom--typography--font-weight--light: 300;\n            --wp--custom--typography--font-weight--extra-light: 200;\n            --wp--custom--typography--font-weight--thin: 100;\n            --wp--custom--typography--line-height--tiny: 1.15;\n            --wp--custom--typography--line-height--small: 1.2;\n            --wp--custom--typography--line-height--medium: 1.4;\n            --wp--custom--typography--line-height--normal: 1.6;\n            --wp--custom--typography--line-height--large: 1.8;\n            --wp--custom--elements--button--border--radius: 2rem;\n            --wp--custom--elements--button--color--background: var(--wp--preset--color--secondary);\n            --wp--custom--elements--button--color--text: var(--wp--preset--color--foreground);\n            --wp--custom--elements--button--hover--color--background: var(--wp--preset--color--primary);\n            --wp--custom--elements--button--hover--color--text: var(--wp--preset--color--background);\n            --wp--custom--elements--button--focus--color--background: var(--wp--preset--color--secondary);\n            --wp--custom--elements--button--focus--color--text: var(--wp--preset--color--foreground);\n            --wp--custom--elements--input--border--radius: 4px;\n            --wp--custom--elements--input--border--width: 1px;\n            --wp--custom--elements--input--border--color: var(--wp--preset--color--foreground);\n            --wp--custom--elements--input--color--background: var(--wp--preset--color--background);\n            --wp--custom--elements--input--color--text: var(--wp--preset--color--foreground);\n            --wp--custom--elements--input--spacing--padding--bottom: calc(0.667em + 1px);\n            --wp--custom--elements--input--spacing--padding--left: calc(1.333em + 1px);\n            --wp--custom--elements--input--spacing--padding--right: calc(1.333em + 1px);\n            --wp--custom--elements--input--spacing--padding--top: calc(0.667em + 1px);\n            --wp--custom--elements--input--typography--font-size: 1.15rem;\n            --wp--custom--elements--input--typography--font-weight: var(--wp--custom--font-weight--regular);\n            --wp--custom--elements--input--typography--line-height: 1.384;\n        }\n\n        :root {\n            --wp--style--global--content-size: 42rem;\n            --wp--style--global--wide-size: 80rem;\n        }\n\n        :where(body) {\n            margin: 0;\n        }\n\n        .wp-site-blocks {\n            padding-top: var(--wp--style--root--padding-top);\n            padding-bottom: var(--wp--style--root--padding-bottom);\n        }\n\n        .has-global-padding {\n            padding-right: var(--wp--style--root--padding-right);\n            padding-left: var(--wp--style--root--padding-left);\n        }\n\n        .has-global-padding>.alignfull {\n            margin-right: calc(var(--wp--style--root--padding-right) * -1);\n            margin-left: calc(var(--wp--style--root--padding-left) * -1);\n        }\n\n        .has-global-padding :where(:not(.alignfull.is-layout-flow) > .has-global-padding:not(.wp-block-block, .alignfull)) {\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        .has-global-padding :where(:not(.alignfull.is-layout-flow) > .has-global-padding:not(.wp-block-block, .alignfull))>.alignfull {\n            margin-left: 0;\n            margin-right: 0;\n        }\n\n        .wp-site-blocks>.alignleft {\n            float: left;\n            margin-right: 2em;\n        }\n\n        .wp-site-blocks>.alignright {\n            float: right;\n            margin-left: 2em;\n        }\n\n        .wp-site-blocks>.aligncenter {\n            justify-content: center;\n            margin-left: auto;\n            margin-right: auto;\n        }\n\n        :where(.wp-site-blocks)>* {\n            margin-block-start: var(--wp--preset--spacing--30);\n            margin-block-end: 0;\n        }\n\n        :where(.wp-site-blocks)> :first-child {\n            margin-block-start: 0;\n        }\n\n        :where(.wp-site-blocks)> :last-child {\n            margin-block-end: 0;\n        }\n\n        :root {\n            --wp--style--block-gap: var(--wp--preset--spacing--30);\n        }\n\n        :root :where(.is-layout-flow)> :first-child {\n            margin-block-start: 0;\n        }\n\n        :root :where(.is-layout-flow)> :last-child {\n            margin-block-end: 0;\n        }\n\n        :root :where(.is-layout-flow)>* {\n            margin-block-start: var(--wp--preset--spacing--30);\n            margin-block-end: 0;\n        }\n\n        :root :where(.is-layout-constrained)> :first-child {\n            margin-block-start: 0;\n        }\n\n        :root :where(.is-layout-constrained)> :last-child {\n            margin-block-end: 0;\n        }\n\n        :root :where(.is-layout-constrained)>* {\n            margin-block-start: var(--wp--preset--spacing--30);\n            margin-block-end: 0;\n        }\n\n        :root :where(.is-layout-flex) {\n            gap: var(--wp--preset--spacing--30);\n        }\n\n        :root :where(.is-layout-grid) {\n            gap: var(--wp--preset--spacing--30);\n        }\n\n        .is-layout-flow>.alignleft {\n            float: left;\n            margin-inline-start: 0;\n            margin-inline-end: 2em;\n        }\n\n        .is-layout-flow>.alignright {\n            float: right;\n            margin-inline-start: 2em;\n            margin-inline-end: 0;\n        }\n\n        .is-layout-flow>.aligncenter {\n            margin-left: auto !important;\n            margin-right: auto !important;\n        }\n\n        .is-layout-constrained>.alignleft {\n            float: left;\n            margin-inline-start: 0;\n            margin-inline-end: 2em;\n        }\n\n        .is-layout-constrained>.alignright {\n            float: right;\n            margin-inline-start: 2em;\n            margin-inline-end: 0;\n        }\n\n        .is-layout-constrained>.aligncenter {\n            margin-left: auto !important;\n            margin-right: auto !important;\n        }\n\n        .is-layout-constrained> :where(:not(.alignleft):not(.alignright):not(.alignfull)) {\n            max-width: var(--wp--style--global--content-size);\n            margin-left: auto !important;\n            margin-right: auto !important;\n        }\n\n        .is-layout-constrained>.alignwide {\n            max-width: var(--wp--style--global--wide-size);\n        }\n\n        body .is-layout-flex {\n            display: flex;\n        }\n\n        .is-layout-flex {\n            flex-wrap: wrap;\n            align-items: center;\n        }\n\n        .is-layout-flex> :is(*, div) {\n            margin: 0;\n        }\n\n        body .is-layout-grid {\n            display: grid;\n        }\n\n        .is-layout-grid> :is(*, div) {\n            margin: 0;\n        }\n\n        body {\n            background-color: var(--wp--preset--color--background);\n            color: var(--wp--preset--color--foreground);\n            font-family: var(--wp--preset--font-family--lato);\n            font-size: clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 0.417), 1.125rem);\n            font-weight: 400;\n            line-height: var(--wp--custom--typography--line-height--normal);\n            --wp--style--root--padding-top: 0;\n            --wp--style--root--padding-right: var(--wp--preset--spacing--30);\n            --wp--style--root--padding-bottom: 0;\n            --wp--style--root--padding-left: var(--wp--preset--spacing--30);\n        }\n\n        a:where(:not(.wp-element-button)) {\n            color: var(--wp--preset--color--foreground);\n            text-decoration: underline;\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n            font-family: var(--wp--preset--font-family--montserrat);\n        }\n\n        h1 {\n            font-size: var(--wp--preset--font-size--xx-large);\n            font-weight: var(--wp--custom--typography--font-weight--regular);\n            letter-spacing: -0.02em;\n            line-height: var(--wp--custom--typography--line-height--tiny);\n        }\n\n        h2 {\n            font-size: var(--wp--preset--font-size--x-large);\n            font-weight: var(--wp--custom--typography--font-weight--regular);\n            letter-spacing: -0.02em;\n            line-height: var(--wp--custom--typography--line-height--tiny);\n        }\n\n        h3 {\n            font-size: var(--wp--preset--font-size--large);\n            font-weight: var(--wp--custom--typography--font-weight--regular);\n            letter-spacing: -0.02em;\n            line-height: var(--wp--custom--typography--line-height--tiny);\n        }\n\n        h4 {\n            font-size: clamp(1.5rem, 1.5rem + ((1vw - 0.48rem) * 0.721), 1.875rem);\n            font-weight: var(--wp--custom--typography--font-weight--regular);\n            line-height: var(--wp--custom--typography--line-height--tiny);\n        }\n\n        h5 {\n            font-size: clamp(1.25rem, 1.25rem + ((1vw - 0.48rem) * 0.721), 1.5rem);\n            font-weight: var(--wp--custom--typography--font-weight--regular);\n            line-height: var(--wp--custom--typography--line-height--normal);\n            text-transform: uppercase;\n        }\n\n        h6 {\n            font-size: clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 0.417), 1.125rem);\n            font-weight: var(--wp--custom--typography--font-weight--regular);\n            letter-spacing: 0.03em;\n            line-height: var(--wp--custom--typography--line-height--normal);\n            text-transform: uppercase;\n        }\n\n        :root :where(.wp-element-button, .wp-block-button__link) {\n            background-color: var(--wp--custom--elements--button--color--background);\n            border-radius: var(--wp--custom--elements--button--border--radius);\n            border-width: 0;\n            color: var(--wp--custom--elements--button--color--text);\n            font-family: inherit;\n            font-size: inherit;\n            font-weight: var(--wp--custom--typography--font-weight--medium);\n            line-height: inherit;\n            padding: calc(0.667em + 2px) calc(1.333em + 2px);\n            text-decoration: none;\n        }\n\n        :root :where(.wp-element-button:hover, .wp-block-button__link:hover) {\n            background-color: var(--wp--custom--elements--button--hover--color--background);\n            color: var(--wp--custom--elements--button--hover--color--text);\n        }\n\n        :root :where(.wp-element-button:focus, .wp-block-button__link:focus) {\n            background-color: var(--wp--custom--elements--button--focus--color--background);\n            color: var(--wp--custom--elements--button--focus--color--text);\n            outline-color: var(--wp--custom--elements--button--focus--color--background);\n            outline-offset: 2px;\n        }\n\n        :root :where(.wp-element-button:active, .wp-block-button__link:active) {\n            background-color: var(--wp--custom--elements--button--hover--color--background);\n            color: var(--wp--custom--elements--button--hover--color--text);\n        }\n\n        .has-black-color {\n            color: var(--wp--preset--color--black) !important;\n        }\n\n        .has-cyan-bluish-gray-color {\n            color: var(--wp--preset--color--cyan-bluish-gray) !important;\n        }\n\n        .has-white-color {\n            color: var(--wp--preset--color--white) !important;\n        }\n\n        .has-pale-pink-color {\n            color: var(--wp--preset--color--pale-pink) !important;\n        }\n\n        .has-vivid-red-color {\n            color: var(--wp--preset--color--vivid-red) !important;\n        }\n\n        .has-luminous-vivid-orange-color {\n            color: var(--wp--preset--color--luminous-vivid-orange) !important;\n        }\n\n        .has-luminous-vivid-amber-color {\n            color: var(--wp--preset--color--luminous-vivid-amber) !important;\n        }\n\n        .has-light-green-cyan-color {\n            color: var(--wp--preset--color--light-green-cyan) !important;\n        }\n\n        .has-vivid-green-cyan-color {\n            color: var(--wp--preset--color--vivid-green-cyan) !important;\n        }\n\n        .has-pale-cyan-blue-color {\n            color: var(--wp--preset--color--pale-cyan-blue) !important;\n        }\n\n        .has-vivid-cyan-blue-color {\n            color: var(--wp--preset--color--vivid-cyan-blue) !important;\n        }\n\n        .has-vivid-purple-color {\n            color: var(--wp--preset--color--vivid-purple) !important;\n        }\n\n        .has-foreground-color {\n            color: var(--wp--preset--color--foreground) !important;\n        }\n\n        .has-background-color {\n            color: var(--wp--preset--color--background) !important;\n        }\n\n        .has-primary-color {\n            color: var(--wp--preset--color--primary) !important;\n        }\n\n        .has-secondary-color {\n            color: var(--wp--preset--color--secondary) !important;\n        }\n\n        .has-tertiary-color {\n            color: var(--wp--preset--color--tertiary) !important;\n        }\n\n        .has-black-background-color {\n            background-color: var(--wp--preset--color--black) !important;\n        }\n\n        .has-cyan-bluish-gray-background-color {\n            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;\n        }\n\n        .has-white-background-color {\n            background-color: var(--wp--preset--color--white) !important;\n        }\n\n        .has-pale-pink-background-color {\n            background-color: var(--wp--preset--color--pale-pink) !important;\n        }\n\n        .has-vivid-red-background-color {\n            background-color: var(--wp--preset--color--vivid-red) !important;\n        }\n\n        .has-luminous-vivid-orange-background-color {\n            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;\n        }\n\n        .has-luminous-vivid-amber-background-color {\n            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;\n        }\n\n        .has-light-green-cyan-background-color {\n            background-color: var(--wp--preset--color--light-green-cyan) !important;\n        }\n\n        .has-vivid-green-cyan-background-color {\n            background-color: var(--wp--preset--color--vivid-green-cyan) !important;\n        }\n\n        .has-pale-cyan-blue-background-color {\n            background-color: var(--wp--preset--color--pale-cyan-blue) !important;\n        }\n\n        .has-vivid-cyan-blue-background-color {\n            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;\n        }\n\n        .has-vivid-purple-background-color {\n            background-color: var(--wp--preset--color--vivid-purple) !important;\n        }\n\n        .has-foreground-background-color {\n            background-color: var(--wp--preset--color--foreground) !important;\n        }\n\n        .has-background-background-color {\n            background-color: var(--wp--preset--color--background) !important;\n        }\n\n        .has-primary-background-color {\n            background-color: var(--wp--preset--color--primary) !important;\n        }\n\n        .has-secondary-background-color {\n            background-color: var(--wp--preset--color--secondary) !important;\n        }\n\n        .has-tertiary-background-color {\n            background-color: var(--wp--preset--color--tertiary) !important;\n        }\n\n        .has-black-border-color {\n            border-color: var(--wp--preset--color--black) !important;\n        }\n\n        .has-cyan-bluish-gray-border-color {\n            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;\n        }\n\n        .has-white-border-color {\n            border-color: var(--wp--preset--color--white) !important;\n        }\n\n        .has-pale-pink-border-color {\n            border-color: var(--wp--preset--color--pale-pink) !important;\n        }\n\n        .has-vivid-red-border-color {\n            border-color: var(--wp--preset--color--vivid-red) !important;\n        }\n\n        .has-luminous-vivid-orange-border-color {\n            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;\n        }\n\n        .has-luminous-vivid-amber-border-color {\n            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;\n        }\n\n        .has-light-green-cyan-border-color {\n            border-color: var(--wp--preset--color--light-green-cyan) !important;\n        }\n\n        .has-vivid-green-cyan-border-color {\n            border-color: var(--wp--preset--color--vivid-green-cyan) !important;\n        }\n\n        .has-pale-cyan-blue-border-color {\n            border-color: var(--wp--preset--color--pale-cyan-blue) !important;\n        }\n\n        .has-vivid-cyan-blue-border-color {\n            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;\n        }\n\n        .has-vivid-purple-border-color {\n            border-color: var(--wp--preset--color--vivid-purple) !important;\n        }\n\n        .has-foreground-border-color {\n            border-color: var(--wp--preset--color--foreground) !important;\n        }\n\n        .has-background-border-color {\n            border-color: var(--wp--preset--color--background) !important;\n        }\n\n        .has-primary-border-color {\n            border-color: var(--wp--preset--color--primary) !important;\n        }\n\n        .has-secondary-border-color {\n            border-color: var(--wp--preset--color--secondary) !important;\n        }\n\n        .has-tertiary-border-color {\n            border-color: var(--wp--preset--color--tertiary) !important;\n        }\n\n        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {\n            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;\n        }\n\n        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {\n            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;\n        }\n\n        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {\n            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;\n        }\n\n        .has-luminous-vivid-orange-to-vivid-red-gradient-background {\n            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;\n        }\n\n        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {\n            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;\n        }\n\n        .has-cool-to-warm-spectrum-gradient-background {\n            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;\n        }\n\n        .has-blush-light-purple-gradient-background {\n            background: var(--wp--preset--gradient--blush-light-purple) !important;\n        }\n\n        .has-blush-bordeaux-gradient-background {\n            background: var(--wp--preset--gradient--blush-bordeaux) !important;\n        }\n\n        .has-luminous-dusk-gradient-background {\n            background: var(--wp--preset--gradient--luminous-dusk) !important;\n        }\n\n        .has-pale-ocean-gradient-background {\n            background: var(--wp--preset--gradient--pale-ocean) !important;\n        }\n\n        .has-electric-grass-gradient-background {\n            background: var(--wp--preset--gradient--electric-grass) !important;\n        }\n\n        .has-midnight-gradient-background {\n            background: var(--wp--preset--gradient--midnight) !important;\n        }\n\n        .has-vertical-secondary-to-tertiary-gradient-background {\n            background: var(--wp--preset--gradient--vertical-secondary-to-tertiary) !important;\n        }\n\n        .has-vertical-secondary-to-background-gradient-background {\n            background: var(--wp--preset--gradient--vertical-secondary-to-background) !important;\n        }\n\n        .has-vertical-tertiary-to-background-gradient-background {\n            background: var(--wp--preset--gradient--vertical-tertiary-to-background) !important;\n        }\n\n        .has-diagonal-primary-to-foreground-gradient-background {\n            background: var(--wp--preset--gradient--diagonal-primary-to-foreground) !important;\n        }\n\n        .has-diagonal-secondary-to-background-gradient-background {\n            background: var(--wp--preset--gradient--diagonal-secondary-to-background) !important;\n        }\n\n        .has-diagonal-background-to-secondary-gradient-background {\n            background: var(--wp--preset--gradient--diagonal-background-to-secondary) !important;\n        }\n\n        .has-diagonal-tertiary-to-background-gradient-background {\n            background: var(--wp--preset--gradient--diagonal-tertiary-to-background) !important;\n        }\n\n        .has-diagonal-background-to-tertiary-gradient-background {\n            background: var(--wp--preset--gradient--diagonal-background-to-tertiary) !important;\n        }\n\n        .has-small-font-size {\n            font-size: var(--wp--preset--font-size--small) !important;\n        }\n\n        .has-medium-font-size {\n            font-size: var(--wp--preset--font-size--medium) !important;\n        }\n\n        .has-large-font-size {\n            font-size: var(--wp--preset--font-size--large) !important;\n        }\n\n        .has-x-large-font-size {\n            font-size: var(--wp--preset--font-size--x-large) !important;\n        }\n\n        .has-xx-large-font-size {\n            font-size: var(--wp--preset--font-size--xx-large) !important;\n        }\n\n        .has-archivo-font-family {\n            font-family: var(--wp--preset--font-family--archivo) !important;\n        }\n\n        .has-arsenal-font-family {\n            font-family: var(--wp--preset--font-family--arsenal) !important;\n        }\n\n        .has-baloo-tamma-2-font-family {\n            font-family: var(--wp--preset--font-family--baloo-tamma-2) !important;\n        }\n\n        .has-geom-font-family {\n            font-family: var(--wp--preset--font-family--geom) !important;\n        }\n\n        .has-gotu-font-family {\n            font-family: var(--wp--preset--font-family--gotu) !important;\n        }\n\n        .has-heebo-font-family {\n            font-family: var(--wp--preset--font-family--heebo) !important;\n        }\n\n        .has-body-font-family {\n            font-family: var(--wp--preset--font-family--body) !important;\n        }\n\n        .has-ibm-plex-sans-font-family {\n            font-family: var(--wp--preset--font-family--ibm-plex-sans) !important;\n        }\n\n        .has-inconsolata-font-family {\n            font-family: var(--wp--preset--font-family--inconsolata) !important;\n        }\n\n        .has-inter-font-family {\n            font-family: var(--wp--preset--font-family--inter) !important;\n        }\n\n        .has-jost-font-family {\n            font-family: var(--wp--preset--font-family--jost) !important;\n        }\n\n        .has-karla-font-family {\n            font-family: var(--wp--preset--font-family--karla) !important;\n        }\n\n        .has-koulen-font-family {\n            font-family: var(--wp--preset--font-family--koulen) !important;\n        }\n\n        .has-manrope-font-family {\n            font-family: var(--wp--preset--font-family--manrope) !important;\n        }\n\n        .has-marcellus-font-family {\n            font-family: var(--wp--preset--font-family--marcellus) !important;\n        }\n\n        .has-montserrat-font-family {\n            font-family: var(--wp--preset--font-family--montserrat) !important;\n        }\n\n        .has-mulish-font-family {\n            font-family: var(--wp--preset--font-family--mulish) !important;\n        }\n\n        .has-noto-serif-display-font-family {\n            font-family: var(--wp--preset--font-family--noto-serif-display) !important;\n        }\n\n        .has-oswald-font-family {\n            font-family: var(--wp--preset--font-family--oswald) !important;\n        }\n\n        .has-radio-canada-font-family {\n            font-family: var(--wp--preset--font-family--radio-canada) !important;\n        }\n\n        .has-roboto-flex-font-family {\n            font-family: var(--wp--preset--font-family--roboto-flex) !important;\n        }\n\n        .has-rubik-font-family {\n            font-family: var(--wp--preset--font-family--rubik) !important;\n        }\n\n        .has-source-serif-pro-font-family {\n            font-family: var(--wp--preset--font-family--source-serif-pro) !important;\n        }\n\n        .has-space-mono-font-family {\n            font-family: var(--wp--preset--font-family--space-mono) !important;\n        }\n\n        .has-lato-font-family {\n            font-family: var(--wp--preset--font-family--lato) !important;\n        }\n\n        .wp-block-heading {\n            word-wrap: break-word;\n            overflow-wrap: break-word;\n            hyphens: auto;\n        }\n\n        .wp-block-heading:lang(zh),\n        .wp-block-heading:lang(ja),\n        .wp-block-heading:lang(ko),\n        .wp-block-heading:lang(th),\n        .wp-block-heading:lang(lo),\n        .wp-block-heading:lang(my),\n        .wp-block-heading:lang(km),\n        .wp-block-heading:lang(ar),\n        .wp-block-heading:lang(ur) {\n            word-break: keep-all;\n        }\n\n        :root :where(.wp-block-navigation) {\n            font-size: var(--wp--preset--font-size--small);\n        }\n\n        :root :where(.wp-block-site-title) {\n            font-family: var(--wp--preset--font-family--heading);\n            font-size: var(--wp--preset--font-size--large);\n            font-weight: var(--wp--custom--typography--font-weight--medium);\n            letter-spacing: -0.02em;\n            line-height: var(--wp--custom--typography--line-height--tiny);\n        }\n\n        :root :where(.wp-block-template-part) {\n            margin-top: 0px;\n        }\n\n        :root {\n            --wp--preset--duotone--primary-foreground: url(#wp-duotone-primary-foreground);\n        }\n    '
                }}
            />
            <style
                id="core-block-supports-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .wp-container-core-group-is-layout-6c531013 {\n            flex-wrap: nowrap;\n        }\n\n        .wp-container-core-navigation-is-layout-f665d2b5 {\n            justify-content: flex-end;\n        }\n\n        .wp-container-core-group-is-layout-cb46ffcb {\n            flex-wrap: nowrap;\n            justify-content: space-between;\n        }\n\n        .wp-container-core-group-is-layout-8b4c372c> :where(:not(.alignleft):not(.alignright):not(.alignfull)) {\n            margin-left: 0 !important;\n        }\n\n        .wp-container-core-group-is-layout-fe9cc265 {\n            flex-direction: column;\n            align-items: flex-start;\n        }\n\n        .wp-container-core-buttons-is-layout-fc4fd283 {\n            justify-content: flex-start;\n        }\n\n        .wp-container-core-group-is-layout-a35945ca>.alignfull {\n            margin-right: calc(var(--wp--preset--spacing--30) * -1);\n            margin-left: calc(var(--wp--preset--spacing--30) * -1);\n        }\n\n        .wp-container-core-columns-is-layout-a88a3fd8 {\n            flex-wrap: nowrap;\n            gap: var(--wp--preset--spacing--70) var(--wp--preset--spacing--30);\n        }\n\n        .wp-container-core-group-is-layout-7276a2bb>.alignfull {\n            margin-right: calc(var(--wp--preset--spacing--30) * -1);\n            margin-left: calc(var(--wp--preset--spacing--30) * -1);\n        }\n\n        .wp-container-core-group-is-layout-7276a2bb>* {\n            margin-block-start: 0;\n            margin-block-end: 0;\n        }\n\n        .wp-container-core-group-is-layout-7276a2bb>*+* {\n            margin-block-start: var(--wp--preset--spacing--50);\n            margin-block-end: 0;\n        }\n\n        .wp-container-core-columns-is-layout-d0846407 {\n            flex-wrap: nowrap;\n            gap: var(--wp--preset--spacing--50) var(--wp--preset--spacing--30);\n        }\n\n        .wp-container-core-column-is-layout-5dafc681>* {\n            margin-block-start: 0;\n            margin-block-end: 0;\n        }\n\n        .wp-container-core-column-is-layout-5dafc681>*+* {\n            margin-block-start: var(--wp--preset--spacing--50);\n            margin-block-end: 0;\n        }\n\n        .wp-container-core-columns-is-layout-28f84493 {\n            flex-wrap: nowrap;\n        }\n\n        .wp-container-core-buttons-is-layout-27c00227 {\n            gap: 1rem;\n            justify-content: flex-end;\n        }\n\n        .wp-container-core-group-is-layout-9366075c {\n            justify-content: space-between;\n        }\n\n        .wp-elements-14b735de8f4344f6e528f9735b9e744b a:where(:not(.wp-element-button)) {\n            color: var(--wp--preset--color--white);\n        }\n\n        .wp-container-core-navigation-is-layout-34a3ecb2 {\n            flex-wrap: nowrap;\n            gap: 8px;\n            flex-direction: column;\n            align-items: center;\n        }\n\n        .wp-container-core-group-is-layout-0e868306 {\n            gap: 8px;\n            flex-direction: column;\n            align-items: center;\n        }\n\n        .wp-container-core-group-is-layout-c124d1c4 {\n            justify-content: center;\n        }\n\n        .wp-container-core-group-is-layout-48a3dbfb {\n            gap: var(--wp--preset--spacing--30);\n            flex-direction: column;\n            align-items: stretch;\n            justify-content: center;\n        }\n\n        .wp-duotone-primary-foreground.wp-block-image img,\n        .wp-duotone-primary-foreground.wp-block-image .components-placeholder {\n            filter: var(--wp--preset--duotone--primary-foreground);\n        }\n    "
                }}
            />
            <style
                id="wp-block-template-skip-link-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .skip-link.screen-reader-text {\n            border: 0;\n            clip-path: inset(50%);\n            height: 1px;\n            margin: -1px;\n            overflow: hidden;\n            padding: 0;\n            position: absolute !important;\n            width: 1px;\n            word-wrap: normal !important;\n        }\n\n        .skip-link.screen-reader-text:focus {\n            background-color: #eee;\n            clip-path: none;\n            color: #444;\n            display: block;\n            font-size: 1em;\n            height: auto;\n            left: 5px;\n            line-height: normal;\n            padding: 15px 23px 14px;\n            text-decoration: none;\n            top: 5px;\n            width: auto;\n            z-index: 100000;\n        }\n    "
                }}
            />
            <link
                rel="stylesheet"
                id="vform_dev_style-css"
                href="https://gtltowers.in/wp-content/plugins/v-form/assets/css/style.css?ver=3.2.20"
                media="all"
            />
            <link
                rel="stylesheet"
                id="vform_dev_style2-css"
                href="https://gtltowers.in/wp-content/plugins/v-form/assets/css/fontawesome.css?ver=6.8.2"
                media="all"
            />
            <link
                rel="stylesheet"
                id="hfe-style-css"
                href="https://gtltowers.in/wp-content/plugins/header-footer-elementor/assets/css/header-footer-elementor.css?ver=2.4.9"
                media="all"
            />
            <link
                rel="stylesheet"
                id="elementor-frontend-css"
                href="https://gtltowers.in/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.31.3"
                media="all"
            />
            <link
                rel="stylesheet"
                id="elementor-post-99-css"
                href="https://gtltowers.in/wp-content/uploads/elementor/css/post-99.css?ver=1756474727"
                media="all"
            />
            <link
                rel="stylesheet"
                id="extendable-style-css"
                href="https://gtltowers.in/wp-content/themes/extendable/style.css?ver=2.0.17"
                media="all"
            />
            <link
                rel="stylesheet"
                id="chaty-front-css-css"
                href="https://gtltowers.in/wp-content/plugins/chaty/css/chaty-front.min.css?ver=3.4.61753936739"
                media="all"
            />
            <link
                rel="stylesheet"
                id="hfe-elementor-icons-css"
                href="https://gtltowers.in/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.34.0"
                media="all"
            />
            <link
                rel="stylesheet"
                id="hfe-icons-list-css"
                href="https://gtltowers.in/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.24.3"
                media="all"
            />
            <link
                rel="stylesheet"
                id="hfe-social-icons-css"
                href="https://gtltowers.in/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.24.0"
                media="all"
            />
            <link
                rel="stylesheet"
                id="hfe-social-share-icons-brands-css"
                href="https://gtltowers.in/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.css?ver=5.15.3"
                media="all"
            />
            <link
                rel="stylesheet"
                id="hfe-social-share-icons-fontawesome-css"
                href="https://gtltowers.in/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.css?ver=5.15.3"
                media="all"
            />
            <link
                rel="stylesheet"
                id="hfe-nav-menu-icons-css"
                href="https://gtltowers.in/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.css?ver=5.15.3"
                media="all"
            />
            <link
                rel="stylesheet"
                id="call-now-button-modern-style-css"
                href="https://gtltowers.in/wp-content/plugins/call-now-button/resources/style/modern.css?ver=1.5.1"
                media="all"
            />
            <link
                rel="stylesheet"
                id="elementor-gf-local-roboto-css"
                href="http://gtltowers.in/wp-content/uploads/elementor/google-fonts/css/roboto.css?ver=1750849079"
                media="all"
            />
            <link
                rel="stylesheet"
                id="elementor-gf-local-robotoslab-css"
                href="http://gtltowers.in/wp-content/uploads/elementor/google-fonts/css/robotoslab.css?ver=1750849083"
                media="all"
            />
            <link rel="https://api.w.org/" href="https://gtltowers.in/wp-json/" />
            <link
                rel="alternate"
                title="JSON"
                type="application/json"
                href="https://gtltowers.in/wp-json/wp/v2/pages/22"
            />
            <link
                rel="EditURI"
                type="application/rsd+xml"
                title="RSD"
                href="https://gtltowers.in/xmlrpc.php?rsd"
            />
            <meta name="generator" content="WordPress 6.8.2" />
            <link rel="canonical" href="https://gtltowers.in/resources/" />
            <link rel="shortlink" href="https://gtltowers.in/?p=22" />
            <link
                rel="alternate"
                title="oEmbed (JSON)"
                type="application/json+oembed"
                href="https://gtltowers.in/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fgtltowers.in%2Fresources%2F"
            />
            <link
                rel="alternate"
                title="oEmbed (XML)"
                type="text/xml+oembed"
                href="https://gtltowers.in/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fgtltowers.in%2Fresources%2F&format=xml"
            />
            <link
                rel="modulepreload"
                href="https://gtltowers.in/wp-includes/js/dist/script-modules/interactivity/index.min.js?ver=55aebb6e0a16726baffb"
                id="@wordpress/interactivity-js-modulepreload"
            />
            <meta
                name="generator"
                content="Elementor 3.31.3; features: e_font_icon_svg, additional_custom_breakpoints, e_element_cache; settings: css_print_method-external, google_font-enabled, font_display-swap"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),\n        .e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {\n            background-image: none !important;\n        }\n\n        @media screen and (max-height: 1024px) {\n\n            .e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),\n            .e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {\n                background-image: none !important;\n            }\n        }\n\n        @media screen and (max-height: 640px) {\n\n            .e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),\n            .e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {\n                background-image: none !important;\n            }\n        }\n    "
                }}
            />
            <style
                className="wp-fonts-local"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        @font-face {\n            font-family: Archivo;\n            font-style: normal;\n            font-weight: 100 900;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/archivo/archivo_wght.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Arsenal;\n            font-style: normal;\n            font-weight: 400;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/arsenal/arsenal-regular.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Arsenal;\n            font-style: normal;\n            font-weight: 700;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/arsenal/arsenal-bold.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"Baloo Tamma 2\";\n            font-style: normal;\n            font-weight: 400 800;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/baloo-tamma-2/baloo-tamma-2_wght.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Geom;\n            font-style: normal;\n            font-weight: 300 900;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/geom/geom-variable.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Gotu;\n            font-style: normal;\n            font-weight: 400;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/gotu/gotu-regular.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Heebo;\n            font-style: normal;\n            font-weight: 100 900;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/heebo/heebo-variable-wght.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Hind;\n            font-style: normal;\n            font-weight: 100 900;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/hind/hind-variable.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"IBM Plex Sans\";\n            font-style: normal;\n            font-weight: 100;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/ibm-plex-sans/ibm-plex-sans-thin.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"IBM Plex Sans\";\n            font-style: normal;\n            font-weight: 200;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/ibm-plex-sans/ibm-plex-sans-extra-light.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"IBM Plex Sans\";\n            font-style: normal;\n            font-weight: 300;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/ibm-plex-sans/ibm-plex-sans-light.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"IBM Plex Sans\";\n            font-style: normal;\n            font-weight: 400;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/ibm-plex-sans/ibm-plex-sans-regular.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"IBM Plex Sans\";\n            font-style: normal;\n            font-weight: 500;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/ibm-plex-sans/ibm-plex-sans-medium.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"IBM Plex Sans\";\n            font-style: normal;\n            font-weight: 600;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/ibm-plex-sans/ibm-plex-sans-semibold.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"IBM Plex Sans\";\n            font-style: normal;\n            font-weight: 700;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/ibm-plex-sans/ibm-plex-sans-bold.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Inconsolata;\n            font-style: normal;\n            font-weight: 100 900;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/inconsolata/inconsolata-variable.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Inter;\n            font-style: normal;\n            font-weight: 200 900;\n            font-display: fallback;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/inter/inter-variable.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Jost;\n            font-style: normal;\n            font-weight: 100 800;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/jost/jost-variable.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Karla;\n            font-style: normal;\n            font-weight: 100 900;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/karla/karla.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Koulen;\n            font-style: normal;\n            font-weight: 400;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/koulen/Koulen-Regular.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Manrope;\n            font-style: normal;\n            font-weight: 200 800;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/manrope/manrope.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Marcellus;\n            font-style: normal;\n            font-weight: 400;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/marcellus/marcellus_wght.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Montserrat;\n            font-style: normal;\n            font-weight: 100 900;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/montserrat/montserrat.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Mulish;\n            font-style: normal;\n            font-weight: 100 800;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/mulish/mulish.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"Noto Serif Display\";\n            font-style: normal;\n            font-weight: 100 900;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/noto-serif-display/noto-serif-display.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Oswald;\n            font-style: normal;\n            font-weight: 300 700;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/oswald/oswald.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"Radio Canada\";\n            font-style: normal;\n            font-weight: 300 700;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/radio-canada/radio-canada.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"Roboto Flex\";\n            font-style: normal;\n            font-weight: 100 900;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/roboto-flex/roboto-flex.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: Rubik;\n            font-style: normal;\n            font-weight: 300 900;\n            font-display: block;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/rubik/rubik.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"Source Serif Pro\";\n            font-style: normal;\n            font-weight: 200 900;\n            font-display: fallback;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/source-serif-pro/source-serif-pro.woff2') format('woff2');\n            font-stretch: normal;\n        }\n\n        @font-face {\n            font-family: \"Space Mono\";\n            font-style: normal;\n            font-weight: 400;\n            font-display: fallback;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/space-mono/space-mono-regular.woff2') format('woff2');\n        }\n\n        @font-face {\n            font-family: \"Space Mono\";\n            font-style: normal;\n            font-weight: 700;\n            font-display: fallback;\n            src: url('https://gtltowers.in/wp-content/themes/extendable/assets/fonts/space-mono/space-mono-bold.woff2') format('woff2');\n        }\n\n        @font-face {\n            font-family: Lato;\n            font-style: normal;\n            font-weight: 100;\n            font-display: block;\n            src: url('http://gtltowers.in/wp-content/uploads/fonts/lato-latin-100-normal.woff2') format('woff2');\n        }\n\n        @font-face {\n            font-family: Lato;\n            font-style: normal;\n            font-weight: 300;\n            font-display: block;\n            src: url('http://gtltowers.in/wp-content/uploads/fonts/lato-latin-300-normal.woff2') format('woff2');\n        }\n\n        @font-face {\n            font-family: Lato;\n            font-style: normal;\n            font-weight: 400;\n            font-display: block;\n            src: url('http://gtltowers.in/wp-content/uploads/fonts/lato-latin-400-normal.woff2') format('woff2');\n        }\n\n        @font-face {\n            font-family: Lato;\n            font-style: normal;\n            font-weight: 700;\n            font-display: block;\n            src: url('http://gtltowers.in/wp-content/uploads/fonts/lato-latin-700-normal.woff2') format('woff2');\n        }\n\n        @font-face {\n            font-family: Lato;\n            font-style: normal;\n            font-weight: 900;\n            font-display: block;\n            src: url('http://gtltowers.in/wp-content/uploads/fonts/lato-latin-900-normal.woff2') format('woff2');\n        }\n    "
                }}
            />
            <link
                rel="icon"
                href="https://gtltowers.in/wp-content/uploads/2025/02/cropped-extendify-demo-logo-32x32.png"
                sizes="32x32"
            />
            <link
                rel="icon"
                href="https://gtltowers.in/wp-content/uploads/2025/02/cropped-extendify-demo-logo-192x192.png"
                sizes="192x192"
            />
            <link
                rel="apple-touch-icon"
                href="https://gtltowers.in/wp-content/uploads/2025/02/cropped-extendify-demo-logo-180x180.png"
            />
            <meta
                name="msapplication-TileImage"
                content="https://gtltowers.in/wp-content/uploads/2025/02/cropped-extendify-demo-logo-270x270.png"
            />
            <style
                id="custom-chaty-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        #chaty-widget-0 .Whatsapp-channel .color-element {\n            fill: #49E670;\n            color: #49E670;\n        }\n\n        #chaty-widget-0 .channel-icon-Whatsapp .color-element {\n            fill: #49E670;\n            color: #49E670;\n        }\n\n        #chaty-widget-0 .Whatsapp-channel .chaty-custom-icon {\n            background-color: #49E670;\n        }\n\n        #chaty-widget-0 .Whatsapp-channel .chaty-svg {\n            background-color: #49E670;\n        }\n\n        #chaty-widget-0 .channel-icon-Whatsapp .chaty-svg {\n            background-color: #49E670;\n        }\n\n        #chaty-widget-0 .chaty-channel-list .chaty-channel {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-channel-list .chaty-channel>a {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-channel-list .chaty-channel>a .chaty-custom-icon {\n            display: block;\n            width: 54px;\n            height: 54px;\n            line-height: 54px;\n            font-size: 27px;\n        }\n\n        #chaty-widget-0 .chaty-channel-list .chaty-channel button {\n            width: 54px;\n            height: 54px;\n            margin: 0;\n            padding: 0;\n            outline: none;\n            border-radius: 50%;\n        }\n\n        #chaty-widget-0 .chaty-channel-list .chaty-channel .chaty-svg {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-channel-list .chaty-channel .chaty-svg img {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-channel-list .chaty-channel span.chaty-icon {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-channel-list .chaty-channel a {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-channel-list .chaty-channel .chaty-svg .chaty-custom-channel-icon {\n            width: 54px;\n            height: 54px;\n            line-height: 54px;\n            display: block;\n            font-size: 27px;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-cta-button {\n            background-color: #A886CD;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-cta-button button {\n            background-color: #A886CD;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-channel {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-channel>a {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-channel>a .chaty-custom-icon {\n            display: block;\n            width: 54px;\n            height: 54px;\n            line-height: 54px;\n            font-size: 27px;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-channel button {\n            width: 54px;\n            height: 54px;\n            margin: 0;\n            padding: 0;\n            outline: none;\n            border-radius: 50%;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-channel .chaty-svg {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-channel .chaty-svg img {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-channel span.chaty-icon {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-channel a {\n            width: 54px;\n            height: 54px;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-channel .chaty-svg .chaty-custom-channel-icon {\n            width: 54px;\n            height: 54px;\n            line-height: 54px;\n            display: block;\n            font-size: 27px;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .ch-pending-msg {\n            background-color: #dd0000;\n            color: #ffffff;\n        }\n\n        #chaty-widget-0 .chaty-i-trigger .chaty-channel .chaty-svg .widget-fa-icon {\n            line-height: 54px;\n            font-size: 27px;\n        }\n\n        #chaty-widget-0 .chaty-channel-list {\n            height: 62px;\n        }\n\n        #chaty-widget-0 .chaty-channel-list {\n            width: 62px;\n        }\n\n        #chaty-widget-0 .chaty-open .chaty-channel-list .chaty-channel:nth-child(1) {\n            -webkit-transform: translateY(-62px);\n            transform: translateY(-62px);\n        }\n\n        #chaty-widget-0 .chaty-open.above-chaty.has-chatway .chaty-channel-list .chaty-channel:nth-child(1) {\n            -webkit-transform: translateY(-124px);\n            transform: translateY(-124px);\n        }\n\n        #chaty-widget-0 .chaty-open .chaty-channel-list .chaty-channel:nth-child(2) {\n            -webkit-transform: translateY(-0px);\n            transform: translateY(-0px);\n        }\n\n        #chaty-widget-0 .chaty-open.above-chaty.has-chatway .chaty-channel-list .chaty-channel:nth-child(2) {\n            -webkit-transform: translateY(-62px);\n            transform: translateY(-62px);\n        }\n\n        #chaty-widget-0 .chaty-open .chaty-channel-list .chaty-channel:nth-child(1) {\n            -webkit-transform: translateY(-62px);\n            transform: translateY(-62px);\n        }\n\n        #chaty-widget-0 .chaty-open .chaty-channel-list .chaty-channel:nth-child(2) {\n            -webkit-transform: translateY(-0px);\n            transform: translateY(-0px);\n        }\n\n        #chaty-widget-0 .chaty-widget {\n            bottom: 25px\n        }\n\n        #chaty-widget-0 .chaty-widget {\n            right: 25px;\n            left: auto;\n        }\n\n        .chaty-outer-forms.pos-right.chaty-form-0 {\n            right: 25px;\n            left: auto;\n        }\n\n        .chaty-outer-forms.active.chaty-form-0 {\n            -webkit-transform: translateY(-94px);\n            transform: translateY(-94px)\n        }\n\n        #chaty-widget-0.chaty:not(.form-open) .chaty-widget.chaty-open+.chaty-chat-view {\n            -webkit-transform: translateY(-94px);\n            transform: translateY(-94px)\n        }\n\n        #chaty-widget-0 .chaty-tooltip:after {\n            background-color: #ffffff;\n            color: #333333\n        }\n\n        #chaty-widget-0 .chaty-tooltip.pos-top:before {\n            border-top-color: #ffffff;\n        }\n\n        #chaty-widget-0 .chaty-tooltip.pos-left:before {\n            border-left-color: #ffffff;\n        }\n\n        #chaty-widget-0 .chaty-tooltip.pos-right:before {\n            border-right-color: #ffffff;\n        }\n\n        #chaty-widget-0 .on-hover-text {\n            background-color: #ffffff;\n            color: #333333\n        }\n\n        #chaty-widget-0 .chaty-tooltip.pos-top .on-hover-text:before {\n            border-top-color: #ffffff;\n        }\n\n        #chaty-widget-0 .chaty-tooltip.pos-left .on-hover-text:before {\n            border-left-color: #ffffff;\n        }\n\n        #chaty-widget-0 .chaty-tooltip.pos-right .on-hover-text:before {\n            border-right-color: #ffffff;\n        }\n\n        .chaty-outer-forms.chaty-form-0 .chaty-agent-body {\n            max-height: calc(100vh - 220px);\n            overflow-y: auto;\n        }\n\n        #chaty-form-0-chaty-chat-view .chaty-view-header {\n            background-color: ;\n        }\n\n        #chaty-form-0-chaty-chat-view .chaty-view-header {\n            color: ;\n        }\n\n        #chaty-form-0-chaty-chat-view .chaty-view-header svg {\n            fill: ;\n        }\n\n        .chaty-outer-forms.chaty-contact-form-box.chaty-form-0 .chaty-contact-inputs {\n            max-height: calc(100vh - 230px);\n            overflow-y: auto;\n        }\n\n        #chaty-form-0-Whatsapp .chaty-whatsapp-body {\n            max-height: calc(100vh - NaNpx);\n            overflow-y: auto;\n        }\n\n        #chaty-widget-0,\n        #chaty-widget-0 .chaty-tooltip:after {\n            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif\n        }\n    "
                }}
            />
            <style
                id="custom-advance-chaty-css"
                dangerouslySetInnerHTML={{ __html: "" }}
            />
            <Link
                className="skip-link screen-reader-text"
                id="wp-skip-link"
                href="#wp--skip-link--target"
            >
                Skip to content
            </Link>
            <div className="wp-site-blocks">
                <header className="wp-block-template-part">
                    <div
                        className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
                        style={{
                            paddingTop: "var(--wp--preset--spacing--30)",
                            paddingBottom: "var(--wp--preset--spacing--30)"
                        }}
                    >
                        <div className="wp-block-group alignwide is-content-justification-space-between is-nowrap is-layout-flex wp-container-core-group-is-layout-cb46ffcb wp-block-group-is-layout-flex">
                            <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-6c531013 wp-block-group-is-layout-flex">
                                <div className="is-default-size wp-block-site-logo">
                                    <Link to="/" className="custom-logo-link" rel="home">
                                        <img
                                            width={96}
                                            height={97}
                                            src="https://gtltowers.in/wp-content/uploads/2025/02/extendify-demo-logo.png"
                                            className="custom-logo"
                                            alt="GTL Towers"
                                            decoding="async"
                                        />
                                    </Link>
                                </div>
                                <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
                                    <h1
                                        style={{ textTransform: "uppercase" }}
                                        className="wp-block-site-title has-medium-font-size"
                                    >
                                        <Link to="/" target="_self" rel="home">
                                            GTL Towers
                                        </Link>
                                    </h1>
                                </div>
                            </div>
                            <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-6c531013 wp-block-group-is-layout-flex">
                                <nav
                                    className="is-responsive items-justified-right wp-block-navigation is-content-justification-right is-layout-flex wp-container-core-navigation-is-layout-f665d2b5 wp-block-navigation-is-layout-flex"
                                    aria-label="Header Navigation"
                                    data-wp-interactive="core/navigation"
                                    data-wp-context='{"overlayOpenedBy":{"click":false,"hover":false,"focus":false},"type":"overlay","roleAttribute":"","ariaLabel":"Menu"}'
                                >
                                    <button
                                        aria-haspopup="dialog"
                                        aria-label="Open menu"
                                        className="wp-block-navigation__responsive-container-open"
                                        data-wp-on-async--click="actions.openMenuOnClick"
                                        data-wp-on--keydown="actions.handleMenuKeydown"
                                    >
                                        <svg
                                            width={24}
                                            height={24}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <rect x={4} y="7.5" width={16} height="1.5" />
                                            <rect x={4} y={15} width={16} height="1.5" />
                                        </svg>
                                    </button>
                                    <div
                                        className="wp-block-navigation__responsive-container"
                                        id="modal-1"
                                        data-wp-class--has-modal-open="state.isMenuOpen"
                                        data-wp-class--is-menu-open="state.isMenuOpen"
                                        data-wp-watch="callbacks.initMenu"
                                        data-wp-on--keydown="actions.handleMenuKeydown"
                                        data-wp-on-async--focusout="actions.handleMenuFocusout"
                                        tabIndex={-1}
                                    >
                                        <div
                                            className="wp-block-navigation__responsive-close"
                                            tabIndex={-1}
                                        >
                                            <div
                                                className="wp-block-navigation__responsive-dialog"
                                                data-wp-bind--aria-modal="state.ariaModal"
                                                data-wp-bind--aria-label="state.ariaLabel"
                                                data-wp-bind--role="state.roleAttribute"
                                            >
                                                <button
                                                    aria-label="Close menu"
                                                    className="wp-block-navigation__responsive-container-close"
                                                    data-wp-on-async--click="actions.closeMenuOnClick"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        aria-hidden="true"
                                                        focusable="false"
                                                    >
                                                        <path d="m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z"></path>
                                                    </svg>
                                                </button>
                                                <div
                                                    className="wp-block-navigation__responsive-container-content"
                                                    data-wp-watch="callbacks.focusFirstElement"
                                                    id="modal-1-content"
                                                >
                                                    <ul className="wp-block-navigation__container is-responsive items-justified-right wp-block-navigation">
                                                        <li className=" wp-block-navigation-item wp-block-navigation-link">
                                                            <Link
                                                                className="wp-block-navigation-item__content"
                                                                to="/about"
                                                            >
                                                                <span className="wp-block-navigation-item__label">
                                                                    About
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className=" wp-block-navigation-item wp-block-navigation-link">
                                                            <Link
                                                                className="wp-block-navigation-item__content"
                                                                to="/service"
                                                            >
                                                                <span className="wp-block-navigation-item__label">
                                                                    Services
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className=" wp-block-navigation-item current-menu-item wp-block-navigation-link">
                                                            <Link
                                                                className="wp-block-navigation-item__content"
                                                                to="/resource"
                                                                aria-current="page"
                                                            >
                                                                <span className="wp-block-navigation-item__label">
                                                                    Resources
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className=" wp-block-navigation-item wp-block-navigation-link">
                                                            <Link
                                                                className="wp-block-navigation-item__content"
                                                                to="/portfolio"
                                                            >
                                                                <span className="wp-block-navigation-item__label">
                                                                    Works
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className=" wp-block-navigation-item wp-block-navigation-link">
                                                            <Link
                                                                className="wp-block-navigation-item__content"
                                                                to="/contact"
                                                                aria-current="page"
                                                            >
                                                                <span className="wp-block-navigation-item__label"
                                                                    style={{
                                                                        color: "#008A00",
                                                                    }}>
                                                                    Apply Now
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <p className="has-text-align-center wp-block-site-tagline has-background" style={{
                        backgroundColor: "#008A00"
                    }}>
                        Agreement Fee: ₹3,250/-
                    </p>
                </header>
                <main
                    className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
                    style={{ marginTop: 0, marginBottom: 0 }}
                    id="wp--skip-link--target"
                >
                    <div className="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">
                        <div
                            className="wp-block-group alignfull has-foreground-background-color has-background has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
                            style={{
                                marginTop: 0,
                                marginBottom: 0,
                                paddingTop: 0,
                                paddingBottom: 0
                            }}
                        >
                            <div
                                className="wp-block-group alignwide has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
                                style={{
                                    paddingTop: "var(--wp--preset--spacing--30)",
                                    paddingBottom: "var(--wp--preset--spacing--30)"
                                }}
                            >
                                <h1
                                    className="wp-block-heading alignwide has-background-color has-text-color"
                                    style={{
                                        fontSize:
                                            "clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 0.625), 1.25rem)"
                                    }}
                                >
                                    Resources
                                </h1>
                            </div>
                        </div>
                        <div
                            className="wp-block-group alignfull has-secondary-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-7276a2bb wp-block-group-is-layout-constrained"
                            id="resources"
                            style={{
                                marginTop: 0,
                                marginBottom: 0,
                                paddingTop: "var(--wp--preset--spacing--60)",
                                paddingRight: "var(--wp--preset--spacing--30)",
                                paddingBottom: "var(--wp--preset--spacing--60)",
                                paddingLeft: "var(--wp--preset--spacing--30)"
                            }}
                        >
                            <div className="wp-block-group alignwide is-vertical is-layout-flex wp-container-core-group-is-layout-fe9cc265 wp-block-group-is-layout-flex">
                                <div className="wp-block-group alignwide has-global-padding is-content-justification-left is-layout-constrained wp-container-core-group-is-layout-8b4c372c wp-block-group-is-layout-constrained">
                                    <h2 className="wp-block-heading has-large-font-size">
                                        Seamless Communication Tower Solutions
                                    </h2>
                                    <p style={{ marginTop: 16 }}>
                                        Discover valuable tools and insights to optimize your tower
                                        operations.
                                    </p>
                                </div>
                            </div>
                            <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-a88a3fd8 wp-block-columns-is-layout-flex">
                                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                    <div
                                        className="wp-block-group has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-a35945ca wp-block-group-is-layout-constrained"
                                        style={{
                                            borderRadius: 4,
                                            minHeight: "100%",
                                            paddingTop: "var(--wp--preset--spacing--30)",
                                            paddingRight: "var(--wp--preset--spacing--30)",
                                            paddingBottom: "var(--wp--preset--spacing--30)",
                                            paddingLeft: "var(--wp--preset--spacing--30)"
                                        }}
                                    >
                                        <figure className="wp-block-image size-large is-resized ext-aspect-landscape wp-duotone-primary-foreground">
                                            <img
                                                decoding="async"
                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48bWFzayBpZD0iYSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIj48cGF0aCBmaWxsPSIjRDlEOUQ5IiBkPSJNMCAwaDQ4djQ4SDB6Ii8+PC9tYXNrPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMxQzFCMUYiIGQ9Ik0xNS45NSAzNS41aDE2LjF2LTNoLTE2LjF2M1ptMC04LjVoMTYuMXYtM2gtMTYuMXYzWk0xMSA0NGMtLjggMC0xLjUtLjMtMi4xLS45LS42LS42LS45LTEuMy0uOS0yLjFWN2MwLS44LjMtMS41LjktMi4xLjYtLjYgMS4zLS45IDIuMS0uOWgxOC4wNUw0MCAxNC45NVY0MWMwIC44LS4zIDEuNS0uOSAyLjEtLjYuNi0xLjMuOS0yLjEuOUgxMVptMTYuNTUtMjcuN1Y3SDExdjM0aDI2VjE2LjNoLTkuNDVaIi8+PC9nPjwvc3ZnPg=="
                                                alt=""
                                                style={{ width: 48 }}
                                            />
                                        </figure>
                                        <h3
                                            className="wp-block-heading"
                                            style={{
                                                marginTop: 24,
                                                fontSize:
                                                    "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                                                lineHeight: "1.5"
                                            }}
                                        >
                                            Tower Safety
                                        </h3>
                                        <p className="has-small-font-size" style={{ marginTop: 8 }}>
                                            Understand best practices to ensure safe and compliant tower
                                            operations.
                                        </p>
                                        <div className="wp-block-buttons is-content-justification-left is-layout-flex wp-container-core-buttons-is-layout-fc4fd283 wp-block-buttons-is-layout-flex">
                                            <div className="wp-block-button has-custom-font-size has-small-font-size">
                                                <Link
                                                    className="wp-block-button__link wp-element-button has-tertiary-background-color"
                                                    to="/contact"
                                                >
                                                    Find Out More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                    <div
                                        className="wp-block-group has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-a35945ca wp-block-group-is-layout-constrained"
                                        style={{
                                            borderRadius: 4,
                                            minHeight: "100%",
                                            paddingTop: "var(--wp--preset--spacing--30)",
                                            paddingRight: "var(--wp--preset--spacing--30)",
                                            paddingBottom: "var(--wp--preset--spacing--30)",
                                            paddingLeft: "var(--wp--preset--spacing--30)"
                                        }}
                                    >
                                        <figure className="wp-block-image size-large is-resized ext-aspect-landscape wp-duotone-primary-foreground">
                                            <img
                                                decoding="async"
                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48bWFzayBpZD0iYSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIj48cGF0aCBmaWxsPSIjRDlEOUQ5IiBkPSJNMCAwaDQ4djQ4SDB6Ii8+PC9tYXNrPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMxQzFCMUYiIGQ9Ik0xNS45NSAzNS41aDE2LjF2LTNoLTE2LjF2M1ptMC04LjVoMTYuMXYtM2gtMTYuMXYzWk0xMSA0NGMtLjggMC0xLjUtLjMtMi4xLS45LS42LS42LS45LTEuMy0uOS0yLjFWN2MwLS44LjMtMS41LjktMi4xLjYtLjYgMS4zLS45IDIuMS0uOWgxOC4wNUw0MCAxNC45NVY0MWMwIC44LS4zIDEuNS0uOSAyLjEtLjYuNi0xLjMuOS0yLjEuOUgxMVptMTYuNTUtMjcuN1Y3SDExdjM0aDI2VjE2LjNoLTkuNDVaIi8+PC9nPjwvc3ZnPg=="
                                                alt=""
                                                style={{ width: 48 }}
                                            />
                                        </figure>
                                        <h3
                                            className="wp-block-heading"
                                            style={{
                                                marginTop: 24,
                                                fontSize:
                                                    "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                                                lineHeight: "1.5"
                                            }}
                                        >
                                            Maintenance Tips
                                        </h3>
                                        <p className="has-small-font-size" style={{ marginTop: 8 }}>
                                            Access expert advice on maintaining peak tower performance.
                                        </p>
                                        <div className="wp-block-buttons is-content-justification-left is-layout-flex wp-container-core-buttons-is-layout-fc4fd283 wp-block-buttons-is-layout-flex">
                                            <div className="wp-block-button has-custom-font-size has-small-font-size">
                                                <Link
                                                    className="wp-block-button__link wp-element-button has-tertiary-background-color"
                                                    href="contact.hml"
                                                >
                                                    Get Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                    <div
                                        className="wp-block-group has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-a35945ca wp-block-group-is-layout-constrained"
                                        style={{
                                            borderRadius: 4,
                                            minHeight: "100%",
                                            paddingTop: "var(--wp--preset--spacing--30)",
                                            paddingRight: "var(--wp--preset--spacing--30)",
                                            paddingBottom: "var(--wp--preset--spacing--30)",
                                            paddingLeft: "var(--wp--preset--spacing--30)"
                                        }}
                                    >
                                        <figure className="wp-block-image size-large is-resized ext-aspect-landscape wp-duotone-primary-foreground">
                                            <img
                                                decoding="async"
                                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48bWFzayBpZD0iYSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIj48cGF0aCBmaWxsPSIjRDlEOUQ5IiBkPSJNMCAwaDQ4djQ4SDB6Ii8+PC9tYXNrPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMxQzFCMUYiIGQ9Ik0xNS45NSAzNS41aDE2LjF2LTNoLTE2LjF2M1ptMC04LjVoMTYuMXYtM2gtMTYuMXYzWk0xMSA0NGMtLjggMC0xLjUtLjMtMi4xLS45LS42LS42LS45LTEuMy0uOS0yLjFWN2MwLS44LjMtMS41LjktMi4xLjYtLjYgMS4zLS45IDIuMS0uOWgxOC4wNUw0MCAxNC45NVY0MWMwIC44LS4zIDEuNS0uOSAyLjEtLjYuNi0xLjMuOS0yLjEuOUgxMVptMTYuNTUtMjcuN1Y3SDExdjM0aDI2VjE2LjNoLTkuNDVaIi8+PC9nPjwvc3ZnPg=="
                                                alt=""
                                                style={{ width: 48 }}
                                            />
                                        </figure>
                                        <h3
                                            className="wp-block-heading"
                                            style={{
                                                marginTop: 24,
                                                fontSize:
                                                    "clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.625), 20px)",
                                                lineHeight: "1.5"
                                            }}
                                        >
                                            Installation Guides
                                        </h3>
                                        <p className="has-small-font-size" style={{ marginTop: 8 }}>
                                            Explore practical steps for efficient tower installation.
                                        </p>
                                        <div className="wp-block-buttons is-content-justification-left is-layout-flex wp-container-core-buttons-is-layout-fc4fd283 wp-block-buttons-is-layout-flex">
                                            <div className="wp-block-button has-custom-font-size has-small-font-size">
                                                <Link
                                                    className="wp-block-button__link wp-element-button has-tertiary-background-color"
                                                    to="/contact"
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-7276a2bb wp-block-group-is-layout-constrained"
                            id="about"
                            style={{
                                marginTop: 0,
                                marginBottom: 0,
                                paddingTop: "var(--wp--preset--spacing--60)",
                                paddingRight: "var(--wp--preset--spacing--30)",
                                paddingBottom: "var(--wp--preset--spacing--60)",
                                paddingLeft: "var(--wp--preset--spacing--30)"
                            }}
                        >
                            <div className="wp-block-group alignwide is-vertical is-layout-flex wp-container-core-group-is-layout-fe9cc265 wp-block-group-is-layout-flex">
                                <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                    <h2 className="wp-block-heading has-large-font-size">
                                        Your Expert in Communication Tower Solutions
                                    </h2>
                                    <p style={{ marginTop: 16 }}>
                                        Explore key data and achievements that showcase our industry
                                        excellence.
                                    </p>
                                </div>
                            </div>
                            <div className="wp-block-columns alignwide are-vertically-aligned-center is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                                <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                    <figure className="wp-block-image ext-aspect-landscape">
                                        <img
                                            fetchpriority="high"
                                            decoding="async"
                                            width={1440}
                                            height={960}
                                            className="wp-image-52"
                                            src="http://gtltowers.in/wp-content/uploads/2025/02/2595fbe463c8de0f80a1ed9a36bb5937c178cd76.jpg"
                                            alt=""
                                            style={{ aspectRatio: "4/3", objectFit: "cover" }}
                                            srcSet="https://gtltowers.in/wp-content/uploads/2025/02/2595fbe463c8de0f80a1ed9a36bb5937c178cd76.jpg 1440w, https://gtltowers.in/wp-content/uploads/2025/02/2595fbe463c8de0f80a1ed9a36bb5937c178cd76-300x200.jpg 300w, https://gtltowers.in/wp-content/uploads/2025/02/2595fbe463c8de0f80a1ed9a36bb5937c178cd76-1024x683.jpg 1024w, https://gtltowers.in/wp-content/uploads/2025/02/2595fbe463c8de0f80a1ed9a36bb5937c178cd76-768x512.jpg 768w"
                                            sizes="(max-width: 1440px) 100vw, 1440px"
                                        />
                                    </figure>
                                </div>
                                <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-container-core-column-is-layout-5dafc681 wp-block-column-is-layout-flow">
                                    <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-d0846407 wp-block-columns-is-layout-flex">
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <h3 className="wp-block-heading has-text-align-center has-primary-color has-text-color has-x-large-font-size">
                                                120
                                            </h3>
                                            <h3
                                                className="wp-block-heading has-text-align-center has-medium-font-size"
                                                style={{ marginTop: 16 }}
                                            >
                                                Towers Built
                                            </h3>
                                            <p
                                                className="has-text-align-center has-small-font-size"
                                                style={{ marginTop: 8 }}
                                            >
                                                We’ve successfully constructed over 120 towers across
                                                diverse locations.
                                            </p>
                                        </div>
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <h3 className="wp-block-heading has-text-align-center has-primary-color has-text-color has-x-large-font-size">
                                                5,500+
                                            </h3>
                                            <h3
                                                className="wp-block-heading has-text-align-center has-medium-font-size"
                                                style={{ marginTop: 16 }}
                                            >
                                                Sites Maintained
                                            </h3>
                                            <p
                                                className="has-text-align-center has-small-font-size"
                                                style={{ marginTop: 8 }}
                                            >
                                                Our team has maintained over 5,500 sites to ensure seamless
                                                communication.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-d0846407 wp-block-columns-is-layout-flex">
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <h3 className="wp-block-heading has-text-align-center has-primary-color has-text-color has-x-large-font-size">
                                                250
                                            </h3>
                                            <h3
                                                className="wp-block-heading has-text-align-center has-medium-font-size"
                                                style={{ marginTop: 16 }}
                                            >
                                                Completed Repairs
                                            </h3>
                                            <p
                                                className="has-text-align-center has-small-font-size"
                                                style={{ marginTop: 8 }}
                                            >
                                                We’ve handled 250 repair projects, restoring peak
                                                performance quickly.
                                            </p>
                                        </div>
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <h3 className="wp-block-heading has-text-align-center has-primary-color has-text-color has-x-large-font-size">
                                                450
                                            </h3>
                                            <h3
                                                className="wp-block-heading has-text-align-center has-medium-font-size"
                                                style={{ marginTop: 16 }}
                                            >
                                                Projects Managed
                                            </h3>
                                            <p
                                                className="has-text-align-center has-small-font-size"
                                                style={{ marginTop: 8 }}
                                            >
                                                We’ve expertly managed 450 projects, delivering reliable
                                                results on time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="wp-block-group alignfull has-secondary-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-is-layout-7276a2bb wp-block-group-is-layout-constrained"
                            style={{
                                marginTop: 0,
                                marginBottom: 0,
                                paddingTop: "var(--wp--preset--spacing--60)",
                                paddingRight: "var(--wp--preset--spacing--30)",
                                paddingBottom: "var(--wp--preset--spacing--60)",
                                paddingLeft: "var(--wp--preset--spacing--30)"
                            }}
                        >
                            <div className="wp-block-group alignwide is-content-justification-space-between is-layout-flex wp-container-core-group-is-layout-9366075c wp-block-group-is-layout-flex">
                                <div className="wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
                                    <h2 className="wp-block-heading has-large-font-size">
                                        Expert Mobile Tower Solutions and Maintenance
                                    </h2>
                                    <p style={{ marginTop: 16 }}>
                                        Discover how GTL Towers can streamline your communication needs.
                                        Contact us today to learn more about our reliable services and
                                        schedule your consultation.
                                    </p>
                                </div>
                                <div className="wp-block-buttons is-horizontal is-content-justification-right is-layout-flex wp-container-core-buttons-is-layout-27c00227 wp-block-buttons-is-layout-flex">
                                    <div className="wp-block-button">
                                        <Link
                                            className="wp-block-button__link wp-element-button has-tertiary-background-color"
                                            to="/service"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="wp-block-template-part">
                    <div
                        className="wp-block-group alignfull has-background-color has-white-color has-text-color has-background has-link-color wp-elements-14b735de8f4344f6e528f9735b9e744b is-vertical is-content-justification-stretch is-layout-flex wp-container-core-group-is-layout-48a3dbfb wp-block-group-is-layout-flex"
                        style={{
                            minHeight: "40vh",
                            marginTop: 0,
                            marginBottom: 0,
                            paddingTop: "var(--wp--preset--spacing--60)",
                            paddingRight: "var(--wp--preset--spacing--40)",
                            paddingBottom: "var(--wp--preset--spacing--60)",
                            paddingLeft: "var(--wp--preset--spacing--40)",
                            backgroundColor: "rgb(50 67 48)"
                        }}
                    >
                        <div className="wp-block-columns alignwide has-small-font-size is-layout-flex wp-container-core-columns-is-layout-28f84493 wp-block-columns-is-layout-flex">
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                <p className="has-text-align-center has-medium-font-size">
                                    <strong>Location</strong>
                                </p>
                                <p className="has-text-align-center">
                                    1272,7 &amp; 8 Floor Old madras Road, Bengaluru, Karnataka 560045
                                </p>
                                <div
                                    style={{ height: 24 }}
                                    aria-hidden="true"
                                    className="wp-block-spacer"
                                />
                            </div>
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                <p className="has-text-align-center has-medium-font-size">
                                    <strong>Pages</strong>
                                </p>
                                <nav
                                    className="has-small-font-size items-justified-center is-vertical no-wrap wp-block-navigation is-content-justification-center is-nowrap is-layout-flex wp-container-core-navigation-is-layout-34a3ecb2 wp-block-navigation-is-layout-flex"
                                    aria-label="Header Navigation 2"
                                >
                                    <ul className="wp-block-navigation__container has-small-font-size items-justified-center is-vertical no-wrap wp-block-navigation has-small-font-size">
                                        <li className="has-small-font-size wp-block-navigation-item wp-block-navigation-link">
                                            <Link
                                                className="wp-block-navigation-item__content"
                                                to="/about"
                                            >
                                                <span className="wp-block-navigation-item__label">
                                                    About
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="has-small-font-size wp-block-navigation-item wp-block-navigation-link">
                                            <Link
                                                className="wp-block-navigation-item__content"
                                                to="/service"
                                            >
                                                <span className="wp-block-navigation-item__label">
                                                    Services
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="has-small-font-size wp-block-navigation-item current-menu-item wp-block-navigation-link">
                                            <Link
                                                className="wp-block-navigation-item__content"
                                                to="/resource"
                                                aria-current="page"
                                            >
                                                <span className="wp-block-navigation-item__label">
                                                    Resources
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="has-small-font-size wp-block-navigation-item wp-block-navigation-link">
                                            <Link
                                                className="wp-block-navigation-item__content"
                                                to="/portfolio"
                                            >
                                                <span className="wp-block-navigation-item__label">
                                                    Works
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="has-small-font-size wp-block-navigation-item wp-block-navigation-link">
                                            <Link
                                                className="wp-block-navigation-item__content"
                                                to="/contact"
                                            >
                                                <span className="wp-block-navigation-item__label">
                                                    Apply Now
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div
                                    style={{ height: 24 }}
                                    aria-hidden="true"
                                    className="wp-block-spacer"
                                />
                            </div>
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                <p className="has-text-align-center has-medium-font-size">
                                    <strong>Follow us</strong>
                                </p>
                                <div className="wp-block-group is-vertical is-content-justification-center is-layout-flex wp-container-core-group-is-layout-0e868306 wp-block-group-is-layout-flex">
                                    <p>
                                        <Link to="#">Facebook</Link>
                                    </p>
                                    <p>
                                        <Link to="#">Instagram</Link>
                                    </p>
                                    <p>
                                        <Link to="#">Twitter</Link>
                                    </p>
                                </div>
                                <div
                                    style={{ height: 24 }}
                                    aria-hidden="true"
                                    className="wp-block-spacer"
                                />
                            </div>
                        </div>
                        <div className="wp-block-group alignwide is-content-justification-center is-layout-flex wp-container-core-group-is-layout-c124d1c4 wp-block-group-is-layout-flex">
                            <p>
                                © Copyright&nbsp;<strong>GTL Tower Solutions</strong>. All Rights
                                Reserved
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width={0}
                height={0}
                focusable="false"
                role="none"
                style={{
                    visibility: "hidden",
                    position: "absolute",
                    left: "-9999px",
                    overflow: "hidden"
                }}
            >
                <defs>
                    <filter id="wp-duotone-primary-foreground">
                        <feColorMatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        ></feColorMatrix>
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR
                                type="table"
                                tableValues="0.090196078431373 0.003921568627451"
                            />
                            <feFuncG
                                type="table"
                                tableValues="0.29803921568627 0.003921568627451"
                            />
                            <feFuncB
                                type="table"
                                tableValues="0.1843137254902 0.003921568627451"
                            />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>
            <div
                style={{ display: "none" }}
                className="chaty chaty-id-0 chaty-widget-0 chaty-key-0 first_click active"
                id="chaty-widget-0"
                data-key={0}
                data-id={0}
                data-identifier={0}
                data-nonce="db978ece58"
            >
                <div className="chaty-widget right-position has-single">
                    <div className="chaty-channels">
                        <div className="chaty-channel-list" id="csaas-channels-0" />
                        <div className="chaty-i-trigger csaas-widget-trigger single-channel">
                            <div
                                className="chaty-channel Whatsapp-channel-link single active chaty-tooltip pos-left has-on-hover"
                                id="Whatsapp-0-channel"
                                data-id="Whatsapp-0"
                                data-widget={0}
                                data-channel="Whatsapp"
                            >
                                <Link
                                    to="https://web.whatsapp.com/send?phone=7303893268&text="
                                    target="_blank"
                                    rel="nofollow noopener"
                                    aria-label="Whatsapp"
                                    className="Whatsapp-channel chaty-link chaty-whatsapp-channel pos-left has-on-hover"
                                    data-form="chaty-form-0-Whatsapp"
                                    data-hover="WhatsApp"
                                    data-text="Chat"
                                >
                                    <span className="chaty-icon channel-icon-Whatsapp">
                                        <span className="chaty-svg">
                                            <svg
                                                width={39}
                                                height={39}
                                                viewBox="0 0 39 39"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    className="color-element"
                                                    cx="19.4395"
                                                    cy="19.4395"
                                                    r="19.4395"
                                                    fill="#49E670"
                                                />
                                                <path
                                                    d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z"
                                                    transform="translate(12.9597 12.9597)"
                                                    fill="#FAFAFA"
                                                />
                                                <path
                                                    d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z"
                                                    transform="translate(7.7758 7.77582)"
                                                    fill="white"
                                                    stroke="white"
                                                    strokeWidth="0.2"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                    <span className="on-hover-text">Chat</span>
                                </Link>
                                <span className="on-hover-text">Chat</span>
                            </div>
                            <div
                                className="chaty-channel chaty-cta-close chaty-tooltip pos-left"
                                data-hover="Hide"
                            >
                                <div className="chaty-cta-button">
                                    <button type="button">
                                        <span className="chaty-svg">
                                            <svg
                                                viewBox="0 0 52 52"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <ellipse cx={26} cy={26} rx={26} ry={26} fill="#A886CD" />
                                                <rect
                                                    width="27.1433"
                                                    height="3.89857"
                                                    rx="1.94928"
                                                    transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)"
                                                    fill="#ffffff"
                                                />
                                                <rect
                                                    width="27.1433"
                                                    height="3.89857"
                                                    rx="1.94928"
                                                    transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)"
                                                    fill="#ffffff"
                                                />
                                            </svg>
                                        </span>
                                        <span className="sr-only">Hide chaty</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Resource