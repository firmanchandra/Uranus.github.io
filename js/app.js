/*!
 * Thorium Generic functions for framework7 projects
 * Version 1.5.2 june, 2020
 * framework7 v5.x (https://framework7.io) MIT Licensed
 * Copyright 2018-2020 Thorium builder, All Rights Reserved.
*/

var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9+/=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/rn/g, "n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }
String.prototype.replaceAll = function (search, replacement) { var target = this; return target.replace(new RegExp(search, 'g'), replacement); };

var httpRoot = ""; /* -- Change to another address if WebService os located on another Server eg. https://mydomain.com/path/ -- */
const localroot = "http://localhost:8080/iot_eskaitech_com/";
const mediaRoot = './db/dbassets/';
const gtimeOut =6000;
const gCrossDomain =false;
const gAuthMode =0;
const gHomeScreen = "PGRpdiBjbGFzcz0icG9wdXAiPjxkaXYgY2xhc3M9ImJsb2NrIGN1c3RvbS1ibG9jayB0ZXh0LWNlbnRlciI+PGgyPklvVFNtYXJ0UG93ZXI8L2gyPjxpbWcgc3JjPSIuL2ltZy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nIj48L2ltZz48aDI+QWRkIHRvIEhvbWVTY3JlZW4gPC9oMj48cCBjbGFzcz0ibWItNSIgc3R5bGU9ImZvbnQtc2l6ZToxN3B4OyIgPjwvcD48cCBjbGFzcz0ibXQtNSI+PGEgaHJlZj0iIyIgY2xhc3M9ImNvbCBidXR0b24gYnV0dG9uLXJhaXNlZCBidXR0b24tZmlsbCBidXR0b24tYmlnIGFjdGl2ZS1zdGF0ZSBwb3B1cC1jbG9zZSI+TGF0ZXI8L2E+PC9wPjwvZGl2PjwvZGl2Pg==";
const useWebShare =true;
const autoClosePanel =true;
const desktopAllowed =true;
var requireInstallation = false;
var dataTheme=null;
var dataCustomColor='rgb(204,51,51)';
var dataFill=false;


var $ = Dom7; 
var routes = [
{
    path: '/',
    url: './index.html',
    name: 'index',
},
{
    path: '(.*)',
    url: './pages/404.html',
},
];


