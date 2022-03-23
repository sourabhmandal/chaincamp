import deepmerge from 'deepmerge';
import { theme } from '@primer/react';

export const baseTheme = deepmerge(theme, {
  animation: {
    easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)'
  },
  borderWidths: [0, '1px'],
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  fonts: {
    normal:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    mono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px'],
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600
  },
  lineHeights: {
    condensedUltra: 1,
    condensed: 1.25,
    default: 1.5
  },
  radii: ['0', '3px', '6px', '100px'],
  sizes: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px'
  },
  space: [
    '0',
    '4px',
    '8px',
    '16px',
    '24px',
    '32px',
    '40px',
    '48px',
    '64px',
    '80px',
    '96px',
    '112px',
    '128px'
  ],
  colorSchemes: {
    light: {
      colors: {
        canvasDefaultTransparent: 'rgba(255,255,255,0)',
        pageHeaderBg: '#f6f8fa',
        marketingIcon: {
          primary: '#218bff',
          secondary: '#54aeff'
        },
        diffBlob: {
          addition: {
            numText: '#24292f',
            fg: '#24292f',
            numBg: '#CCFFD8',
            lineBg: '#E6FFEC',
            wordBg: '#ABF2BC'
          },
          deletion: {
            numText: '#24292f',
            fg: '#24292f',
            numBg: '#FFD7D5',
            lineBg: '#FFEBE9',
            wordBg: 'rgba(255,129,130,0.4)'
          },
          hunk: {
            numBg: 'rgba(84,174,255,0.4)'
          },
          expander: {
            icon: '#57606a'
          }
        },
        diffstat: {
          deletionBorder: 'rgba(27,31,36,0.15)',
          additionBorder: 'rgba(27,31,36,0.15)',
          additionBg: '#2da44e'
        },
        searchKeyword: {
          hl: '#fff8c5'
        },
        prettylights: {
          syntax: {
            comment: '#6e7781',
            constant: '#0550ae',
            entity: '#8250df',
            storageModifierImport: '#24292f',
            entityTag: '#116329',
            keyword: '#cf222e',
            string: '#0a3069',
            variable: '#953800',
            brackethighlighterUnmatched: '#82071e',
            invalidIllegalText: '#f6f8fa',
            invalidIllegalBg: '#82071e',
            carriageReturnText: '#f6f8fa',
            carriageReturnBg: '#cf222e',
            stringRegexp: '#116329',
            markupList: '#3b2300',
            markupHeading: '#0550ae',
            markupItalic: '#24292f',
            markupBold: '#24292f',
            markupDeletedText: '#82071e',
            markupDeletedBg: '#FFEBE9',
            markupInsertedText: '#116329',
            markupInsertedBg: '#dafbe1',
            markupChangedText: '#953800',
            markupChangedBg: '#ffd8b5',
            markupIgnoredText: '#eaeef2',
            markupIgnoredBg: '#0550ae',
            metaDiffRange: '#8250df',
            brackethighlighterAngle: '#57606a',
            sublimelinterGutterMark: '#8c959f',
            constantOtherReferenceLink: '#0a3069'
          }
        },
        codemirror: {
          text: '#24292f',
          bg: '#ffffff',
          guttersBg: '#ffffff',
          guttermarkerText: '#ffffff',
          guttermarkerSubtleText: '#6e7781',
          linenumberText: '#57606a',
          cursor: '#24292f',
          selectionBg: 'rgba(84,174,255,0.4)',
          activelineBg: 'rgba(234,238,242,0.5)',
          matchingbracketText: '#24292f',
          linesBg: '#ffffff',
          syntax: {
            comment: '#24292f',
            constant: '#0550ae',
            entity: '#8250df',
            keyword: '#cf222e',
            storage: '#cf222e',
            string: '#0a3069',
            support: '#0550ae',
            variable: '#953800'
          }
        },
        checks: {
          bg: '#24292f',
          textPrimary: '#f6f8fa',
          textSecondary: '#8c959f',
          textLink: '#54aeff',
          btnIcon: '#afb8c1',
          btnHoverIcon: '#f6f8fa',
          btnHoverBg: 'rgba(255,255,255,0.125)',
          inputText: '#eaeef2',
          inputPlaceholderText: '#8c959f',
          inputFocusText: '#8c959f',
          inputBg: '#32383f',
          donutError: '#fa4549',
          donutPending: '#bf8700',
          donutSuccess: '#2da44e',
          donutNeutral: '#afb8c1',
          dropdownText: '#afb8c1',
          dropdownBg: '#32383f',
          dropdownBorder: '#424a53',
          dropdownShadow: 'rgba(27,31,36,0.3)',
          dropdownHoverText: '#f6f8fa',
          dropdownHoverBg: '#424a53',
          dropdownBtnHoverText: '#f6f8fa',
          dropdownBtnHoverBg: '#32383f',
          scrollbarThumbBg: '#57606a',
          headerLabelText: '#d0d7de',
          headerLabelOpenText: '#f6f8fa',
          headerBorder: '#32383f',
          headerIcon: '#8c959f',
          lineText: '#d0d7de',
          lineNumText: 'rgba(140,149,159,0.75)',
          lineTimestampText: '#8c959f',
          lineHoverBg: '#32383f',
          lineSelectedBg: 'rgba(33,139,255,0.15)',
          lineSelectedNumText: '#54aeff',
          lineDtFmText: '#24292f',
          lineDtFmBg: '#9a6700',
          gateBg: 'rgba(125,78,0,0.15)',
          gateText: '#d0d7de',
          gateWaitingText: '#d4a72c',
          stepHeaderOpenBg: '#32383f',
          stepErrorText: '#ff8182',
          stepWarningText: '#d4a72c',
          loglineText: '#8c959f',
          loglineNumText: 'rgba(140,149,159,0.75)',
          loglineDebugText: '#c297ff',
          loglineErrorText: '#d0d7de',
          loglineErrorNumText: '#ff8182',
          loglineErrorBg: 'rgba(164,14,38,0.15)',
          loglineWarningText: '#d0d7de',
          loglineWarningNumText: '#d4a72c',
          loglineWarningBg: 'rgba(125,78,0,0.15)',
          loglineCommandText: '#54aeff',
          loglineSectionText: '#4ac26b',
          ansi: {
            black: '#24292f',
            blackBright: '#32383f',
            white: '#d0d7de',
            whiteBright: '#d0d7de',
            gray: '#8c959f',
            red: '#ff8182',
            redBright: '#ffaba8',
            green: '#4ac26b',
            greenBright: '#6fdd8b',
            yellow: '#d4a72c',
            yellowBright: '#eac54f',
            blue: '#54aeff',
            blueBright: '#80ccff',
            magenta: '#c297ff',
            magentaBright: '#d8b9ff',
            cyan: '#76e3ea',
            cyanBright: '#b3f0ff'
          }
        },
        project: {
          headerBg: '#24292f',
          sidebarBg: '#ffffff',
          gradientIn: '#ffffff',
          gradientOut: 'rgba(255,255,255,0)'
        },
        mktg: {
          btn: {
            bg: '#1b1f23'
          }
        },
        avatar: {
          bg: '#ffffff',
          border: 'rgba(27,31,36,0.15)',
          stackFade: '#afb8c1',
          stackFadeMore: '#d0d7de'
        },
        topicTag: {
          border: 'rgba(0,0,0,0)'
        },
        counter: {
          border: 'rgba(0,0,0,0)'
        },
        selectMenu: {
          backdropBorder: 'rgba(0,0,0,0)',
          tapHighlight: 'rgba(175,184,193,0.5)',
          tapFocusBg: '#b6e3ff'
        },
        header: {
          text: 'rgba(255,255,255,0.7)',
          bg: '#24292f',
          divider: '#57606a',
          logo: '#ffffff'
        },
        headerSearch: {
          bg: '#24292f',
          border: '#57606a'
        },
        sidenav: {
          selectedBg: '#ffffff'
        },
        menu: {
          bgActive: 'rgba(0,0,0,0)'
        },
        input: {
          disabledBg: 'rgba(175,184,193,0.2)'
        },
        timeline: {
          badgeBg: '#eaeef2'
        },
        ansi: {
          black: '#24292f',
          blackBright: '#57606a',
          white: '#6e7781',
          whiteBright: '#8c959f',
          gray: '#6e7781',
          red: '#cf222e',
          redBright: '#a40e26',
          green: '#116329',
          greenBright: '#1a7f37',
          yellow: '#4d2d00',
          yellowBright: '#633c01',
          blue: '#0969da',
          blueBright: '#218bff',
          magenta: '#8250df',
          magentaBright: '#a475f9',
          cyan: '#1b7c83',
          cyanBright: '#3192aa'
        },
        btn: {
          text: '#24292f',
          bg: '#f6f8fa',
          border: 'rgba(27,31,36,0.15)',
          hoverBg: '#f3f4f6',
          hoverBorder: 'rgba(27,31,36,0.15)',
          activeBg: 'hsla(220,14%,93%,1)',
          activeBorder: 'rgba(27,31,36,0.15)',
          selectedBg: 'hsla(220,14%,94%,1)',
          focusBg: '#f6f8fa',
          focusBorder: 'rgba(27,31,36,0.15)',
          counterBg: 'rgba(27,31,36,0.08)',
          primary: {
            text: '#ffffff',
            bg: 'rgb(251 146 60)',
            border: 'rgba(27,31,36,0.15)',
            hoverBg: 'rgb(249 115 22)',
            hoverBorder: 'rgba(27,31,36,0.15)',
            selectedBg: 'rgb(234 88 12)',
            disabledText: 'rgba(255,255,255,0.8)',
            disabledBg: 'rgb(254 215 170)',
            disabledBorder: 'rgba(27,31,36,0.15)',
            focusBg: 'rgb(251 146 60)',
            focusBorder: 'rgba(27,31,36,0.15)',
            icon: 'rgba(255,255,255,0.8)',
            counterBg: 'rgba(255,255,255,0.2)'
          },
          outline: {
            text: '#0969da',
            hoverText: '#ffffff',
            hoverBg: '#0969da',
            hoverBorder: 'rgba(27,31,36,0.15)',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: 'hsla(212,92%,42%,1)',
            selectedBorder: 'rgba(27,31,36,0.15)',
            disabledText: 'rgba(9,105,218,0.5)',
            disabledBg: '#f6f8fa',
            disabledCounterBg: 'rgba(9,105,218,0.05)',
            focusBorder: 'rgba(27,31,36,0.15)',
            counterBg: 'rgba(9,105,218,0.1)'
          },
          danger: {
            text: '#cf222e',
            hoverText: '#ffffff',
            hoverBg: '#a40e26',
            hoverBorder: 'rgba(27,31,36,0.15)',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: 'hsla(356,72%,44%,1)',
            selectedBorder: 'rgba(27,31,36,0.15)',
            disabledText: 'rgba(207,34,46,0.5)',
            disabledBg: '#f6f8fa',
            disabledCounterBg: 'rgba(207,34,46,0.05)',
            focusBorder: 'rgba(27,31,36,0.15)',
            counterBg: 'rgba(207,34,46,0.1)',
            icon: '#cf222e',
            hoverIcon: '#ffffff'
          }
        },
        underlinenav: {
          icon: '#6e7781',
          borderHover: 'rgba(175,184,193,0.2)'
        },
        actionListItem: {
          inlineDivider: 'rgba(208,215,222,0.48)',
          default: {
            hoverBg: 'rgba(208,215,222,0.32)',
            hoverBorder: 'rgba(0,0,0,0)',
            activeBg: 'rgba(208,215,222,0.48)',
            activeBorder: 'rgba(0,0,0,0)',
            selectedBg: 'rgba(208,215,222,0.24)'
          },
          danger: {
            hoverBg: 'rgba(255,235,233,0.64)',
            activeBg: '#FFEBE9',
            hoverText: '#cf222e'
          }
        },
        fg: {
          default: '#24292f',
          muted: '#57606a',
          subtle: '#6e7781',
          onEmphasis: '#ffffff'
        },
        canvas: {
          default: '#ffffff',
          overlay: '#ffffff',
          inset: '#f6f8fa',
          subtle: '#f6f8fa'
        },
        border: {
          default: '#d0d7de',
          muted: 'hsla(210,18%,87%,1)',
          subtle: 'rgba(27,31,36,0.15)'
        },
        neutral: {
          emphasisPlus: '#24292f',
          emphasis: '#6e7781',
          muted: 'rgba(175,184,193,0.2)',
          subtle: 'rgba(234,238,242,0.5)'
        },
        accent: {
          fg: '#0969da',
          emphasis: '#0969da',
          muted: 'rgba(84,174,255,0.4)',
          subtle: '#ddf4ff'
        },
        success: {
          fg: '#1a7f37',
          emphasis: '#2da44e',
          muted: 'rgba(74,194,107,0.4)',
          subtle: '#dafbe1'
        },
        attention: {
          fg: '#9a6700',
          emphasis: '#bf8700',
          muted: 'rgba(212,167,44,0.4)',
          subtle: '#fff8c5'
        },
        severe: {
          fg: '#bc4c00',
          emphasis: '#bc4c00',
          muted: 'rgba(251,143,68,0.4)',
          subtle: '#fff1e5'
        },
        danger: {
          fg: '#cf222e',
          emphasis: '#cf222e',
          muted: 'rgba(255,129,130,0.4)',
          subtle: '#FFEBE9'
        },
        open: {
          fg: '#1a7f37',
          emphasis: '#2da44e',
          muted: 'rgba(74,194,107,0.4)',
          subtle: '#dafbe1'
        },
        closed: {
          fg: '#cf222e',
          emphasis: '#cf222e',
          muted: 'rgba(255,129,130,0.4)',
          subtle: '#FFEBE9'
        },
        done: {
          fg: '#8250df',
          emphasis: '#8250df',
          muted: 'rgba(194,151,255,0.4)',
          subtle: '#fbefff'
        },
        sponsors: {
          fg: '#bf3989',
          emphasis: '#bf3989',
          muted: 'rgba(255,128,200,0.4)',
          subtle: '#ffeff7'
        },
        primer: {
          fg: {
            disabled: '#8c959f'
          },
          canvas: {
            backdrop: 'rgba(27,31,36,0.5)',
            sticky: 'rgba(255,255,255,0.95)'
          },
          border: {
            active: '#FD8C73',
            contrast: 'rgba(27,31,36,0.1)'
          }
        }
      },
      shadows: {
        mktg: {
          btn: {
            shadow: {
              outline: 'rgb(0 0 0 / 15%) 0 0 0 1px inset',
              focus: 'rgb(0 0 0 / 15%) 0 0 0 4px',
              hover:
                '0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)',
              hoverMuted: 'rgb(0 0 0 / 70%) 0 0 0 2px inset'
            }
          }
        },
        avatar: {
          childShadow: '-2px -2px 0 rgba(255,255,255,0.8)'
        },
        overlay: {
          shadow:
            '0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12)'
        },
        btn: {
          shadow: '0 1px 0 rgba(27,31,36,0.04)',
          insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
          focusShadow: '0 0 0 3px rgba(9,105,218,0.3)',
          shadowActive: 'inset 0 0.15em 0.3em rgba(27,31,36,0.15)',
          shadowInputFocus: '0 0 0 0.2em rgba(9,105,218,0.3)',
          primary: {
            shadow: '0 1px 0 rgba(27,31,36,0.1)',
            insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(0,45,17,0.2)',
            focusShadow: '0 0 0 3px rgba(45,164,78,0.4)'
          },
          outline: {
            hoverShadow: '0 1px 0 rgba(27,31,36,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(0,33,85,0.2)',
            focusShadow: '0 0 0 3px rgba(5,80,174,0.4)'
          },
          danger: {
            hoverShadow: '0 1px 0 rgba(27,31,36,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(76,0,20,0.2)',
            focusShadow: '0 0 0 3px rgba(164,14,38,0.4)'
          }
        },
        shadow: {
          small: '0 1px 0 rgba(27,31,36,0.04)',
          medium: '0 3px 6px rgba(140,149,159,0.15)',
          large: '0 8px 24px rgba(140,149,159,0.2)',
          extraLarge: '0 12px 28px rgba(140,149,159,0.3)'
        },
        primer: {
          shadow: {
            highlight: 'inset 0 1px 0 rgba(255,255,255,0.25)',
            inset: 'inset 0 1px 0 rgba(208,215,222,0.2)',
            focus: '0 0 0 3px rgba(9,105,218,0.3)'
          }
        }
      }
    },
    light_high_contrast: {
      colors: {
        canvasDefaultTransparent: 'rgba(255,255,255,0)',
        pageHeaderBg: '#ffffff',
        marketingIcon: {
          primary: '#1168e3',
          secondary: '#368cf9'
        },
        diffBlob: {
          addition: {
            numText: '#0E1116',
            fg: '#ffffff',
            numBg: '#CCFFD8',
            lineBg: '#E6FFEC',
            wordBg: '#055d20'
          },
          deletion: {
            numText: '#0E1116',
            fg: '#ffffff',
            numBg: '#FFD7D5',
            lineBg: '#fff0ee',
            wordBg: '#a0111f'
          },
          hunk: {
            numBg: '#9cd7ff'
          },
          expander: {
            icon: '#0E1116'
          }
        },
        diffstat: {
          deletionBorder: 'rgba(1,4,9,0.8)',
          additionBorder: 'rgba(1,4,9,0.8)',
          additionBg: '#117f32'
        },
        searchKeyword: {
          hl: '#fcf7be'
        },
        prettylights: {
          syntax: {
            comment: '#66707B',
            constant: '#023b95',
            entity: '#622cbc',
            storageModifierImport: '#0E1116',
            entityTag: '#024c1a',
            keyword: '#a0111f',
            string: '#032563',
            variable: '#702c00',
            brackethighlighterUnmatched: '#6e011a',
            invalidIllegalText: '#FFFFFF',
            invalidIllegalBg: '#6e011a',
            carriageReturnText: '#FFFFFF',
            carriageReturnBg: '#a0111f',
            stringRegexp: '#024c1a',
            markupList: '#2e1800',
            markupHeading: '#023b95',
            markupItalic: '#0E1116',
            markupBold: '#0E1116',
            markupDeletedText: '#6e011a',
            markupDeletedBg: '#fff0ee',
            markupInsertedText: '#024c1a',
            markupInsertedBg: '#d2fedb',
            markupChangedText: '#702c00',
            markupChangedBg: '#ffc67b',
            markupIgnoredText: '#E7ECF0',
            markupIgnoredBg: '#023b95',
            metaDiffRange: '#622cbc',
            brackethighlighterAngle: '#4B535D',
            sublimelinterGutterMark: '#88929D',
            constantOtherReferenceLink: '#032563'
          }
        },
        codemirror: {
          text: '#0E1116',
          bg: '#ffffff',
          guttersBg: '#ffffff',
          guttermarkerText: '#ffffff',
          guttermarkerSubtleText: '#66707B',
          linenumberText: '#0E1116',
          cursor: '#0E1116',
          selectionBg: '#368cf9',
          activelineBg: '#E7ECF0',
          matchingbracketText: '#0E1116',
          linesBg: '#ffffff',
          syntax: {
            comment: '#0E1116',
            constant: '#023b95',
            entity: '#622cbc',
            keyword: '#a0111f',
            storage: '#a0111f',
            string: '#032563',
            support: '#023b95',
            variable: '#702c00'
          }
        },
        checks: {
          bg: '#0E1116',
          textPrimary: '#FFFFFF',
          textSecondary: '#88929D',
          textLink: '#368cf9',
          btnIcon: '#ACB6C0',
          btnHoverIcon: '#FFFFFF',
          btnHoverBg: 'rgba(255,255,255,0.125)',
          inputText: '#E7ECF0',
          inputPlaceholderText: '#88929D',
          inputFocusText: '#88929D',
          inputBg: '#20252C',
          donutError: '#d5232c',
          donutPending: '#956400',
          donutSuccess: '#117f32',
          donutNeutral: '#ACB6C0',
          dropdownText: '#ACB6C0',
          dropdownBg: '#20252C',
          dropdownBorder: '#343B43',
          dropdownShadow: 'rgba(1,4,9,0.3)',
          dropdownHoverText: '#FFFFFF',
          dropdownHoverBg: '#343B43',
          dropdownBtnHoverText: '#FFFFFF',
          dropdownBtnHoverBg: '#20252C',
          scrollbarThumbBg: '#4B535D',
          headerLabelText: '#CED5DC',
          headerLabelOpenText: '#FFFFFF',
          headerBorder: '#20252C',
          headerIcon: '#88929D',
          lineText: '#CED5DC',
          lineNumText: 'rgba(136,146,157,0.75)',
          lineTimestampText: '#88929D',
          lineHoverBg: '#20252C',
          lineSelectedBg: 'rgba(17,104,227,0.15)',
          lineSelectedNumText: '#368cf9',
          lineDtFmText: '#0E1116',
          lineDtFmBg: '#744500',
          gateBg: 'rgba(96,55,0,0.15)',
          gateText: '#CED5DC',
          gateWaitingText: '#b58407',
          stepHeaderOpenBg: '#20252C',
          stepErrorText: '#ee5a5d',
          stepWarningText: '#b58407',
          loglineText: '#88929D',
          loglineNumText: 'rgba(136,146,157,0.75)',
          loglineDebugText: '#a371f7',
          loglineErrorText: '#CED5DC',
          loglineErrorNumText: '#ee5a5d',
          loglineErrorBg: 'rgba(134,6,29,0.15)',
          loglineWarningText: '#CED5DC',
          loglineWarningNumText: '#b58407',
          loglineWarningBg: 'rgba(96,55,0,0.15)',
          loglineCommandText: '#368cf9',
          loglineSectionText: '#26a148',
          ansi: {
            black: '#0E1116',
            blackBright: '#20252C',
            white: '#CED5DC',
            whiteBright: '#CED5DC',
            gray: '#88929D',
            red: '#ee5a5d',
            redBright: '#ff8e8a',
            green: '#26a148',
            greenBright: '#43c663',
            yellow: '#b58407',
            yellowBright: '#d5a824',
            blue: '#368cf9',
            blueBright: '#67b3fd',
            magenta: '#a371f7',
            magentaBright: '#c49bff',
            cyan: '#76e3ea',
            cyanBright: '#b3f0ff'
          }
        },
        project: {
          headerBg: '#0E1116',
          sidebarBg: '#ffffff',
          gradientIn: '#ffffff',
          gradientOut: 'rgba(255,255,255,0)'
        },
        mktg: {
          btn: {
            bg: '#1b1f23'
          }
        },
        avatar: {
          bg: '#ffffff',
          border: 'rgba(1,4,9,0.8)',
          stackFade: '#ACB6C0',
          stackFadeMore: '#CED5DC'
        },
        topicTag: {
          border: '#0349b4'
        },
        counter: {
          border: '#20252C'
        },
        selectMenu: {
          backdropBorder: 'rgba(0,0,0,0)',
          tapHighlight: 'rgba(172,182,192,0.5)',
          tapFocusBg: '#9cd7ff'
        },
        header: {
          text: 'rgba(255,255,255,0.7)',
          bg: '#0E1116',
          divider: '#ACB6C0',
          logo: '#ffffff'
        },
        headerSearch: {
          bg: '#0E1116',
          border: '#4B535D'
        },
        sidenav: {
          selectedBg: '#ffffff'
        },
        menu: {
          bgActive: 'rgba(0,0,0,0)'
        },
        input: {
          disabledBg: 'rgba(172,182,192,0.2)'
        },
        timeline: {
          badgeBg: '#E7ECF0'
        },
        ansi: {
          black: '#0E1116',
          blackBright: '#4B535D',
          white: '#66707B',
          whiteBright: '#88929D',
          gray: '#66707B',
          red: '#a0111f',
          redBright: '#86061d',
          green: '#024c1a',
          greenBright: '#055d20',
          yellow: '#3f2200',
          yellowBright: '#4e2c00',
          blue: '#0349b4',
          blueBright: '#1168e3',
          magenta: '#622cbc',
          magentaBright: '#844ae7',
          cyan: '#1b7c83',
          cyanBright: '#3192aa'
        },
        btn: {
          text: '#0E1116',
          bg: '#E7ECF0',
          border: 'rgba(1,4,9,0.8)',
          hoverBg: '#CED5DC',
          hoverBorder: 'rgba(1,4,9,0.8)',
          activeBg: '#ACB6C0',
          activeBorder: 'rgba(1,4,9,0.8)',
          selectedBg: '#ACB6C0',
          focusBg: '#CED5DC',
          focusBorder: 'rgba(1,4,9,0.8)',
          counterBg: 'rgba(1,4,9,0.08)',
          primary: {
            text: '#ffffff',
            bg: '#055d20',
            border: '#013d14',
            hoverBg: '#024c1a',
            hoverBorder: '#013d14',
            selectedBg: 'hsla(139,95%,13%,1)',
            disabledText: 'rgba(255,255,255,0.8)',
            disabledBg: '#94d3a2',
            disabledBorder: 'rgba(1,4,9,0.8)',
            focusBg: '#013d14',
            focusBorder: '#013d14',
            icon: 'rgba(255,255,255,0.8)',
            counterBg: 'rgba(255,255,255,0.2)'
          },
          outline: {
            text: '#023b95',
            hoverText: '#ffffff',
            hoverBg: '#0349b4',
            hoverBorder: '#022f7a',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: '#022f7a',
            selectedBorder: '#022f7a',
            disabledText: 'rgba(3,73,180,0.5)',
            disabledBg: '#E7ECF0',
            disabledCounterBg: 'rgba(3,73,180,0.05)',
            focusBorder: '#022f7a',
            counterBg: 'rgba(3,73,180,0.1)'
          },
          danger: {
            text: '#86061d',
            hoverText: '#ffffff',
            hoverBg: '#a0111f',
            hoverBorder: '#6e011a',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: '#6e011a',
            selectedBorder: '#6e011a',
            disabledText: 'rgba(160,17,31,0.5)',
            disabledBg: '#E7ECF0',
            disabledCounterBg: 'rgba(160,17,31,0.05)',
            focusBorder: '#6e011a',
            counterBg: 'rgba(160,17,31,0.1)',
            icon: '#86061d',
            hoverIcon: '#ffffff'
          }
        },
        underlinenav: {
          icon: '#66707B',
          borderHover: 'rgba(172,182,192,0.2)'
        },
        actionListItem: {
          inlineDivider: '#88929D',
          default: {
            hoverBg: '#E7ECF0',
            hoverBorder: '#88929D',
            activeBg: '#CED5DC',
            activeBorder: '#20252C',
            selectedBg: '#CED5DC'
          },
          danger: {
            hoverBg: '#a0111f',
            activeBg: '#6e011a',
            hoverText: '#ffffff'
          }
        },
        fg: {
          default: '#0E1116',
          muted: '#0E1116',
          subtle: '#66707B',
          onEmphasis: '#ffffff'
        },
        canvas: {
          default: '#ffffff',
          overlay: '#ffffff',
          inset: '#ffffff',
          subtle: '#E7ECF0'
        },
        border: {
          default: '#20252C',
          muted: '#88929D',
          subtle: 'rgba(1,4,9,0.8)'
        },
        neutral: {
          emphasisPlus: '#0E1116',
          emphasis: '#66707B',
          muted: 'rgba(172,182,192,0.2)',
          subtle: '#E7ECF0'
        },
        accent: {
          fg: '#0349b4',
          emphasis: '#0349b4',
          muted: '#368cf9',
          subtle: '#dff7ff'
        },
        success: {
          fg: '#055d20',
          emphasis: '#055d20',
          muted: '#26a148',
          subtle: '#d2fedb'
        },
        attention: {
          fg: '#744500',
          emphasis: '#744500',
          muted: '#b58407',
          subtle: '#fcf7be'
        },
        severe: {
          fg: '#873800',
          emphasis: '#873800',
          muted: '#dc6d1a',
          subtle: '#fff2d5'
        },
        danger: {
          fg: '#a0111f',
          emphasis: '#a0111f',
          muted: '#ee5a5d',
          subtle: '#fff0ee'
        },
        open: {
          fg: '#055d20',
          emphasis: '#117f32',
          muted: 'rgba(38,161,72,0.4)',
          subtle: '#d2fedb'
        },
        closed: {
          fg: '#a0111f',
          emphasis: '#a0111f',
          muted: 'rgba(238,90,93,0.4)',
          subtle: '#fff0ee'
        },
        done: {
          fg: '#622cbc',
          emphasis: '#622cbc',
          muted: '#a371f7',
          subtle: '#faf0fe'
        },
        sponsors: {
          fg: '#971368',
          emphasis: '#971368',
          muted: '#ed4baf',
          subtle: '#feeff7'
        },
        primer: {
          fg: {
            disabled: '#88929D'
          },
          canvas: {
            backdrop: 'rgba(1,4,9,0.5)',
            sticky: 'rgba(255,255,255,0.95)'
          },
          border: {
            active: '#ef5b48',
            contrast: 'rgba(1,4,9,0.1)'
          }
        }
      },
      shadows: {
        mktg: {
          btn: {
            shadow: {
              outline: 'rgb(0 0 0 / 15%) 0 0 0 1px inset',
              focus: 'rgb(0 0 0 / 15%) 0 0 0 4px',
              hover:
                '0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)',
              hoverMuted: 'rgb(0 0 0 / 70%) 0 0 0 2px inset'
            }
          }
        },
        avatar: {
          childShadow: '-2px -2px 0 rgba(255,255,255,0.8)'
        },
        overlay: {
          shadow: '0 1px 3px rgba(1,4,9,0.12), 0 8px 24px rgba(52,59,67,0.12)'
        },
        btn: {
          shadow: '0 1px 0 rgba(1,4,9,0.04)',
          insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
          focusShadow: '0 0 0 3px rgba(3,73,180,0.3)',
          shadowActive: 'inset 0 0.15em 0.3em rgba(1,4,9,0.15)',
          shadowInputFocus: '0 0 0 0.2em rgba(3,73,180,0.3)',
          primary: {
            shadow: '0 1px 0 rgba(1,4,9,0.1)',
            insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(0,35,11,0.2)',
            focusShadow: '0 0 0 3px rgba(1,61,20,0.4)'
          },
          outline: {
            hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(2,26,74,0.2)',
            focusShadow: '0 0 0 3px rgba(2,59,149,0.4)'
          },
          danger: {
            hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(67,0,17,0.2)',
            focusShadow: '0 0 0 3px rgba(134,6,29,0.4)'
          }
        },
        shadow: {
          small: '0 1px 0 rgba(1,4,9,0.04)',
          medium: '0 3px 6px rgba(136,146,157,0.15)',
          large: '0 8px 24px rgba(136,146,157,0.2)',
          extraLarge: '0 12px 28px rgba(136,146,157,0.3)'
        },
        primer: {
          shadow: {
            highlight: 'inset 0 1px 0 rgba(255,255,255,0.25)',
            inset: 'inset 0 1px 0 rgba(206,213,220,0.2)',
            focus: '0 0 0 3px rgba(3,73,180,0.3)'
          }
        }
      }
    },
    light_colorblind: {
      colors: {
        canvasDefaultTransparent: 'rgba(255,255,255,0)',
        pageHeaderBg: '#f6f8fa',
        marketingIcon: {
          primary: '#218bff',
          secondary: '#54aeff'
        },
        diffBlob: {
          addition: {
            numText: '#24292f',
            fg: '#24292f',
            numBg: 'rgba(84,174,255,0.4)',
            lineBg: 'rgba(221,244,255,0.5)',
            wordBg: 'rgba(84,174,255,0.4)'
          },
          deletion: {
            numText: '#24292f',
            fg: '#24292f',
            numBg: 'rgba(247,153,57,0.4)',
            lineBg: 'rgba(255,245,232,0.5)',
            wordBg: 'rgba(255,188,109,0.5)'
          },
          hunk: {
            numBg: 'rgba(84,174,255,0.4)'
          },
          expander: {
            icon: '#57606a'
          }
        },
        diffstat: {
          deletionBorder: 'rgba(27,31,36,0.15)',
          additionBorder: 'rgba(27,31,36,0.15)',
          additionBg: '#218bff'
        },
        searchKeyword: {
          hl: '#fff8c5'
        },
        prettylights: {
          syntax: {
            comment: '#6e7781',
            constant: '#0550ae',
            entity: '#8250df',
            storageModifierImport: '#24292f',
            entityTag: '#0550ae',
            keyword: '#b35900',
            string: '#0a3069',
            variable: '#8a4600',
            brackethighlighterUnmatched: '#6f3800',
            invalidIllegalText: '#f6f8fa',
            invalidIllegalBg: '#6f3800',
            carriageReturnText: '#f6f8fa',
            carriageReturnBg: '#b35900',
            stringRegexp: '#0550ae',
            markupList: '#3b2300',
            markupHeading: '#0550ae',
            markupItalic: '#24292f',
            markupBold: '#24292f',
            markupDeletedText: '#6f3800',
            markupDeletedBg: '#fff5e8',
            markupInsertedText: '#0550ae',
            markupInsertedBg: '#ddf4ff',
            markupChangedText: '#8a4600',
            markupChangedBg: '#ffddb0',
            markupIgnoredText: '#eaeef2',
            markupIgnoredBg: '#0550ae',
            metaDiffRange: '#8250df',
            brackethighlighterAngle: '#57606a',
            sublimelinterGutterMark: '#8c959f',
            constantOtherReferenceLink: '#0a3069'
          }
        },
        codemirror: {
          text: '#24292f',
          bg: '#ffffff',
          guttersBg: '#ffffff',
          guttermarkerText: '#ffffff',
          guttermarkerSubtleText: '#6e7781',
          linenumberText: '#57606a',
          cursor: '#24292f',
          selectionBg: 'rgba(84,174,255,0.4)',
          activelineBg: 'rgba(234,238,242,0.5)',
          matchingbracketText: '#24292f',
          linesBg: '#ffffff',
          syntax: {
            comment: '#24292f',
            constant: '#0550ae',
            entity: '#8250df',
            keyword: '#b35900',
            storage: '#b35900',
            string: '#0a3069',
            support: '#0550ae',
            variable: '#8a4600'
          }
        },
        checks: {
          bg: '#24292f',
          textPrimary: '#f6f8fa',
          textSecondary: '#8c959f',
          textLink: '#54aeff',
          btnIcon: '#afb8c1',
          btnHoverIcon: '#f6f8fa',
          btnHoverBg: 'rgba(255,255,255,0.125)',
          inputText: '#eaeef2',
          inputPlaceholderText: '#8c959f',
          inputFocusText: '#8c959f',
          inputBg: '#32383f',
          donutError: '#dd7815',
          donutPending: '#bf8700',
          donutSuccess: '#218bff',
          donutNeutral: '#afb8c1',
          dropdownText: '#afb8c1',
          dropdownBg: '#32383f',
          dropdownBorder: '#424a53',
          dropdownShadow: 'rgba(27,31,36,0.3)',
          dropdownHoverText: '#f6f8fa',
          dropdownHoverBg: '#424a53',
          dropdownBtnHoverText: '#f6f8fa',
          dropdownBtnHoverBg: '#32383f',
          scrollbarThumbBg: '#57606a',
          headerLabelText: '#d0d7de',
          headerLabelOpenText: '#f6f8fa',
          headerBorder: '#32383f',
          headerIcon: '#8c959f',
          lineText: '#d0d7de',
          lineNumText: 'rgba(140,149,159,0.75)',
          lineTimestampText: '#8c959f',
          lineHoverBg: '#32383f',
          lineSelectedBg: 'rgba(33,139,255,0.15)',
          lineSelectedNumText: '#54aeff',
          lineDtFmText: '#24292f',
          lineDtFmBg: '#9a6700',
          gateBg: 'rgba(125,78,0,0.15)',
          gateText: '#d0d7de',
          gateWaitingText: '#d4a72c',
          stepHeaderOpenBg: '#32383f',
          stepErrorText: '#f79939',
          stepWarningText: '#d4a72c',
          loglineText: '#8c959f',
          loglineNumText: 'rgba(140,149,159,0.75)',
          loglineDebugText: '#c297ff',
          loglineErrorText: '#d0d7de',
          loglineErrorNumText: '#f79939',
          loglineErrorBg: 'rgba(138,70,0,0.15)',
          loglineWarningText: '#d0d7de',
          loglineWarningNumText: '#d4a72c',
          loglineWarningBg: 'rgba(125,78,0,0.15)',
          loglineCommandText: '#54aeff',
          loglineSectionText: '#54aeff',
          ansi: {
            black: '#24292f',
            blackBright: '#32383f',
            white: '#d0d7de',
            whiteBright: '#d0d7de',
            gray: '#8c959f',
            red: '#f79939',
            redBright: '#ffbc6d',
            green: '#54aeff',
            greenBright: '#80ccff',
            yellow: '#d4a72c',
            yellowBright: '#eac54f',
            blue: '#54aeff',
            blueBright: '#80ccff',
            magenta: '#c297ff',
            magentaBright: '#d8b9ff',
            cyan: '#76e3ea',
            cyanBright: '#b3f0ff'
          }
        },
        project: {
          headerBg: '#24292f',
          sidebarBg: '#ffffff',
          gradientIn: '#ffffff',
          gradientOut: 'rgba(255,255,255,0)'
        },
        mktg: {
          btn: {
            bg: '#1b1f23'
          }
        },
        avatar: {
          bg: '#ffffff',
          border: 'rgba(27,31,36,0.15)',
          stackFade: '#afb8c1',
          stackFadeMore: '#d0d7de'
        },
        topicTag: {
          border: 'rgba(0,0,0,0)'
        },
        counter: {
          border: 'rgba(0,0,0,0)'
        },
        selectMenu: {
          backdropBorder: 'rgba(0,0,0,0)',
          tapHighlight: 'rgba(175,184,193,0.5)',
          tapFocusBg: '#b6e3ff'
        },
        header: {
          text: 'rgba(255,255,255,0.7)',
          bg: '#24292f',
          divider: '#57606a',
          logo: '#ffffff'
        },
        headerSearch: {
          bg: '#24292f',
          border: '#57606a'
        },
        sidenav: {
          selectedBg: '#ffffff'
        },
        menu: {
          bgActive: 'rgba(0,0,0,0)'
        },
        input: {
          disabledBg: 'rgba(175,184,193,0.2)'
        },
        timeline: {
          badgeBg: '#eaeef2'
        },
        ansi: {
          black: '#24292f',
          blackBright: '#57606a',
          white: '#6e7781',
          whiteBright: '#8c959f',
          gray: '#6e7781',
          red: '#b35900',
          redBright: '#8a4600',
          green: '#0550ae',
          greenBright: '#0969da',
          yellow: '#4d2d00',
          yellowBright: '#633c01',
          blue: '#0969da',
          blueBright: '#218bff',
          magenta: '#8250df',
          magentaBright: '#a475f9',
          cyan: '#1b7c83',
          cyanBright: '#3192aa'
        },
        btn: {
          text: '#24292f',
          bg: '#f6f8fa',
          border: 'rgba(27,31,36,0.15)',
          hoverBg: '#f3f4f6',
          hoverBorder: 'rgba(27,31,36,0.15)',
          activeBg: 'hsla(220,14%,93%,1)',
          activeBorder: 'rgba(27,31,36,0.15)',
          selectedBg: 'hsla(220,14%,94%,1)',
          focusBg: '#f6f8fa',
          focusBorder: 'rgba(27,31,36,0.15)',
          counterBg: 'rgba(27,31,36,0.08)',
          primary: {
            text: '#ffffff',
            bg: '#218bff',
            border: 'rgba(27,31,36,0.15)',
            hoverBg: '#0969da',
            hoverBorder: 'rgba(27,31,36,0.15)',
            selectedBg: 'hsla(212,92%,43%,1)',
            disabledText: 'rgba(255,255,255,0.8)',
            disabledBg: '#80ccff',
            disabledBorder: 'rgba(27,31,36,0.15)',
            focusBg: '#218bff',
            focusBorder: 'rgba(27,31,36,0.15)',
            icon: 'rgba(255,255,255,0.8)',
            counterBg: 'rgba(255,255,255,0.2)'
          },
          outline: {
            text: '#0969da',
            hoverText: '#ffffff',
            hoverBg: '#0969da',
            hoverBorder: 'rgba(27,31,36,0.15)',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: 'hsla(212,92%,42%,1)',
            selectedBorder: 'rgba(27,31,36,0.15)',
            disabledText: 'rgba(9,105,218,0.5)',
            disabledBg: '#f6f8fa',
            disabledCounterBg: 'rgba(9,105,218,0.05)',
            focusBorder: 'rgba(27,31,36,0.15)',
            counterBg: 'rgba(9,105,218,0.1)'
          },
          danger: {
            text: '#b35900',
            hoverText: '#ffffff',
            hoverBg: '#8a4600',
            hoverBorder: 'rgba(27,31,36,0.15)',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: 'hsla(30,100%,32%,1)',
            selectedBorder: 'rgba(27,31,36,0.15)',
            disabledText: 'rgba(179,89,0,0.5)',
            disabledBg: '#f6f8fa',
            disabledCounterBg: 'rgba(179,89,0,0.05)',
            focusBorder: 'rgba(27,31,36,0.15)',
            counterBg: 'rgba(179,89,0,0.1)',
            icon: '#b35900',
            hoverIcon: '#ffffff'
          }
        },
        underlinenav: {
          icon: '#6e7781',
          borderHover: 'rgba(175,184,193,0.2)'
        },
        actionListItem: {
          inlineDivider: 'rgba(208,215,222,0.48)',
          default: {
            hoverBg: 'rgba(208,215,222,0.32)',
            hoverBorder: 'rgba(0,0,0,0)',
            activeBg: 'rgba(208,215,222,0.48)',
            activeBorder: 'rgba(0,0,0,0)',
            selectedBg: 'rgba(208,215,222,0.24)'
          },
          danger: {
            hoverBg: 'rgba(255,245,232,0.64)',
            activeBg: '#fff5e8',
            hoverText: '#b35900'
          }
        },
        fg: {
          default: '#24292f',
          muted: '#57606a',
          subtle: '#6e7781',
          onEmphasis: '#ffffff'
        },
        canvas: {
          default: '#ffffff',
          overlay: '#ffffff',
          inset: '#f6f8fa',
          subtle: '#f6f8fa'
        },
        border: {
          default: '#d0d7de',
          muted: 'hsla(210,18%,87%,1)',
          subtle: 'rgba(27,31,36,0.15)'
        },
        neutral: {
          emphasisPlus: '#24292f',
          emphasis: '#6e7781',
          muted: 'rgba(175,184,193,0.2)',
          subtle: 'rgba(234,238,242,0.5)'
        },
        accent: {
          fg: '#0969da',
          emphasis: '#0969da',
          muted: 'rgba(84,174,255,0.4)',
          subtle: '#ddf4ff'
        },
        success: {
          fg: '#0969da',
          emphasis: '#218bff',
          muted: 'rgba(84,174,255,0.4)',
          subtle: '#ddf4ff'
        },
        attention: {
          fg: '#9a6700',
          emphasis: '#bf8700',
          muted: 'rgba(212,167,44,0.4)',
          subtle: '#fff8c5'
        },
        severe: {
          fg: '#b35900',
          emphasis: '#b35900',
          muted: 'rgba(247,153,57,0.4)',
          subtle: '#fff5e8'
        },
        danger: {
          fg: '#b35900',
          emphasis: '#b35900',
          muted: 'rgba(247,153,57,0.4)',
          subtle: '#fff5e8'
        },
        open: {
          fg: '#b35900',
          emphasis: '#dd7815',
          muted: 'rgba(247,153,57,0.4)',
          subtle: '#fff5e8'
        },
        closed: {
          fg: '#6e7781',
          emphasis: '#6e7781',
          muted: 'rgba(175,184,193,0.4)',
          subtle: '#f6f8fa'
        },
        done: {
          fg: '#8250df',
          emphasis: '#8250df',
          muted: 'rgba(194,151,255,0.4)',
          subtle: '#fbefff'
        },
        sponsors: {
          fg: '#bf3989',
          emphasis: '#bf3989',
          muted: 'rgba(255,128,200,0.4)',
          subtle: '#ffeff7'
        },
        primer: {
          fg: {
            disabled: '#8c959f'
          },
          canvas: {
            backdrop: 'rgba(27,31,36,0.5)',
            sticky: 'rgba(255,255,255,0.95)'
          },
          border: {
            active: '#FD8C73',
            contrast: 'rgba(27,31,36,0.1)'
          }
        }
      },
      shadows: {
        mktg: {
          btn: {
            shadow: {
              outline: 'rgb(0 0 0 / 15%) 0 0 0 1px inset',
              focus: 'rgb(0 0 0 / 15%) 0 0 0 4px',
              hover:
                '0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)',
              hoverMuted: 'rgb(0 0 0 / 70%) 0 0 0 2px inset'
            }
          }
        },
        avatar: {
          childShadow: '-2px -2px 0 rgba(255,255,255,0.8)'
        },
        overlay: {
          shadow:
            '0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12)'
        },
        btn: {
          shadow: '0 1px 0 rgba(27,31,36,0.04)',
          insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
          focusShadow: '0 0 0 3px rgba(9,105,218,0.3)',
          shadowActive: 'inset 0 0.15em 0.3em rgba(27,31,36,0.15)',
          shadowInputFocus: '0 0 0 0.2em rgba(9,105,218,0.3)',
          primary: {
            shadow: '0 1px 0 rgba(27,31,36,0.1)',
            insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(0,33,85,0.2)',
            focusShadow: '0 0 0 3px rgba(33,139,255,0.4)'
          },
          outline: {
            hoverShadow: '0 1px 0 rgba(27,31,36,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(0,33,85,0.2)',
            focusShadow: '0 0 0 3px rgba(5,80,174,0.4)'
          },
          danger: {
            hoverShadow: '0 1px 0 rgba(27,31,36,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(65,32,0,0.2)',
            focusShadow: '0 0 0 3px rgba(138,70,0,0.4)'
          }
        },
        shadow: {
          small: '0 1px 0 rgba(27,31,36,0.04)',
          medium: '0 3px 6px rgba(140,149,159,0.15)',
          large: '0 8px 24px rgba(140,149,159,0.2)',
          extraLarge: '0 12px 28px rgba(140,149,159,0.3)'
        },
        primer: {
          shadow: {
            highlight: 'inset 0 1px 0 rgba(255,255,255,0.25)',
            inset: 'inset 0 1px 0 rgba(208,215,222,0.2)',
            focus: '0 0 0 3px rgba(9,105,218,0.3)'
          }
        }
      }
    },
    dark: {
      colors: {
        canvasDefaultTransparent: 'rgba(13,17,23,0)',
        pageHeaderBg: '#0d1117',
        marketingIcon: {
          primary: '#79c0ff',
          secondary: '#1f6feb'
        },
        diffBlob: {
          addition: {
            numText: '#c9d1d9',
            fg: '#c9d1d9',
            numBg: 'rgba(63,185,80,0.3)',
            lineBg: 'rgba(46,160,67,0.15)',
            wordBg: 'rgba(46,160,67,0.4)'
          },
          deletion: {
            numText: '#c9d1d9',
            fg: '#c9d1d9',
            numBg: 'rgba(248,81,73,0.3)',
            lineBg: 'rgba(248,81,73,0.15)',
            wordBg: 'rgba(248,81,73,0.4)'
          },
          hunk: {
            numBg: 'rgba(56,139,253,0.4)'
          },
          expander: {
            icon: '#8b949e'
          }
        },
        diffstat: {
          deletionBorder: 'rgba(240,246,252,0.1)',
          additionBorder: 'rgba(240,246,252,0.1)',
          additionBg: '#3fb950'
        },
        searchKeyword: {
          hl: 'rgba(210,153,34,0.4)'
        },
        prettylights: {
          syntax: {
            comment: '#8b949e',
            constant: '#79c0ff',
            entity: '#d2a8ff',
            storageModifierImport: '#c9d1d9',
            entityTag: '#7ee787',
            keyword: '#ff7b72',
            string: '#a5d6ff',
            variable: '#ffa657',
            brackethighlighterUnmatched: '#f85149',
            invalidIllegalText: '#f0f6fc',
            invalidIllegalBg: '#8e1519',
            carriageReturnText: '#f0f6fc',
            carriageReturnBg: '#b62324',
            stringRegexp: '#7ee787',
            markupList: '#f2cc60',
            markupHeading: '#1f6feb',
            markupItalic: '#c9d1d9',
            markupBold: '#c9d1d9',
            markupDeletedText: '#ffdcd7',
            markupDeletedBg: '#67060c',
            markupInsertedText: '#aff5b4',
            markupInsertedBg: '#033a16',
            markupChangedText: '#ffdfb6',
            markupChangedBg: '#5a1e02',
            markupIgnoredText: '#c9d1d9',
            markupIgnoredBg: '#1158c7',
            metaDiffRange: '#d2a8ff',
            brackethighlighterAngle: '#8b949e',
            sublimelinterGutterMark: '#484f58',
            constantOtherReferenceLink: '#a5d6ff'
          }
        },
        codemirror: {
          text: '#c9d1d9',
          bg: '#0d1117',
          guttersBg: '#0d1117',
          guttermarkerText: '#0d1117',
          guttermarkerSubtleText: '#484f58',
          linenumberText: '#8b949e',
          cursor: '#c9d1d9',
          selectionBg: 'rgba(56,139,253,0.4)',
          activelineBg: 'rgba(110,118,129,0.1)',
          matchingbracketText: '#c9d1d9',
          linesBg: '#0d1117',
          syntax: {
            comment: '#8b949e',
            constant: '#79c0ff',
            entity: '#d2a8ff',
            keyword: '#ff7b72',
            storage: '#ff7b72',
            string: '#a5d6ff',
            support: '#79c0ff',
            variable: '#ffa657'
          }
        },
        checks: {
          bg: '#010409',
          textPrimary: '#c9d1d9',
          textSecondary: '#8b949e',
          textLink: '#58a6ff',
          btnIcon: '#8b949e',
          btnHoverIcon: '#c9d1d9',
          btnHoverBg: 'rgba(110,118,129,0.1)',
          inputText: '#8b949e',
          inputPlaceholderText: '#484f58',
          inputFocusText: '#c9d1d9',
          inputBg: '#161b22',
          donutError: '#f85149',
          donutPending: '#d29922',
          donutSuccess: '#2ea043',
          donutNeutral: '#8b949e',
          dropdownText: '#c9d1d9',
          dropdownBg: '#161b22',
          dropdownBorder: '#30363d',
          dropdownShadow: 'rgba(1,4,9,0.3)',
          dropdownHoverText: '#c9d1d9',
          dropdownHoverBg: 'rgba(110,118,129,0.1)',
          dropdownBtnHoverText: '#c9d1d9',
          dropdownBtnHoverBg: 'rgba(110,118,129,0.1)',
          scrollbarThumbBg: 'rgba(110,118,129,0.4)',
          headerLabelText: '#8b949e',
          headerLabelOpenText: '#c9d1d9',
          headerBorder: '#21262d',
          headerIcon: '#8b949e',
          lineText: '#8b949e',
          lineNumText: '#484f58',
          lineTimestampText: '#484f58',
          lineHoverBg: 'rgba(110,118,129,0.1)',
          lineSelectedBg: 'rgba(56,139,253,0.15)',
          lineSelectedNumText: '#58a6ff',
          lineDtFmText: '#ffffff',
          lineDtFmBg: '#9e6a03',
          gateBg: 'rgba(187,128,9,0.15)',
          gateText: '#8b949e',
          gateWaitingText: '#d29922',
          stepHeaderOpenBg: '#161b22',
          stepErrorText: '#f85149',
          stepWarningText: '#d29922',
          loglineText: '#8b949e',
          loglineNumText: '#484f58',
          loglineDebugText: '#a371f7',
          loglineErrorText: '#8b949e',
          loglineErrorNumText: '#484f58',
          loglineErrorBg: 'rgba(248,81,73,0.15)',
          loglineWarningText: '#8b949e',
          loglineWarningNumText: '#d29922',
          loglineWarningBg: 'rgba(187,128,9,0.15)',
          loglineCommandText: '#58a6ff',
          loglineSectionText: '#3fb950',
          ansi: {
            black: '#0d1117',
            blackBright: '#161b22',
            white: '#b1bac4',
            whiteBright: '#b1bac4',
            gray: '#6e7681',
            red: '#ff7b72',
            redBright: '#ffa198',
            green: '#3fb950',
            greenBright: '#56d364',
            yellow: '#d29922',
            yellowBright: '#e3b341',
            blue: '#58a6ff',
            blueBright: '#79c0ff',
            magenta: '#bc8cff',
            magentaBright: '#d2a8ff',
            cyan: '#76e3ea',
            cyanBright: '#b3f0ff'
          }
        },
        project: {
          headerBg: '#0d1117',
          sidebarBg: '#161b22',
          gradientIn: '#161b22',
          gradientOut: 'rgba(22,27,34,0)'
        },
        mktg: {
          btn: {
            bg: '#f6f8fa'
          }
        },
        avatar: {
          bg: 'rgba(255,255,255,0.1)',
          border: 'rgba(240,246,252,0.1)',
          stackFade: '#30363d',
          stackFadeMore: '#21262d'
        },
        topicTag: {
          border: 'rgba(0,0,0,0)'
        },
        counter: {
          border: 'rgba(0,0,0,0)'
        },
        selectMenu: {
          backdropBorder: '#484f58',
          tapHighlight: 'rgba(48,54,61,0.5)',
          tapFocusBg: '#0c2d6b'
        },
        header: {
          text: 'rgba(255,255,255,0.7)',
          bg: '#161b22',
          divider: '#8b949e',
          logo: '#f0f6fc'
        },
        headerSearch: {
          bg: '#0d1117',
          border: '#30363d'
        },
        sidenav: {
          selectedBg: '#21262d'
        },
        menu: {
          bgActive: '#161b22'
        },
        input: {
          disabledBg: 'rgba(110,118,129,0)'
        },
        timeline: {
          badgeBg: '#21262d'
        },
        ansi: {
          black: '#484f58',
          blackBright: '#6e7681',
          white: '#b1bac4',
          whiteBright: '#ffffff',
          gray: '#6e7681',
          red: '#ff7b72',
          redBright: '#ffa198',
          green: '#3fb950',
          greenBright: '#56d364',
          yellow: '#d29922',
          yellowBright: '#e3b341',
          blue: '#58a6ff',
          blueBright: '#79c0ff',
          magenta: '#bc8cff',
          magentaBright: '#d2a8ff',
          cyan: '#39c5cf',
          cyanBright: '#56d4dd'
        },
        btn: {
          text: '#c9d1d9',
          bg: '#21262d',
          border: 'rgba(240,246,252,0.1)',
          hoverBg: '#30363d',
          hoverBorder: '#8b949e',
          activeBg: 'hsla(212,12%,18%,1)',
          activeBorder: '#6e7681',
          selectedBg: '#161b22',
          focusBg: '#21262d',
          focusBorder: '#8b949e',
          counterBg: '#30363d',
          primary: {
            text: '#ffffff',
            bg: '#238636',
            border: 'rgba(240,246,252,0.1)',
            hoverBg: '#2ea043',
            hoverBorder: 'rgba(240,246,252,0.1)',
            selectedBg: '#238636',
            disabledText: 'rgba(255,255,255,0.5)',
            disabledBg: 'rgba(35,134,54,0.6)',
            disabledBorder: 'rgba(240,246,252,0.1)',
            focusBg: '#238636',
            focusBorder: 'rgba(240,246,252,0.1)',
            icon: '#ffffff',
            counterBg: 'rgba(255,255,255,0.2)'
          },
          outline: {
            text: '#58a6ff',
            hoverText: '#58a6ff',
            hoverBg: '#30363d',
            hoverBorder: 'rgba(240,246,252,0.1)',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: '#0d419d',
            selectedBorder: 'rgba(240,246,252,0.1)',
            disabledText: 'rgba(88,166,255,0.5)',
            disabledBg: '#0d1117',
            disabledCounterBg: 'rgba(31,111,235,0.05)',
            focusBorder: 'rgba(240,246,252,0.1)',
            counterBg: 'rgba(31,111,235,0.1)'
          },
          danger: {
            text: '#f85149',
            hoverText: '#ffffff',
            hoverBg: '#da3633',
            hoverBorder: '#f85149',
            hoverIcon: '#ffffff',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: '#b62324',
            selectedBorder: '#ff7b72',
            disabledText: 'rgba(248,81,73,0.5)',
            disabledBg: '#0d1117',
            disabledCounterBg: 'rgba(218,54,51,0.05)',
            focusBorder: '#f85149',
            counterBg: 'rgba(218,54,51,0.1)',
            icon: '#f85149'
          }
        },
        underlinenav: {
          icon: '#484f58',
          borderHover: 'rgba(110,118,129,0.4)'
        },
        actionListItem: {
          inlineDivider: 'rgba(48,54,61,0.48)',
          default: {
            hoverBg: 'rgba(177,186,196,0.12)',
            hoverBorder: 'rgba(0,0,0,0)',
            activeBg: 'rgba(177,186,196,0.2)',
            activeBorder: 'rgba(0,0,0,0)',
            selectedBg: 'rgba(177,186,196,0.08)'
          },
          danger: {
            hoverBg: 'rgba(248,81,73,0.16)',
            activeBg: 'rgba(248,81,73,0.24)',
            hoverText: '#ff7b72'
          }
        },
        fg: {
          default: '#c9d1d9',
          muted: '#8b949e',
          subtle: '#484f58',
          onEmphasis: '#ffffff'
        },
        canvas: {
          default: '#0d1117',
          overlay: '#161b22',
          inset: '#010409',
          subtle: '#161b22'
        },
        border: {
          default: '#30363d',
          muted: '#21262d',
          subtle: 'rgba(240,246,252,0.1)'
        },
        neutral: {
          emphasisPlus: '#6e7681',
          emphasis: '#6e7681',
          muted: 'rgba(110,118,129,0.4)',
          subtle: 'rgba(110,118,129,0.1)'
        },
        accent: {
          fg: '#58a6ff',
          emphasis: '#1f6feb',
          muted: 'rgba(56,139,253,0.4)',
          subtle: 'rgba(56,139,253,0.15)'
        },
        success: {
          fg: '#3fb950',
          emphasis: '#238636',
          muted: 'rgba(46,160,67,0.4)',
          subtle: 'rgba(46,160,67,0.15)'
        },
        attention: {
          fg: '#d29922',
          emphasis: '#9e6a03',
          muted: 'rgba(187,128,9,0.4)',
          subtle: 'rgba(187,128,9,0.15)'
        },
        severe: {
          fg: '#db6d28',
          emphasis: '#bd561d',
          muted: 'rgba(219,109,40,0.4)',
          subtle: 'rgba(219,109,40,0.15)'
        },
        danger: {
          fg: '#f85149',
          emphasis: '#da3633',
          muted: 'rgba(248,81,73,0.4)',
          subtle: 'rgba(248,81,73,0.15)'
        },
        open: {
          fg: '#3fb950',
          emphasis: '#238636',
          muted: 'rgba(46,160,67,0.4)',
          subtle: 'rgba(46,160,67,0.15)'
        },
        closed: {
          fg: '#f85149',
          emphasis: '#da3633',
          muted: 'rgba(248,81,73,0.4)',
          subtle: 'rgba(248,81,73,0.15)'
        },
        done: {
          fg: '#a371f7',
          emphasis: '#8957e5',
          muted: 'rgba(163,113,247,0.4)',
          subtle: 'rgba(163,113,247,0.15)'
        },
        sponsors: {
          fg: '#db61a2',
          emphasis: '#bf4b8a',
          muted: 'rgba(219,97,162,0.4)',
          subtle: 'rgba(219,97,162,0.15)'
        },
        primer: {
          fg: {
            disabled: '#484f58'
          },
          canvas: {
            backdrop: 'rgba(1,4,9,0.8)',
            sticky: 'rgba(13,17,23,0.95)'
          },
          border: {
            active: '#F78166',
            contrast: 'rgba(255,255,255,0.2)'
          }
        }
      },
      shadows: {
        checks: {
          inputShadow: '0 0 0 1px (obj) => get_1.default(obj, path)'
        },
        mktg: {
          btn: {
            shadow: {
              outline: 'rgb(255 255 255 / 25%) 0 0 0 1px inset',
              focus: 'rgb(255 255 255 / 25%) 0 0 0 4px',
              hover:
                '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
              hoverMuted: 'rgb(255 255 255) 0 0 0 2px inset'
            }
          }
        },
        avatar: {
          childShadow: '-2px -2px 0 #0d1117'
        },
        overlay: {
          shadow: '0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)'
        },
        btn: {
          shadow: '0 0 transparent',
          insetShadow: '0 0 transparent',
          focusShadow: '0 0 0 3px rgba(139,148,158,0.3)',
          shadowActive: 'inset 0 0.15em 0.3em rgba(1,4,9,0.15)',
          shadowInputFocus: '0 0 0 0.2em rgba(31,111,235,0.3)',
          primary: {
            shadow: '0 0 transparent',
            insetShadow: '0 0 transparent',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(46,164,79,0.4)'
          },
          outline: {
            hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(17,88,199,0.4)'
          },
          danger: {
            hoverShadow: '0 0 transparent',
            hoverInsetShadow: '0 0 transparent',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(248,81,73,0.4)'
          }
        },
        shadow: {
          small: '0 0 transparent',
          medium: '0 3px 6px #010409',
          large: '0 8px 24px #010409',
          extraLarge: '0 12px 48px #010409'
        },
        primer: {
          shadow: {
            highlight: '0 0 transparent',
            inset: '0 0 transparent',
            focus: '0 0 0 3px #0c2d6b'
          }
        }
      }
    },
    dark_dimmed: {
      colors: {
        canvasDefaultTransparent: 'rgba(34,39,46,0)',
        pageHeaderBg: '#22272e',
        marketingIcon: {
          primary: '#6cb6ff',
          secondary: '#316dca'
        },
        diffBlob: {
          addition: {
            numText: '#adbac7',
            fg: '#adbac7',
            numBg: 'rgba(87,171,90,0.3)',
            lineBg: 'rgba(70,149,74,0.15)',
            wordBg: 'rgba(70,149,74,0.4)'
          },
          deletion: {
            numText: '#adbac7',
            fg: '#adbac7',
            numBg: 'rgba(229,83,75,0.3)',
            lineBg: 'rgba(229,83,75,0.15)',
            wordBg: 'rgba(229,83,75,0.4)'
          },
          hunk: {
            numBg: 'rgba(65,132,228,0.4)'
          },
          expander: {
            icon: '#768390'
          }
        },
        diffstat: {
          deletionBorder: 'rgba(205,217,229,0.1)',
          additionBorder: 'rgba(205,217,229,0.1)',
          additionBg: '#57ab5a'
        },
        searchKeyword: {
          hl: 'rgba(198,144,38,0.4)'
        },
        prettylights: {
          syntax: {
            comment: '#768390',
            constant: '#6cb6ff',
            entity: '#dcbdfb',
            storageModifierImport: '#adbac7',
            entityTag: '#8ddb8c',
            keyword: '#f47067',
            string: '#96d0ff',
            variable: '#f69d50',
            brackethighlighterUnmatched: '#e5534b',
            invalidIllegalText: '#cdd9e5',
            invalidIllegalBg: '#922323',
            carriageReturnText: '#cdd9e5',
            carriageReturnBg: '#ad2e2c',
            stringRegexp: '#8ddb8c',
            markupList: '#eac55f',
            markupHeading: '#316dca',
            markupItalic: '#adbac7',
            markupBold: '#adbac7',
            markupDeletedText: '#ffd8d3',
            markupDeletedBg: '#78191b',
            markupInsertedText: '#b4f1b4',
            markupInsertedBg: '#1b4721',
            markupChangedText: '#ffddb0',
            markupChangedBg: '#682d0f',
            markupIgnoredText: '#adbac7',
            markupIgnoredBg: '#255ab2',
            metaDiffRange: '#dcbdfb',
            brackethighlighterAngle: '#768390',
            sublimelinterGutterMark: '#545d68',
            constantOtherReferenceLink: '#96d0ff'
          }
        },
        codemirror: {
          text: '#adbac7',
          bg: '#22272e',
          guttersBg: '#22272e',
          guttermarkerText: '#22272e',
          guttermarkerSubtleText: '#545d68',
          linenumberText: '#768390',
          cursor: '#adbac7',
          selectionBg: 'rgba(65,132,228,0.4)',
          activelineBg: 'rgba(99,110,123,0.1)',
          matchingbracketText: '#adbac7',
          linesBg: '#22272e',
          syntax: {
            comment: '#768390',
            constant: '#6cb6ff',
            entity: '#dcbdfb',
            keyword: '#f47067',
            storage: '#f47067',
            string: '#96d0ff',
            support: '#6cb6ff',
            variable: '#f69d50'
          }
        },
        checks: {
          bg: '#1c2128',
          textPrimary: '#adbac7',
          textSecondary: '#768390',
          textLink: '#539bf5',
          btnIcon: '#768390',
          btnHoverIcon: '#adbac7',
          btnHoverBg: 'rgba(99,110,123,0.1)',
          inputText: '#768390',
          inputPlaceholderText: '#545d68',
          inputFocusText: '#adbac7',
          inputBg: '#2d333b',
          donutError: '#e5534b',
          donutPending: '#c69026',
          donutSuccess: '#46954a',
          donutNeutral: '#768390',
          dropdownText: '#adbac7',
          dropdownBg: '#2d333b',
          dropdownBorder: '#444c56',
          dropdownShadow: 'rgba(28,33,40,0.3)',
          dropdownHoverText: '#adbac7',
          dropdownHoverBg: 'rgba(99,110,123,0.1)',
          dropdownBtnHoverText: '#adbac7',
          dropdownBtnHoverBg: 'rgba(99,110,123,0.1)',
          scrollbarThumbBg: 'rgba(99,110,123,0.4)',
          headerLabelText: '#768390',
          headerLabelOpenText: '#adbac7',
          headerBorder: '#373e47',
          headerIcon: '#768390',
          lineText: '#768390',
          lineNumText: '#545d68',
          lineTimestampText: '#545d68',
          lineHoverBg: 'rgba(99,110,123,0.1)',
          lineSelectedBg: 'rgba(65,132,228,0.15)',
          lineSelectedNumText: '#539bf5',
          lineDtFmText: '#cdd9e5',
          lineDtFmBg: '#966600',
          gateBg: 'rgba(174,124,20,0.15)',
          gateText: '#768390',
          gateWaitingText: '#c69026',
          stepHeaderOpenBg: '#2d333b',
          stepErrorText: '#e5534b',
          stepWarningText: '#c69026',
          loglineText: '#768390',
          loglineNumText: '#545d68',
          loglineDebugText: '#986ee2',
          loglineErrorText: '#768390',
          loglineErrorNumText: '#545d68',
          loglineErrorBg: 'rgba(229,83,75,0.15)',
          loglineWarningText: '#768390',
          loglineWarningNumText: '#c69026',
          loglineWarningBg: 'rgba(174,124,20,0.15)',
          loglineCommandText: '#539bf5',
          loglineSectionText: '#57ab5a',
          ansi: {
            black: '#22272e',
            blackBright: '#2d333b',
            white: '#909dab',
            whiteBright: '#909dab',
            gray: '#636e7b',
            red: '#f47067',
            redBright: '#ff938a',
            green: '#57ab5a',
            greenBright: '#6bc46d',
            yellow: '#c69026',
            yellowBright: '#daaa3f',
            blue: '#539bf5',
            blueBright: '#6cb6ff',
            magenta: '#b083f0',
            magentaBright: '#dcbdfb',
            cyan: '#76e3ea',
            cyanBright: '#b3f0ff'
          }
        },
        project: {
          headerBg: '#22272e',
          sidebarBg: '#2d333b',
          gradientIn: '#2d333b',
          gradientOut: 'rgba(45,51,59,0)'
        },
        mktg: {
          btn: {
            bg: '#f6f8fa'
          }
        },
        avatar: {
          bg: 'rgba(205,217,229,0.1)',
          border: 'rgba(205,217,229,0.1)',
          stackFade: '#444c56',
          stackFadeMore: '#373e47'
        },
        topicTag: {
          border: 'rgba(0,0,0,0)'
        },
        counter: {
          border: 'rgba(0,0,0,0)'
        },
        selectMenu: {
          backdropBorder: '#545d68',
          tapHighlight: 'rgba(68,76,86,0.5)',
          tapFocusBg: '#143d79'
        },
        header: {
          text: 'rgba(205,217,229,0.7)',
          bg: '#2d333b',
          divider: '#768390',
          logo: '#cdd9e5'
        },
        headerSearch: {
          bg: '#22272e',
          border: '#444c56'
        },
        sidenav: {
          selectedBg: '#373e47'
        },
        menu: {
          bgActive: '#2d333b'
        },
        input: {
          disabledBg: 'rgba(99,110,123,0)'
        },
        timeline: {
          badgeBg: '#373e47'
        },
        ansi: {
          black: '#545d68',
          blackBright: '#636e7b',
          white: '#909dab',
          whiteBright: '#cdd9e5',
          gray: '#636e7b',
          red: '#f47067',
          redBright: '#ff938a',
          green: '#57ab5a',
          greenBright: '#6bc46d',
          yellow: '#c69026',
          yellowBright: '#daaa3f',
          blue: '#539bf5',
          blueBright: '#6cb6ff',
          magenta: '#b083f0',
          magentaBright: '#dcbdfb',
          cyan: '#39c5cf',
          cyanBright: '#56d4dd'
        },
        btn: {
          text: '#adbac7',
          bg: '#373e47',
          border: 'rgba(205,217,229,0.1)',
          hoverBg: '#444c56',
          hoverBorder: '#768390',
          activeBg: 'hsla(213,12%,27%,1)',
          activeBorder: '#636e7b',
          selectedBg: '#2d333b',
          focusBg: '#373e47',
          focusBorder: '#768390',
          counterBg: '#444c56',
          primary: {
            text: '#ffffff',
            bg: '#347d39',
            border: 'rgba(205,217,229,0.1)',
            hoverBg: '#46954a',
            hoverBorder: 'rgba(205,217,229,0.1)',
            selectedBg: '#347d39',
            disabledText: 'rgba(205,217,229,0.5)',
            disabledBg: 'rgba(52,125,57,0.6)',
            disabledBorder: 'rgba(205,217,229,0.1)',
            focusBg: '#347d39',
            focusBorder: 'rgba(205,217,229,0.1)',
            icon: '#cdd9e5',
            counterBg: 'rgba(205,217,229,0.2)'
          },
          outline: {
            text: '#539bf5',
            hoverText: '#539bf5',
            hoverBg: '#444c56',
            hoverBorder: 'rgba(205,217,229,0.1)',
            hoverCounterBg: 'rgba(205,217,229,0.2)',
            selectedText: '#cdd9e5',
            selectedBg: '#1b4b91',
            selectedBorder: 'rgba(205,217,229,0.1)',
            disabledText: 'rgba(83,155,245,0.5)',
            disabledBg: '#22272e',
            disabledCounterBg: 'rgba(49,109,202,0.05)',
            focusBorder: 'rgba(205,217,229,0.1)',
            counterBg: 'rgba(49,109,202,0.1)'
          },
          danger: {
            text: '#e5534b',
            hoverText: '#cdd9e5',
            hoverBg: '#c93c37',
            hoverBorder: '#e5534b',
            hoverIcon: '#cdd9e5',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: '#ad2e2c',
            selectedBorder: '#f47067',
            disabledText: 'rgba(229,83,75,0.5)',
            disabledBg: '#22272e',
            disabledCounterBg: 'rgba(201,60,55,0.05)',
            focusBorder: '#e5534b',
            counterBg: 'rgba(201,60,55,0.1)',
            icon: '#e5534b'
          }
        },
        underlinenav: {
          icon: '#545d68',
          borderHover: 'rgba(99,110,123,0.4)'
        },
        actionListItem: {
          inlineDivider: 'rgba(68,76,86,0.48)',
          default: {
            hoverBg: 'rgba(144,157,171,0.12)',
            hoverBorder: 'rgba(0,0,0,0)',
            activeBg: 'rgba(144,157,171,0.2)',
            activeBorder: 'rgba(0,0,0,0)',
            selectedBg: 'rgba(144,157,171,0.08)'
          },
          danger: {
            hoverBg: 'rgba(229,83,75,0.16)',
            activeBg: 'rgba(229,83,75,0.24)',
            hoverText: '#f47067'
          }
        },
        fg: {
          default: '#adbac7',
          muted: '#768390',
          subtle: '#545d68',
          onEmphasis: '#cdd9e5'
        },
        canvas: {
          default: '#22272e',
          overlay: '#2d333b',
          inset: '#1c2128',
          subtle: '#2d333b'
        },
        border: {
          default: '#444c56',
          muted: '#373e47',
          subtle: 'rgba(205,217,229,0.1)'
        },
        neutral: {
          emphasisPlus: '#636e7b',
          emphasis: '#636e7b',
          muted: 'rgba(99,110,123,0.4)',
          subtle: 'rgba(99,110,123,0.1)'
        },
        accent: {
          fg: '#539bf5',
          emphasis: '#316dca',
          muted: 'rgba(65,132,228,0.4)',
          subtle: 'rgba(65,132,228,0.15)'
        },
        success: {
          fg: '#57ab5a',
          emphasis: '#347d39',
          muted: 'rgba(70,149,74,0.4)',
          subtle: 'rgba(70,149,74,0.15)'
        },
        attention: {
          fg: '#c69026',
          emphasis: '#966600',
          muted: 'rgba(174,124,20,0.4)',
          subtle: 'rgba(174,124,20,0.15)'
        },
        severe: {
          fg: '#cc6b2c',
          emphasis: '#ae5622',
          muted: 'rgba(204,107,44,0.4)',
          subtle: 'rgba(204,107,44,0.15)'
        },
        danger: {
          fg: '#e5534b',
          emphasis: '#c93c37',
          muted: 'rgba(229,83,75,0.4)',
          subtle: 'rgba(229,83,75,0.15)'
        },
        open: {
          fg: '#57ab5a',
          emphasis: '#347d39',
          muted: 'rgba(70,149,74,0.4)',
          subtle: 'rgba(70,149,74,0.15)'
        },
        closed: {
          fg: '#e5534b',
          emphasis: '#c93c37',
          muted: 'rgba(229,83,75,0.4)',
          subtle: 'rgba(229,83,75,0.15)'
        },
        done: {
          fg: '#986ee2',
          emphasis: '#8256d0',
          muted: 'rgba(152,110,226,0.4)',
          subtle: 'rgba(152,110,226,0.15)'
        },
        sponsors: {
          fg: '#c96198',
          emphasis: '#ae4c82',
          muted: 'rgba(201,97,152,0.4)',
          subtle: 'rgba(201,97,152,0.15)'
        },
        primer: {
          fg: {
            disabled: '#545d68'
          },
          canvas: {
            backdrop: 'rgba(28,33,40,0.8)',
            sticky: 'rgba(34,39,46,0.95)'
          },
          border: {
            active: '#EC775C',
            contrast: 'rgba(205,217,229,0.2)'
          }
        }
      },
      shadows: {
        checks: {
          inputShadow: '0 0 0 1px (obj) => get_1.default(obj, path)'
        },
        mktg: {
          btn: {
            shadow: {
              outline: 'rgb(255 255 255 / 25%) 0 0 0 1px inset',
              focus: 'rgb(255 255 255 / 25%) 0 0 0 4px',
              hover:
                '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
              hoverMuted: 'rgb(255 255 255) 0 0 0 2px inset'
            }
          }
        },
        avatar: {
          childShadow: '-2px -2px 0 #22272e'
        },
        overlay: {
          shadow: '0 0 0 1px #444c56, 0 16px 32px rgba(28,33,40,0.85)'
        },
        btn: {
          shadow: '0 0 transparent',
          insetShadow: '0 0 transparent',
          focusShadow: '0 0 0 3px rgba(118,131,144,0.3)',
          shadowActive: 'inset 0 0.15em 0.3em rgba(28,33,40,0.15)',
          shadowInputFocus: '0 0 0 0.2em rgba(49,109,202,0.3)',
          primary: {
            shadow: '0 0 transparent',
            insetShadow: '0 0 transparent',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(46,164,79,0.4)'
          },
          outline: {
            hoverShadow: '0 1px 0 rgba(28,33,40,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(205,217,229,0.03)',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(37,90,178,0.4)'
          },
          danger: {
            hoverShadow: '0 0 transparent',
            hoverInsetShadow: '0 0 transparent',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(229,83,75,0.4)'
          }
        },
        shadow: {
          small: '0 0 transparent',
          medium: '0 3px 6px #1c2128',
          large: '0 8px 24px #1c2128',
          extraLarge: '0 12px 48px #1c2128'
        },
        primer: {
          shadow: {
            highlight: '0 0 transparent',
            inset: '0 0 transparent',
            focus: '0 0 0 3px #143d79'
          }
        }
      }
    },
    dark_high_contrast: {
      colors: {
        canvasDefaultTransparent: 'rgba(10,12,16,0)',
        pageHeaderBg: '#0a0c10',
        marketingIcon: {
          primary: '#91cbff',
          secondary: '#409eff'
        },
        diffBlob: {
          addition: {
            numText: '#f0f3f6',
            fg: '#0a0c10',
            numBg: 'rgba(38,205,77,0.3)',
            lineBg: 'rgba(9,180,58,0.15)',
            wordBg: '#09b43a'
          },
          deletion: {
            numText: '#f0f3f6',
            fg: '#0a0c10',
            numBg: 'rgba(255,106,105,0.3)',
            lineBg: 'rgba(255,106,105,0.15)',
            wordBg: '#ff6a69'
          },
          hunk: {
            numBg: 'rgba(64,158,255,0.4)'
          },
          expander: {
            icon: '#f0f3f6'
          }
        },
        diffstat: {
          deletionBorder: '#ffb1af',
          additionBorder: '#4ae168',
          additionBg: '#26cd4d'
        },
        searchKeyword: {
          hl: 'rgba(240,183,47,0.4)'
        },
        prettylights: {
          syntax: {
            comment: '#bdc4cc',
            constant: '#91cbff',
            entity: '#dbb7ff',
            storageModifierImport: '#f0f3f6',
            entityTag: '#72f088',
            keyword: '#ff9492',
            string: '#addcff',
            variable: '#ffb757',
            brackethighlighterUnmatched: '#ff6a69',
            invalidIllegalText: '#ffffff',
            invalidIllegalBg: '#e82a2f',
            carriageReturnText: '#ffffff',
            carriageReturnBg: '#ff4445',
            stringRegexp: '#72f088',
            markupList: '#fbd669',
            markupHeading: '#409eff',
            markupItalic: '#f0f3f6',
            markupBold: '#f0f3f6',
            markupDeletedText: '#ffdedb',
            markupDeletedBg: '#cc1421',
            markupInsertedText: '#acf7b6',
            markupInsertedBg: '#007728',
            markupChangedText: '#ffe1b4',
            markupChangedBg: '#a74c00',
            markupIgnoredText: '#f0f3f6',
            markupIgnoredBg: '#318bf8',
            metaDiffRange: '#dbb7ff',
            brackethighlighterAngle: '#bdc4cc',
            sublimelinterGutterMark: '#7a828e',
            constantOtherReferenceLink: '#addcff'
          }
        },
        codemirror: {
          text: '#f0f3f6',
          bg: '#0a0c10',
          guttersBg: '#0a0c10',
          guttermarkerText: '#0a0c10',
          guttermarkerSubtleText: '#7a828e',
          linenumberText: '#f0f3f6',
          cursor: '#f0f3f6',
          selectionBg: 'rgba(64,158,255,0.4)',
          activelineBg: 'rgba(158,167,179,0.1)',
          matchingbracketText: '#f0f3f6',
          linesBg: '#0a0c10',
          syntax: {
            comment: '#bdc4cc',
            constant: '#91cbff',
            entity: '#dbb7ff',
            keyword: '#ff9492',
            storage: '#ff9492',
            string: '#addcff',
            support: '#91cbff',
            variable: '#ffb757'
          }
        },
        checks: {
          bg: '#010409',
          textPrimary: '#f0f3f6',
          textSecondary: '#f0f3f6',
          textLink: '#71b7ff',
          btnIcon: '#f0f3f6',
          btnHoverIcon: '#f0f3f6',
          btnHoverBg: 'rgba(158,167,179,0.1)',
          inputText: '#f0f3f6',
          inputPlaceholderText: '#7a828e',
          inputFocusText: '#f0f3f6',
          inputBg: '#272b33',
          donutError: '#ff6a69',
          donutPending: '#f0b72f',
          donutSuccess: '#09b43a',
          donutNeutral: '#bdc4cc',
          dropdownText: '#f0f3f6',
          dropdownBg: '#272b33',
          dropdownBorder: '#7a828e',
          dropdownShadow: 'rgba(1,4,9,0.3)',
          dropdownHoverText: '#f0f3f6',
          dropdownHoverBg: 'rgba(158,167,179,0.1)',
          dropdownBtnHoverText: '#f0f3f6',
          dropdownBtnHoverBg: 'rgba(158,167,179,0.1)',
          scrollbarThumbBg: 'rgba(158,167,179,0.4)',
          headerLabelText: '#f0f3f6',
          headerLabelOpenText: '#f0f3f6',
          headerBorder: '#7a828e',
          headerIcon: '#f0f3f6',
          lineText: '#f0f3f6',
          lineNumText: '#7a828e',
          lineTimestampText: '#7a828e',
          lineHoverBg: 'rgba(158,167,179,0.1)',
          lineSelectedBg: 'rgba(64,158,255,0.15)',
          lineSelectedNumText: '#71b7ff',
          lineDtFmText: '#0a0c10',
          lineDtFmBg: '#e09b13',
          gateBg: 'rgba(224,155,19,0.15)',
          gateText: '#f0f3f6',
          gateWaitingText: '#f0b72f',
          stepHeaderOpenBg: '#272b33',
          stepErrorText: '#ff6a69',
          stepWarningText: '#f0b72f',
          loglineText: '#f0f3f6',
          loglineNumText: '#7a828e',
          loglineDebugText: '#b780ff',
          loglineErrorText: '#f0f3f6',
          loglineErrorNumText: '#7a828e',
          loglineErrorBg: 'rgba(255,106,105,0.15)',
          loglineWarningText: '#f0f3f6',
          loglineWarningNumText: '#f0b72f',
          loglineWarningBg: 'rgba(224,155,19,0.15)',
          loglineCommandText: '#71b7ff',
          loglineSectionText: '#26cd4d',
          ansi: {
            black: '#0a0c10',
            blackBright: '#272b33',
            white: '#d9dee3',
            whiteBright: '#d9dee3',
            gray: '#9ea7b3',
            red: '#ff9492',
            redBright: '#ffb1af',
            green: '#26cd4d',
            greenBright: '#4ae168',
            yellow: '#f0b72f',
            yellowBright: '#f7c843',
            blue: '#71b7ff',
            blueBright: '#91cbff',
            magenta: '#cb9eff',
            magentaBright: '#dbb7ff',
            cyan: '#76e3ea',
            cyanBright: '#b3f0ff'
          }
        },
        project: {
          headerBg: '#0a0c10',
          sidebarBg: '#272b33',
          gradientIn: '#272b33',
          gradientOut: 'rgba(39,43,51,0)'
        },
        mktg: {
          btn: {
            bg: '#f6f8fa'
          }
        },
        avatar: {
          bg: 'rgba(255,255,255,0.1)',
          border: 'rgba(255,255,255,0.9)',
          stackFade: '#525964',
          stackFadeMore: '#272b33'
        },
        topicTag: {
          border: '#409eff'
        },
        counter: {
          border: 'rgba(0,0,0,0)'
        },
        selectMenu: {
          backdropBorder: '#7a828e',
          tapHighlight: 'rgba(82,89,100,0.5)',
          tapFocusBg: '#1e60d5'
        },
        header: {
          text: 'rgba(255,255,255,0.7)',
          bg: '#272b33',
          divider: '#bdc4cc',
          logo: '#ffffff'
        },
        headerSearch: {
          bg: '#0a0c10',
          border: '#525964'
        },
        sidenav: {
          selectedBg: '#272b33'
        },
        menu: {
          bgActive: '#272b33'
        },
        input: {
          disabledBg: 'rgba(158,167,179,0)'
        },
        timeline: {
          badgeBg: '#272b33'
        },
        ansi: {
          black: '#7a828e',
          blackBright: '#9ea7b3',
          white: '#d9dee3',
          whiteBright: '#ffffff',
          gray: '#9ea7b3',
          red: '#ff9492',
          redBright: '#ffb1af',
          green: '#26cd4d',
          greenBright: '#4ae168',
          yellow: '#f0b72f',
          yellowBright: '#f7c843',
          blue: '#71b7ff',
          blueBright: '#91cbff',
          magenta: '#cb9eff',
          magentaBright: '#dbb7ff',
          cyan: '#39c5cf',
          cyanBright: '#56d4dd'
        },
        btn: {
          text: '#f0f3f6',
          bg: '#272b33',
          border: '#7a828e',
          hoverBg: '#525964',
          hoverBorder: '#bdc4cc',
          activeBg: 'hsla(217,10%,33%,1)',
          activeBorder: '#9ea7b3',
          selectedBg: 'rgba(82,89,100,0.9)',
          focusBg: '#272b33',
          focusBorder: '#bdc4cc',
          counterBg: '#525964',
          primary: {
            text: '#0a0c10',
            bg: '#09b43a',
            border: '#4ae168',
            hoverBg: '#26cd4d',
            hoverBorder: '#4ae168',
            selectedBg: '#09b43a',
            disabledText: 'rgba(10,12,16,0.5)',
            disabledBg: 'rgba(9,180,58,0.6)',
            disabledBorder: 'rgba(74,225,104,0.4)',
            focusBg: '#09b43a',
            focusBorder: '#7a828e',
            icon: '#0a0c10',
            counterBg: 'rgba(1,4,9,0.15)'
          },
          outline: {
            text: '#71b7ff',
            hoverText: '#71b7ff',
            hoverBg: '#525964',
            hoverBorder: '#7a828e',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: '#2672f3',
            selectedBorder: '#7a828e',
            disabledText: 'rgba(113,183,255,0.5)',
            disabledBg: '#0a0c10',
            disabledCounterBg: 'rgba(64,158,255,0.05)',
            focusBorder: '#7a828e',
            counterBg: 'rgba(64,158,255,0.1)'
          },
          danger: {
            text: '#ff6a69',
            hoverText: '#0a0c10',
            hoverBg: '#ff6a69',
            hoverBorder: '#ff6a69',
            hoverIcon: '#0a0c10',
            hoverCounterBg: 'rgba(1,4,9,0.15)',
            selectedText: '#ffffff',
            selectedBg: '#ff4445',
            selectedBorder: '#ff9492',
            disabledText: 'rgba(255,106,105,0.5)',
            disabledBg: '#0a0c10',
            disabledCounterBg: 'rgba(255,106,105,0.05)',
            focusBorder: '#ff6a69',
            counterBg: 'rgba(1,4,9,0.15)',
            icon: '#ff6a69'
          }
        },
        underlinenav: {
          icon: '#f0f3f6',
          borderHover: '#bdc4cc'
        },
        actionListItem: {
          inlineDivider: '#7a828e',
          default: {
            hoverBg: '#272b33',
            hoverBorder: '#7a828e',
            activeBg: '#525964',
            activeBorder: '#9ea7b3',
            selectedBg: '#525964'
          },
          danger: {
            hoverBg: '#ff6a69',
            activeBg: '#ff4445',
            hoverText: '#0a0c10'
          }
        },
        fg: {
          default: '#f0f3f6',
          muted: '#f0f3f6',
          subtle: '#7a828e',
          onEmphasis: '#0a0c10'
        },
        canvas: {
          default: '#0a0c10',
          overlay: '#272b33',
          inset: '#010409',
          subtle: '#272b33'
        },
        border: {
          default: '#7a828e',
          muted: '#7a828e',
          subtle: '#7a828e'
        },
        neutral: {
          emphasisPlus: '#ffffff',
          emphasis: '#9ea7b3',
          muted: 'rgba(158,167,179,0.4)',
          subtle: 'rgba(158,167,179,0.1)'
        },
        accent: {
          fg: '#71b7ff',
          emphasis: '#409eff',
          muted: '#409eff',
          subtle: 'rgba(64,158,255,0.15)'
        },
        success: {
          fg: '#26cd4d',
          emphasis: '#09b43a',
          muted: '#09b43a',
          subtle: 'rgba(9,180,58,0.15)'
        },
        attention: {
          fg: '#f0b72f',
          emphasis: '#e09b13',
          muted: '#e09b13',
          subtle: 'rgba(224,155,19,0.15)'
        },
        severe: {
          fg: '#e7811d',
          emphasis: '#e7811d',
          muted: '#e7811d',
          subtle: 'rgba(231,129,29,0.15)'
        },
        danger: {
          fg: '#ff6a69',
          emphasis: '#ff6a69',
          muted: '#ff6a69',
          subtle: 'rgba(255,106,105,0.15)'
        },
        open: {
          fg: '#26cd4d',
          emphasis: '#09b43a',
          muted: 'rgba(9,180,58,0.4)',
          subtle: 'rgba(9,180,58,0.15)'
        },
        closed: {
          fg: '#ff6a69',
          emphasis: '#ff6a69',
          muted: 'rgba(255,106,105,0.4)',
          subtle: 'rgba(255,106,105,0.15)'
        },
        done: {
          fg: '#b780ff',
          emphasis: '#b87fff',
          muted: '#b780ff',
          subtle: 'rgba(183,128,255,0.15)'
        },
        sponsors: {
          fg: '#ef6eb1',
          emphasis: '#ef6eb1',
          muted: '#ef6eb1',
          subtle: 'rgba(239,110,177,0.15)'
        },
        primer: {
          fg: {
            disabled: '#7a828e'
          },
          canvas: {
            backdrop: 'rgba(1,4,9,0.8)',
            sticky: 'rgba(10,12,16,0.95)'
          },
          border: {
            active: '#FF967D',
            contrast: 'rgba(255,255,255,0.2)'
          }
        }
      },
      shadows: {
        checks: {
          inputShadow: '0 0 0 1px (obj) => get_1.default(obj, path)'
        },
        mktg: {
          btn: {
            shadow: {
              outline: 'rgb(255 255 255 / 25%) 0 0 0 1px inset',
              focus: 'rgb(255 255 255 / 25%) 0 0 0 4px',
              hover:
                '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
              hoverMuted: 'rgb(255 255 255) 0 0 0 2px inset'
            }
          }
        },
        avatar: {
          childShadow: '-2px -2px 0 #0a0c10'
        },
        overlay: {
          shadow: '0 0 0 1px #525964, 0 16px 32px rgba(1,4,9,0.85)'
        },
        btn: {
          shadow: '0 0 transparent',
          insetShadow: '0 0 transparent',
          focusShadow: '0 0 0 3px rgba(189,196,204,0.3)',
          shadowActive: 'inset 0 0.15em 0.3em rgba(1,4,9,0.15)',
          shadowInputFocus: '0 0 0 0.2em rgba(64,158,255,0.3)',
          primary: {
            shadow: '0 0 transparent',
            insetShadow: '0 0 transparent',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(46,164,79,0.4)'
          },
          outline: {
            hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(49,139,248,0.4)'
          },
          danger: {
            hoverShadow: '0 0 transparent',
            hoverInsetShadow: '0 0 transparent',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(255,106,105,0.4)'
          }
        },
        shadow: {
          small: '0 0 transparent',
          medium: '0 3px 6px #010409',
          large: '0 8px 24px #010409',
          extraLarge: '0 12px 48px #010409'
        },
        primer: {
          shadow: {
            highlight: '0 0 transparent',
            inset: '0 0 transparent',
            focus: '0 0 0 3px #1e60d5'
          }
        }
      }
    },
    dark_colorblind: {
      colors: {
        canvasDefaultTransparent: 'rgba(13,17,23,0)',
        pageHeaderBg: '#0d1117',
        marketingIcon: {
          primary: '#79c0ff',
          secondary: '#1f6feb'
        },
        diffBlob: {
          addition: {
            numText: '#c9d1d9',
            fg: '#c9d1d9',
            numBg: 'rgba(88,166,255,0.3)',
            lineBg: 'rgba(56,139,253,0.15)',
            wordBg: 'rgba(56,139,253,0.4)'
          },
          deletion: {
            numText: '#c9d1d9',
            fg: '#c9d1d9',
            numBg: 'rgba(212,118,22,0.3)',
            lineBg: 'rgba(212,118,22,0.15)',
            wordBg: 'rgba(212,118,22,0.4)'
          },
          hunk: {
            numBg: 'rgba(56,139,253,0.4)'
          },
          expander: {
            icon: '#8b949e'
          }
        },
        diffstat: {
          deletionBorder: 'rgba(240,246,252,0.1)',
          additionBorder: 'rgba(240,246,252,0.1)',
          additionBg: '#58a6ff'
        },
        searchKeyword: {
          hl: 'rgba(210,153,34,0.4)'
        },
        prettylights: {
          syntax: {
            comment: '#8b949e',
            constant: '#79c0ff',
            entity: '#d2a8ff',
            storageModifierImport: '#c9d1d9',
            entityTag: '#a5d6ff',
            keyword: '#ec8e2c',
            string: '#a5d6ff',
            variable: '#fdac54',
            brackethighlighterUnmatched: '#d47616',
            invalidIllegalText: '#f0f6fc',
            invalidIllegalBg: '#6c3906',
            carriageReturnText: '#f0f6fc',
            carriageReturnBg: '#914d04',
            stringRegexp: '#a5d6ff',
            markupList: '#f2cc60',
            markupHeading: '#1f6feb',
            markupItalic: '#c9d1d9',
            markupBold: '#c9d1d9',
            markupDeletedText: '#ffe2bb',
            markupDeletedBg: '#4e2906',
            markupInsertedText: '#cae8ff',
            markupInsertedBg: '#0c2d6b',
            markupChangedText: '#ffe2bb',
            markupChangedBg: '#4e2906',
            markupIgnoredText: '#c9d1d9',
            markupIgnoredBg: '#1158c7',
            metaDiffRange: '#d2a8ff',
            brackethighlighterAngle: '#8b949e',
            sublimelinterGutterMark: '#484f58',
            constantOtherReferenceLink: '#a5d6ff'
          }
        },
        codemirror: {
          text: '#c9d1d9',
          bg: '#0d1117',
          guttersBg: '#0d1117',
          guttermarkerText: '#0d1117',
          guttermarkerSubtleText: '#484f58',
          linenumberText: '#8b949e',
          cursor: '#c9d1d9',
          selectionBg: 'rgba(56,139,253,0.4)',
          activelineBg: 'rgba(110,118,129,0.1)',
          matchingbracketText: '#c9d1d9',
          linesBg: '#0d1117',
          syntax: {
            comment: '#8b949e',
            constant: '#79c0ff',
            entity: '#d2a8ff',
            keyword: '#ec8e2c',
            storage: '#ec8e2c',
            string: '#a5d6ff',
            support: '#79c0ff',
            variable: '#fdac54'
          }
        },
        checks: {
          bg: '#010409',
          textPrimary: '#c9d1d9',
          textSecondary: '#8b949e',
          textLink: '#58a6ff',
          btnIcon: '#8b949e',
          btnHoverIcon: '#c9d1d9',
          btnHoverBg: 'rgba(110,118,129,0.1)',
          inputText: '#8b949e',
          inputPlaceholderText: '#484f58',
          inputFocusText: '#c9d1d9',
          inputBg: '#161b22',
          donutError: '#d47616',
          donutPending: '#d29922',
          donutSuccess: '#388bfd',
          donutNeutral: '#8b949e',
          dropdownText: '#c9d1d9',
          dropdownBg: '#161b22',
          dropdownBorder: '#30363d',
          dropdownShadow: 'rgba(1,4,9,0.3)',
          dropdownHoverText: '#c9d1d9',
          dropdownHoverBg: 'rgba(110,118,129,0.1)',
          dropdownBtnHoverText: '#c9d1d9',
          dropdownBtnHoverBg: 'rgba(110,118,129,0.1)',
          scrollbarThumbBg: 'rgba(110,118,129,0.4)',
          headerLabelText: '#8b949e',
          headerLabelOpenText: '#c9d1d9',
          headerBorder: '#21262d',
          headerIcon: '#8b949e',
          lineText: '#8b949e',
          lineNumText: '#484f58',
          lineTimestampText: '#484f58',
          lineHoverBg: 'rgba(110,118,129,0.1)',
          lineSelectedBg: 'rgba(56,139,253,0.15)',
          lineSelectedNumText: '#58a6ff',
          lineDtFmText: '#ffffff',
          lineDtFmBg: '#9e6a03',
          gateBg: 'rgba(187,128,9,0.15)',
          gateText: '#8b949e',
          gateWaitingText: '#d29922',
          stepHeaderOpenBg: '#161b22',
          stepErrorText: '#d47616',
          stepWarningText: '#d29922',
          loglineText: '#8b949e',
          loglineNumText: '#484f58',
          loglineDebugText: '#a371f7',
          loglineErrorText: '#8b949e',
          loglineErrorNumText: '#484f58',
          loglineErrorBg: 'rgba(212,118,22,0.15)',
          loglineWarningText: '#8b949e',
          loglineWarningNumText: '#d29922',
          loglineWarningBg: 'rgba(187,128,9,0.15)',
          loglineCommandText: '#58a6ff',
          loglineSectionText: '#58a6ff',
          ansi: {
            black: '#0d1117',
            blackBright: '#161b22',
            white: '#b1bac4',
            whiteBright: '#b1bac4',
            gray: '#6e7681',
            red: '#ec8e2c',
            redBright: '#fdac54',
            green: '#58a6ff',
            greenBright: '#79c0ff',
            yellow: '#d29922',
            yellowBright: '#e3b341',
            blue: '#58a6ff',
            blueBright: '#79c0ff',
            magenta: '#bc8cff',
            magentaBright: '#d2a8ff',
            cyan: '#76e3ea',
            cyanBright: '#b3f0ff'
          }
        },
        project: {
          headerBg: '#0d1117',
          sidebarBg: '#161b22',
          gradientIn: '#161b22',
          gradientOut: 'rgba(22,27,34,0)'
        },
        mktg: {
          btn: {
            bg: '#f6f8fa'
          }
        },
        avatar: {
          bg: 'rgba(255,255,255,0.1)',
          border: 'rgba(240,246,252,0.1)',
          stackFade: '#30363d',
          stackFadeMore: '#21262d'
        },
        topicTag: {
          border: 'rgba(0,0,0,0)'
        },
        counter: {
          border: 'rgba(0,0,0,0)'
        },
        selectMenu: {
          backdropBorder: '#484f58',
          tapHighlight: 'rgba(48,54,61,0.5)',
          tapFocusBg: '#0c2d6b'
        },
        header: {
          text: 'rgba(255,255,255,0.7)',
          bg: '#161b22',
          divider: '#8b949e',
          logo: '#f0f6fc'
        },
        headerSearch: {
          bg: '#0d1117',
          border: '#30363d'
        },
        sidenav: {
          selectedBg: '#21262d'
        },
        menu: {
          bgActive: '#161b22'
        },
        input: {
          disabledBg: 'rgba(110,118,129,0)'
        },
        timeline: {
          badgeBg: '#21262d'
        },
        ansi: {
          black: '#484f58',
          blackBright: '#6e7681',
          white: '#b1bac4',
          whiteBright: '#ffffff',
          gray: '#6e7681',
          red: '#ec8e2c',
          redBright: '#fdac54',
          green: '#58a6ff',
          greenBright: '#79c0ff',
          yellow: '#d29922',
          yellowBright: '#e3b341',
          blue: '#58a6ff',
          blueBright: '#79c0ff',
          magenta: '#bc8cff',
          magentaBright: '#d2a8ff',
          cyan: '#39c5cf',
          cyanBright: '#56d4dd'
        },
        btn: {
          text: '#c9d1d9',
          bg: '#21262d',
          border: 'rgba(240,246,252,0.1)',
          hoverBg: '#30363d',
          hoverBorder: '#8b949e',
          activeBg: 'hsla(212,12%,18%,1)',
          activeBorder: '#6e7681',
          selectedBg: '#161b22',
          focusBg: '#21262d',
          focusBorder: '#8b949e',
          counterBg: '#30363d',
          primary: {
            text: '#ffffff',
            bg: '#1f6feb',
            border: 'rgba(240,246,252,0.1)',
            hoverBg: '#388bfd',
            hoverBorder: 'rgba(240,246,252,0.1)',
            selectedBg: '#1f6feb',
            disabledText: 'rgba(255,255,255,0.5)',
            disabledBg: 'rgba(31,111,235,0.6)',
            disabledBorder: 'rgba(240,246,252,0.1)',
            focusBg: '#1f6feb',
            focusBorder: 'rgba(240,246,252,0.1)',
            icon: '#ffffff',
            counterBg: 'rgba(255,255,255,0.2)'
          },
          outline: {
            text: '#58a6ff',
            hoverText: '#58a6ff',
            hoverBg: '#30363d',
            hoverBorder: 'rgba(240,246,252,0.1)',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: '#0d419d',
            selectedBorder: 'rgba(240,246,252,0.1)',
            disabledText: 'rgba(88,166,255,0.5)',
            disabledBg: '#0d1117',
            disabledCounterBg: 'rgba(31,111,235,0.05)',
            focusBorder: 'rgba(240,246,252,0.1)',
            counterBg: 'rgba(31,111,235,0.1)'
          },
          danger: {
            text: '#d47616',
            hoverText: '#ffffff',
            hoverBg: '#b76100',
            hoverBorder: '#d47616',
            hoverIcon: '#ffffff',
            hoverCounterBg: 'rgba(255,255,255,0.2)',
            selectedText: '#ffffff',
            selectedBg: '#914d04',
            selectedBorder: '#ec8e2c',
            disabledText: 'rgba(212,118,22,0.5)',
            disabledBg: '#0d1117',
            disabledCounterBg: 'rgba(183,97,0,0.05)',
            focusBorder: '#d47616',
            counterBg: 'rgba(183,97,0,0.1)',
            icon: '#d47616'
          }
        },
        underlinenav: {
          icon: '#484f58',
          borderHover: 'rgba(110,118,129,0.4)'
        },
        actionListItem: {
          inlineDivider: 'rgba(48,54,61,0.48)',
          default: {
            hoverBg: 'rgba(177,186,196,0.12)',
            hoverBorder: 'rgba(0,0,0,0)',
            activeBg: 'rgba(177,186,196,0.2)',
            activeBorder: 'rgba(0,0,0,0)',
            selectedBg: 'rgba(177,186,196,0.08)'
          },
          danger: {
            hoverBg: 'rgba(212,118,22,0.16)',
            activeBg: 'rgba(212,118,22,0.24)',
            hoverText: '#ec8e2c'
          }
        },
        fg: {
          default: '#c9d1d9',
          muted: '#8b949e',
          subtle: '#484f58',
          onEmphasis: '#ffffff'
        },
        canvas: {
          default: '#0d1117',
          overlay: '#161b22',
          inset: '#010409',
          subtle: '#161b22'
        },
        border: {
          default: '#30363d',
          muted: '#21262d',
          subtle: 'rgba(240,246,252,0.1)'
        },
        neutral: {
          emphasisPlus: '#6e7681',
          emphasis: '#6e7681',
          muted: 'rgba(110,118,129,0.4)',
          subtle: 'rgba(110,118,129,0.1)'
        },
        accent: {
          fg: '#58a6ff',
          emphasis: '#1f6feb',
          muted: 'rgba(56,139,253,0.4)',
          subtle: 'rgba(56,139,253,0.15)'
        },
        success: {
          fg: '#58a6ff',
          emphasis: '#1f6feb',
          muted: 'rgba(56,139,253,0.4)',
          subtle: 'rgba(56,139,253,0.15)'
        },
        attention: {
          fg: '#d29922',
          emphasis: '#9e6a03',
          muted: 'rgba(187,128,9,0.4)',
          subtle: 'rgba(187,128,9,0.15)'
        },
        severe: {
          fg: '#d47616',
          emphasis: '#b76100',
          muted: 'rgba(212,118,22,0.4)',
          subtle: 'rgba(212,118,22,0.15)'
        },
        danger: {
          fg: '#d47616',
          emphasis: '#b76100',
          muted: 'rgba(212,118,22,0.4)',
          subtle: 'rgba(212,118,22,0.15)'
        },
        open: {
          fg: '#ec8e2c',
          emphasis: '#b76100',
          muted: 'rgba(212,118,22,0.4)',
          subtle: 'rgba(212,118,22,0.15)'
        },
        closed: {
          fg: '#8b949e',
          emphasis: '#6e7681',
          muted: 'rgba(110,118,129,0.4)',
          subtle: 'rgba(110,118,129,0.1)'
        },
        done: {
          fg: '#a371f7',
          emphasis: '#8957e5',
          muted: 'rgba(163,113,247,0.4)',
          subtle: 'rgba(163,113,247,0.15)'
        },
        sponsors: {
          fg: '#db61a2',
          emphasis: '#bf4b8a',
          muted: 'rgba(219,97,162,0.4)',
          subtle: 'rgba(219,97,162,0.15)'
        },
        primer: {
          fg: {
            disabled: '#484f58'
          },
          canvas: {
            backdrop: 'rgba(1,4,9,0.8)',
            sticky: 'rgba(13,17,23,0.95)'
          },
          border: {
            active: '#F78166',
            contrast: 'rgba(255,255,255,0.2)'
          }
        }
      },
      shadows: {
        checks: {
          inputShadow: '0 0 0 1px (obj) => get_1.default(obj, path)'
        },
        mktg: {
          btn: {
            shadow: {
              outline: 'rgb(255 255 255 / 25%) 0 0 0 1px inset',
              focus: 'rgb(255 255 255 / 25%) 0 0 0 4px',
              hover:
                '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
              hoverMuted: 'rgb(255 255 255) 0 0 0 2px inset'
            }
          }
        },
        avatar: {
          childShadow: '-2px -2px 0 #0d1117'
        },
        overlay: {
          shadow: '0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)'
        },
        btn: {
          shadow: '0 0 transparent',
          insetShadow: '0 0 transparent',
          focusShadow: '0 0 0 3px rgba(139,148,158,0.3)',
          shadowActive: 'inset 0 0.15em 0.3em rgba(1,4,9,0.15)',
          shadowInputFocus: '0 0 0 0.2em rgba(31,111,235,0.3)',
          primary: {
            shadow: '0 0 transparent',
            insetShadow: '0 0 transparent',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(46,164,79,0.4)'
          },
          outline: {
            hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(17,88,199,0.4)'
          },
          danger: {
            hoverShadow: '0 0 transparent',
            hoverInsetShadow: '0 0 transparent',
            selectedShadow: '0 0 transparent',
            focusShadow: '0 0 0 3px rgba(212,118,22,0.4)'
          }
        },
        shadow: {
          small: '0 0 transparent',
          medium: '0 3px 6px #010409',
          large: '0 8px 24px #010409',
          extraLarge: '0 12px 48px #010409'
        },
        primer: {
          shadow: {
            highlight: '0 0 transparent',
            inset: '0 0 transparent',
            focus: '0 0 0 3px #0c2d6b'
          }
        }
      }
    }
  }
});