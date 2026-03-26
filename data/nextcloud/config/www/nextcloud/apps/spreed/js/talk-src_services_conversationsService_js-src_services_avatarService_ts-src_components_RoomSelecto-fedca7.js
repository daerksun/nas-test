"use strict";(()=>{(self.webpackChunktalk=self.webpackChunktalk||[]).push([["src_services_conversationsService_js-src_services_avatarService_ts-src_components_RoomSelecto-fedca7"],{94418:(l,i,s)=>{s.d(i,{DM:()=>a,Sl:()=>T,pA:()=>v});/**
 * @copyright Copyright (c) 2019 Joas Schilling <coding@schilljs.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */const O={MODE:{INTERNAL:"internal",EXTERNAL:"external",CLUSTER_CONVERSATION:"conversation_cluster"}},t={STATE:{INACTIVE:0,ACTIVE:1}},p={FETCH_LIMIT:100,MINIMUM_VISIBLE:5},u={RECORDING:{OFF:0,VIDEO:1,AUDIO:2,VIDEO_STARTING:3,AUDIO_STARTING:4,FAILED:5},RECORDING_CONSENT:{OFF:0,REQUIRED:1,OPTIONAL:2}},T={START_CALL:{EVERYONE:0,USERS:1,MODERATORS:2},STATE:{READ_WRITE:0,READ_ONLY:1},LISTABLE:{NONE:0,USERS:1,ALL:2},TYPE:{ONE_TO_ONE:1,GROUP:2,PUBLIC:3,CHANGELOG:4,ONE_TO_ONE_FORMER:5,NOTE_TO_SELF:6},BREAKOUT_ROOM_MODE:{NOT_CONFIGURED:0,AUTOMATIC:1,MANUAL:2,FREE:3},BREAKOUT_ROOM_STATUS:{STOPPED:0,STARTED:1,STATUS_ASSISTANCE_RESET:0,STATUS_ASSISTANCE_REQUESTED:2},OBJECT_TYPE:{EMAIL:"emails",FILE:"file",PHONE:"phone",CIRCLES:"circles",VIDEO_VERIFICATION:"share:password",BREAKOUT_ROOM:"room",DEFAULT:""},MAX_NAME_LENGTH:255,MAX_DESCRIPTION_LENGTH:500},a={ACTOR_TYPE:{USERS:"users",GUESTS:"guests",EMAILS:"emails",GROUPS:"groups",CIRCLES:"circles",BOTS:"bots",BRIDGED:"bridged",FEDERATED_USERS:"federated_users",PHONES:"phones",REMOTES:"remotes"},BRIDGE_BOT_ID:"bridge-bot",CHANGELOG_BOT_ID:"changelog"},I={CALL_FLAG:{DISCONNECTED:0,IN_CALL:1,WITH_AUDIO:2,WITH_VIDEO:4,WITH_PHONE:8},SIP_FLAG:{MUTE_MICROPHONE:1,MUTE_SPEAKER:2,SPEAKING:4,RAISE_HAND:8},SIP_DIALOUT_FLAG:{NONE:0,MUTE_MICROPHONE:1,MUTE_SPEAKER:2},NOTIFY:{DEFAULT:0,ALWAYS:1,MENTION:2,NEVER:3},NOTIFY_CALLS:{OFF:0,ON:1},TYPE:{OWNER:1,MODERATOR:2,USER:3,GUEST:4,USER_SELF_JOINED:5,GUEST_MODERATOR:6},PERMISSIONS:{DEFAULT:0,CUSTOM:1,CALL_START:2,CALL_JOIN:4,LOBBY_IGNORE:8,PUBLISH_AUDIO:16,PUBLISH_VIDEO:32,PUBLISH_SCREEN:64,CHAT:128,MAX_DEFAULT:254,MAX_CUSTOM:255}},r={TYPES:{AUDIO:"audio",DECK_CARD:"deckcard",FILE:"file",LOCATION:"location",MEDIA:"media",OTHER:"other",POLL:"poll",RECORDING:"recording",VOICE:"voice"}},_={LOBBY:{NONE:0,NON_MODERATORS:1},SIP:{DISABLED:0,ENABLED:1,ENABLED_NO_PIN:2}},n={TYPE:{USER:0,GROUP:1,EMAIL:4,REMOTE:6,CIRCLE:7}},E={MESSAGE_MODES:{NO_MENTION:1,SELF_MENTION:2,ROOM_MENTION:3}},S={STATUS:{OPEN:0,CLOSED:1},MODE:{PUBLIC:0,HIDDEN:1},ANSWER_TYPE:{MULTIPLE:0,SINGLE:1}},R={PUBLIC:0,PRIVATE:1},c={LOW:0,MEDIUM:1,HIGH:2},N={BACKGROUND_TYPE:{BLUR:"blur",IMAGE:"image",VIDEO:"video",VIDEO_STREAM:"video-stream"},BLUR_STRENGTH:{DEFAULT:10}},d={STATE:{DISABLED:0,ENABLED:1,NO_SETUP:2}},v={SIZE:{EXTRA_SMALL:22,SMALL:32,DEFAULT:44,MEDIUM:64,LARGE:128,EXTRA_LARGE:180,FULL:512}},C={STATE:{PENDING:0,ACCEPTED:1}}},34786:(l,i,s)=>{s.d(i,{J6:()=>r,ku:()=>a});var O=s(93664),t=s(65878),p=s(11480),u=s(94418);/**
 * @copyright Copyright (c) 2019 Marco Ambrosini <marcoambrosini@icloud.com>
 *
 * @author Marco Ambrosini <marcoambrosini@icloud.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */const T=(0,t.F)()?.spreed?.features?.includes("federation-v1")&&(0,t.F)()?.spreed?.config?.federation?.enabled&&(0,t.F)()?.spreed?.config?.federation?.["outgoing-enabled"],a=async function(e){return e=e||{},e.params=e.params||{},e.params.includeStatus=!0,O.Z.get((0,p.Ii)("apps/spreed/api/v4/room"),e)},I=async function(e){return axios.get(generateOcsUrl("apps/spreed/api/v4/room/{token}",{token:e}))},r=async function({searchText:e},o){return O.Z.get((0,p.Ii)("apps/spreed/api/v4/listed-room"),{...o,params:{searchTerm:e}})},_=async function(){return axios.get(generateOcsUrl("apps/spreed/api/v4/room/note-to-self"))},n=async function({searchText:e,token:o,onlyUsers:A},L){o=o||"new",A=!!A;const U=[SHARE.TYPE.USER,A?null:SHARE.TYPE.GROUP,A?null:SHARE.TYPE.CIRCLE,!A&&o!=="new"?SHARE.TYPE.EMAIL:null,!A&&T?SHARE.TYPE.REMOTE:null].filter(D=>D!==null);return axios.get(generateOcsUrl("core/autocomplete/get"),{...L,params:{search:e,itemType:"call",itemId:o,shareTypes:U}})},E=async function(e){return axios.post(generateOcsUrl("apps/spreed/api/v4/room"),{roomType:CONVERSATION.TYPE.ONE_TO_ONE,invite:e})},S=async function(e,o){return axios.post(generateOcsUrl("apps/spreed/api/v4/room"),{roomType:CONVERSATION.TYPE.GROUP,invite:e,source:o||ATTENDEE.ACTOR_TYPE.GROUPS})},R=async function(e,o){return axios.post(generateOcsUrl("apps/spreed/api/v4/room"),{roomType:CONVERSATION.TYPE.GROUP,roomName:e,objectType:o})},c=async function(e,o){return axios.post(generateOcsUrl("apps/spreed/api/v4/room"),{roomType:CONVERSATION.TYPE.PUBLIC,roomName:e,objectType:o})},N=async function(e,o){return axios.put(generateOcsUrl("apps/spreed/api/v4/room/{token}/password",{token:e}),{password:o})},d=async function(e,o){return axios.put(generateOcsUrl("apps/spreed/api/v4/room/{token}",{token:e}),{roomName:o})},v=async function(e,o){return axios.put(generateOcsUrl("apps/spreed/api/v4/room/{token}/description",{token:e}),{description:o})},C=async function(e){return axios.delete(generateOcsUrl("apps/spreed/api/v4/room/{token}",{token:e}))},P=async function(e){return axios.post(generateOcsUrl("apps/spreed/api/v4/room/{token}/favorite",{token:e}))},m=async function(e){return axios.delete(generateOcsUrl("apps/spreed/api/v4/room/{token}/favorite",{token:e}))},M=async function(e,o){return axios.post(generateOcsUrl("apps/spreed/api/v4/room/{token}/notify",{token:e}),{level:o})},f=async function(e,o){return axios.post(generateOcsUrl("apps/spreed/api/v4/room/{token}/notify-calls",{token:e}),{level:o})},g=async function(e){return axios.post(generateOcsUrl("apps/spreed/api/v4/room/{token}/public",{token:e}))},B=async function(e){return axios.delete(generateOcsUrl("apps/spreed/api/v4/room/{token}/public",{token:e}))},y=async function(e,o){return axios.put(generateOcsUrl("apps/spreed/api/v4/room/{token}/webinar/sip",{token:e}),{state:o})},G=async function(e,o){return axios.put(generateOcsUrl("apps/spreed/api/v4/room/{token}/recording-consent",{token:e}),{recordingConsent:o})},F=async function(e,o,A){return axios.put(generateOcsUrl("apps/spreed/api/v4/room/{token}/webinar/lobby",{token:e}),{state:o,timer:A})},h=async function(e,o){return axios.put(generateOcsUrl("apps/spreed/api/v4/room/{token}/read-only",{token:e}),{state:o})},x=async function(e,o){return axios.put(generateOcsUrl("apps/spreed/api/v4/room/{token}/listable",{token:e}),{scope:o})},H=async(e,o)=>axios.put(generateOcsUrl("apps/spreed/api/v4/room/{token}/permissions/default",{token:e}),{permissions:o}),k=async(e,o)=>axios.put(generateOcsUrl("apps/spreed/api/v4/room/{token}/permissions/call",{token:e}),{permissions:o}),Y=async(e,o)=>axios.post(generateOcsUrl("apps/spreed/api/v4/room/{token}/message-expiration",{token:e}),{seconds:o})},66408:(l,i,s)=>{s.d(i,{aQ:()=>p});var O=s(93664),t=s(11480);/**
 * @copyright Copyright (c) 2024 Maksim Sukharev <antreesy.web@gmail.com>
 *
 * @author Maksim Sukharev <antreesy.web@gmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */const p=function(r,_,n){return(0,t.Ii)("apps/spreed/api/v1/room/{token}/avatar"+(_?"/dark":"")+(n?"?v={avatarVersion}":""),{token:r,avatarVersion:n})},u=function(r,_,n,E=512){return generateOcsUrl("apps/spreed/api/v1/proxy/{token}/user-avatar/{size}"+(n?"/dark":"")+"?cloudId={cloudId}",{token:r,cloudId:_,size:E})},T=async function(r,_){return axios.post(generateOcsUrl("apps/spreed/api/v1/room/{token}/avatar",{token:r}),_)},a=async function(r,_,n){return axios.post(generateOcsUrl("apps/spreed/api/v1/room/{token}/avatar/emoji",{token:r}),{emoji:_,color:n})},I=async function(r){return axios.delete(generateOcsUrl("apps/spreed/api/v1/room/{token}/avatar",{token:r}))}},73761:(l,i,s)=>{s.r(i),s.d(i,{default:()=>a});var O=s(25968),t=s(47604),p=s(23861),u=s(51900),T=(0,u.Z)(t.Z,O.s,O.x,!1,null,"0a5665ec",null);const a=T.exports},51900:(l,i,s)=>{s.d(i,{Z:()=>O});function O(t,p,u,T,a,I,r,_){var n=typeof t=="function"?t.options:t;p&&(n.render=p,n.staticRenderFns=u,n._compiled=!0),T&&(n.functional=!0),I&&(n._scopeId="data-v-"+I);var E;if(r?(E=function(c){c=c||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!c&&typeof __VUE_SSR_CONTEXT__<"u"&&(c=__VUE_SSR_CONTEXT__),a&&a.call(this,c),c&&c._registeredComponents&&c._registeredComponents.add(r)},n._ssrRegister=E):a&&(E=_?function(){a.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:a),E)if(n.functional){n._injectStyles=E;var S=n.render;n.render=function(N,d){return E.call(d),S(N,d)}}else{var R=n.beforeCreate;n.beforeCreate=R?[].concat(R,E):[E]}return{exports:t,options:n}}},53211:(l,i,s)=>{var O=s(45431),t=s(42045);t.YM.themes.tooltip.html=!1,t.YM.themes.tooltip.delay={show:500,hide:200},t.YM.themes.tooltip.distance=10,t.YM.themes.tooltip["arrow-padding"]=3}}]);})();

//# sourceMappingURL=talk-src_services_conversationsService_js-src_services_avatarService_ts-src_components_RoomSelecto-fedca7.js.map?v=3b48451b1533357005e2