var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}
var app = new Framework7({
    "version": "1.0.0",
    "id": "com.thorium.iotsmartpower",
    "root": "#app",
    "theme": theme,
    "autoDarkTheme": false,
    "language": "en",
    "routes": routes,
    "name": "IoTSmartPower",
    "initOnDeviceReady": true,
    "init": true,
    "iosTranslucentBars": false,
    "iosTranslucentModals": false,
    "touch": {
        "disableContextMenu": true,
        "tapHold": false,
        "tapHoldDelay": 10,
        "tapHoldPreventClicks": true,
        "activeState": true,
        "activeStateElements": "a, button, label, span, .actions-button",
        "materialRipple": true,
        "iosTouchRipple": false,
        "materialRippleElements": ".ripple, .link, .item-link, .links-list a, .button, button, .input-clear-button, .dialog-button, .tab-link, .item-radio, .item-checkbox, .actions-button, .searchbar-disable-button, .fab a, .checkbox, .radio, .data-table .sortable-cell, .notification-close-button"
    },
    "clicks": {
        "externalLinks": ".external"
    },
    "statusbar": {
        "enabled": "true",
        "overlay": "auto",
        "scrollTopOnClick": true,
        "iosOverlaysWebView": true,
        "iosTextColor": "black",
        "iosBackgroundColor": "white",
        "materialBackgroundColor": null
    },
    "view": {
        "main": true,
        "router": true,
        "reloadAll": true,
        "stackPages": false,
        "reloadPages": false,
        "reloadDetail": true,
        "keepAlive": false,
        "linksView": null,
        "xhrCache": true,
        "xhrCacheIgnore": [],
        "xhrCacheIgnoreGetParameters": false,
        "xhrCacheDuration": 600000,
        "preloadPreviousPage": true,
        "uniqueHistory": false,
        "uniqueHistoryIgnoreGetParameters": false,
        "allowDuplicateUrls": false,
        "removeElements": true,
        "removeElementsWithTimeout": false,
        "removeElementsTimeout": 0,
        "restoreScrollTopOnBack": true,
        "unloadTabContent": true,
        "iosSwipeBack": true,
        "iosSwipeBackAnimateShadow": true,
        "iosSwipeBackAnimateOpacity": false,
        "iosSwipeBackActiveArea": 30,
        "iosSwipeBackThreshold": 0,
        "pushState": false,
        "pushStateAnimate": true,
        "pushStateAnimateOnLoad": true,
        "pushStateSeparator": "#!",
        "pushStateOnLoad": false,
        "animate": true,
        "animateWithJS": false,
        "iosDynamicNavbar": false,
        "iosSeparateDynamicNavbar": true,
        "iosAnimateNavbarBackIcon": true,
        "iosPageLoadDelay": 0,
        "materialPageLoadDelay": 0
    },
    "navbar": {
        "scrollTopOnTitleClick": true,
        "iosCenterTitle": true,
        "hideOnPageScroll": false,
        "showOnPageScrollEnd": true,
        "showOnPageScrollTop": true
    },
    "toolbar": {
        "hideOnPageScroll": false,
        "showOnPageScrollEnd": true,
        "showOnPageScrollTop": true
    },
    "modal": {
        "moveToRoot": true,
        "queueDialogs": true
    },
    "dialog": {
        "buttonOk": "OK",
        "buttonCancel": "Cancel",
        "usernamePlaceholder": "Username",
        "passwordPlaceholder": "Password",
        "preloaderTitle": "Loading... ",
        "progressTitle": "Loading... ",
        "closeByBackdropClick": false
    },
    "popup": {
        "backdrop": true,
        "closeByBackdropClick": true
    },
    "popover": {
        "closeByBackdropClick": true,
        "closeByOutsideClick": true,
        "backdrop": true
    },
    "actions": {
        "convertToPopover": true,
        "forceToPopover": false,
        "closeByBackdropClick": true,
        "render": null,
        "renderPopover": null,
        "backdrop": true
    },
    "sheet": {
        "closeByBackdropClick": true,
        "closeByOutsideClick": false
    },
    "toast": {
        "icon": null,
        "text": null,
        "position": "bottom",
        "closeButton": false,
        "closeButtonColor": null,
        "closeButtonText": "Ok",
        "closeTimeout": null,
        "cssClass": null,
        "render": null
    },
    "sortable": false,
    "swipeout": {
        "actionsNoFold": false,
        "noFollow": false,
        "removeElements": true,
        "removeElementsWithTimeout": false,
        "removeElementsTimeout": 0
    },
    "panel": {
        "leftBreakpoint": 0,
        "rightBreakpoint": 0,
        "swipeActiveArea": 0,
        "swipeCloseOpposite": true,
        "swipeOnlyClose": true,
        "swipeNoFollow": false,
        "swipeThreshold": 0,
        "closeByBackdropClick": true
    },
    "input": {
        "scrollIntoViewOnFocus": false,
        "scrollIntoViewCentered": false
    },
    "smartSelect": {
        "openIn": "page",
        "pageBackLinkText": "Back",
        "popupCloseLinkText": "Close",
        "sheetCloseLinkText": "Done",
        "searchbar": false,
        "searchbarPlaceholder": "Search",
        "searchbarDisableText": "Cancel",
        "closeOnSelect": false,
        "virtualList": false,
        "routableModals": true,
        "url": "select/"
    },
    "calendar": {
        "monthNames": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        "monthNamesShort": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        "dayNames": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "dayNamesShort": [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ],
        "firstDay": 1,
        "weekendDays": [
            0,
            6
        ],
        "multiple": false,
        "rangePicker": false,
        "dateFormat": "yyyy-mm-dd",
        "direction": "horizontal",
        "minDate": null,
        "maxDate": null,
        "disabled": null,
        "events": null,
        "rangesClasses": null,
        "touchMove": true,
        "animate": true,
        "closeOnSelect": false,
        "monthSelector": true,
        "yearSelector": true,
        "weekHeader": true,
        "value": null,
        "containerEl": null,
        "openIn": "auto",
        "formatValue": null,
        "inputEl": null,
        "inputReadOnly": false,
        "closeByOutsideClick": true,
        "scrollToInput": true,
        "header": false,
        "headerPlaceholder": "Select date",
        "footer": false,
        "toolbar": true,
        "toolbarCloseText": "Done",
        "cssClass": null,
        "routableModals": true,
        "view": null,
        "url": "date/",
        "renderWeekHeader": null,
        "renderMonths": null,
        "renderMonth": null,
        "renderMonthSelector": null,
        "renderYearSelector": null,
        "renderHeader": null,
        "renderFooter": null,
        "renderToolbar": null,
        "renderInline": null,
        "renderPopover": null,
        "renderSheet": null,
        "render": null
    },
    "picker": {
        "updateValuesOnMomentum": false,
        "updateValuesOnTouchmove": true,
        "rotateEffect": false,
        "momentumRatio": 7,
        "freeMode": false,
        "cols": [],
        "containerEl": null,
        "openIn": "auto",
        "formatValue": null,
        "inputEl": null,
        "inputReadOnly": true,
        "closeByOutsideClick": true,
        "scrollToInput": true,
        "toolbar": true,
        "toolbarCloseText": "Done",
        "cssClass": null,
        "routableModals": true,
        "view": null,
        "url": "select/",
        "renderColumn": null,
        "renderToolbar": null,
        "renderInline": null,
        "renderPopover": null,
        "renderSheet": null,
        "render": null
    },
    "lazy": {
        "placeholder": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",
        "threshold": 0,
        "sequential": true
    },
    "photoBrowser": {
        "photos": [],
        "exposition": true,
        "expositionHideCaptions": false,
        "type": "standalone",
        "navbar": true,
        "toolbar": true,
        "theme": "light",
        "swipeToClose": true,
        "backLinkText": "Close",
        "navbarOfText": "of",
        "url": "photos/",
        "routableModals": true,
        "virtualSlides": true,
        "swiper": {
            "initialSlide": 0,
            "spaceBetween": 20,
            "speed": 300,
            "loop": false,
            "preloadImages": true,
            "navigation": {
                "nextEl": ".photo-browser-next",
                "prevEl": ".photo-browser-prev"
            },
            "zoom": {
                "enabled": true,
                "maxRatio": 3,
                "minRatio": 1
            },
            "lazy": {
                "enabled": true
            }
        }
    },
    "notification": {
        "icon": null,
        "title": null,
        "titleRightText": null,
        "subtitle": null,
        "text": null,
        "closeButton": false,
        "closeTimeout": null,
        "closeOnClick": false,
        "swipeToClose": true,
        "cssClass": null,
        "render": null
    },
    "autocomplete": {
        "typeahead": false,
        "highlightMatches": true,
        "expandInput": false,
        "updateInputValueOnSelect": true,
        "multiple": false,
        "valueProperty": "id",
        "textProperty": "text",
        "openIn": "page",
        "pageBackLinkText": "Back",
        "popupCloseLinkText": "Close",
        "searchbarPlaceholder": "Search...",
        "searchbarDisableText": "Cancel",
        "animate": true,
        "autoFocus": false,
        "closeOnSelect": false,
        "notFoundText": " Nothing found",
        "requestSourceOnOpen": false,
        "preloader": false,
        "routableModals": true,
        "url": "select"
    },
    "vi": {
        "enabled": false,
        "autoplay": true,
        "fallbackOverlay": true,
        "fallbackOverlayText": "Please watch this ad",
        "showMute": true,
        "startMuted": true,
        "appId": null,
        "appVer": null,
        "language": null,
        "width": null,
        "height": null,
        "placementId": "pltd4o7ibb9rc653x14",
        "placementType": "interstitial",
        "videoSlot": null,
        "showProgress": true,
        "showBranding": true,
        "os": null,
        "osVersion": null,
        "orientation": null,
        "age": null,
        "gender": null,
        "advertiserId": null,
        "latitude": null,
        "longitude": null,
        "accuracy": null,
        "storeId": null,
        "ip": null,
        "manufacturer": null,
        "model": null,
        "connectionType": null,
        "connectionProvider": null
    }
});

