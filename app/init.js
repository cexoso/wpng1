/*************************************************
*                   _ooOoo_						 *
*                  o8888888o					 *
*                  88" . "88					 *
*                  (| -_- |)					 *
*                  O\  =  /O					 *
*               ____/`---'\____					 *
*             .'  \\|     |//  `.				 *
*            /  \\|||  :  |||//  \				 *
*           /  _||||| -:- |||||-  \				 *
*           |   | \\\  -  /// |   |				 *
*           | \_|  ''\---/''  |   |				 *
*           \  .-\__  `-`  ___/-. /				 *
*         ___`. .'  /--.--\  `. . __			 *
*      ."" '<  `.___\_<|>_/___.'  >'"".			 *
*     | | :  `- \`.;`\ _ /`;.`/ - ` : | |		 *
*     \  \ `-.   \_ __\ /__ _/   .-` /  /		 *
*======`-.____`-.___\_____/___.-`____.-'======	 *
*                   `=---='						 *
*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^	 *
*         佛祖保佑       永无BUG					*
*************************************************/
import angular from "angular";
import "resource/bootstrap/css/bootstrap.min.css";
import "resource/bootstrap/css/bootstrap-theme.min.css";
import "resource/css/base.less";
import "resource/css/top_footer.less";
import "resource/css/nav.less";
import "resource/css/main.less";
import "angular-ui-bootstrap";
import "angular-ui-router";
export default angular.module('app', ['ui.router','ui.bootstrap']);
