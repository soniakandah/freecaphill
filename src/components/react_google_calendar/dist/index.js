Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _reactBigCalendar = _interopRequireDefault(require('react-big-calendar'));

var _moment = _interopRequireDefault(require('moment'));

require('react-big-calendar/lib/css/react-big-calendar.css');

var _googleAPI = _interopRequireDefault(require('./utils/googleAPI'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc =
                        Object.defineProperty && Object.getOwnPropertyDescriptor
                            ? Object.getOwnPropertyDescriptor(obj, key)
                            : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}

function _typeof(obj) {
    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
        /* eslint-disable-line no-func-assign */ _typeof = function _typeofBar(
            obj,
        ) {
            return typeof obj;
        };
    } else {
        /* eslint-disable-line no-func-assign */ _typeof = function _typeof(
            obj,
        ) {
            return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
        };
    }
    return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
    /* eslint-disable-line no-func-assign */ _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
          };
    return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError(
            'Super expression must either be null or a function',
        );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: { value: subClass, writable: true, configurable: true },
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    /* eslint-disable-line no-func-assign */ _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
    return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
        );
    }
    return self;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

var localizer = _reactBigCalendar.default.momentLocalizer(_moment.default);

var Calendar =
    /*#__PURE__*/
    (function (_Component) {
        _inherits(Calendar, _Component);

        function Calendar(props) {
            var _this;

            _classCallCheck(this, Calendar);

            _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(Calendar).call(this, props),
            );

            _defineProperty(
                _assertThisInitialized(_assertThisInitialized(_this)),
                'componentDidMount',
                function () {
                    if (_this.props.config) {
                        _this.getGoogleCalendarEvents();
                    } else {
                        console.log(
                            'React Google Calendar requires you pass a configuration object',
                        );
                    }
                },
            );

            _defineProperty(
                _assertThisInitialized(_assertThisInitialized(_this)),
                'getGoogleCalendarEvents',
                function () {
                    _googleAPI.default
                        .getAllCalendars(_this.props.config)
                        .then(function (events) {
                            _this.setState({
                                events: events,
                            });
                        })
                        .catch(function (err) {
                            throw new Error(err);
                        });
                },
            );

            _defineProperty(
                _assertThisInitialized(_assertThisInitialized(_this)),
                'render',
                function () {
                    return _react.default.createElement(
                        'div',
                        null,
                        _react.default.createElement(
                            _reactBigCalendar.default,
                            {
                                localizer: localizer,
                                defaultView: 'week',
                                scrollToTime: new Date(),
                                events: _this.state.events,
                                style: {
                                    height: '100vh',
                                },
                            },
                        ),
                    );
                },
            );

            _this.state = {
                events: [],
            };
            return _this;
        }

        return Calendar;
    })(_react.Component);

exports.default = Calendar;