var isLocal = function () { if (window.location.protocol == "file:") { return true; } else { return false; } };

/*-- patch isos12.2 WebApp link issue --*/
$(document).on('click', 'a[href^=mailto],a[href^=tel],a[href^=sms],a[href^=skype],a[href^=facetime]', function (e) {
    if ((app.device.webView == true) && (app.device.ios == true)) {
        e.preventDefault();
        var href = e.target.getAttribute("href");
        if (href) { window.location = href; }
        return false;
    }
});
/*-- patch isos12.2 WebApp link issue --*/

/*-- shortcut functions --*/
function loadpage(page, param, transition) {
    if (transition) {
        app.view[0].router.navigate('/' + page + '/?data=' + param, { animate: true, transition: transition, reloadAll: false });
    } else {
        app.view[0].router.navigate('/' + page + '/?data=' + param, { animate: true, reloadAll: false });
    }
}
function getpageparam(e) {
    var a = e.detail.route;
    if (a) { return a.query.data || null; }
}
function reloadHomePage() {
    app.view[0].router.navigate('/', { animate: false, reloadAll: true });
}
function backToPreviousPage() {
    app.view[0].router.back();
}

/*-- shortcut functions --*/
function txtToUrl(t) {
    if (t == null) { return ''; }
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    try {
        var result = t.match(regex);
    } catch (error) {
        return t;
    }
    if (result) {
        result.forEach(function (entry) {
            t = t.replace(entry, '<a class="link external" data-rel="external" target="_blank" rel="noopener" href="' + entry + '">' + result + '</a>');
        });
        return t;
    } else {
        return t;
    }
}


function showAlert(message) {
    app.dialog.alert(txtToUrl(message));
}

function ShowNotification(message, timeout, icon, cssClass, subtitle) {
    timeout = timeout || 3000;
    icon = icon || "bell_fill";
    subtitle = subtitle || '';
    var notificationFull = app.notification.create({
        icon: '<i class="f7-icons text-muted">' + icon + '</i>',
        title: 'NOTIFICATION',
        closeButton: false,
        titleRightText: '',
        subtitle: subtitle,
        text: message,
        closeTimeout: timeout,
        swipeToClose: true,
        cssClass: cssClass
    });
    notificationFull.open();
}

function showToast(text, closeButton, position, closeTimeout, icon) {
    var toast;
    if (typeof closeButton != "boolean") { closeButton = true };
    position = position || 'bottom';
    closeTimeout = closeTimeout || 3000;
    icon = icon || null;
    if (icon) {
        toast = app.toast.create({
            icon: (icon) ? '<i class="f7-icons">' + icon + '</i>' : null,
            text: text,
            position: position,
            destroyOnClose: true,
            closeTimeout: closeTimeout,
        });
    } else {
        toast = app.toast.create({
            text: text,
            closeButton: closeButton,
            closeButtonText: "OK",
            closeButtonColor: "text-color-white",
            position: position,
            destroyOnClose: true,
            closeTimeout: closeTimeout,
        });
    }
    toast.open();
}

function openPopup(p) {
    var myPopup = app.popup.create({
        content: p,
    });
    myPopup.open();
}

/*-- Virtual List --*/
function renderVirtualMediaListData(field, items) {
    var template = field.getAttribute('data-template') || null;
    if (!(template)) {
        $("#" + field.id).hide();
        showAlert("No template defined");
        return;
    }
    var iosHeight = field.getAttribute('data-height-ios') || 104;
    var mdHeight = field.getAttribute('data-height-md') || 111;
    var virtualList = app.virtualList.create({
        el: field,
        items: items,
        createUl: true,
        setListHeight: true,
        searchAll: function (query, items) {
            var found = [];
            for (var i = 0; i < items.length; i++) {
                var contents = JSON.stringify(items[i]);
                if (contents.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
            }
            return found; //return array with matched indexes
        },
        itemTemplate: template,
        height: app.theme === 'ios' ? iosHeight : (app.theme === 'md' ? mdHeight : 111),
    });
    var r = virtualList.$el[0];
    if (r) {
        r.setAttribute("data-loaded", true);
        r.setAttribute("data-count", items.length);
    };
}

function getVirtualMediaListData(field, source) {
    var url = "";
    var items = [];
    var vl = $("#" + field.id);
    if (!(vl)) { return; }
    var ref = app.virtualList.get(vl);
    if (ref) {
        app.virtualList.destroy(ref);
    }
    var url = "js/json/" + source;
    app.preloader.show();
    fetch(url, {
        method: 'get',
        headers: { 'Content-type': 'application/json' }
    }).then(
        function (response) {
            response.json()
                .then(data => {
                    var i = 0;
                    var item = {};
                    for (var prop in data) {
                        item = data[prop];
                        item["dataindex"] = i;
                        i = i + 1;
                        items.push(item);
                    }
                    renderVirtualMediaListData(field, items);
                    app.preloader.hide();
                })
                .catch(function (err) {
                    $("#" + field.id).hide();
                    showAlert(err.message);
                });

        }).catch(function (err) {
            $("#" + field.id).hide();
            app.preloader.hide();
            showAlert(err.message);
        });
}

function initVirtualMediaLists() {
    $(".virtual-media-list").each(function (idx, field) {
        if ((field.getAttribute("data-loaded") != "true") && (field.getAttribute("data-virtual-list") == "true")) {
            app.preloader.show();
            var source = $(this).attr('data-json-source') || null;
            if (source) {
                getVirtualMediaListData(field, source);
            }
        }
    });
}
/*-- Virtual List --*/


/*-- Forms --*/
function ISO8601(date) {
    var d = date.getDate();
    if (d < 10) d = '0' + d;
    var m = date.getMonth() + 1;
    if (m < 10) m = '0' + m;
    return date.getFullYear() + '-' + m + '-' + d;
}
function getTime() {
    var d = new Date(); // for now
    var h = d.getHours();
    if (h < 10) { h = "0" + h }
    var m = d.getMinutes();
    if (m < 10) { h = "0" + m }
    var r = h + ":" + m;
    return r;
}
function geolocation(obj) {
    if (navigator.geolocation) {
        try {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    obj.value = position.coords.latitude + "," + position.coords.longitude;
                    $('#' + obj.id).data('pos', position);
                },
                function (err) {
                    obj.value = err.message;
                }
            );
        }
        catch (error) {
            showAlert(error.message);
        }
    } else {
        obj.value = "Geolocation is not supported.";
    }
}

$(document).on("click", "input[type='geo']", function (e) {
    e.preventDefault();
    var g = $("#" + e.target.id).data('pos');
    if (g) {
        var url = "https://www.google.com/maps/search/?api=1&query=" + g.coords.latitude + "," + g.coords.longitude
        var win = window.location = url;
    }
});

$(document).on('mousedown', 'input[readonly]', function (e) {
    e.preventDefault();
});

function fillSelect(obj, api, fld) {
    $("#" + obj.id).addClass("disabled");
    app.preloader.show();
    app.request.promise.json(api)
        .then(
            function (response) {
                if ((response.status) && (response.status !== 200)) {
                    app.preloader.hide();
                    $("#" + obj.id).css('outline', '1px solid red');
                    app.emit('dataloadError', $(this));
                    showAlert("Error " + jsonresponse.status);
                }
                else {
                    app.preloader.hide();
                    var data = response.data;
                    app.emit('dataloadSuccess', $(this));
                    var h = '<option value="" disabled>...</option>';
                    for (var prop in data) {
                        h = h + '<option value="' + data[prop][fld] + '">' + data[prop][fld] + '</option>';
                    }
                    obj.innerHTML = h;
                    var v = obj.getAttribute('data-value') || '';
                    if (v.length > 0) { obj.value = v; }
                    $("#" + obj.id).removeClass("disabled");
                    setTimeout(function () { app.preloader.hide(); }, 1000);
                }
            }).catch(function (err) {
                app.preloader.hide();
                $("#" + obj.id).css('outline', '1px solid red');
                app.emit('dataloadError', $(this));
                showAlert("Unable to call Webservice. " + err.message);
            });
}

function initForm(o) {
    $("#" + o.id + " input[data-autofill='true']").each(function (idx, obj) {
        var t = obj.getAttribute("type");
        var v = obj.value;
        if (v.length == 0) {
            if (t == 'date') { obj.value = ISO8601(new Date()); }
            if (t == 'time') { obj.value = getTime(); }
            if (t == 'datetime-local') { obj.value = ISO8601(new Date()) + ' ' + getTime(); }
            if (t == 'geo') { geolocation(obj); }
        }
    });
    $("#" + o.id + " select[data-api]").each(function (idx, obj) {
        var api = obj.getAttribute("data-api") || null;
        var fld = obj.getAttribute("data-api-field") || '';
        if (api) { fillSelect(obj, api, fld); }
    });
}

function initForms() {
    if ((isLocal() == true)) { $('.form-img-add-btn').hide(); }
    $(".form").each(function (idx, form) {
        initForm(form);
    });
}

$(document).on('submit', '.form', function (e) {
    const f = $(this);
    var dm = f.attr('data-mode') || null;
    if ((dm == 0) || (dm == 1) || (dm == 2)) {
        e.preventDefault;
        var cm = f.attr("data-form-message");
        if ((isLocal() == true) && (dm == 0)) {
            $(this)[0].reset();
            if (cm.length > 0) { showAlert(cm); }
            ShowNotification("This Form can't send an email when running from the simulator");
            return;
        }
        var formData = new FormData();
        for (var i = 0; i < this.length; i++) {
            const x = "_alias";
            const reservedWords = ["name" + x, "id" + x, "description" + x, "this" + x, "title" + x, "submit" + x];
            var alias = this[i].name.toLowerCase();
            if (reservedWords.includes(alias) === true) { alias = alias.replaceAll(x, ''); }
            if (this[i].type == "radio") {
                if (this[i].checked === true) { formData.append(alias, this[i].value); }
            }
            else if (this[i].type == "checkbox") { formData.append(alias, this[i].checked); }
            else if (this[i].type == "submit") { }
            else if (this[i].type == "file") {
                var tt = this[i].name;
                var ost = $("#" + tt);
                if (ost) {
                    var blob = ost.data("data-blob");
                    var filename = ost.data("data-filename");
                    formData.append(alias, blob);
                }
            }
            else { formData.append(alias, this[i].value); }
        }
        var url;
        var data;
        var method;
        var contentType;
        var processData;
        if (dm == 2) { /* -- call js function --*/
            var func = f.attr("data-form-function");
            if (func) {
                var fn = window[func];
                var fnparams = [this, formData];
                if (typeof fn === "function") {
                    var r = fn.apply(this, fnparams);
                    app.preloader.hide();
                    if (cm.length > 0) { showAlert(cm) };
                    app.emit('userFormSuccess', r);
                }
                else {
                    app.preloader.hide();
                    var err = 'An error occured "' + func + '" is not an existing function';
                    showAlert(err);
                    app.emit('userFormError', err || null);
                }
            }
            return;
        } else if (dm == 0) { /* -- email php form --*/
            var em = f.attr("data-email") || null;
            if (!em) {
                var err = 'Recipient email not set for the form!';
                showAlert(err);
                app.emit('userFormError', err);
                return;
            }
            url = httpRoot + 'forms/form.php';
            var et = f.attr("data-email-title");
            formData.append("form_email", em);
            formData.append("form_title", et);
            data = formData;
            method = "POST";
            contentType = 'multipart/form-data';
            processData = true;
        } else {  /* -- call api rest --*/
            var dataMode = f.attr("data-api-data-mode") || 0;
            var root = f.attr("data-api-root") || ''; //fields
            var url = f.attr("data-api-url");
            if (!url) {
                var err = 'form url not defined!';
                showAlert(err);
                app.emit('userFormError', err);
                return;
            }
            const key = f.attr("data-parent-key") || null;
            if (key) {
                url = url.replaceAll("{key}", key);
            }
            if (dataMode == 0) { /* -- send form data --*/
                data = formData;
                contentType = 'multipart/form-data';
                processData = true;
            } else { /* -- send JSON data --*/
                var o = { [root]: {} };
                formData.forEach(function (value, key) {
                    o[root][key] = value;
                });
                var json = JSON.stringify(o);
                data = json;
                contentType = 'application/json';
                processData = false;
            }
            method = $(this).attr("data-api-method") || 'POST';
        }
        app.request({
            url: url,
            data: data,
            method: method,
            crossDomain: false,
            contentType: contentType,
            timeout: 0,
            processData: processData,
            beforeSend() {
                app.preloader.show();
            },
            error(xhr, status) {
                app.preloader.hide();
                var erm = f.attr("data-form-error-message") || '';
                if (erm.length > 0) {
                    showAlert(erm)
                }
                else {
                    showAlert('An error occured ' + xhr.responseText);
                }
                app.emit('userFormError', xhr.responseText);
            },
            success(data, status, xhr) {
                app.preloader.hide();
                if (cm.length > 0) { showAlert(cm) };
                app.emit('userFormSuccess', data);
                var pp = f.attr('data-form-postprocess') || 0;
                if (pp == 0) {
                    backToPreviousPage();
                } else if (pp == 1) {
                    reloadHomePage();
                } else if (pp == 2) {
                    e.target.reset();
                } else if (pp == 3) { //Check Return Value
                    var func = f.attr('data-return-function') || null;
                    if (func) {
                        var fn = window[func];
                        var fnparams = [this, data];
                        if (typeof fn === "function") {
                            var r = fn.apply(this, fnparams);
                            app.preloader.hide();
                            app.emit('userFormSuccess', r);
                        }
                        else {
                            app.preloader.hide();
                            var err = 'An error occured "' + func + '" is not an existing function';
                            showAlert(err);
                            app.emit('userFormError', err || null);
                        }
                    }
                }
            },
        });
    }
});
/*-- Forms --*/

/*-- Photo Browser --*/
function PhotoBrowserNavbarRenderer() {
    return '<div class="navbar navbar-photo-browser"> \
            <div class="navbar-bg"></div> \
            <div class="navbar-inner navbar-inner-centered-title"> \
              <div class="left"> \
                <a class="link webshare" data-webshare-textref="" data-webshare-imgref=".swiper-slide-active .swiper-zoom-container img" > \
                    <i class="fa material-icons">share</i> \
                </a> \
              </div> \
              <div class="title"> \
                <span class="photo-browser-current"></span> \
                <span class="photo-browser-of">/</span> \
                <span class="photo-browser-total"></span> \
              </div> \
              <div class="right"> \
                <a class="link popup-close" data-popup=".photo-browser-popup"> \
                  <span>close</span> \
                </a> \
              </div> \
            </div> \
          </div>';
}

function showPhotoBrowser(arr, idx) {
    idx = idx || 0;
    var showToolbar = (arr.length > 1);
    var renderFunction = null;
    if (useWebShare == true) { renderFunction = PhotoBrowserNavbarRenderer }

    var photoBrowser = app.photoBrowser.create({
        swipeToClose: true,
        photos: arr,
        backLinkText: 'close',
        navbarOfText: '/',
        theme: 'dark',
        captionsTheme: 'dark',
        navbar: true,
        toolbar: showToolbar,
        type: 'standalone',
        lazyLoading: true,
        captionTemplate: 'title',
        navbarTemplate: 'title',
        renderNavbar: renderFunction,
        swiper: {
            effect: 'fade',
            
            grabCursor: true,
            spaceBetween: 20,
            speed: 300,
            loop: false,
            preloadImages: false,
            zoom: {
                enabled: true,
                maxRatio: 3,
                minRatio: 1,
            },
            lazy: {
                enabled: false,
            },
        },
    });
    photoBrowser.open(idx);
    app.emit('photobrowserDisplayed', photoBrowser);
}
/*-- Photo Browser --*/

$(document).on("click", ".webshare", function (e) {
    e.preventDefault();
    if (navigator.share == undefined) {
        showAlert("Web Share only possible with https web sites");
    } else {
        var wstitle = $(this).attr('data-webshare-title') || app.name;
        var url = '';
        var imgref = $(this).attr('data-webshare-imgref');
        if (imgref) {
            url = $(imgref).attr('src') || '';
        }
        var wstext = "";
        if (!(url)) {
            wstext = $(this).attr('data-webshare-textref') || window.location.href;
        }
        navigator.share({
            title: wstitle,
            url: url,
            text: wstext
        })
    }
});

$(document).on('click', '.img-zoom', function (e) {
    e.preventDefault;
    var target = e.target;
    if (target) {
        var photos = [];
        var s = target.getAttribute("src");
        var t = target.getAttribute("title");
        if (!(s)) {
            s = target.style.backgroundImage;
            s = s.replace('url(', '').replace(')', '').replace(/\"/gi, "");
        }
        var p = {};
        p.url = s;
        p.caption = t;
        photos.push(p);
        showPhotoBrowser(photos, 0);
    }
});

$(document).on('click', '.collection-item-zoom', function (e) {
    var selImg;
    var photos = [];
    var index = 0;
    var c = $(this).find('.collection-item-image');
    if (c) {
        var view = e.view;
        selImg = c.attr('data-file');
    }
    var coll = $(this).closest('.collection');
    if (coll) {
        var i = 0;
        coll.children(".collection-item:not(.templaterow)").each(function (i, field) {
            var img = coll.find("#" + field.id).find('.collection-item-image');
            if (img) {
                var p = {};
                p.url = img.attr('data-file');
                p.caption = img.attr('title');
                photos.push(p);
                if (img.attr('data-file') == selImg) { index = i; }
                i = i++;
            }
        });
    }
    showPhotoBrowser(photos, index);
});

$(document).on('click', '.card-opened', function (e) {
    e.preventDefault;
    app.card.close($(this), true);
});

$(document).on('click', '.dynamic-popover', function (e) {
    e.preventDefault;
    var s = e.target.getAttribute("data-content");
    if ((s)) {
        var dynamicPopover = app.popover.create({
            targetEl: this,
            content: '<div class="popover">' +
                '<div class="popover-inner">' +
                s
                + '</div>' +
                '</div>',
        });
        dynamicPopover.open();
    }
});

/* -- Effects --*/
function getObjectViewPortPercent(el, viewportTop) {
    var elt = $('#' + el.id);
    var elementTop = elt.offset().top;
    var elementBottom = elementTop + elt.outerHeight();
    var viewportBottom = viewportTop + $(window).height();
    var scrollPercent = 100 - (Math.round(100 * (elementBottom - $(window).scrollTop()) / ($(window).height() + elt.height())));
    return parseInt(Math.round(((viewportBottom - elementTop) / elt.outerHeight()) * 100));
};

function applyEffect(elt) {
    var effect = elt.getAttribute('data-transform-effect') || '';
    elt.style.transform = effect;
    var opacity = elt.getAttribute('data-transform-opacity') || '';
    elt.style.opacity = opacity;
}

function resetEffect(elt) {
    var effect = elt.getAttribute('data-stored-state') || '';
    elt.style.transform = effect;
    var opacity = elt.getAttribute('data-initial-opacity') || '';
    elt.style.opacity = opacity;
}

function scrolleffectsHandler(e) {
    const elts = document.querySelectorAll("* [data-transform-trigger='viewport']:not(.activeeffect)");
    for (var i = 0; i < elts.length; i++) {
        var elt = elts[i];
        var p2 = getObjectViewPortPercent(elt, e.scrollTop);
        var p1 = elt.getAttribute('data-transform-viewport') || 0;
        if ((p2 > p1)) {
            elt.classList.add("activeeffect");
            var effect = elt.getAttribute('data-transform-effect') || '';
            elt.style.transform = effect;
            var opacity = elt.getAttribute('data-transform-opacity') || '';
            elt.style.opacity = opacity;
            console.log(elt.id + " loaded => " + p2)
        }
    }
};

function initEffects() {
    $("* [data-transform-trigger='pageload']").each(function (e) {
        applyEffect(this);
    });
}

$(document).on('page:afterin', function (e) {
    initEffects();
});

$(document).on('mouseover', "* [data-transform-trigger='mouseover']", function (e) {
    applyEffect(this);
});
$(document).on('mouseout', "* [data-transform-trigger='mouseover']", function (e) {
    resetEffect(this);
});

$(document).on('click', "* [data-transform-trigger='mouseclick']", function (e) {
    var effect = $(this).attr('data-transform-effect') || '';
    this.style.transform = effect;
});

document.addEventListener('scroll', function (event) {
    var elt = event.target;
    scrolleffectsHandler(elt);
}, true);
/* -- Effects --*/

$(document).on('page:beforeout', function (e) {
    $('.custominfowindow').hide();
})
$(document).on('page:beforein', function (e) {
    $('.custominfowindow').hide();
    if (autoClosePanel == true) {
        app.panel.get('#panel-left').close(true);
        app.panel.get('#panel-right').close(true);
    }
})

$(document).on('page:mounted', function (e) {
    if (dataFill == true) { $(".navbar").css("background-color", 'var(--f7-theme-color)') };
    initForms();
    initVirtualMediaLists();
});

function setStyle() {
    if (dataCustomColor) {
        document.documentElement.style.setProperty('--f7-theme-color', dataCustomColor);
    }
}



if (app.initialized == true) {
    if ((isLocal() == false) && (desktopAllowed == false) && (((app.device.desktop) || (!Framework7.support.touch)) || (!(app.device.android) && !(Framework7.device.ios)))) {
        showToast('This App can only run on a Mobile device', false, 'center', 9999999);
        $('#page').hide();
    }
    else {
        
        app.preloader.show();
        if (isLocal() == true) { httpRoot = localroot; }
        setStyle();
        if (gAuthMode > 0) {
            app.preloader.show();
            $('.preloader-backdrop').addClass('opaque');
        }
        initForms();
        initVirtualMediaLists();
        app.emit('appInitialised');
        if ( (app.device.webView==false) && (window.location.protocol!="file:") && (app.device.cordova==false)   && ( (app.device.ios) ||  (app.device.android) )   ) { openPopup(Base64.decode(gHomeScreen));requireInstallation=true; }
        setTimeout(function () { $(".apploader").hide(); app.preloader.hide(); initEffects(); }, 1000);
    }
}
