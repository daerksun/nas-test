(()=>{(self.webpackChunktalk=self.webpackChunktalk||[]).push([["files-sidebar-call-chunk"],{73968:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".breakout-rooms-editor[data-v-48b1e8d4]{display:flex;flex-direction:column;padding:20px;justify-content:flex-start;align-items:flex-start}.breakout-rooms-editor__number-input[data-v-48b1e8d4]{display:block;margin-bottom:calc(var(--default-grid-baseline)*4)}.breakout-rooms-editor__caption[data-v-48b1e8d4]{font-weight:bold;display:block;margin:calc(var(--default-grid-baseline)*3) 0 calc(var(--default-grid-baseline)*2) 0}.breakout-rooms-editor__error-hint[data-v-48b1e8d4]{color:var(--color-error);font-size:.8rem}.breakout-rooms-editor__participants-step[data-v-48b1e8d4]{height:100%}.breakout-rooms-editor__main[data-v-48b1e8d4]{height:100%}.breakout-rooms-editor__buttons[data-v-48b1e8d4]{display:flex;justify-content:flex-end;gap:calc(var(--default-grid-baseline)*2);width:100%}.modal-mask__participants-step[data-v-48b1e8d4] .modal-container{overflow:hidden !important;height:100% !important}","",{version:3,sources:["webpack://./src/components/BreakoutRoomsEditor/BreakoutRoomsEditor.vue"],names:[],mappings:"AACA,wCACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,0BAAA,CACA,sBAAA,CAEA,sDACC,aAAA,CACA,kDAAA,CAGD,iDACC,gBAAA,CACA,aAAA,CACA,oFAAA,CAGD,oDACC,wBAAA,CACA,eAAA,CAGD,2DACC,WAAA,CAID,8CACC,WAAA,CAGD,iDACC,YAAA,CACA,wBAAA,CACA,wCAAA,CACA,UAAA,CAKD,iEACC,0BAAA,CACA,sBAAA",sourcesContent:[`
.breakout-rooms-editor {
	display: flex;
	flex-direction: column;
	padding: 20px;
	justify-content: flex-start;
	align-items: flex-start;

	&__number-input{
		display: block;
		margin-bottom: calc(var(--default-grid-baseline)*4);
	}

	&__caption {
		font-weight: bold;
		display: block;
		margin: calc(var(--default-grid-baseline)*3) 0 calc(var(--default-grid-baseline)*2) 0;
	}

	&__error-hint {
		color: var(--color-error);
		font-size: 0.8rem;
	}

	&__participants-step {
		height: 100%;

	}

	&__main {
		height: 100%;
	}

	&__buttons {
		display: flex;
		justify-content: flex-end;
		gap: calc(var(--default-grid-baseline) * 2);
		width: 100%;
	}
}

.modal-mask__participants-step {
	:deep(.modal-container) {
		overflow: hidden !important;
		height: 100% !important;
	}
}
`],sourceRoot:""}]);const l=i},85908:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".participants-editor[data-v-592120f8]{display:flex;width:100%;flex-direction:column;gap:var(--default-grid-baseline);height:calc(100% - 42px)}.participants-editor__section[data-v-592120f8]{margin:calc(var(--default-grid-baseline)*2) 0 var(--default-grid-baseline) 0}.participants-editor__scroller[data-v-592120f8]{height:100%;overflow:auto}.participants-editor__buttons[data-v-592120f8]{display:flex;justify-content:flex-end;gap:calc(var(--default-grid-baseline)*2)}[data-v-592120f8] .icon-collapse{position:absolute !important;left:0}[data-v-592120f8] .dialog{padding-block:0px 8px;padding-inline:12px 8px}.delete[data-v-592120f8]{margin-right:auto}","",{version:3,sources:["webpack://./src/components/BreakoutRoomsEditor/BreakoutRoomsParticipantsEditor.vue"],names:[],mappings:"AACA,sCACC,YAAA,CACA,UAAA,CACA,qBAAA,CACA,gCAAA,CACA,wBAAA,CAEA,+CACC,4EAAA,CAID,gDACC,WAAA,CACA,aAAA,CAGD,+CACC,YAAA,CACA,wBAAA,CACA,wCAAA,CAKF,iCACC,4BAAA,CACA,MAAA,CAGD,0BACC,qBAAA,CACA,uBAAA,CAGD,yBACC,iBAAA",sourcesContent:[`
.participants-editor {
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: var(--default-grid-baseline);
	height: calc(100% - 42px);

	&__section {
		margin: calc(var(--default-grid-baseline) * 2) 0 var(--default-grid-baseline) 0;

	}

	&__scroller {
		height: 100%;
		overflow: auto;
	}

	&__buttons {
		display: flex;
		justify-content: flex-end;
		gap: calc(var(--default-grid-baseline) * 2);
	}
}

// TODO: upstream collapse icon position fix
:deep(.icon-collapse) {
	position: absolute !important;
	left: 0;
}

:deep(.dialog) {
	padding-block: 0px 8px;
	padding-inline: 12px 8px;
}

.delete {
	margin-right: auto;
}
`],sourceRoot:""}]);const l=i},79369:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".selectable-participant[data-v-251b8509]{display:flex;align-items:center;gap:var(--default-grid-baseline);margin:var(--default-grid-baseline) 0 var(--default-grid-baseline) 14px}","",{version:3,sources:["webpack://./src/components/BreakoutRoomsEditor/SelectableParticipant.vue"],names:[],mappings:"AAEA,yCACC,YAAA,CACA,kBAAA,CACA,gCAAA,CACA,uEAAA",sourcesContent:[`

.selectable-participant {
	display: flex;
	align-items: center;
	gap: var(--default-grid-baseline);
	margin: var(--default-grid-baseline) 0 var(--default-grid-baseline) 14px;
}

`],sourceRoot:""}]);const l=i},44106:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".send-message-dialog[data-v-777f4383]{padding:20px 20px 8px}.send-message-dialog__title[data-v-777f4383]{margin-bottom:8px}","",{version:3,sources:["webpack://./src/components/BreakoutRoomsEditor/SendMessageDialog.vue"],names:[],mappings:"AACA,sCACC,qBAAA,CAEA,6CACC,iBAAA",sourcesContent:[`
.send-message-dialog {
	padding: 20px 20px 8px;

	&__title {
		margin-bottom: 8px;
	}
}
`],sourceRoot:""}]);const l=i},61617:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".call-view[data-v-1421fc07]{width:100%;height:100%;overflow:hidden;background-color:rgba(34,34,34,.8)}#call-container[data-v-1421fc07]{width:100%;height:100%;background-color:rgba(34,34,34,.8)}#call-container.blurred[data-v-1421fc07]{backdrop-filter:blur(25px)}#videos[data-v-1421fc07]{position:absolute;width:100%;height:calc(100% - 60px);top:60px;overflow:hidden;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-align-items:flex-end;align-items:flex-end;flex-direction:column;padding:0 8px 8px 8px}.video__promoted[data-v-1421fc07]{position:relative;height:100%;width:100%}.video__promoted.full-page[data-v-1421fc07]{position:static}.local-video[data-v-1421fc07]{position:absolute;right:0;bottom:0;width:300px;height:250px}.local-video--sidebar[data-v-1421fc07]{width:150px;height:100px}#videos.hidden[data-v-1421fc07]{display:none}[data-v-1421fc07] video{z-index:0;vertical-align:top}#videos .videoContainer[data-v-1421fc07] .avatardiv{box-shadow:0 0 15px var(--color-box-shadow)}.participants-1 #videos .videoContainer[data-v-1421fc07] video,.participants-2 #videos .videoContainer[data-v-1421fc07] video{padding:0}.videoContainer[data-v-1421fc07] .avatar-container .avatardiv{display:block;margin-left:auto;margin-right:auto}.videoContainer.promoted[data-v-1421fc07] .avatar-container{top:30%}.videoContainer.promoted[data-v-1421fc07] .avatar-container + .nameIndicator{display:none}.videoContainer.promoted[data-v-1421fc07] .mediaIndicator{display:none !important}@media only screen and (max-width: 768px){.participants-1 .videoView[data-v-1421fc07],.participants-2 .videoView[data-v-1421fc07]{max-height:35%}}.participants-1 .videoView[data-v-1421fc07] video,.participants-2 .videoView[data-v-1421fc07] video{position:absolute;max-height:100% !important;bottom:0;border-top-right-radius:3px;right:0}[data-v-1421fc07] .nameIndicator{position:absolute;bottom:0;left:0;padding:12px;color:#fff;text-shadow:3px 3px 10px rgba(0,0,0,.5),3px -3px 10px rgba(0,0,0,.5),-3px 3px 10px rgba(0,0,0,.5),-3px -3px 10px rgba(0,0,0,.5);width:100%;text-align:center;font-size:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}[data-v-1421fc07] .videoView .nameIndicator{padding:0;overflow:visible}.participants-1 .videoView[data-v-1421fc07] .nameIndicator,.participants-2 .videoView[data-v-1421fc07] .nameIndicator{left:initial;right:0}.participants-1 .videoView[data-v-1421fc07] .avatar-container,.participants-2 .videoView[data-v-1421fc07] .avatar-container{left:initial;right:0}.participants-2[data-v-1421fc07] .videoContainer.promoted + .videoContainer-dummy .nameIndicator{padding:12px 35%}#videos .videoContainer.speaking[data-v-1421fc07]:not(.videoView) .nameIndicator,#videos .videoContainer.videoView.speaking[data-v-1421fc07] .nameIndicator .microphone-icon{animation:pulse-1421fc07 1s;animation-iteration-count:infinite}@keyframes pulse-1421fc07{0%{opacity:1}50%{opacity:.3}100%{opacity:1}}","",{version:3,sources:["webpack://./src/components/CallView/CallView.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,4BACC,UAAA,CACA,WAAA,CACA,eAAA,CACA,kCCwBuB,CDrBxB,iCACC,UAAA,CACA,WAAA,CACA,kCCkBuB,CDhBvB,yCACC,0BAAA,CAIF,yBACC,iBAAA,CACA,UAAA,CACA,wBAAA,CACA,QAAA,CACA,eAAA,CACA,mBAAA,CACA,gBAAA,CACA,mBAAA,CACA,oBAAA,CACA,YAAA,CACA,oCAAA,CACA,4BAAA,CACA,4BAAA,CACA,oBAAA,CACA,qBAAA,CACA,qBAAA,CAGD,kCACC,iBAAA,CACA,WAAA,CACA,UAAA,CAEA,4CAGC,eAAA,CAIF,8BACC,iBAAA,CACA,OAAA,CACA,QAAA,CACA,WAAA,CACA,YAAA,CAEA,uCACC,WAAA,CACA,YAAA,CAIF,gCACC,YAAA,CAGD,wBACC,SAAA,CAOA,kBAAA,CAGD,oDACC,2CAAA,CAGD,8HAEC,SAAA,CAGD,8DACC,aAAA,CACA,gBAAA,CACA,iBAAA,CAGD,4DACC,OAAA,CAGD,6EACC,YAAA,CAGD,0DACC,uBAAA,CAGD,0CACC,wFAEC,cAAA,CAAA,CAIF,oGAEC,iBAAA,CACA,0BAAA,CACA,QAAA,CACA,2BAAA,CACA,OAAA,CAGD,iCACC,iBAAA,CACA,QAAA,CACA,MAAA,CACA,YAAA,CACA,UAAA,CACA,+HAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAGD,4CACC,SAAA,CACA,gBAAA,CAGD,sHAEC,YAAA,CACA,OAAA,CAGD,4HAEC,YAAA,CACA,OAAA,CAID,iGACC,gBAAA,CAGD,6KAEC,2BAAA,CACA,kCAAA,CAGD,0BACC,GACC,SAAA,CAED,IACC,UAAA,CAED,KACC,SAAA,CAAA",sourcesContent:[`
@import '../../assets/variables';

.call-view {
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: $color-call-background;
}

#call-container {
	width: 100%;
	height: 100%;
	background-color: $color-call-background;

	&.blurred {
		backdrop-filter: blur(25px);
	}
}

#videos {
	position: absolute;
	width: 100%;
	height: calc(100% - 60px);
	top: 60px;
	overflow: hidden;
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-justify-content: space-around;
	justify-content: space-around;
	-webkit-align-items: flex-end;
	align-items: flex-end;
	flex-direction: column;
	padding: 0 8px 8px 8px;
}

.video__promoted {
	position: relative;
	height: 100%;
	width: 100%;

	&.full-page {
		// force the promoted remote or local video to cover the whole call view
		// doesn't affect screen shares, as it's a different MediaStream
		position: static;
	}
}

.local-video {
	position: absolute;
	right: 0;
	bottom: 0;
	width: 300px;
	height: 250px;

	&--sidebar {
		width: 150px;
		height: 100px;
	}
}

#videos.hidden {
	display: none;
}

:deep(video) {
	z-index: 0;
	/* default filter for slightly better look */
	/* Disabled for now as it causes a huuuuge performance drop.
	 CPU usage is more than halved without this.
	 -webkit-filter: contrast(1.1) saturate(1.1) sepia(.1);
	 filter: contrast(1.1) saturate(1.1) sepia(.1);
	 */
	vertical-align: top; /* fix white line below video */
}

#videos .videoContainer :deep(.avatardiv) {
	box-shadow: 0 0 15px var(--color-box-shadow);
}

.participants-1 #videos .videoContainer :deep(video),
.participants-2 #videos .videoContainer :deep(video) {
	padding: 0;
}

.videoContainer :deep(.avatar-container .avatardiv) {
	display: block;
	margin-left: auto;
	margin-right: auto;
}

.videoContainer.promoted :deep(.avatar-container) {
	top: 30%;
}

.videoContainer.promoted :deep(.avatar-container + .nameIndicator) {
	display: none;
}

.videoContainer.promoted :deep(.mediaIndicator) {
	display: none !important;
}

@media only screen and (max-width: 768px) {
	.participants-1 .videoView,
	.participants-2 .videoView {
		max-height: 35%;
	}
}

.participants-1 .videoView :deep(video),
.participants-2 .videoView :deep(video) {
	position: absolute;
	max-height: 100% !important;
	bottom: 0;
	border-top-right-radius: 3px;
	right: 0;
}

:deep(.nameIndicator) {
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 12px;
	color: #fff;
	text-shadow: 3px 3px 10px rgba(0, 0, 0, .5), 3px -3px 10px rgba(0, 0, 0, .5), -3px 3px 10px rgba(0, 0, 0, .5), -3px -3px 10px rgba(0, 0, 0, .5);
	width: 100%;
	text-align: center;
	font-size: 20px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

:deep(.videoView .nameIndicator) {
	padding: 0;
	overflow: visible;
}

.participants-1 .videoView :deep(.nameIndicator),
.participants-2 .videoView :deep(.nameIndicator) {
	left: initial;
	right: 0;
}

.participants-1 .videoView :deep(.avatar-container),
.participants-2 .videoView :deep(.avatar-container) {
	left: initial;
	right: 0;
}

/* ellipsize name in 1on1 calls */
.participants-2 :deep(.videoContainer.promoted + .videoContainer-dummy .nameIndicator) {
	padding: 12px 35%;
}

#videos .videoContainer.speaking:not(.videoView) :deep(.nameIndicator),
#videos .videoContainer.videoView.speaking :deep(.nameIndicator .microphone-icon) {
	animation: pulse 1s;
	animation-iteration-count: infinite;
}

@keyframes pulse {
	0% {
		opacity: 1;
	}
	50% {
		opacity: .3;
	}
	100% {
		opacity: 1;
	}
}

`,`/**
 * @copyright Copyright (c) 2019 John Molakvo\xE6 <skjnldsv@protonmail.com>
 *
 * @author John Molakvo\xE6 <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

//messages list max width
$messages-list-max-width: 800px;

//message utils width
$message-utils-width: 100px;

$message-input-max-width: calc($messages-list-max-width - 100px);

// background color of call container
$color-call-background: rgba(34, 34, 34, 0.8);

// transition
$transition-duration-quick: var(--animation-quick, 100ms);
$transition-duration-slow: var(--animation-slow, 300ms);

$transition: all $transition-duration-quick ease-in-out;
$transition-slow: all $transition-duration-slow ease-in-out;
`],sourceRoot:""}]);const l=i},41599:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".grid-main-wrapper[data-v-6fda80da]{position:relative;width:100%}.grid-main-wrapper.transparent[data-v-6fda80da]{background:rgba(0,0,0,0)}.grid-main-wrapper.is-grid[data-v-6fda80da]{height:100%}.wrapper[data-v-6fda80da]{width:100%;display:flex;position:relative;bottom:0;left:0}.grid[data-v-6fda80da]{display:grid;height:100%;width:100%;grid-row-gap:8px;grid-column-gap:8px}.grid.stripe[data-v-6fda80da]{padding:8px 8px 0 0}.empty-call-view[data-v-6fda80da]{position:relative;padding:16px}.grid-wrapper[data-v-6fda80da]{width:100%;min-width:0;position:relative;flex:1 0 auto}.stripe-wrapper[data-v-6fda80da]{width:100%;min-width:0;position:relative}.dev-mode-video[data-v-6fda80da]{position:relative}.dev-mode-video[data-v-6fda80da]:not(.dev-mode-screenshot){border:1px solid #00ff41;color:#00ff41}.dev-mode-video--self[data-v-6fda80da]{background-size:cover !important;border-radius:calc(var(--default-clickable-area)/2)}.dev-mode-video img[data-v-6fda80da]{object-fit:cover;height:100%;width:100%;border-radius:calc(var(--default-clickable-area)/2)}.dev-mode-video .wrapper[data-v-6fda80da]{position:absolute}.dev-mode__title[data-v-6fda80da]{position:absolute;left:44px;color:#00ff41;z-index:100;line-height:120px;font-weight:900;font-size:100px !important;top:88px;opacity:25%}.dev-mode__data[data-v-6fda80da]{font-family:monospace;position:fixed;color:#00ff41;left:20px;bottom:50%;padding:20px;background:rgba(0,0,0,.8);border:1px solid #00ff41;width:212px;font-size:12px;z-index:999999999999999}.dev-mode__data p[data-v-6fda80da]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.video[data-v-6fda80da]:last-child{grid-column-end:-1}.grid-wrapper .grid-navigation[data-v-6fda80da]{position:absolute;top:calc(50% - var(--default-clickable-area)/2)}.grid-wrapper .grid-navigation__previous[data-v-6fda80da]{left:8px}.grid-wrapper .grid-navigation__next[data-v-6fda80da]{right:8px}.stripe-wrapper .grid-navigation[data-v-6fda80da]{position:absolute;top:16px}.stripe-wrapper .grid-navigation__previous[data-v-6fda80da]{left:8px}.stripe-wrapper .grid-navigation__next[data-v-6fda80da]{right:16px}.pages-indicator[data-v-6fda80da]{position:absolute;right:50%;top:4px;display:flex;background-color:var(--color-background-hover);height:44px;padding:0 22px;border-radius:22px}.pages-indicator__dot[data-v-6fda80da]{width:8px;height:8px;margin:auto 4px;border-radius:4px;background-color:#fff;opacity:80%;box-shadow:0 0 4px #000}.pages-indicator__dot--active[data-v-6fda80da]{opacity:100%}.stripe--collapse[data-v-6fda80da]{position:absolute !important;top:calc(-1*var(--default-clickable-area));right:0}.stripe--collapse[data-v-6fda80da],.grid-navigation[data-v-6fda80da]{z-index:2;opacity:.7}#call-container:hover .stripe--collapse[data-v-6fda80da],#call-container:hover .grid-navigation[data-v-6fda80da]{background-color:rgba(0,0,0,.1) !important}#call-container:hover .stripe--collapse[data-v-6fda80da]:hover,#call-container:hover .stripe--collapse[data-v-6fda80da]:focus,#call-container:hover .grid-navigation[data-v-6fda80da]:hover,#call-container:hover .grid-navigation[data-v-6fda80da]:focus{opacity:1;background-color:rgba(0,0,0,.2) !important}.stripe--collapse[data-v-6fda80da]:active,.grid-navigation[data-v-6fda80da]:active{background:none}","",{version:3,sources:["webpack://./src/components/CallView/Grid/Grid.vue"],names:[],mappings:"AACA,oCACC,iBAAA,CACA,UAAA,CAGD,gDACC,wBAAA,CAGD,4CACC,WAAA,CAGD,0BACC,UAAA,CACA,YAAA,CACA,iBAAA,CACA,QAAA,CACA,MAAA,CAGD,uBACC,YAAA,CACA,WAAA,CACA,UAAA,CAEA,gBAAA,CACA,mBAAA,CAEA,8BACC,mBAAA,CAIF,kCACC,iBAAA,CACA,YAAA,CAGD,+BACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,aAAA,CAGD,iCACC,UAAA,CACA,WAAA,CACA,iBAAA,CAGD,iCAMC,iBAAA,CALA,2DACC,wBAAA,CACA,aAAA,CAKD,uCACC,gCAAA,CACA,mDAAA,CAGD,qCACC,gBAAA,CACA,WAAA,CACA,UAAA,CACA,mDAAA,CAGD,0CACC,iBAAA,CAIF,kCACC,iBAAA,CACA,SAAA,CACA,aAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,0BAAA,CACA,QAAA,CACA,WAAA,CAGD,iCACC,qBAAA,CACA,cAAA,CACA,aAAA,CACA,SAAA,CACA,UAAA,CACA,YAAA,CACA,yBAAA,CACA,wBAAA,CACA,WAAA,CACA,cAAA,CACA,uBAAA,CAEA,mCACC,sBAAA,CACA,eAAA,CACA,kBAAA,CAIF,mCACC,kBAAA,CAIA,gDACC,iBAAA,CACA,+CAAA,CAEA,0DACC,QAAA,CAGD,sDACC,SAAA,CAIF,kDACC,iBAAA,CACA,QAAA,CAEA,4DACC,QAAA,CAGD,wDACC,UAAA,CAKH,kCACC,iBAAA,CACA,SAAA,CACA,OAAA,CACA,YAAA,CACA,8CAAA,CACA,WAAA,CACA,cAAA,CACA,kBAAA,CAEA,uCACC,SAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,qBAAA,CACA,WAAA,CACA,uBAAA,CAEA,+CACC,YAAA,CAKH,mCACC,4BAAA,CACA,0CAAA,CACA,OAAA,CAGD,qEAEC,SAAA,CACA,UAAA,CAEA,iHACC,0CAAA,CAEA,0PAEC,SAAA,CACA,0CAAA,CAIF,mFAEC,eAAA",sourcesContent:[`
.grid-main-wrapper {
	position: relative;
	width: 100%;
}

.grid-main-wrapper.transparent {
	background: transparent;
}

.grid-main-wrapper.is-grid {
	height: 100%;
}

.wrapper {
	width: 100%;
	display: flex;
	position: relative;
	bottom: 0;
	left: 0;
}

.grid {
	display: grid;
	height: 100%;
	width: 100%;

	grid-row-gap: 8px;
	grid-column-gap: 8px;

	&.stripe {
		padding: 8px 8px 0 0;
	}
}

.empty-call-view {
	position: relative;
	padding: 16px;
}

.grid-wrapper {
	width: 100%;
	min-width: 0;
	position: relative;
	flex: 1 0 auto;
}

.stripe-wrapper {
	width: 100%;
	min-width: 0;
	position: relative;
}

.dev-mode-video {
	&:not(.dev-mode-screenshot) {
		border: 1px solid #00FF41;
		color: #00FF41;
	}

	position: relative;

	&--self {
		background-size: cover !important;
		border-radius: calc(var(--default-clickable-area) / 2);
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
		border-radius: calc(var(--default-clickable-area) / 2);
	}

	.wrapper {
		position: absolute;
	}
}

.dev-mode__title {
	position: absolute;
	left: 44px;
	color: #00FF41;
	z-index: 100;
	line-height: 120px;
	font-weight: 900;
	font-size: 100px !important;
	top: 88px;
	opacity: 25%;
}

.dev-mode__data {
	font-family: monospace;
	position: fixed;
	color: #00FF41;
	left: 20px;
	bottom: 50%;
	padding: 20px;
	background: rgba(0, 0, 0, 0.8);
	border: 1px solid #00FF41;
	width: 212px;
	font-size: 12px;
	z-index: 999999999999999;

	& p {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
}

.video:last-child {
	grid-column-end: -1;
}

.grid-navigation {
	.grid-wrapper & {
		position: absolute;
		top: calc(50% - var(--default-clickable-area) / 2);

		&__previous {
			left: 8px;
		}

		&__next {
			right: 8px;
		}
	}

	.stripe-wrapper & {
		position: absolute;
		top: 16px;

		&__previous {
			left: 8px;
		}

		&__next {
			right: 16px;
		}
	}
}

.pages-indicator {
	position: absolute;
	right: 50%;
	top: 4px;
	display: flex;
	background-color: var(--color-background-hover);
	height: 44px;
	padding: 0 22px;
	border-radius: 22px;

	&__dot {
		width: 8px;
		height: 8px;
		margin: auto 4px;
		border-radius: 4px;
		background-color: white;
		opacity: 80%;
		box-shadow: 0 0 4px black;

		&--active {
			opacity: 100%;
		}
	}
}

.stripe--collapse {
	position: absolute !important;
	top: calc(-1 * var(--default-clickable-area));
	right: 0;
}

.stripe--collapse,
.grid-navigation {
	z-index: 2;
	opacity: .7;

	#call-container:hover & {
		background-color: rgba(0, 0, 0, 0.1) !important;

		&:hover,
		&:focus {
			opacity: 1;
			background-color: rgba(0, 0, 0, 0.2) !important;
		}
	}

	&:active {
		/* needed again to override default active button style */
		background: none;
	}
}

`],sourceRoot:""}]);const l=i},33111:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".empty-call-view[data-v-4567cc6c]{height:100%;width:100%;position:absolute;display:flex;flex-direction:column;align-content:center;justify-content:center;text-align:center;z-index:1}.empty-call-view .icon[data-v-4567cc6c]{background-size:64px;height:64px;width:64px;margin:0 auto 15px}.empty-call-view button[data-v-4567cc6c]{margin:4px auto}.empty-call-view h2[data-v-4567cc6c],.empty-call-view p[data-v-4567cc6c]{color:#fff}.empty-call-view--sidebar[data-v-4567cc6c]{padding-bottom:16px}.empty-call-view--sidebar h2[data-v-4567cc6c],.empty-call-view--sidebar p[data-v-4567cc6c]{font-size:90%}.empty-call-view--sidebar .icon[data-v-4567cc6c]{transform:scale(0.7);margin-top:0;margin-bottom:0}.empty-call-view--small[data-v-4567cc6c]{border-radius:calc(var(--default-clickable-area)/2);background-color:rgba(34,34,34,.8);padding:8px}.empty-call-view--small h2[data-v-4567cc6c]{font-size:1rem;font-weight:normal}.empty-call-view--small .icon[data-v-4567cc6c]{transform:none;margin-bottom:0;background-size:32px;height:32px;width:32px}","",{version:3,sources:["webpack://./src/components/CallView/shared/EmptyCallView.vue"],names:[],mappings:"AAEA,kCACC,WAAA,CACA,UAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,oBAAA,CACA,sBAAA,CACA,iBAAA,CACA,SAAA,CAEA,wCACC,oBAAA,CACA,WAAA,CACA,UAAA,CACA,kBAAA,CAGD,yCACC,eAAA,CAGD,yEACC,UAAA,CAGD,2CACC,mBAAA,CAEA,2FACC,aAAA,CAGD,iDACC,oBAAA,CACA,YAAA,CACA,eAAA,CAIF,yCACC,mDAAA,CACA,kCAAA,CACA,WAAA,CAEA,4CACC,cAAA,CACA,kBAAA,CAGD,+CACC,cAAA,CACA,eAAA,CACA,oBAAA,CACA,WAAA,CACA,UAAA",sourcesContent:[`

.empty-call-view {
	height: 100%;
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	text-align: center;
	z-index: 1; // Otherwise the "Copy link" button is not clickable

	.icon {
		background-size: 64px;
		height: 64px;
		width: 64px;
		margin: 0 auto 15px;
	}

	button {
		margin: 4px auto;
	}

	h2, p {
		color: #FFFFFF;
	}

	&--sidebar {
		padding-bottom: 16px;

		h2, p {
			font-size: 90%;
		}

		.icon {
			transform: scale(0.7);
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	&--small {
		border-radius: calc(var(--default-clickable-area) / 2);
		background-color: rgba(34, 34, 34, 0.8); /* Copy from the call view */
		padding: 8px;

		h2 {
			font-size: 1rem;
			font-weight: normal;
		}

		.icon {
			transform: none;
			margin-bottom: 0;
			background-size: 32px;
			height: 32px;
			width: 32px;
		}
	}
}

`],sourceRoot:""}]);const l=i},68687:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,'.not-connected video[data-v-0335eda8],.not-connected .avatar-container[data-v-0335eda8]{opacity:.5}.localVideoContainer[data-v-0335eda8]{grid-row-end:-1;border-radius:calc(var(--default-clickable-area)/2);z-index:1}.video-container-grid[data-v-0335eda8]{position:relative;height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column}.video-container-stripe[data-v-0335eda8]:not(.local-video--sidebar){--aspect-ratio: 1.33333;--stripe-height: 242px;position:relative;flex:0 0 calc(var(--aspect-ratio)*var(--stripe-height));overflow:hidden;display:flex;flex-direction:column;margin-top:auto;height:var(--stripe-height) !important}.video-container-big[data-v-0335eda8]{position:absolute;width:calc(100% - 16px);height:calc(100% - 8px);display:flex;flex-direction:column}.video-container-big .videoWrapper[data-v-0335eda8]{margin:auto}.video-container-small[data-v-0335eda8]{border-radius:var(--border-radius-large)}.videoWrapper[data-v-0335eda8],.video[data-v-0335eda8]{height:100%;width:100%}.videoWrapper.icon-loading[data-v-0335eda8]:after{height:60px;width:60px;margin:-32px 0 0 -32px}.video--fit[data-v-0335eda8]{object-fit:contain}.video--fill[data-v-0335eda8]{object-fit:cover}.avatar-container[data-v-0335eda8]{margin:auto}.localVideoContainer[data-v-0335eda8]:after{position:absolute;height:100%;width:100%;top:0;left:0;border-radius:calc(var(--default-clickable-area)/2)}.hover-shadow[data-v-0335eda8]:after{content:"";box-shadow:inset 0 0 0 3px #fff;cursor:pointer}.speaking[data-v-0335eda8]:after{content:"";box-shadow:inset 0 0 0 2px #fff}.bottom-bar[data-v-0335eda8]{position:absolute;bottom:0;width:100%;padding:0 20px 12px 24px;display:flex;justify-content:center;align-items:center;height:40px}.bottom-bar--big[data-v-0335eda8]{justify-content:center;height:48px}.bottom-bar .bottom-bar__button[data-v-0335eda8]{opacity:.8;background-color:var(--color-background-dark)}.bottom-bar .bottom-bar__button[data-v-0335eda8]:hover,.bottom-bar .bottom-bar__button[data-v-0335eda8]:focus{opacity:1}',"",{version:3,sources:["webpack://./src/components/CallView/shared/LocalVideo.vue"],names:[],mappings:"AAEC,wFAEC,UAAA,CAKF,sCACC,eAAA,CACA,mDAAA,CACA,SAAA,CAGD,uCACC,iBAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,YAAA,CACA,qBAAA,CAGD,oEAEC,uBAAA,CACA,sBAAA,CACA,iBAAA,CACA,uDAAA,CACA,eAAA,CACA,YAAA,CACA,qBAAA,CACA,eAAA,CACA,sCAAA,CAGD,sCACC,iBAAA,CACA,uBAAA,CACA,uBAAA,CACA,YAAA,CACA,qBAAA,CAEA,oDACC,WAAA,CAIF,wCACC,wCAAA,CAGD,uDAEC,WAAA,CACA,UAAA,CAGD,kDACC,WAAA,CACA,UAAA,CACA,sBAAA,CAGD,6BAEC,kBAAA,CAGD,8BAEC,gBAAA,CAGD,mCACC,WAAA,CAGD,4CACC,iBAAA,CACA,WAAA,CACA,UAAA,CACA,KAAA,CACA,MAAA,CACA,mDAAA,CAGD,qCACC,UAAA,CACA,+BAAA,CACA,cAAA,CAGD,iCACC,UAAA,CACA,+BAAA,CAGD,6BACC,iBAAA,CACA,QAAA,CACA,UAAA,CACA,wBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CAEA,kCACC,sBAAA,CACA,WAAA,CAGD,iDACC,UAAA,CACA,6CAAA,CAEA,8GAEC,SAAA",sourcesContent:[`
.not-connected {
	video,
	.avatar-container {
		opacity: 0.5;
	}
}

// Always display the local video in the last row
.localVideoContainer {
	grid-row-end: -1;
	border-radius: calc(var(--default-clickable-area) / 2);
	z-index: 1;
}

.video-container-grid {
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}

.video-container-stripe:not(.local-video--sidebar) {
	// aspect-ratio is set according to the maximum video resolution after applying constraints (720*540)
	--aspect-ratio: 1.33333;
	--stripe-height: 242px;
	position: relative;
	flex: 0 0 calc(var(--aspect-ratio) * var(--stripe-height));
	overflow: hidden;
	display: flex;
	flex-direction: column;
	margin-top: auto;
	height: var(--stripe-height) !important;
}

.video-container-big {
	position: absolute;
	width: calc(100% - 16px);
	height: calc(100% - 8px);
	display: flex;
	flex-direction: column;

	& .videoWrapper {
		margin: auto;
	}
}

.video-container-small {
	border-radius: var(--border-radius-large);
}

.videoWrapper,
.video {
	height: 100%;
	width: 100%;
}

.videoWrapper.icon-loading:after {
	height: 60px;
	width: 60px;
	margin: -32px 0 0 -32px;
}

.video--fit {
	/* Fit the frame */
	object-fit: contain;
}

.video--fill {
	/* Fill the frame */
	object-fit: cover;
}

.avatar-container {
	margin: auto;
}

.localVideoContainer:after {
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	border-radius: calc(var(--default-clickable-area) / 2);
}

.hover-shadow:after {
	content: '';
	box-shadow: inset 0 0 0 3px white;
	cursor: pointer;
}

.speaking:after {
	content: '';
	box-shadow: inset 0 0 0 2px white;
}

.bottom-bar {
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 20px 12px 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;

	&--big {
		justify-content: center;
		height: 48px;
	}

	& &__button {
		opacity: 0.8;
		background-color: var(--color-background-dark);

		&:hover,
		&:focus {
			opacity: 1;
		}
	}
}
`],sourceRoot:""}]);const l=i},29086:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".no-video-available[data-v-05333e6d]{opacity:.7}","",{version:3,sources:["webpack://./src/components/CallView/shared/LocalVideoControlButton.vue"],names:[],mappings:"AACA,qCACC,UAAA",sourcesContent:[`
.no-video-available {
	opacity: .7;
}
`],sourceRoot:""}]);const l=i},47621:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".presenter-overlay__video[data-v-2247350e]{position:relative;--max-size: 242px;--min-size: 100px;width:10vw;height:10vw;max-width:var(--max-size);max-height:var(--max-size);min-width:var(--min-size);min-height:var(--min-size);z-index:10}.presenter-overlay__video[data-v-2247350e]:hover{cursor:grab}.presenter-overlay__video.dragging[data-v-2247350e]{cursor:grabbing}.presenter-overlay--collapsed[data-v-2247350e]{position:absolute !important;opacity:.7;bottom:48px;right:0}#call-container:hover .presenter-overlay--collapsed[data-v-2247350e]{background-color:rgba(0,0,0,.1) !important}#call-container:hover .presenter-overlay--collapsed[data-v-2247350e]:hover,#call-container:hover .presenter-overlay--collapsed[data-v-2247350e]:focus{opacity:1;background-color:rgba(0,0,0,.2) !important}[data-v-2247350e] div{cursor:inherit}","",{version:3,sources:["webpack://./src/components/CallView/shared/PresenterOverlay.vue"],names:[],mappings:"AACA,2CACC,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,yBAAA,CACA,0BAAA,CACA,yBAAA,CACA,0BAAA,CACA,UAAA,CAEA,iDACC,WAAA,CAGD,oDACC,eAAA,CAIF,+CACC,4BAAA,CACA,UAAA,CACA,WAAA,CACA,OAAA,CAEA,qEACC,0CAAA,CAEA,sJAEC,SAAA,CACA,0CAAA,CAKH,sBAEC,cAAA",sourcesContent:[`
.presenter-overlay__video {
	position: relative;
	--max-size: 242px;
	--min-size: 100px;
	width: 10vw;
	height: 10vw;
	max-width: var(--max-size);
	max-height: var(--max-size);
	min-width: var(--min-size);
	min-height: var(--min-size);
	z-index: 10;

	&:hover {
		cursor: grab;
	}

	&.dragging {
		cursor: grabbing;
	}
}

.presenter-overlay--collapsed {
	position: absolute !important;
	opacity: .7;
	bottom: 48px;
	right: 0;

	#call-container:hover & {
		background-color: rgba(0, 0, 0, 0.1) !important;

		&:hover,
		&:focus {
			opacity: 1;
			background-color: rgba(0, 0, 0, 0.2) !important;
		}
	}
}

:deep(div) {
	// prevent default cursor
	cursor: inherit;
}
`],sourceRoot:""}]);const l=i},80399:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".toaster[data-v-5c1f5918]{position:absolute;bottom:20px;left:0;display:flex;flex-direction:column;gap:20px;width:100%;z-index:1}.toast[data-v-5c1f5918]{position:absolute;bottom:0;left:var(--horizontal-offset, 0);display:flex;align-items:center;gap:8px;animation:toast-floating-5c1f5918 var(--animation-length) linear}.toast__reaction[data-v-5c1f5918]{font-size:250%;line-height:100%}@media only screen and (max-width: 1920px){.toast__reaction[data-v-5c1f5918]{font-size:150%}.toast__reaction-img[data-v-5c1f5918]{width:30px;height:30px}}.toast__name[data-v-5c1f5918]{padding:8px 12px;border-radius:6px;line-height:100%;white-space:nowrap;color:#fff;background-color:var(--background-color);box-shadow:1px 1px 4px var(--color-box-shadow)}@keyframes toast-floating-5c1f5918{0%{transform:translateY(0);opacity:1}50%{transform:translateY(calc(-0.5 * var(--vertical-offset) * 1vh));opacity:1}100%{transform:translateY(calc(-1 * var(--vertical-offset) * 1vh));opacity:0}}","",{version:3,sources:["webpack://./src/components/CallView/shared/ReactionToaster.vue"],names:[],mappings:"AACA,0BACC,iBAAA,CACA,WAAA,CACA,MAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CACA,UAAA,CACA,SAAA,CAGD,wBACC,iBAAA,CACA,QAAA,CACA,gCAAA,CACA,YAAA,CACA,kBAAA,CACA,OAAA,CACA,gEAAA,CAEA,kCACC,cAAA,CACA,gBAAA,CAEA,2CACC,kCACC,cAAA,CAED,sCACC,UAAA,CACA,WAAA,CAAA,CAKH,8BACC,gBAAA,CACA,iBAAA,CACA,gBAAA,CACA,kBAAA,CACA,UAAA,CACA,wCAAA,CACA,8CAAA,CAIF,mCACC,GACC,uBAAA,CACA,SAAA,CAED,IACC,+DAAA,CACA,SAAA,CAED,KACC,6DAAA,CACA,SAAA,CAAA",sourcesContent:[`
.toaster {
	position: absolute;
	bottom: 20px;
	left: 0;
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	z-index: 1;
}

.toast {
	position: absolute;
	bottom: 0;
	left: var(--horizontal-offset, 0);
	display: flex;
	align-items: center;
	gap: 8px;
	animation: toast-floating var(--animation-length) linear;

	&__reaction {
		font-size: 250%;
		line-height: 100%;

		@media only screen and (max-width: 1920px) {
			& {
				font-size: 150%;
			}
			&-img {
				width: 30px;
				height: 30px;
			}
		}
	}

	&__name {
		padding: 8px 12px;
		border-radius: 6px;
		line-height: 100%;
		white-space: nowrap;
		color: #ffffff;
		background-color: var(--background-color);
		box-shadow: 1px 1px 4px var(--color-box-shadow);
	}
}

@keyframes toast-floating {
	0% {
		transform: translateY(0);
		opacity: 1;
	}
	50% {
		transform: translateY(calc(-0.5 * var(--vertical-offset) * 1vh));
		opacity: 1;
	}
	100% {
		transform: translateY(calc(-1 * var(--vertical-offset) * 1vh));
		opacity: 0;
	}
}
`],sourceRoot:""}]);const l=i},75385:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".screen[data-v-ceee52ca]{width:100%;height:100%;position:absolute;top:0;left:0}.screen--fit[data-v-ceee52ca]{object-fit:contain}.screen--fill[data-v-ceee52ca]{object-fit:cover}","",{version:3,sources:["webpack://./src/components/CallView/shared/Screen.vue"],names:[],mappings:"AAEA,yBACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,8BACC,kBAAA,CAED,+BACC,gBAAA",sourcesContent:[`

.screen {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	&--fit {
		object-fit: contain;
	}
	&--fill {
		object-fit: cover;
	}
}

`],sourceRoot:""}]);const l=i},14169:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".wrapper[data-v-1bdc6dd0]{display:flex;align-items:center;position:absolute;bottom:0;width:100%;padding:0 12px 8px 12px;z-index:1}.wrapper--big[data-v-1bdc6dd0]{justify-content:center}.wrapper--big .bottom-bar[data-v-1bdc6dd0]{width:unset}.wrapper--big .participant-name[data-v-1bdc6dd0]{margin-right:0}.bottom-bar[data-v-1bdc6dd0]{display:flex;align-items:center;gap:8px;width:100%;height:44px}.bottom-bar .media-indicators[data-v-1bdc6dd0]{display:flex}.bottom-bar .following-button[data-v-1bdc6dd0]{opacity:.8;background-color:var(--color-background-dark)}.bottom-bar .following-button[data-v-1bdc6dd0]:hover,.bottom-bar .following-button[data-v-1bdc6dd0]:focus{opacity:1}.participant-name[data-v-1bdc6dd0]{color:#fff;margin:0 auto 0 8px;position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;filter:drop-shadow(1px 1px 4px var(--color-box-shadow))}.participant-name--active[data-v-1bdc6dd0]{font-weight:bold}.participant-name--has-shadow[data-v-1bdc6dd0]{text-shadow:0 0 4px rgba(0,0,0,.8)}.status-indicator[data-v-1bdc6dd0]{width:44px;height:44px;display:flex;align-items:center;justify-content:center}.iceFailedIndicator[data-v-1bdc6dd0]{opacity:.8 !important}.audioIndicator[disabled][data-v-1bdc6dd0],.videoIndicator[data-v-1bdc6dd0]{opacity:.7}.videoIndicator[data-v-1bdc6dd0]:hover,.videoIndicator[data-v-1bdc6dd0]:focus{opacity:1}","",{version:3,sources:["webpack://./src/components/CallView/shared/VideoBottomBar.vue"],names:[],mappings:"AACA,0BACC,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,uBAAA,CACA,SAAA,CAEA,+BACC,sBAAA,CACA,2CACC,WAAA,CAED,iDACC,cAAA,CAKH,6BACC,YAAA,CACA,kBAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CAEA,+CACC,YAAA,CAGD,+CACC,UAAA,CACA,6CAAA,CAEA,0GAEC,SAAA,CAKH,mCACC,UAAA,CACA,mBAAA,CACA,iBAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,uDAAA,CACA,2CACC,gBAAA,CAED,+CACC,kCAAA,CAIF,mCACC,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAGD,qCACC,qBAAA,CAGD,4EAEC,UAAA,CAIA,8EAEC,SAAA",sourcesContent:[`
.wrapper {
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 12px 8px 12px;
	z-index: 1;

	&--big {
		justify-content: center;
		& .bottom-bar {
			width: unset;
		}
		& .participant-name {
			margin-right: 0;
		}
	}
}

.bottom-bar {
	display: flex;
	align-items: center;
	gap: 8px;
	width: 100%;
	height: 44px;

	& .media-indicators {
		display: flex;
	}

	& .following-button {
		opacity: 0.8;
		background-color: var(--color-background-dark);

		&:hover,
		&:focus {
			opacity: 1;
		}
	}
}

.participant-name {
	color: white;
	margin: 0 auto 0 8px;
	position: relative;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	filter: drop-shadow(1px 1px 4px var(--color-box-shadow));
	&--active {
		font-weight: bold;
	}
	&--has-shadow {
		text-shadow: 0 0 4px rgba(0, 0, 0, .8);
	}
}

.status-indicator {
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.iceFailedIndicator {
	opacity: .8 !important;
}

.audioIndicator[disabled],
.videoIndicator {
	opacity: .7;
}

.videoIndicator {
	&:hover,
	&:focus {
		opacity: 1;
	}
}

`],sourceRoot:""}]);const l=i},33356:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,'.forced-white[data-v-21f9be60]{filter:drop-shadow(1px 1px 4px var(--color-box-shadow))}.not-connected video[data-v-21f9be60],.not-connected .avatar-container[data-v-21f9be60]{opacity:.5}.video-container-grid[data-v-21f9be60]{position:relative;height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;border-radius:calc(var(--default-clickable-area)/2)}.video-container-big[data-v-21f9be60]{position:absolute}.video-container-big.one-to-one[data-v-21f9be60]{width:calc(100% - 16px);height:calc(100% - 8px)}.video-container-big .videoWrapper[data-v-21f9be60]{margin:auto}.avatar-container[data-v-21f9be60]{width:100%;height:100%;position:absolute;display:flex;justify-content:center;align-items:center}.placeholder-for-promoted[data-v-21f9be60]{background:radial-gradient(146.1% 146.1% at 50% 50%, #333333 0%, #858585 100%);width:100%;height:100%;position:absolute;display:flex;justify-content:center;align-items:center;border-radius:calc(var(--default-clickable-area)/2)}.videoWrapper[data-v-21f9be60],.video[data-v-21f9be60]{height:100%;width:100%;border-radius:calc(var(--default-clickable-area)/2)}.videoWrapper.presenter-overlay>video[data-v-21f9be60]{border-radius:50%}.videoWrapper.icon-loading[data-v-21f9be60]:after{height:60px;width:60px;margin:-32px 0 0 -32px}.video--fit[data-v-21f9be60]{object-fit:contain}.video--fill[data-v-21f9be60]{object-fit:cover}.connection-message[data-v-21f9be60]{width:100%;position:absolute;top:calc(50% + 50px);text-align:center;z-index:1;color:#fff;filter:drop-shadow(1px 1px 4px var(--color-box-shadow))}.connection-message.below-avatar[data-v-21f9be60]{top:calc(50% + 80px)}.video-container[data-v-21f9be60]::after{position:absolute;height:100%;width:100%;top:0;left:0;border-radius:calc(var(--default-clickable-area)/2)}.video-container.presenter-overlay[data-v-21f9be60]::after{border-radius:50%;z-index:1}.video-container.speaking[data-v-21f9be60]::after{content:"";box-shadow:inset 0 0 0 2px #fff}.video-container.hover[data-v-21f9be60]::after{content:"";box-shadow:inset 0 0 0 3px #fff;cursor:pointer}.presenter-icon__hide[data-v-21f9be60]{position:relative;color:#fff;left:50%;transform:translate(-50%, -52px);opacity:.7;background-color:rgba(0,0,0,.5);border-radius:50%;padding:6px;width:44px;z-index:2}.presenter-icon__hide[data-v-21f9be60]:hover{cursor:pointer;opacity:.9}',"",{version:3,sources:["webpack://./src/components/CallView/shared/VideoVue.vue"],names:[],mappings:"AACA,+BACC,uDAAA,CAIA,wFAEC,UAAA,CAIF,uCACC,iBAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,YAAA,CACA,qBAAA,CACA,mDAAA,CAGD,sCACC,iBAAA,CAEA,iDACC,uBAAA,CACA,uBAAA,CAGD,oDACC,WAAA,CAIF,mCACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,2CACC,8EAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,mDAAA,CAGD,uDAEC,WAAA,CACA,UAAA,CACA,mDAAA,CAGD,uDACC,iBAAA,CAGD,kDACC,WAAA,CACA,UAAA,CACA,sBAAA,CAGD,6BAEC,kBAAA,CAGD,8BAEC,gBAAA,CAGD,qCACC,UAAA,CAEA,iBAAA,CACA,oBAAA,CAEA,iBAAA,CAEA,SAAA,CAEA,UAAA,CACA,uDAAA,CAGD,kDACC,oBAAA,CAGD,yCACC,iBAAA,CACA,WAAA,CACA,UAAA,CACA,KAAA,CACA,MAAA,CACA,mDAAA,CAGD,2DACC,iBAAA,CACA,SAAA,CAGD,kDACC,UAAA,CACA,+BAAA,CAGD,+CACC,UAAA,CACA,+BAAA,CACA,cAAA,CAGD,uCACC,iBAAA,CACA,UAAA,CACA,QAAA,CACA,gCAAA,CACA,UAAA,CACA,+BAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CACA,SAAA,CAEA,6CACC,cAAA,CACA,UAAA",sourcesContent:[`
.forced-white {
	filter: drop-shadow(1px 1px 4px var(--color-box-shadow));
}

.not-connected {
	video,
	.avatar-container {
		opacity: 0.5;
	}
}

.video-container-grid {
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	border-radius: calc(var(--default-clickable-area) / 2);
}

.video-container-big {
	position: absolute;

	&.one-to-one {
		width: calc(100% - 16px);
		height: calc(100% - 8px);
	}

	& .videoWrapper {
		margin: auto;
	}
}

.avatar-container {
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
}

.placeholder-for-promoted {
	background: radial-gradient(146.1% 146.1% at 50% 50%, #333333 0%, #858585 100%);
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: calc(var(--default-clickable-area) / 2);
}

.videoWrapper,
.video {
	height: 100%;
	width: 100%;
	border-radius: calc(var(--default-clickable-area) / 2);
}

.videoWrapper.presenter-overlay > video {
	border-radius: 50%;
}

.videoWrapper.icon-loading:after {
	height: 60px;
	width: 60px;
	margin: -32px 0 0 -32px;
}

.video--fit {
	/* Fit the frame */
	object-fit: contain;
}

.video--fill {
	/* Fill the frame */
	object-fit: cover;
}

.connection-message {
	width: 100%;

	position: absolute;
	top: calc(50% + 50px);

	text-align: center;

	z-index: 1;

	color: white;
	filter: drop-shadow(1px 1px 4px var(--color-box-shadow));
}

.connection-message.below-avatar {
	top: calc(50% + 80px);
}

.video-container::after {
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	border-radius: calc(var(--default-clickable-area) / 2);
}

.video-container.presenter-overlay::after {
	border-radius: 50%;
	z-index: 1;
}

.video-container.speaking::after {
	content: '';
	box-shadow: inset 0 0 0 2px white;
}

.video-container.hover::after {
	content: '';
	box-shadow: inset 0 0 0 3px white;
	cursor: pointer;
}

.presenter-icon__hide {
	position: relative;
	color: white;
	left: 50%;
	transform: translate(-50%, -52px);
	opacity: 0.7;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	padding: 6px;
	width: 44px;
	z-index: 2; // Above video and its border

	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}

}

`],sourceRoot:""}]);const l=i},35862:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".viewer-overlay-ghost[data-v-0fc70246]{position:absolute;bottom:8px;right:8px;left:0}.viewer-overlay[data-v-0fc70246]{--aspect-ratio: calc(3 / 4);--width: 20vw;--min-width: 250px;--max-width: 400px;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);min-height:calc(var(--default-clickable-area) + 8px);z-index:11000}.viewer-overlay *[data-v-0fc70246]{box-sizing:border-box}.viewer-overlay__collapse[data-v-0fc70246]{position:absolute;top:8px;right:8px;z-index:100}.viewer-overlay__button[data-v-0fc70246]{opacity:.8}.viewer-overlay__button[data-v-0fc70246]:active,.viewer-overlay__button[data-v-0fc70246]:hover,.viewer-overlay__button[data-v-0fc70246]:focus{opacity:.9}.video-overlay__top-bar[data-v-0fc70246]{position:absolute;top:8px;left:8px;z-index:100}.viewer-overlay__bottom-bar[data-v-0fc70246]{display:flex;align-items:center;justify-content:center;gap:8px;position:absolute;bottom:0;width:100%;padding:0 12px 8px 12px;z-index:1}.viewer-overlay__video-container[data-v-0fc70246]{width:100%;height:calc(var(--width)*var(--aspect-ratio));min-height:calc(var(--min-width)*var(--aspect-ratio));max-height:calc(var(--max-width)*var(--aspect-ratio));bottom:0;right:0}.viewer-overlay__local-video[data-v-0fc70246]{position:absolute;bottom:8px;right:8px;width:25%;height:25%;overflow:hidden}.viewer-overlay__video[data-v-0fc70246]{position:relative;height:100%}[data-v-0fc70246] .screen{border-radius:calc(var(--default-clickable-area)/4)}","",{version:3,sources:["webpack://./src/components/CallView/shared/ViewerOverlayCallView.vue"],names:[],mappings:"AACA,uCACC,iBAAA,CACA,UAAA,CACA,SAAA,CACA,MAAA,CAGD,iCACC,2BAAA,CACA,aAAA,CACA,kBAAA,CACA,kBAAA,CACA,iBAAA,CACA,kBAAA,CACA,0BAAA,CACA,0BAAA,CACA,oDAAA,CACA,aAAA,CAGD,mCACC,qBAAA,CAGD,2CACC,iBAAA,CACA,OAAA,CACA,SAAA,CACA,WAAA,CAGD,yCACC,UAAA,CACA,8IAGC,UAAA,CAIF,yCACC,iBAAA,CACA,OAAA,CACA,QAAA,CACA,WAAA,CAGD,6CACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,OAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,uBAAA,CACA,SAAA,CAGD,kDACC,UAAA,CACA,6CAAA,CACA,qDAAA,CACA,qDAAA,CAEA,QAAA,CACA,OAAA,CAGD,8CACC,iBAAA,CACA,UAAA,CACA,SAAA,CACA,SAAA,CACA,UAAA,CACA,eAAA,CAGD,wCACC,iBAAA,CACA,WAAA,CAGD,0BACC,mDAAA",sourcesContent:[`
.viewer-overlay-ghost {
	position: absolute;
	bottom: 8px;
	right: 8px;
	left: 0;
}

.viewer-overlay {
	--aspect-ratio: calc(3 / 4);
	--width: 20vw;
	--min-width: 250px;
	--max-width: 400px;
	position: absolute;
	width: var(--width);
	min-width: var(--min-width);
	max-width: var(--max-width);
	min-height: calc(var(--default-clickable-area) + 8px);
	z-index: 11000;
}

.viewer-overlay * {
	box-sizing: border-box;
}

.viewer-overlay__collapse {
	position: absolute;
	top: 8px;
	right: 8px;
	z-index: 100;
}

.viewer-overlay__button {
	opacity: 0.8;
	&:active,
	&:hover,
	&:focus {
		opacity: 0.9;
	}
}

.video-overlay__top-bar {
	position: absolute;
	top: 8px;
	left: 8px;
	z-index: 100;
}

.viewer-overlay__bottom-bar {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 12px 8px 12px;
	z-index: 1;
}

.viewer-overlay__video-container {
	width: 100%;
	height: calc(var(--width) * var(--aspect-ratio));
	min-height: calc(var(--min-width) * var(--aspect-ratio));
	max-height: calc(var(--max-width) * var(--aspect-ratio));
	/* Note: because of transition it always has position absolute on animation */
	bottom: 0;
	right: 0;
}

.viewer-overlay__local-video {
	position: absolute;
	bottom: 8px;
	right: 8px;
	width: 25%;
	height: 25%;
	overflow: hidden;
}

.viewer-overlay__video {
	position: relative;
	height: 100%;
}

:deep(.screen) {
	border-radius: calc(var(--default-clickable-area) / 4);
}
`],sourceRoot:""}]);const l=i},423:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".breakout-room-item[data-v-88e39986]{margin-top:calc(var(--default-grid-baseline)*5);font-weight:bold}.breakout-room-item__wrapper[data-v-88e39986]{display:flex;align-items:center;gap:var(--default-grid-baseline);margin:0 var(--default-grid-baseline)}.breakout-room-item__room-name[data-v-88e39986]{margin:0 auto 0 var(--default-grid-baseline)}","",{version:3,sources:["webpack://./src/components/RightSidebar/BreakoutRooms/BreakoutRoomItem.vue"],names:[],mappings:"AACA,qCACC,+CAAA,CACA,gBAAA,CAEA,8CACC,YAAA,CACA,kBAAA,CACA,gCAAA,CACA,qCAAA,CAGD,gDACC,4CAAA",sourcesContent:[`
.breakout-room-item {
	margin-top: calc(var(--default-grid-baseline)*5);
	font-weight: bold;

	&__wrapper {
		display: flex;
		align-items: center;
		gap: var(--default-grid-baseline);
		margin : 0 var(--default-grid-baseline);
	}

	&__room-name {
		margin : 0 auto 0 var(--default-grid-baseline);
	}
}
`],sourceRoot:""}]);const l=i},14462:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".solid[data-v-611b8335]{margin:0}.call-duration-hint[data-v-611b8335]{display:flex;padding:calc(var(--default-grid-baseline)*2)}.call-time[data-v-611b8335]{display:flex;justify-content:center;align-items:center;height:var(--default-clickable-area);font-weight:bold}[data-v-611b8335] .button-vue{justify-content:left !important;color:#fff !important}[data-v-611b8335] .button-vue:disabled{opacity:1 !important;pointer-events:none}","",{version:3,sources:["webpack://./src/components/TopBar/CallTime.vue"],names:[],mappings:"AAEA,wBACC,QAAA,CAED,qCACC,YAAA,CACA,4CAAA,CAED,4BACC,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,oCAAA,CACA,gBAAA,CAGD,8BACC,+BAAA,CACA,qBAAA,CAEA,uCACC,oBAAA,CACA,mBAAA",sourcesContent:[`

.solid {
	margin: 0;
}
.call-duration-hint {
	display: flex;
	padding: calc(var(--default-grid-baseline) * 2);
}
.call-time {
	display: flex;
	justify-content: center;
	align-items: center;
	height: var(--default-clickable-area);
	font-weight: bold;
}

:deep(.button-vue) {
	justify-content: left !important;
	color: #fff !important;

	&:disabled {
		opacity: 1 !important;
		pointer-events: none;
	}
}

`],sourceRoot:""}]);const l=i},89361:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".reaction__group[data-v-2785e419] .nc-button-group-content{flex-wrap:wrap;justify-content:flex-start;gap:0;width:calc(var(--reactions-in-single-row)*var(--default-clickable-area))}.reaction__button[data-v-2785e419]{flex:0 0 calc(100%/var(--reactions-in-single-row)) !important}","",{version:3,sources:["webpack://./src/components/TopBar/ReactionMenu.vue"],names:[],mappings:"AAGE,2DACC,cAAA,CACA,0BAAA,CACA,KAAA,CACA,wEAAA,CAIF,mCACC,6DAAA",sourcesContent:[`
.reaction {
	&__group {
		:deep(.nc-button-group-content) {
			flex-wrap: wrap;
			justify-content: flex-start;
			gap: 0;
			width: calc(var(--reactions-in-single-row) * var(--default-clickable-area))
		}
	}

	&__button {
		flex: 0 0 calc(100% / var(--reactions-in-single-row)) !important;
	}
}
`],sourceRoot:""}]);const l=i},14472:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".top-bar[data-v-4ad28c90]{display:flex;flex-wrap:wrap;z-index:10;gap:3px;justify-content:flex-end;padding:calc(2*var(--default-grid-baseline));padding-right:calc(2*var(--default-grid-baseline) + var(--app-sidebar-offset));background-color:var(--color-main-background);border-bottom:1px solid var(--color-border)}.talk-sidebar-callview .top-bar[data-v-4ad28c90]{margin-right:var(--default-clickable-area)}.top-bar[data-theme-dark=true][data-v-4ad28c90]{right:0;border:none;position:absolute;top:0;left:0;background-color:rgba(0,0,0,0)}.conversation-icon[data-v-4ad28c90]{margin-left:48px}.conversation-header[data-v-4ad28c90]{position:relative;display:flex;overflow-x:hidden;overflow-y:clip;white-space:nowrap;width:0;flex-grow:1;cursor:pointer}.conversation-header__text[data-v-4ad28c90]{display:flex;flex-direction:column;flex-grow:1;margin-left:8px;justify-content:center;width:100%;overflow:hidden;height:var(--default-clickable-area)}.conversation-header__text--offline[data-v-4ad28c90]{color:var(--color-text-maxcontrast)}.conversation-header .title[data-v-4ad28c90]{font-weight:bold;overflow:hidden;text-overflow:ellipsis}.conversation-header .description[data-v-4ad28c90]{overflow:hidden;text-overflow:ellipsis;max-width:fit-content}.conversation-header .description__in-chat[data-v-4ad28c90]{color:var(--color-text-maxcontrast)}[data-v-4ad28c90] .conversation-icon__type{border-color:var(--original-color-main-background) !important;background-color:var(--original-color-main-background) !important}","",{version:3,sources:["webpack://./src/components/TopBar/TopBar.vue"],names:[],mappings:"AACA,0BACC,YAAA,CACA,cAAA,CACA,UAAA,CACA,OAAA,CACA,wBAAA,CACA,4CAAA,CAEA,8EAAA,CACA,6CAAA,CACA,2CAAA,CAEA,iDACC,0CAAA,CAGD,gDACC,OAAA,CACA,WAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,8BAAA,CAIF,oCACC,gBAAA,CAGD,sCACC,iBAAA,CACA,YAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,OAAA,CACA,WAAA,CACA,cAAA,CACA,4CACC,YAAA,CACA,qBAAA,CACA,WAAA,CACA,eAAA,CACA,sBAAA,CACA,UAAA,CACA,eAAA,CACA,oCAAA,CACA,qDACC,mCAAA,CAGF,6CACC,gBAAA,CACA,eAAA,CACA,sBAAA,CAED,mDACC,eAAA,CACA,sBAAA,CACA,qBAAA,CACA,4DACC,mCAAA,CAKH,2CACC,6DAAA,CACA,iEAAA",sourcesContent:[`
.top-bar {
	display: flex;
	flex-wrap: wrap;
	z-index: 10;
	gap: 3px;
	justify-content: flex-end;
	padding: calc(2 * var(--default-grid-baseline));
	// Reserve space for the sidebar toggle button
	padding-right: calc(2 * var(--default-grid-baseline) + var(--app-sidebar-offset));
	background-color: var(--color-main-background);
	border-bottom: 1px solid var(--color-border);

	.talk-sidebar-callview & {
		margin-right: var(--default-clickable-area);
	}

	&[data-theme-dark="true"] {
		right: 0;
		border: none;
		position: absolute;
		top: 0;
		left: 0;
		background-color: transparent;
	}
}

.conversation-icon {
	margin-left: 48px;
}

.conversation-header {
	position: relative;
	display: flex;
	overflow-x: hidden;
	overflow-y: clip;
	white-space: nowrap;
	width: 0;
	flex-grow: 1;
	cursor: pointer;
	&__text {
		display: flex;
		flex-direction:column;
		flex-grow: 1;
		margin-left: 8px;
		justify-content: center;
		width: 100%;
		overflow: hidden;
		height: var(--default-clickable-area);
		&--offline {
			color: var(--color-text-maxcontrast);
		}
	}
	.title {
		font-weight: bold;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.description {
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: fit-content;
		&__in-chat {
			color: var(--color-text-maxcontrast);
		}
	}
}

:deep(.conversation-icon__type) {
	border-color: var(--original-color-main-background) !important;
	background-color: var(--original-color-main-background) !important;
}
`],sourceRoot:""}]);const l=i},0:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".buttons-bar[data-v-860291ca]{display:flex;align-items:center;gap:3px}.buttons-bar #screensharing-menu button[data-v-860291ca]{width:100%;height:auto}.buttons-bar button.screensharing-enabled[data-v-860291ca]{opacity:1}.buttons-bar button.no-screensharing-available[data-v-860291ca],.buttons-bar button.no-screensharing-available *[data-v-860291ca]{opacity:.7}.hint[data-v-860291ca]{padding:12px;max-width:300px;text-align:left}.hint__actions[data-v-860291ca]{display:flex;flex-direction:row-reverse;justify-content:space-between;padding-top:4px}.hint__button[data-v-860291ca]{height:var(--default-clickable-area)}.trigger[data-v-860291ca]{display:flex;align-items:center;justify-content:center}","",{version:3,sources:["webpack://./src/components/TopBar/TopBarMediaControls.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,kBAAA,CACA,OAAA,CAGD,yDACC,UAAA,CACA,WAAA,CAID,2DACC,SAAA,CAIA,kIACC,UAAA,CAIF,uBACC,YAAA,CACA,eAAA,CACA,eAAA,CACA,gCACC,YAAA,CACA,0BAAA,CACA,6BAAA,CACA,eAAA,CAED,+BACC,oCAAA,CAIF,0BACC,YAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:[`
.buttons-bar {
	display: flex;
	align-items: center;
	gap: 3px;
}

.buttons-bar #screensharing-menu button {
	width: 100%;
	height: auto;
}

/* Highlight the media buttons when enabled */
.buttons-bar button.screensharing-enabled {
	opacity: 1;
}

.buttons-bar button.no-screensharing-available {
	&, & * {
		opacity: .7;
	}
}

.hint {
	padding: 12px;
	max-width: 300px;
	text-align: left;
	&__actions {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		padding-top:4px;
	}
	&__button {
		height: var(--default-clickable-area);
	}
}

.trigger {
	display: flex;
	align-items: center;
	justify-content: center;
}
`],sourceRoot:""}]);const l=i},77647:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,".top-bar__wrapper[data-v-3d97808e]{display:flex}","",{version:3,sources:["webpack://./src/components/TopBar/TopBarMenu.vue"],names:[],mappings:"AACA,mCACC,YAAA",sourcesContent:[`
.top-bar__wrapper {
	display: flex;
}
`],sourceRoot:""}]);const l=i},69414:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(87537),_=s.n(o),r=s(23645),e=s.n(r),i=e()(_());i.push([A.id,`
.no-audio-available[data-v-24d1b620] {
	opacity: .7;
}
`,"",{version:3,sources:["webpack://./src/components/CallView/shared/LocalAudioControlButton.vue"],names:[],mappings:";AA8KA;CACA,WAAA;AACA",sourcesContent:[`<!--
  - @copyright Copyright (c) 2023 Grigorii Shartsev <me@shgk.me>
  -
  - @license AGPL-3.0-or-later
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -->

<template>
	<NcButton v-shortkey.once="disableKeyboardShortcuts ? null : ['m']"
		v-tooltip="audioButtonTooltip"
		:type="type"
		:aria-label="audioButtonAriaLabel"
		:class="{ 'no-audio-available': !isAudioAllowed || !model.attributes.audioAvailable }"
		@shortkey="toggleAudio"
		@click.stop="toggleAudio">
		<template #icon>
			<VolumeIndicator :audio-preview-available="model.attributes.audioAvailable"
				:audio-enabled="showMicrophoneOn"
				:current-volume="model.attributes.currentVolume"
				:volume-threshold="model.attributes.volumeThreshold"
				overlay-muted-color="#888888" />
		</template>
	</NcButton>
</template>

<script>
import { emit, subscribe, unsubscribe } from '@nextcloud/event-bus'

import { NcButton } from '@nextcloud/vue'

import VolumeIndicator from '../../UIShared/VolumeIndicator.vue'

import { PARTICIPANT } from '../../../constants.js'
import BrowserStorage from '../../../services/BrowserStorage.js'

export default {
	name: 'LocalAudioControlButton',

	components: {
		NcButton,
		VolumeIndicator,
	},

	props: {
		conversation: {
			type: Object,
			required: true,
		},

		model: {
			type: Object,
			required: true,
		},

		disableKeyboardShortcuts: {
			type: Boolean,
			default: OCP.Accessibility.disableKeyboardShortcuts(),
		},

		type: {
			type: String,
			default: 'tertiary-no-background',
		},

		token: {
			type: String,
			required: true,
		},
	},

	computed: {
		isAudioAllowed() {
			return this.conversation.permissions & PARTICIPANT.PERMISSIONS.PUBLISH_AUDIO
		},

		showMicrophoneOn() {
			return this.model.attributes.audioAvailable && this.model.attributes.audioEnabled
		},

		audioButtonTooltip() {
			if (!this.isAudioAllowed) {
				return t('spreed', 'You are not allowed to enable audio')
			}

			if (!this.model.attributes.audioAvailable) {
				return {
					content: t('spreed', 'No audio. Click to select device'),
					show: false,
				}
			}

			if (this.speakingWhileMutedNotification && !this.screenSharingMenuOpen) {
				return {
					content: this.speakingWhileMutedNotification,
					show: true,
				}
			}

			let content = ''
			if (this.model.attributes.audioEnabled) {
				content = this.disableKeyboardShortcuts
					? t('spreed', 'Mute audio')
					: t('spreed', 'Mute audio (M)')
			} else {
				content = this.disableKeyboardShortcuts
					? t('spreed', 'Unmute audio')
					: t('spreed', 'Unmute audio (M)')
			}

			return {
				content,
				show: false,
			}
		},

		audioButtonAriaLabel() {
			if (!this.model.attributes.audioAvailable) {
				return t('spreed', 'No audio. Click to select device')
			}

			return this.model.attributes.audioEnabled
				? t('spreed', 'Mute audio')
				: t('spreed', 'Unmute audio')
		},
	},

	mounted() {
		subscribe('local-audio-control-button:toggle-audio', this.updateDeviceState)
	},

	beforeDestroy() {
		unsubscribe('local-audio-control-button:toggle-audio', this.updateDeviceState)
	},

	expose: ['toggleAudio'],

	methods: {
		toggleAudio() {
			if (!this.model.attributes.audioAvailable) {
				emit('talk:media-settings:show')
				return
			}

			if (this.model.attributes.audioEnabled) {
				this.model.disableAudio()
			} else {
				this.model.enableAudio()
			}
		},

		updateDeviceState() {
			if (BrowserStorage.getItem('audioDisabled_' + this.token) === 'true') {
				this.model.disableAudio()
			} else {
				this.model.enableAudio()
			}
		},
	},
}
<\/script>

<style scoped>
.no-audio-available {
	opacity: .7;
}
</style>
`],sourceRoot:""}]);const l=i},70905:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"PromotedView",props:{title:{type:String,default:""},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}},emits:["click"]}},12039:(A,a,s)=>{"use strict";s.d(a,{Z:()=>u});var o=s(928),_=s(9359),r=s(40672),e=s(94504),i=s(53997),l=s(54432);const u={name:"BreakoutRoomsEditor",components:{BreakoutRoomsParticipantsEditor:i.Z,NcButton:o.Z,NcCheckboxRadioSwitch:_.Z,NcInputField:r.Z,NcModal:e.Z},props:{token:{type:String,required:!0}},emits:["close"],setup(){return{breakoutRoomsStore:(0,l.V)()}},data(){return{mode:"1",amount:2,attendeeMap:"",isEditingParticipants:!1,isInvalidAmount:!1}},computed:{container(){return this.$store.getters.getMainContainerSelector()},modalTitle(){return this.isEditingParticipants?t("spreed","Assign participants to rooms"):t("spreed","Configure breakout rooms")}},watch:{amount(c){this.isInvalidAmount=isNaN(c)||!this.$refs.inputField.$refs.input?.checkValidity()}},methods:{async handleCreateRooms(){try{await this.breakoutRoomsStore.configureBreakoutRooms({token:this.token,mode:this.mode,amount:this.amount}),this.$emit("close")}catch(c){console.debug(c)}}}}},14295:(A,a,s)=>{"use strict";s.d(a,{Z:()=>v});var o=s(33687),_=s(76188),r=s(35653),e=s(77842),i=s(60539),l=s(61057),u=s(928),c=s(95642),p=s(51743),h=s(34648),f=s(94418),m=s(54432);const v={name:"BreakoutRoomsParticipantsEditor",components:{NcActions:l.Z,NcActionButton:i.Z,DotsCircle:r.Z,Reload:e.Z,BreakoutRoomItem:h.Z,SelectableParticipant:p.Z,NcButton:u.Z,ArrowLeft:o.Z,Delete:_.Z,NcDialog:c.Z},props:{token:{type:String,required:!0},roomNumber:{type:Number,default:void 0},breakoutRooms:{type:Array,default:()=>[]}},emits:["back","close"],setup(){return{breakoutRoomsStore:(0,m.V)()}},data(){return{selectedParticipants:[],assignments:[],showDialog:!1}},computed:{container(){return this.$store.getters.getMainContainerSelector()},participants(){return this.$store.getters.participantsList(this.token).filter(d=>(d.participantType===f.oM.TYPE.USER||d.participantType===f.oM.TYPE.GUEST)&&d.actorType===f.DM.ACTOR_TYPE.USERS)},attendeesById(){return this.$store.state.participantsStore.attendees[this.token]},unassignedParticipants(){if(this.assignments.length===0)return[];const d=this.assignments.flat();return this.participants.filter(P=>!d.includes(P.attendeeId))},hasSelected(){return this.selectedParticipants.length>0},hasAssigned(){return this.assignments.flat().length>0},hasUnassigned(){return this.unassignedParticipants.length>0},isReorganizingAttendees(){return this.breakoutRooms.length},confirmButtonLabel(){return this.isReorganizingAttendees?t("spreed","Confirm"):t("spreed","Create breakout rooms")},confirmButtonType(){return this.hasUnassigned?"secondary":"primary"},resetButtonLabel(){return t("spreed","Reset")},conversation(){return this.$store.getters.conversation(this.token)},breakoutRoomsConfigured(){return this.conversation.breakoutRoomMode!==f.Sl.BREAKOUT_ROOM_MODE.NOT_CONFIGURED},deleteButtonLabel(){return t("spreed","Delete breakout rooms")},dialogMessage(){return t("spreed","Current breakout rooms and settings will be lost")}},created(){this.initialiseAssignments()},methods:{initialiseAssignments(d){this.isReorganizingAttendees&&!d?this.assignments=this.breakoutRooms.map(P=>{const y=this.$store.getters.participantsList(P.token).map(T=>T.actorId);return this.participants.filter(T=>y.includes(T.actorId)).map(T=>T.attendeeId)}):this.assignments=Array.from(Array(this.isReorganizingAttendees?this.breakoutRooms.length:this.roomNumber),()=>[])},assignAttendees(d){this.selectedParticipants.forEach(P=>{if(this.unassignedParticipants.find(T=>T.attendeeId===P)){this.assignments[d].push(P);return}const y=this.assignments.findIndex(T=>T.includes(P));y!==d&&(this.assignments[y].splice(this.assignments[y].findIndex(T=>T===P),1),this.assignments[d].push(P))}),this.selectedParticipants=[]},roomName(d){const P=d+1;return t("spreed","Room {roomNumber}",{roomNumber:P})},resetAssignments(){this.selectedParticipants=[],this.assignments=[],this.initialiseAssignments(!0)},goBack(){this.$emit("back")},handleSubmit(){this.isReorganizingAttendees?this.reorganizeAttendees():this.createRooms()},createAttendeeMap(){const d={};return this.assignments.forEach((P,y)=>{P.forEach(T=>{d[T]=y})}),JSON.stringify(d)},createRooms(){this.breakoutRoomsStore.configureBreakoutRooms({token:this.token,mode:2,amount:this.roomNumber,attendeeMap:this.createAttendeeMap()}),this.$emit("close")},reorganizeAttendees(){this.breakoutRoomsStore.reorganizeAttendees({token:this.token,attendeeMap:this.createAttendeeMap()}),this.$emit("close")},toggleShowDialog(){this.showDialog=!this.showDialog},deleteBreakoutRooms(){this.breakoutRoomsStore.deleteBreakoutRooms(this.token)}}}},25734:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(67311);const _={name:"SelectableParticipant",components:{AvatarWrapper:o.Z},props:{participant:{type:Object,required:!0},checked:{type:Array,required:!0}},emits:["update:checked"],computed:{modelProxy:{get(){return this.checked},set(r){this.$emit("update:checked",r)}}}}},92382:(A,a,s)=>{"use strict";s.d(a,{Z:()=>e});var o=s(64024),_=s(94504),r=s(17834);const e={name:"SendMessageDialog",components:{NcModal:_.Z,NewMessage:r.Z},props:{token:{type:String,required:!0},displayName:{type:String,default:""},broadcast:{type:Boolean,default:!1}},emits:["close"],data(){return{modalContainerId:null}},computed:{container(){return this.$store.getters.getMainContainerSelector()},dialogTitle(){return this.broadcast?t("spreed","Send a message to all breakout rooms"):t("spreed",'Send a message to "{roomName}"',{roomName:this.displayName})}},mounted(){this.modalContainerId=`#modal-description-${this.$refs.modal.randId}`,this.$nextTick(()=>{this.$refs.newMessage.focusInput()})},methods:{handleMessageSent(){(0,o.s$)(this.broadcast?t("spreed","The message was sent to all breakout rooms"):t("spreed",'The message was sent to "{roomName}"',{roomName:this.displayName})),this.$emit("close")},handleMessageFailure(){(0,o.x2)(t("spreed","The message could not be sent")),this.$emit("close")}}}},13722:(A,a,s)=>{"use strict";s.d(a,{Z:()=>g});var o=s(20296),_=s.n(o),r=s(65878),e=s(64024),i=s(69183),l=s(25434),u=s(18471),c=s(14512),p=s(58184),h=s(7874),f=s(85718),m=s(38137),v=s(48171),d=s(94418),P=s(19914),y=s(55077),T=s(1036),b=s(31341),x=s(82604);const M=(0,r.F)()?.spreed?.config?.call?.["supported-reactions"],g={name:"CallView",components:{EmptyCallView:u.Z,ViewerOverlayCallView:v.Z,Grid:l.Z,LocalVideo:c.Z,PresenterOverlay:p.Z,ReactionToaster:h.Z,Screen:f.Z,VideoVue:m.Z},props:{token:{type:String,required:!0},isSidebar:{type:Boolean,default:!1},isRecording:{type:Boolean,default:!1}},setup(){return{supportedReactions:M,localMediaModel:b.kL,localCallParticipantModel:b.BY,callParticipantCollection:b.ln}},data(){return{screens:[],sharedDatas:{},raisedHandUnwatchers:{},speakingUnwatchers:{},screenUnwatchers:{},speakers:[],localSharedData:{screenVisible:!0},isBackgroundBlurred:!0,showPresenterOverlay:!0,debounceFetchPeers:()=>{}}},computed:{promotedParticipantModel(){return this.callParticipantModels.find(C=>this.sharedDatas[C.attributes.peerId].promoted)},callParticipantModels(){return b.ln.callParticipantModels.value.filter(C=>!C.attributes.internal)},callParticipantModelsWithScreen(){return this.callParticipantModels.filter(C=>C.attributes.screen)},localScreen(){return b.kL.attributes.localScreen},screenSharingActive(){return this.screens.length>0},isViewerOverlay(){return this.$store.getters.isViewerOverlay},isGrid(){return this.$store.getters.isGrid&&!this.isSidebar},selectedVideoPeerId(){return this.$store.getters.selectedVideoPeerId},selectedCallParticipantModel(){return!this.showSelectedVideo||!this.selectedVideoPeerId?null:this.callParticipantModels.find(C=>C.attributes.peerId===this.selectedVideoPeerId)},hasSelectedScreen(){return this.selectedVideoPeerId!==null&&this.screens.includes(this.selectedVideoPeerId)},hasSelectedVideo(){return this.selectedVideoPeerId!==null&&!this.screens.includes(this.selectedVideoPeerId)},isOneToOne(){return this.callParticipantModels.length===1},showFullPage(){return this.isOneToOne&&!(this.showLocalScreen||this.showRemoteScreen||this.showSelectedScreen)},hasLocalVideo(){return this.localMediaModel.attributes.videoEnabled},hasLocalScreen(){return!!this.localMediaModel.attributes.localScreen},hasRemoteScreen(){return this.callParticipantModelsWithScreen.length>0},showSelectedVideo(){return this.hasSelectedVideo&&!this.showLocalVideo},showSelectedScreen(){return this.hasSelectedScreen&&!this.showLocalVideo},showLocalVideo(){return this.hasLocalVideo&&this.selectedVideoPeerId==="local"},showLocalScreen(){return this.hasLocalScreen&&this.selectedVideoPeerId===null&&this.screens[0]===b.BY.attributes.peerId},showRemoteScreen(){return this.shownRemoteScreenPeerId!==null&&!this.showSelectedVideo&&!this.showSelectedScreen},shownRemoteScreenPeerId(){return!this.screenSharingActive||!this.hasRemoteScreen?null:this.screens.includes(this.selectedVideoPeerId)?this.selectedVideoPeerId:this.hasSelectedScreen?null:this.screens[0]},shownRemoteScreenCallParticipantModel(){return this.shownRemoteScreenPeerId?this.callParticipantModels.find(C=>C.attributes.peerId===this.shownRemoteScreenPeerId):null},shouldShowPresenterOverlay(){return this.shownRemoteScreenCallParticipantModel.attributes.videoAvailable||this.isModelWithVideo(this.shownRemoteScreenCallParticipantModel)},presenterVideoBlockerEnabled(){return this.sharedDatas[this.shownRemoteScreenPeerId]?.remoteVideoBlocker?.isVideoEnabled()}},watch:{"localCallParticipantModel.attributes.peerId"(C,B){const R=this.screens.indexOf(B);R!==-1&&(this.screens[R]=C)},localScreen(C){this._setScreenAvailable(b.BY.attributes.peerId,C)},callParticipantModels(C){this.updateDataFromCallParticipantModels(C)},isGrid(){this.adjustSimulcastQuality()},selectedVideoPeerId(){this.adjustSimulcastQuality()},speakers(C){C&&this._setPromotedParticipant()},shownRemoteScreenPeerId(C){C&&this._setPromotedParticipant()},screens(){this._setScreenVisible()},callParticipantModelsWithScreen(C,B){C.length>B.length?this.$store.dispatch("startPresentation"):C.length===0&&B.length>0&&!this.hasLocalScreen&&this.$store.dispatch("stopPresentation")},showLocalScreen(C){C?this.$store.dispatch("startPresentation"):this.callParticipantModelsWithScreen.length===0&&this.$store.dispatch("stopPresentation")},hasLocalVideo(C){this.$store.getters.selectedVideoPeerId==="local"&&(C||this.$store.dispatch("selectedVideoPeerId",null))},showSelectedVideo(C){C&&this.$store.dispatch("setCallViewMode",{isGrid:!1})},showSelectedScreen(C){C&&this.$store.dispatch("setCallViewMode",{isGrid:!1})},presenterVideoBlockerEnabled(C){this.showPresenterOverlay=C}},created(){this.updateDataFromCallParticipantModels(this.callParticipantModels),this.isBackgroundBlurred=P.Z.getItem("background-blurred")!=="false"},mounted(){this.debounceFetchPeers=_()(this.fetchPeers,1500),T.N.$on("refresh-peer-list",this.debounceFetchPeers),b.ln.on("remove",this._lowerHandWhenParticipantLeaves),(0,i.Ld)("switch-screen-to-id",this._switchScreenToId),(0,i.Ld)("set-background-blurred",this.setBackgroundBlurred)},beforeDestroy(){this.debounceFetchPeers.clear?.(),T.N.$off("refresh-peer-list",this.debounceFetchPeers),b.ln.off("remove",this._lowerHandWhenParticipantLeaves),(0,i.r1)("switch-screen-to-id",this._switchScreenToId),(0,i.r1)("set-background-blurred",this.setBackgroundBlurred)},methods:{updateDataFromCallParticipantModels(C){const B=C.filter(O=>!this.sharedDatas[O.attributes.peerId]);Object.keys(this.sharedDatas).filter(O=>C.find(W=>W.attributes.peerId===O)===void 0).forEach(O=>{this.sharedDatas[O].remoteVideoBlocker.destroy(),this.$delete(this.sharedDatas,O),this.speakingUnwatchers[O](),delete this.speakingUnwatchers[O],this.screenUnwatchers[O](),delete this.screenUnwatchers[O],this.raisedHandUnwatchers[O](),delete this.raisedHandUnwatchers[O];const W=this.speakers.findIndex(k=>k.id===O);this.speakers.splice(W,1),this._setScreenAvailable(O,!1)}),B.forEach(O=>{const W={promoted:!1,remoteVideoBlocker:new x.Z(O),screenVisible:!1};this.$set(this.sharedDatas,O.attributes.peerId,W),this.speakingUnwatchers[O.attributes.peerId]=this.$watch(function(){return O.attributes.speaking},function(k){this._setSpeaking(O.attributes.peerId,k)}),this.speakers.push({id:O.attributes.peerId,active:!1}),this.screenUnwatchers[O.attributes.peerId]=this.$watch(function(){return O.attributes.screen},function(k){this._setScreenAvailable(O.attributes.peerId,k)}),this.raisedHandUnwatchers[O.attributes.peerId]=this.$watch(function(){return O.attributes.raisedHand},function(k){this._handleParticipantRaisedHand(O,k)}),this.adjustSimulcastQualityForParticipant(O)})},_setSpeaking(C,B){if(B){const W=this.speakers.findIndex(z=>z.id===C),k=this.speakers[W];k.active=!0,this.speakers.splice(W,1),this.speakers.unshift(k);return}const R=this.speakers.findIndex(W=>W.id===C),O=this.speakers[R];if(O.active=!1,R===0){this.speakers.shift();const W=this.speakers.findIndex(k=>!k.active);W===-1?this.speakers.push(O):this.speakers.splice(W,0,O)}},_handleParticipantRaisedHand(C,B){const R=C.attributes.name||C.attributes.userId;R?B?.state&&(0,e.PV)(t("spreed","{nickName} raised their hand.",{nickName:R})):B?.state&&(0,e.PV)(t("spreed","A participant raised their hand.")),this.$store.dispatch("setParticipantHandRaised",{sessionId:C.attributes.nextcloudSessionId,raisedHand:B})},_lowerHandWhenParticipantLeaves(C,B){this.$store.dispatch("setParticipantHandRaised",{sessionId:B.attributes.nextcloudSessionId,raisedHand:!1})},_setScreenAvailable(C,B){if(B){this.screens.unshift(C);return}const R=this.screens.indexOf(C);R!==-1&&this.screens.splice(R,1)},_setPromotedParticipant(){Object.values(this.sharedDatas).forEach(C=>{C.promoted=!1}),!this.screenSharingActive&&this.speakers.length?this.sharedDatas[this.speakers[0].id].promoted=!0:this.shownRemoteScreenPeerId&&this.sharedDatas[this.shownRemoteScreenPeerId]&&(this.sharedDatas[this.shownRemoteScreenPeerId].promoted=!0),this.adjustSimulcastQuality()},_switchScreenToId(C){const B=this.screens.indexOf(C);B!==-1&&(this.$store.getters.presentationStarted?this.$store.dispatch("setCallViewMode",{isGrid:!1,isStripeOpen:!1,clearLast:!1}):this.$store.dispatch("startPresentation"),this.$store.dispatch("selectedVideoPeerId",null),this.screens.splice(B,1),this.screens.unshift(C))},_setScreenVisible(){if(this.localSharedData.screenVisible=!1,Object.values(this.sharedDatas).forEach(C=>{C.screenVisible=!1}),!!this.screens.length){if(this.screens[0]===this.localCallParticipantModel.attributes.peerId){this.localSharedData.screenVisible=!0;return}this.sharedDatas[this.screens[0]].screenVisible=!0}},handleSelectVideo(C){this.isSidebar||(this.$store.dispatch("startPresentation"),this.$store.dispatch("selectedVideoPeerId",C),this.isLocalVideoSelected=!1)},handleClickLocalVideo(){!this.hasLocalVideo||this.isSidebar||(this.$store.dispatch("selectedVideoPeerId","local"),this.$store.dispatch("startPresentation"))},async fetchPeers(){if(this.isRecording)return;const C=this.token;try{const B=await(0,y.$W)(C);this.$store.dispatch("purgePeersStore"),B.data.ocs.data.forEach(R=>{this.$store.dispatch("addPeer",{token:C,peer:R})})}catch(B){console.error(B)}},adjustSimulcastQuality(){this.callParticipantModels.forEach(C=>{this.adjustSimulcastQualityForParticipant(C)})},adjustSimulcastQualityForParticipant(C){this.isGrid?C.setSimulcastVideoQuality(d.VE.MEDIUM):this.sharedDatas[C.attributes.peerId].promoted||this.selectedVideoPeerId===C.attributes.peerId?C.setSimulcastVideoQuality(d.VE.HIGH):C.setSimulcastVideoQuality(d.VE.LOW)},setBackgroundBlurred(C){this.isBackgroundBlurred=C},isModelWithVideo(C){return C.attributes.videoAvailable&&this.sharedDatas[C.attributes.peerId].remoteVideoBlocker.isVideoEnabled()&&typeof C.attributes.stream=="object"},toggleShowPresenterOverlay(){this.presenterVideoBlockerEnabled?this.showPresenterOverlay=!this.showPresenterOverlay:this.sharedDatas[this.shownRemoteScreenPeerId].remoteVideoBlocker.setVideoEnabled(!0)}}}},63522:(A,a,s)=>{"use strict";s.d(a,{Z:()=>x});var o=s(20296),_=s.n(o),r=s(79209),e=s(54351),i=s(52796),l=s(58445),u=s(69183),c=s(43554),p=s(11480),h=s(928),f=s(53211),m=s(6991),v=s(18471),d=s(14512),P=s(68352),y=s(38137);const T=parseInt((0,c.j)("spreed","grid_videos_limit"),10)||0,b=(0,c.j)("spreed","grid_videos_limit_enforced")||!1,x={name:"Grid",components:{VideoVue:y.Z,LocalVideo:d.Z,EmptyCallView:v.Z,NcButton:h.Z,TransitionWrapper:m.Z,VideoBottomBar:P.Z,ChevronRight:i.Z,ChevronLeft:e.Z,ChevronUp:l.Z,ChevronDown:r.Z},directives:{Tooltip:f.Z},props:{devMode:{type:Boolean,default:!1},screenshotMode:{type:Boolean,default:!1},dummies:{type:Number,default:8},hasPagination:{type:Boolean,default:!1},isStripe:{type:Boolean,default:!1},isSidebar:{type:Boolean,default:!1},isRecording:{type:Boolean,default:!1},callParticipantModels:{type:Array,required:!0},localMediaModel:{type:Object,required:!0},localCallParticipantModel:{type:Object,required:!0},token:{type:String,required:!0},sharedDatas:{type:Object,required:!0},isLocalVideoSelectable:{type:Boolean,default:!1},screens:{type:Array,default:()=>[]}},emits:["select-video","click-local-video"],setup(){return{videosCap:T,videosCapEnforced:b}},data(){return{gridWidth:0,gridHeight:0,columns:0,rows:0,currentPage:0,showVideoOverlay:!0,showVideoOverlayTimer:null,debounceMakeGrid:()=>{}}},computed:{stripeButtonTooltip(){return this.stripeOpen?t("spreed","Collapse stripe"):t("spreed","Expand stripe")},videos(){return this.devMode?Array.from(Array(this.dummies).keys()):this.callParticipantModels},videosCount(){return!this.isStripe&&this.videos.length===0?1:this.videos.length},videoWidth(){return this.gridWidth/this.columns},videoHeight(){return this.gridHeight/this.rows},displayedVideos(){if(!this.slots)return[];const M=this.videosCap&&this.videosCapEnforced?Math.min(this.videosCap,this.slots):this.slots;return(this.currentPage+1)*M>=this.videos.length?this.videos.slice(this.currentPage*M):this.videos.slice(this.currentPage*M,(this.currentPage+1)*M)},isLessThanTwoVideos(){return this.videos.length<=1&&!this.screens.length},dpiFactor(){if(this.isStripe)return 1;const M=window.devicePixelRatio;return M<.5?.5:M>2?2:M},minWidth(){return this.isStripe||this.isSidebar?200:320},minHeight(){return this.isStripe||this.isSidebar?150:240},dpiAwareMinWidth(){return this.minWidth/this.dpiFactor},dpiAwareMinHeight(){return this.minHeight/this.dpiFactor},gridAspectRatio(){return(this.gridWidth/this.gridHeight).toPrecision([2])},targetAspectRatio(){return this.isStripe?1:1.5},columnsMax(){const M=Math.floor((this.gridWidth-8*this.columns)/this.dpiAwareMinWidth),g=Math.floor((this.gridWidth-8*(this.columns+1))/this.dpiAwareMinWidth),C=M===this.columns?M:g;return C<=1?1:C},rowsMax(){return Math.floor(this.gridHeight/this.dpiAwareMinHeight)<1?1:Math.floor(this.gridHeight/this.dpiAwareMinHeight)},slots(){return this.isStripe?this.rows*this.columns:this.rows*this.columns-1},numberOfPages(){return Math.ceil(this.videosCount/this.slots)},hasNextPage(){return this.displayedVideos.length!==0&&this.hasPagination?this.displayedVideos.at(-1)!==this.videos.at(-1):!1},hasPreviousPage(){return this.displayedVideos.length!==0&&this.hasPagination?this.displayedVideos[0]!==this.videos[0]:!1},gridStyle(){let M=this.columns,g=this.rows;return this.videos.length===0&&!this.isStripe&&(M=1,g=2),{gridTemplateColumns:`repeat(${M}, minmax(${this.dpiAwareMinWidth}px, 1fr))`,gridTemplateRows:`repeat(${g}, minmax(${this.dpiAwareMinHeight}px, 1fr))`}},hasVideoOverflow(){return this.videosCount>this.slots},sidebarStatus(){return this.$store.getters.getSidebarStatus},wrapperStyle(){return this.isStripe?"height: 250px":"height: 100%"},stripeOpen(){return this.$store.getters.isStripeOpen&&!this.isRecording}},watch:{"videos.length"(){this.makeGrid()},isStripe(){this.rebuildGrid(),this.currentPage=0},stripeOpen(){this.rebuildGrid()},sidebarStatus(){setTimeout(this.handleResize,500)},numberOfPages(){this.currentPage>=this.numberOfPages&&(this.currentPage=Math.max(0,this.numberOfPages-1))}},mounted(){this.debounceMakeGrid=_()(this.makeGrid,200),window.addEventListener("resize",this.handleResize),(0,u.Ld)("navigation-toggled",this.handleResize),this.makeGrid(),window.OCA.Talk.gridDebugInformation=this.gridDebugInformation},beforeDestroy(){this.debounceMakeGrid.clear?.(),window.OCA.Talk.gridDebugInformation=()=>console.debug("Not in a call"),window.removeEventListener("resize",this.handleResize),(0,u.r1)("navigation-toggled",this.handleResize)},methods:{gridDebugInformation(){console.debug("Grid debug information"),console.debug({minWidth:this.minWidth,minHeight:this.minHeight,videosCap:this.videosCap,videosCapEnforced:this.videosCapEnforced,targetAspectRatio:this.targetAspectRatio,videosCount:this.videosCount,videoWidth:this.videoWidth,videoHeight:this.videoHeight,devicePixelRatio:window.devicePixelRatio,dpiFactor:this.dpiFactor,dpiAwareMinWidth:this.dpiAwareMinWidth,dpiAwareMinHeight:this.dpiAwareMinHeight,gridAspectRatio:this.gridAspectRatio,columnsMax:this.columnsMax,rowsMax:this.rowsMax,numberOfPages:this.numberOfPages,bodyWidth:document.body.clientWidth,bodyHeight:document.body.clientHeight,gridWidth:this.$refs.grid.clientWidth,gridHeight:this.$refs.grid.clientHeight})},rebuildGrid(){console.debug("isStripe: ",this.isStripe),console.debug("stripeOpen: ",this.stripeOpen),console.debug("previousGridWidth: ",this.gridWidth,"previousGridHeight: ",this.gridHeight),console.debug("newGridWidth: ",this.gridWidth,"newGridHeight: ",this.gridHeight),(!this.isStripe||this.stripeOpen)&&this.$nextTick(this.makeGrid)},placeholderImage(M){return(0,p.FW)("spreed","docs","screenshotplaceholders/placeholder-"+M+".jpeg")},placeholderName(M){switch(M){case 0:return"Sandra McKinney";case 1:return"Chris Wurst";case 2:return"Edeltraut Bobb";case 3:return"Arthur Blitz";case 4:return"Roeland Douma";case 5:return"Vanessa Steg";case 6:return"Emily Grant";case 7:return"Tobias Kaminsky";case 8:return"Adrian Ada"}},placeholderModel(M){return{attributes:{audioAvailable:M===1||M===2||M===4||M===5||M===6||M===7||M===8,audioEnabled:M===8,videoAvailable:!0,screen:!1,currentVolume:.75,volumeThreshold:.75,localScreen:!1,raisedHand:{state:M===0||M===1||M===6}},forceMute:()=>{},on:()=>{},off:()=>{},getWebRtc:()=>({connection:{getSendVideoIfAvailable:()=>{}}})}},placeholderSharedData(){return{videoEnabled:{isVideoEnabled(){return!0}},remoteVideoBlocker:{isVideoEnabled(){return!0}},screenVisible:!1}},handleResize(M){this.debounceMakeGrid()},makeGrid(){if(this.$refs.grid){if(this.gridWidth=this.$refs.grid.clientWidth,this.gridHeight=this.$refs.grid.clientHeight,this.videos.length===0){this.columns=0,this.rows=0;return}this.devMode&&console.debug("Recreating grid: videos: ",this.videos.length,"columns: ",this.columnsMax+", rows: "+this.rowsMax),this.columns=this.columnsMax,this.rows=this.rowsMax,this.videosCap!==0&&this.videosCount>this.videosCap?this.shrinkGrid(this.videosCap):this.shrinkGrid(this.videosCount)}},async shrinkGrid(M){if(this.devMode&&console.debug("Shrinking grid: columns",this.columns+", rows: "+this.rows),this.rows===1&&this.columns===1)return;let g=this.columns,C=this.rows,B=this.isStripe?g*C:g*C-1;for(;M<B;){const R=g,O=C,W=this.gridWidth/g,k=this.gridHeight/C,z=this.gridWidth/(g-1),w=this.gridHeight/(C-1),V=z/k,U=W/w,Z=Math.abs(V-this.targetAspectRatio),H=Math.abs(U-this.targetAspectRatio);if(this.devMode&&console.debug("deltaAspectRatioWithOneColumnLess: ",Z,"deltaAspectRatioWithOneRowLess: ",H),Z<=H){if(g>=2&&g--,B=this.isStripe?g*C:g*C-1,M>B){g++;break}}else if(C>=2&&C--,B=this.isStripe?g*C:g*C-1,M>B){C++;break}if(R===g&&O===C)break}this.columns=g,this.rows=C},handleClickNext(){this.currentPage++,console.debug("handleclicknext, ","currentPage ",this.currentPage,"slots ",this.slot,"videos.length ",this.videos.length)},handleClickPrevious(){this.currentPage--,console.debug("handleclickprevious, ","currentPage ",this.currentPage,"slots ",this.slots,"videos.length ",this.videos.length)},handleClickStripeCollapse(){this.$store.dispatch("setCallViewMode",{isStripeOpen:!this.stripeOpen})},handleMovement(){this.setTimerForUiControls()},setTimerForUiControls(){this.showVideoOverlayTimer!==null&&clearTimeout(this.showVideoOverlayTimer),this.showVideoOverlay=!0,this.showVideoOverlayTimer=setTimeout(()=>{this.showVideoOverlay=!1},5e3)},handleClickVideo(M,g){console.debug("selected-video peer id",g),this.$emit("select-video",g)},handleClickLocalVideo(){this.$emit("click-local-video")},isSelected(M){return M.attributes.peerId===this.$store.getters.selectedVideoPeerId}}}},5753:(A,a,s)=>{"use strict";s.d(a,{Z:()=>e});var o=s(928),_=s(94418),r=s(69104);const e={name:"EmptyCallView",components:{NcButton:o.Z},props:{isGrid:{type:Boolean,default:!1},isSidebar:{type:Boolean,default:!1},isSmall:{type:Boolean,default:!1}},computed:{token(){return this.$store.getters.getToken()},isConnecting(){return this.$store.getters.isConnecting(this.token)},conversation(){return this.$store.getters.conversation(this.token)},isGroupConversation(){return this.conversation&&this.conversation.type===_.Sl.TYPE.GROUP},isPublicConversation(){return this.conversation&&this.conversation.type===_.Sl.TYPE.PUBLIC},isOneToOneConversation(){return this.conversation&&this.conversation.type===_.Sl.TYPE.ONE_TO_ONE},isPasswordRequestConversation(){return this.conversation&&this.conversation.objectType===_.Sl.OBJECT_TYPE.VIDEO_VERIFICATION},isFileConversation(){return this.conversation&&this.conversation.objectType===_.Sl.OBJECT_TYPE.FILE},isPhoneConversation(){return this.conversation&&this.conversation.objectType===_.Sl.OBJECT_TYPE.PHONE},conversationDisplayName(){return this.conversation&&this.conversation.displayName},canInviteOthers(){return this.conversation&&(this.conversation.participantType===_.oM.TYPE.OWNER||this.conversation.participantType===_.oM.TYPE.MODERATOR)},canInviteOthersInPublicConversations(){return this.canInviteOthers||this.conversation&&this.conversation.participantType===_.oM.TYPE.GUEST_MODERATOR},iconClass(){return this.isConnecting?"icon-loading":this.isPhoneConversation?"icon-phone":this.isPublicConversation?"icon-public":"icon-contacts"},title(){return this.isConnecting?t("spreed","Connecting \u2026"):this.isPhoneConversation?t("spreed","Calling \u2026"):this.isOneToOneConversation?t("spreed","Waiting for {user} to join the call",{user:this.conversationDisplayName}):t("spreed","Waiting for others to join the call \u2026")},message(){return this.isConnecting||this.isPasswordRequestConversation||this.isFileConversation||!this.isGroupConversation&&!this.isPublicConversation||this.isGroupConversation&&!this.canInviteOthers||this.isPhoneConversation?"":this.isGroupConversation?t("spreed","You can invite others in the participant tab of the sidebar"):this.isPublicConversation&&this.canInviteOthersInPublicConversations?t("spreed","You can invite others in the participant tab of the sidebar or share this link to invite others!"):t("spreed","Share this link to invite others!")},showLink(){return this.isPublicConversation&&!this.isPasswordRequestConversation&&!this.isFileConversation}},methods:{handleCopyLink(){(0,r.aY)(this.token)}}}},60640:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(69183),_=s(69781),r=s(53400),e=s(94418),i=s(19914);const l={name:"LocalAudioControlButton",components:{NcButton:_.P2,VolumeIndicator:r.Z},props:{conversation:{type:Object,required:!0},model:{type:Object,required:!0},disableKeyboardShortcuts:{type:Boolean,default:OCP.Accessibility.disableKeyboardShortcuts()},type:{type:String,default:"tertiary-no-background"},token:{type:String,required:!0}},computed:{isAudioAllowed(){return this.conversation.permissions&e.oM.PERMISSIONS.PUBLISH_AUDIO},showMicrophoneOn(){return this.model.attributes.audioAvailable&&this.model.attributes.audioEnabled},audioButtonTooltip(){if(!this.isAudioAllowed)return t("spreed","You are not allowed to enable audio");if(!this.model.attributes.audioAvailable)return{content:t("spreed","No audio. Click to select device"),show:!1};if(this.speakingWhileMutedNotification&&!this.screenSharingMenuOpen)return{content:this.speakingWhileMutedNotification,show:!0};let u="";return this.model.attributes.audioEnabled?u=this.disableKeyboardShortcuts?t("spreed","Mute audio"):t("spreed","Mute audio (M)"):u=this.disableKeyboardShortcuts?t("spreed","Unmute audio"):t("spreed","Unmute audio (M)"),{content:u,show:!1}},audioButtonAriaLabel(){return this.model.attributes.audioAvailable?this.model.attributes.audioEnabled?t("spreed","Mute audio"):t("spreed","Unmute audio"):t("spreed","No audio. Click to select device")}},mounted(){(0,o.Ld)("local-audio-control-button:toggle-audio",this.updateDeviceState)},beforeDestroy(){(0,o.r1)("local-audio-control-button:toggle-audio",this.updateDeviceState)},expose:["toggleAudio"],methods:{toggleAudio(){if(!this.model.attributes.audioAvailable){(0,o.j8)("talk:media-settings:show");return}this.model.attributes.audioEnabled?this.model.disableAudio():this.model.enableAudio()},updateDeviceState(){i.Z.getItem("audioDisabled_"+this.token)==="true"?this.model.disableAudio():this.model.enableAudio()}}}},73891:(A,a,s)=>{"use strict";s.d(a,{Z:()=>v});var o=s(63465),_=s.n(o),r=s(62783),e=s.n(r),i=s(64024),l=s(928),u=s(18173),c=s(67311),p=s(94418),h=s(70012),f=s(43e3),m=s(33501);const v={name:"LocalVideo",components:{AvatarWrapper:c.Z,NcButton:l.Z,VideoBackground:u.Z},props:{token:{type:String,required:!0},localMediaModel:{type:Object,required:!0},localCallParticipantModel:{type:Object,required:!0},isGrid:{type:Boolean,default:!1},isStripe:{type:Boolean,default:!1},fitVideo:{type:Boolean,default:!1},isSidebar:{type:Boolean,default:!1},showControls:{type:Boolean,default:!0},unSelectable:{type:Boolean,default:!1},isBig:{type:Boolean,default:!1},isSmall:{type:Boolean,default:!1}},emits:["click-video"],setup(){return{guestNameStore:(0,h.t)()}},data(){return{notificationHandle:null,videoAspectRatio:null,containerAspectRatio:null,resizeObserver:null,mouseover:!1}},computed:{stopFollowingLabel(){return t("spreed","Back")},isNotConnected(){return this.localCallParticipantModel.attributes.peerNeeded&&this.localCallParticipantModel.attributes.connectionState!==m.e.CONNECTED&&this.localCallParticipantModel.attributes.connectionState!==m.e.COMPLETED},videoContainerClass(){return{"not-connected":this.isNotConnected,"video-container-grid":this.isGrid,"video-container-stripe":this.isStripe,"video-container-big":this.isBig,"video-container-small":this.isSmall,"hover-shadow":this.isSelectable&&this.mouseover,speaking:this.localMediaModel.attributes.speaking}},videoWrapperStyle(){if(!(!this.containerAspectRatio||!this.videoAspectRatio||!this.isBig||this.isGrid))return this.containerAspectRatio>this.videoAspectRatio?`width: ${this.$refs.videoContainer.clientHeight*this.videoAspectRatio}px`:`height: ${this.$refs.videoContainer.clientWidth/this.videoAspectRatio}px`},userId(){return this.$store.getters.getUserId()},actorType(){return this.$store.getters.getActorType()},displayName(){return this.$store.getters.getDisplayName()},sessionHash(){return _().stringify(e()(this.localCallParticipantModel.attributes.peerId))},guestName(){return this.guestNameStore.getGuestName(this.$store.getters.getToken(),this.sessionHash)},videoWrapperClass(){return{"icon-loading":this.isNotConnected}},avatarSize(){return this.isStripe||!this.isBig&&!this.isGrid?p.pA.SIZE.LARGE:this.containerAspectRatio?Math.min(p.pA.SIZE.FULL,this.$refs.videoContainer.clientHeight/2,this.$refs.videoContainer.clientWidth/2):p.pA.SIZE.FULL},avatarClass(){return{"icon-loading":this.isNotConnected}},localStreamVideoError(){return this.localMediaModel.attributes.localStream&&this.localMediaModel.attributes.localStreamRequestVideoError},hasLocalVideo(){return this.localMediaModel.attributes.videoEnabled},isSelected(){return this.$store.getters.selectedVideoPeerId==="local"},isSelectable(){return!this.unSelectable&&!this.isSidebar&&this.hasLocalVideo&&this.$store.getters.selectedVideoPeerId!=="local"}},watch:{localCallParticipantModel:{immediate:!0,handler(d,P){P&&P.off("forcedMute",this._handleForcedMute),d&&d.on("forcedMute",this._handleForcedMute)}},"localMediaModel.attributes.localStream"(d){this._setLocalStream(d)},localStreamVideoError:{immediate:!0,handler(d){d&&(d.name==="NotAllowedError"?this.notificationHandle=(0,i.x2)(t("spreed","Access to camera was denied")):d.name==="NotReadableError"||d.name==="AbortError"?this.notificationHandle=(0,i.x2)(t("spreed","Error while accessing camera: It is likely in use by another program"),{timeout:i.Rl}):(console.error("Error while accessing camera: ",d.message,d.name),this.notificationHandle=(0,i.x2)(t("spreed","Error while accessing camera"),{timeout:i.Rl})))}}},mounted(){this._setLocalStream(this.localMediaModel.attributes.localStream),(this.isBig||this.isGrid)&&(this.resizeObserver=new ResizeObserver(this.updateContainerAspectRatio),this.resizeObserver.observe(this.$refs.videoContainer))},beforeDestroy(){this.resizeObserver&&this.resizeObserver.disconnect()},destroyed(){this.notificationHandle&&this.notificationHandle.hideToast(),this.localCallParticipantModel&&this.localCallParticipantModel.off("forcedMute",this._handleForcedMute)},methods:{_handleForcedMute(){(0,i.JQ)(t("spreed","You have been muted by a moderator"),{selector:void 0})},_setLocalStream(d){if(!d)return;const P={autoplay:!0,mirror:!0,muted:!0};(0,f.Z)(d,this.$refs.video,P)},handleStopFollowing(){this.$store.dispatch("selectedVideoPeerId",null),this.$store.dispatch("stopPresentation")},updateContainerAspectRatio([{target:d}]){this.containerAspectRatio=d.clientWidth/d.clientHeight},updateVideoAspectRatio(){this.isBig&&(this.videoAspectRatio=this.localMediaModel.attributes.localStream.getVideoTracks()?.[0].getSettings().aspectRatio??this.$refs.video.videoWidth/this.$refs.video.videoHeight)}}}},31423:(A,a,s)=>{"use strict";s.d(a,{Z:()=>u});var o=s(97167),_=s(8803),r=s(69183),e=s(69781),i=s(94418),l=s(19914);const u={name:"LocalVideoControlButton",components:{NcButton:e.P2,VideoIcon:o.Z,VideoOff:_.Z},props:{conversation:{type:Object,required:!0},model:{type:Object,required:!0},disableKeyboardShortcuts:{type:Boolean,default:OCP.Accessibility.disableKeyboardShortcuts()},type:{type:String,default:"tertiary-no-background"},token:{type:String,required:!0}},computed:{isVideoAllowed(){return this.conversation.permissions&i.oM.PERMISSIONS.PUBLISH_VIDEO},showVideoOn(){return this.model.attributes.videoAvailable&&this.model.attributes.videoEnabled},videoButtonTooltip(){return this.isVideoAllowed?this.model.attributes.videoAvailable?this.model.attributes.videoEnabled?this.disableKeyboardShortcuts?t("spreed","Disable video"):t("spreed","Disable video (V)"):!this.model.getWebRtc()||!this.model.getWebRtc().connection||this.model.getWebRtc().connection.getSendVideoIfAvailable()?this.disableKeyboardShortcuts?t("spreed","Enable video"):t("spreed","Enable video (V)"):this.disableKeyboardShortcuts?t("spreed","Enable video - Your connection will be briefly interrupted when enabling the video for the first time"):t("spreed","Enable video (V) - Your connection will be briefly interrupted when enabling the video for the first time"):t("spreed","No video. Click to select device"):t("spreed","You are not allowed to enable video")},videoButtonAriaLabel(){return this.model.attributes.videoAvailable?this.model.attributes.videoEnabled?t("spreed","Disable video"):!this.model.getWebRtc()||!this.model.getWebRtc().connection||this.model.getWebRtc().connection.getSendVideoIfAvailable()?t("spreed","Enable video"):t("spreed","Enable video. Your connection will be briefly interrupted when enabling the video for the first time"):t("spreed","No video. Click to select device")}},mounted(){(0,r.Ld)("local-video-control-button:toggle-video",this.updateDeviceState)},beforeDestroy(){(0,r.r1)("local-video-control-button:toggle-video",this.updateDeviceState)},methods:{toggleVideo(){if(document.getElementsByClassName("upload-editor").length===0){if(!this.model.attributes.videoAvailable){(0,r.j8)("talk:media-settings:show");return}this.model.attributes.videoEnabled?this.model.disableVideo():this.model.enableVideo()}},updateDeviceState(){l.Z.getItem("videoDisabled_"+this.token)?this.model.disableVideo():this.model.enableVideo()}}}},78082:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(40764),_=s.n(o),r=s(24900),e=s(928),i=s(38137);const l={name:"PresenterOverlay",components:{AccountBox:r.Z,VueDraggableResizable:_(),NcButton:e.Z,VideoVue:i.Z},props:{token:{type:String,required:!0},model:{type:Object,required:!0},sharedData:{type:Object,required:!0},isCollapsed:{type:Boolean,required:!0}},emits:["click"],data(){return{presenterOverlaySize:128,isDragging:!1}},mounted(){window.addEventListener("resize",this.updateSize)},beforeDestroy(){window.removeEventListener("resize",this.updateSize)},methods:{updateSize(){this.presenterOverlaySize=Math.min(Math.max(window.innerWidth*.1,100),242)}}}},91973:(A,a,s)=>{"use strict";s.d(a,{Z:()=>f});var o=s(63465),_=s.n(o),r=s(62783),e=s.n(r),i=s(69183),l=s(11480),u=s(85302),c=s(6991),p=s(70012);const h={"\u2764\uFE0F":"Heart.gif","\u{1F389}":"Party.gif","\u{1F44F}":"Clap.gif","\u{1F44D}":"Thumbs-up.gif","\u{1F44E}":"Thumbs-down.gif","\u{1F602}":"Joy.gif","\u{1F929}":"Star-struck.gif","\u{1F914}":"Thinking-face.gif","\u{1F632}":"Surprised.gif","\u{1F625}":"Concerned.gif"},f={name:"ReactionToaster",components:{TransitionWrapper:c.Z},props:{token:{type:String,required:!0},supportedReactions:{type:Array,validator:m=>m.every(v=>typeof v=="string"),required:!0},callParticipantModels:{type:Array,required:!0}},setup(){return{guestNameStore:(0,p.t)()}},data(){return{registeredModels:{},reactionsQueue:[],intervalId:null,animationLength:2e3,toasts:[]}},computed:{participants(){return this.$store.getters.participantsList(this.token)}},watch:{callParticipantModels(m){m.filter(P=>!this.registeredModels[P.attributes.peerId]).forEach(P=>{this.registeredModels[P.attributes.peerId]=P,this.registeredModels[P.attributes.peerId].on("reaction",this.handleReaction)}),Object.keys(this.registeredModels).filter(P=>!m.find(y=>y.attributes.peerId===P)).forEach(P=>{this.registeredModels[P].off("reaction",this.handleReaction),delete this.registeredModels[P]})}},mounted(){this.intervalId=setInterval(this.processReactionsQueue,this.animationLength/4),(0,i.Ld)("send-reaction",this.handleOwnReaction)},beforeDestroy(){clearInterval(this.intervalId),(0,i.r1)("send-reaction",this.handleOwnReaction),Object.keys(this.registeredModels).forEach(m=>{this.registeredModels[m].off("reaction",this.handleReaction),delete this.registeredModels[m]})},methods:{handleOwnReaction({model:m,reaction:v}){this.handleReaction(m,v,!0)},handleReaction(m,v,d=!1){this.reactionsQueue.some(P=>P.id===m.attributes.peerId)||this.supportedReactions.includes(v)&&this.reactionsQueue.push({id:m.attributes.peerId,reaction:v,reactionURL:this.getReactionURL(v),name:d?this.$store.getters.getDisplayName()||t("spreed","Guest"):this.getParticipantName(m),seed:Math.random()})},processReactionsQueue(){this.reactionsQueue.length>0&&(this.toasts.push(this.reactionsQueue.shift()),setTimeout(()=>{this.toasts.shift()},this.animationLength))},getParticipantName(m){const{name:v,peerId:d}=m.attributes;if(v)return v;const P=this.participants.find(y=>y.sessionIds.includes(d));return P?.displayName?P.displayName:this.guestNameStore.getGuestName(this.token,_().stringify(e()(d)))},getReactionURL(m){return h[m]?(0,l.hp)("spreed","emojis/"+h[m]):void 0},styled(m,v){const d=(0,u.Z)(m);return{"--background-color":`rgb(${d.r}, ${d.g}, ${d.b})`,"--animation-length":`${this.animationLength+300}ms`,"--horizontal-offset":`${10+20*v}%`,"--vertical-offset":30+5*v}}}}},41870:(A,a,s)=>{"use strict";s.d(a,{Z:()=>c});var o=s(63465),_=s.n(o),r=s(62783),e=s.n(r),i=s(68352),l=s(70012),u=s(43e3);const c={name:"Screen",components:{VideoBottomBar:i.Z},props:{token:{type:String,required:!0},localMediaModel:{type:Object,default:null},callParticipantModel:{type:Object,default:null},sharedData:{type:Object,required:!0},isBig:{type:Boolean,default:!1}},setup(){return{guestNameStore:(0,l.t)()}},computed:{model(){return this.callParticipantModel?this.callParticipantModel:this.localMediaModel},screenContainerId(){return this.localMediaModel?"localScreenContainer":"container_"+this.callParticipantModel.attributes.peerId+"_screen_incoming"},remoteSessionHash(){return this.callParticipantModel?_().stringify(e()(this.callParticipantModel.attributes.peerId)):null},remoteParticipantName(){if(!this.callParticipantModel)return t("spreed","You");let p=this.callParticipantModel.attributes.name;return!this.callParticipantModel.attributes.userId&&!p&&p!==void 0&&(p=this.guestNameStore.getGuestName(this.$store.getters.getToken(),this.remoteSessionHash)),p},screenClass(){return this.isBig?"screen--fit":"screen--fill"}},watch:{"localMediaModel.attributes.localScreen"(p){this._setScreen(p)},"callParticipantModel.attributes.screen"(p){this._setScreen(p)}},mounted(){this.localMediaModel?this._setScreen(this.localMediaModel.attributes.localScreen):this._setScreen(this.callParticipantModel.attributes.screen)},methods:{_setScreen(p){if(!p){this.$refs.screen.srcObject=null;return}(0,u.Z)(p,this.$refs.screen),this.$refs.screen.muted=!0}}}},43090:(A,a,s)=>{"use strict";s.d(a,{Z:()=>d});var o=s(92098),_=s(13767),r=s(56758),e=s(27347),i=s(28499),l=s(97167),u=s(8803),c=s(69183),p=s(928),h=s(53211),f=s(6991),m=s(94418),v=s(33501);const d={name:"VideoBottomBar",components:{AlertCircle:o.Z,HandBackLeft:_.Z,Microphone:r.Z,MicrophoneOff:e.Z,Monitor:i.Z,NcButton:p.Z,TransitionWrapper:f.Z,VideoIcon:l.Z,VideoOff:u.Z},directives:{tooltip:h.Z},inheritAttrs:!1,props:{token:{type:String,required:!0},isSidebar:{type:Boolean,default:!1},hasShadow:{type:Boolean,default:!1},isBig:{type:Boolean,default:!1},participantName:{type:String,default:""},showVideoOverlay:{type:Boolean,default:!0},model:{type:Object,required:!0},sharedData:{type:Object,required:!0},isScreen:{type:Boolean,default:!1},isPromoted:{type:Boolean,default:!1},isSelected:{type:Boolean,default:!1}},computed:{connectionStateFailedNoRestart(){return this.model.attributes.connectionState===v.e.FAILED_NO_RESTART},showRaiseHandIndicator(){return!this.connectionStateFailedNoRestart&&this.model.attributes.raisedHand.state},showStopFollowingButton(){return this.isBig&&this.$store.getters.selectedVideoPeerId!==null},showAudioIndicator(){return!this.connectionStateFailedNoRestart&&!this.isAudioButtonHidden},isAudioButtonHidden(){return this.model.attributes.audioAvailable&&!this.canFullModerate},isAudioButtonDisabled(){return!this.model.attributes.audioAvailable||!this.canFullModerate},audioButtonTooltip(){return this.model.attributes.audioAvailable?t("spreed","Mute"):t("spreed","Muted")},showVideoIndicator(){return!this.connectionStateFailedNoRestart&&this.model.attributes.videoAvailable},isRemoteVideoEnabled(){return this.sharedData.remoteVideoBlocker?.isVideoEnabled()},isRemoteVideoBlocked(){return this.sharedData.remoteVideoBlocker&&!this.sharedData.remoteVideoBlocker.isVideoEnabled()},videoButtonTooltip(){return this.isRemoteVideoEnabled?t("spreed","Disable video"):t("spreed","Enable video")},showScreenSharingIndicator(){return!this.connectionStateFailedNoRestart&&this.model.attributes.screen},isCurrentlyActive(){return this.isSelected||this.model.attributes.speaking},showParticipantName(){return!this.model.attributes.videoAvailable||this.isRemoteVideoBlocked||this.showVideoOverlay||this.isPromoted||this.isCurrentlyActive},participantType(){return this.$store.getters.conversation(this.token)?.participantType||(this.$store.getters.getUserId()!==null?m.oM.TYPE.USER:m.oM.TYPE.GUEST)},canFullModerate(){return this.participantType===m.oM.TYPE.OWNER||this.participantType===m.oM.TYPE.MODERATOR}},methods:{forceMute(){this.model.forceMute()},toggleVideo(){this.sharedData.remoteVideoBlocker.setVideoEnabled(!this.isRemoteVideoEnabled)},switchToScreen(){(!this.sharedData.screenVisible||!this.isBig)&&(0,c.j8)("switch-screen-to-id",this.model.attributes.peerId)},handleStopFollowing(){this.$store.dispatch("stopPresentation"),this.$store.dispatch("selectedVideoPeerId",null)}}}},37102:(A,a,s)=>{"use strict";s.d(a,{Z:()=>T});var o=s(63465),_=s.n(o),r=s(62783),e=s.n(r),i=s(71203),l=s(33135),u=s(85718),c=s(18173),p=s(68352),h=s(67311),f=s(6991),m=s(94418),v=s(1036),d=s(70012),P=s(43e3),y=s(33501);const T={name:"VideoVue",components:{AvatarWrapper:h.Z,TransitionWrapper:f.Z,VideoBackground:c.Z,Screen:u.Z,VideoBottomBar:p.Z,AccountCircle:i.Z,AccountOff:l.Z},props:{token:{type:String,required:!0},placeholderForPromoted:{type:Boolean,default:!1},model:{type:Object,required:!0},sharedData:{type:Object,required:!0},showVideoOverlay:{type:Boolean,default:!0},isGrid:{type:Boolean,default:!1},fitVideo:{type:Boolean,default:!1},isPresenterOverlay:{type:Boolean,default:!1},isBig:{type:Boolean,default:!1},isStripe:{type:Boolean,default:!1},isPromoted:{type:Boolean,default:!1},isSelected:{type:Boolean,default:!1},isSidebar:{type:Boolean,default:!1},isOneToOne:{type:Boolean,default:!1},unSelectable:{type:Boolean,default:!1},hideBottomBar:{type:Boolean,default:!1}},emits:["click-video","click-presenter"],setup(){return{guestNameStore:(0,d.t)()}},data(){return{videoAspectRatio:null,containerAspectRatio:null,resizeObserver:null,mouseover:!1}},computed:{videoWrapperStyle(){if(!(!this.containerAspectRatio||!this.videoAspectRatio||!this.isBig||this.isGrid))return this.containerAspectRatio>this.videoAspectRatio?`width: ${this.$refs.videoContainer.clientHeight*this.videoAspectRatio}px`:`height: ${this.$refs.videoContainer.clientWidth/this.videoAspectRatio}px`},isSelectable(){return this.isStripe?!this.isSelected:!0},wasConnectedAtLeastOnce(){return this.model.attributes.connectedAtLeastOnce},isConnected(){return this.model.attributes.connectionState===y.e.CONNECTED||this.model.attributes.connectionState===y.e.COMPLETED},isLoading(){return!this.isConnected&&this.model.attributes.connectionState!==y.e.FAILED_NO_RESTART},isDisconnected(){return this.model.attributes.connectionState!==y.e.NEW&&this.model.attributes.connectionState!==y.e.CHECKING&&this.model.attributes.connectionState!==y.e.CONNECTED&&this.model.attributes.connectionState!==y.e.COMPLETED},isReconnecting(){return this.model.attributes.connectionState===y.e.FAILED||!this.model.attributes.initialConnection&&(this.model.attributes.negotiating&&!this.isConnected||this.model.attributes.connecting)},isNoLongerTryingToReconnect(){return this.model.attributes.connectionState===y.e.FAILED_NO_RESTART},connectionMessage(){return!this.wasConnectedAtLeastOnce&&this.isNoLongerTryingToReconnect?t("spreed","Connection could not be established \u2026"):this.isNoLongerTryingToReconnect?t("spreed","Connection was lost and could not be re-established \u2026"):!this.wasConnectedAtLeastOnce&&this.isReconnecting?t("spreed","Connection could not be established. Trying again \u2026"):this.isReconnecting?t("spreed","Connection lost. Trying to reconnect \u2026"):this.isDisconnected?t("spreed","Connection problems \u2026"):null},containerClass(){return{"videoContainer-dummy":this.placeholderForPromoted,"not-connected":!this.placeholderForPromoted&&!this.isConnected,speaking:!this.placeholderForPromoted&&this.isSpeaking&&!this.isBig,hover:this.mouseover&&!this.unSelectable&&!this.isBig,promoted:!this.placeholderForPromoted&&this.sharedData.promoted&&!this.isGrid,presenter:this.isPresenterOverlay&&this.mouseover,"video-container-grid":this.isGrid,"video-container-big":this.isBig,"one-to-one":this.isOneToOne,"presenter-overlay":this.isPresenterOverlay}},videoWrapperClass(){return{"icon-loading":this.isLoading,"presenter-overlay":this.isPresenterOverlay}},avatarSize(){return this.isStripe||!this.isBig&&!this.isGrid?m.pA.SIZE.LARGE:this.containerAspectRatio?Math.min(m.pA.SIZE.FULL,this.$refs.videoContainer.clientHeight/2,this.$refs.videoContainer.clientWidth/2):m.pA.SIZE.FULL},avatarClass(){return{"icon-loading":this.isLoading}},connectionMessageClass(){return{"below-avatar":this.showBackgroundAndAvatar}},sessionHash(){return _().stringify(e()(this.peerId))},peerData(){let b=this.$store.getters.getPeer(this.$store.getters.getToken(),this.peerId,this.model.attributes.userId);return b.actorId||(v.N.$emit("refresh-peer-list"),b={actorType:"",actorId:"",displayName:""}),b},participant(){return this.$store.getters.findParticipant(this.$store.getters.getToken(),{sessionId:this.peerId})||{}},participantActorType(){return this.participant?.actorType?this.participant.actorType:this.peerData?.actorType?this.peerData.actorType:this.participantUserId?m.DM.ACTOR_TYPE.USERS:m.DM.ACTOR_TYPE.GUESTS},participantUserId(){return this.model.attributes.userId?this.model.attributes.userId:this.participant?.actorType?this.participant?.actorType===m.DM.ACTOR_TYPE.USERS&&this.participant?.actorId?this.participant.actorId:null:this.peerData.actorType===m.DM.ACTOR_TYPE.USERS?this.peerData.actorId:null},participantName(){if(this.model.attributes.name)return this.model.attributes.name;if(this.participant?.displayName)return this.participant.displayName;let b=this.model.attributes.name;return!this.model.attributes.userId&&!b&&b!==void 0&&(b=this.guestNameStore.getGuestName(this.$store.getters.getToken(),this.sessionHash)),b||(b=this.peerData.displayName,!b&&this.peerData.actorType===m.DM.ACTOR_TYPE.GUESTS&&(b=t("spreed","Guest"))),b},isSpeaking(){return this.model.attributes.speaking},hasVideo(){return!this.model.attributes.videoBlocked&&this.model.attributes.videoAvailable&&this.sharedData.remoteVideoBlocker.isVideoEnabled()&&typeof this.model.attributes.stream=="object"},hasSelectedVideo(){return this.$store.getters.selectedVideoPeerId!==null},hasSharedScreen(){return this.model.attributes.screen},isSharedScreenPromoted(){return this.sharedData.screenVisible&&(!this.hasSelectedVideo||this.isSelected)},showSharedScreen(){return this.isBig?this.hasSharedScreen:this.isStripe?this.isSharedScreenPromoted?!1:!(this.isSelected?this.isSelected:this.isPromoted)&&this.hasSharedScreen:this.hasSharedScreen&&!this.isPresenterOverlay},showVideo(){return this.hasSharedScreen?!this.showSharedScreen&&this.hasVideo&&!this.isSelected||this.isPresenterOverlay:this.isStripe?this.hasSelectedVideo?!this.isSelected&&this.hasVideo:!this.isPromoted&&this.hasVideo:this.hasVideo},showPlaceholderForPromoted(){return this.isStripe?this.showVideo||this.showSharedScreen?!1:this.$store.getters.selectedVideoPeerId!==null?this.isSelected:this.isPromoted:!1},showBackgroundAndAvatar(){return!(this.showSharedScreen||this.showVideo||this.showPlaceholderForPromoted)},peerId(){return this.model.attributes.peerId}},watch:{"model.attributes.stream"(b){this._setStream(b)},isSelected(b){b&&(this.mouseover=!1)}},mounted(){this.sharedData.remoteVideoBlocker.increaseVisibleCounter(),this._setStream(this.model.attributes.stream),(this.isBig||this.isGrid)&&(this.resizeObserver=new ResizeObserver(this.updateContainerAspectRatio),this.resizeObserver.observe(this.$refs.videoContainer))},beforeDestroy(){this.resizeObserver&&this.resizeObserver.disconnect()},destroyed(){this.sharedData.remoteVideoBlocker.decreaseVisibleCounter()},methods:{_setStream(b){b&&((0,P.Z)(b,this.$refs.video),this.$refs.video.muted=!0,this.$refs.video.style.transform==="scaleX(1)"&&(this.$refs.video.style.transform=""))},updateContainerAspectRatio([{target:b}]){this.containerAspectRatio=b.clientWidth/b.clientHeight},updateVideoAspectRatio(){this.isBig&&(this.videoAspectRatio=this.model.attributes.stream.getVideoTracks()?.[0].getSettings().aspectRatio??this.$refs.video.videoWidth/this.$refs.video.videoHeight)}}}},46237:(A,a,s)=>{"use strict";s.d(a,{Z:()=>d});var o=s(33198),_=s(16889),r=s(79209),e=s(58445),i=s(69781),l=s(18471),u=s(71470),c=s(14512),p=s(69581),h=s(85718),f=s(38137),m=s(6991),v=s(31341);const d={name:"ViewerOverlayCallView",components:{EmptyCallView:l.Z,LocalAudioControlButton:u.Z,LocalVideoControlButton:p.Z,Portal:o.h_,Screen:h.Z,LocalVideo:c.Z,ChevronUp:e.Z,ChevronDown:r.Z,NcButton:i.P2,TransitionWrapper:m.Z,VideoVue:f.Z,ArrowExpand:_.Z},directives:{tooltip:i.u},props:{token:{type:String,required:!0},model:{type:Object,required:!1,default:null},sharedData:{type:Object,required:!1,default:null},localModel:{type:Object,required:!1,default:()=>v.kL},localCallParticipantModel:{type:Object,required:!1,default:()=>v.BY},localSharedData:{type:Object,required:!0,default:()=>{}},screens:{type:Array,required:!1,default:()=>[]}},data(){return{isCollapsed:!1,observer:null,position:{right:0,bottom:0}}},computed:{conversation(){return this.$store.getters.conversation(this.token)},portalSelector(){return this.$store.getters.getMainContainerSelector()},hasLocalScreen(){return!!this.localModel.attributes.localScreen},showLocalScreen(){return this.hasLocalScreen&&this.screens[0]===v.BY.attributes.peerId}},mounted(){this.updatePosition(),this.observer=new ResizeObserver(this.updatePosition),this.observer.observe(this.$refs.ghost)},beforeDestroy(){this.observer.disconnect()},methods:{maximize(){OCA.Viewer&&OCA.Viewer.close(),this.$store.dispatch("setCallViewMode",{isViewerOverlay:!1})},updatePosition(){const{right:P,bottom:y}=this.$refs.ghost.getBoundingClientRect();this.position.right=window.innerWidth-P,this.position.bottom=window.innerHeight-y}}}},17576:(A,a,s)=>{"use strict";s.d(a,{Z:()=>d});var o=s(35653),_=s(13767),r=s(8344),e=s(2671),i=s(13530),l=s(64024),u=s(60539),c=s(61057),p=s(928),h=s(78475),f=s(94418),m=s(1036),v=s(54432);const d={name:"BreakoutRoomItem",components:{NcActionButton:u.Z,NcActions:c.Z,NcButton:p.Z,SendMessageDialog:h.Z,DotsCircle:o.Z,HandBackLeft:_.Z,MenuDown:r.Z,MenuRight:e.Z,Send:i.Z},props:{name:{type:String,default:void 0},breakoutRoom:{type:Object,default:void 0},mainConversation:{type:Object,default:void 0}},setup(){return{breakoutRoomsStore:(0,v.V)()}},data(){return{showParticipants:!0,isDialogOpened:!1,elementHoveredOrFocused:!1}},computed:{container(){return this.$store.getters.getMainContainerSelector()},participantType(){return this.breakoutRoom.participantType},roomName(){return this.isParticipantsEditor?this.name:this.breakoutRoom.displayName},roomToken(){return this.breakoutRoom.token},showJoinButton(){return this.roomToken!==this.$store.getters.getToken()},canFullModerate(){return!this.isParticipantsEditor&&(this.participantType===f.oM.TYPE.OWNER||this.participantType===f.oM.TYPE.MODERATOR)},canModerate(){return this.isParticipantsEditor?!1:this.canFullModerate||this.participantType===f.oM.TYPE.GUEST_MODERATOR},showAssistanceButton(){return this.isParticipantsEditor?!1:this.canModerate&&this.breakoutRoom.breakoutRoomStatus===f.Sl.BREAKOUT_ROOM_STATUS.STATUS_ASSISTANCE_REQUESTED},toggleParticipantsListLabel(){return this.showParticipants?t("spreed","Hide list of participants"):t("spreed","Show list of participants")},isParticipantsEditor(){return this.name!==void 0}},watch:{showAssistanceButton(P){P&&(0,l.K2)(t("spreed","Assistance requested in {roomName}",{roomName:this.roomName}))}},methods:{openSendMessageDialog(){this.isDialogOpened=!0},closeSendMessageDialog(){this.isDialogOpened=!1},dismissRequestAssistance(){this.breakoutRoomsStore.dismissRequestAssistance(this.roomToken)},async joinRoom(){if(this.canModerate)m.N.$emit("switch-to-conversation",{token:this.roomToken});else try{this.mainConversation.breakoutRoomMode===f.Sl.BREAKOUT_ROOM_MODE.FREE&&await this.breakoutRoomsStore.switchToBreakoutRoom({token:this.breakoutRoomsStore.getParentRoomToken(this.roomToken),target:this.roomToken}),m.N.$emit("switch-to-conversation",{token:this.roomToken})}catch(P){console.debug(P)}},toggleParticipantsVisibility(){this.showParticipants=!this.showParticipants}}}},81481:(A,a,s)=>{"use strict";s.d(a,{Z:()=>c});var o=s(83969),_=s(2091),r=s(928),e=s(40515),i=s(14714),l=s(94418),u=s(59597);const c={name:"CallTime",components:{NcButton:r.Z,NcLoadingIcon:e.Z,NcPopover:i.Z,RecordCircle:o.Z,StopIcon:_.Z},props:{start:{type:Number,required:!0}},data(){return{callTime:void 0,showPopover:!1,isCallDurationHintShown:!1,timer:null,untilCallDurationHintShown:null}},computed:{container(){return this.$store.getters.getMainContainerSelector()},callStart(){return new Date(this.start*1e3)},token(){return this.$store.getters.getToken()},conversation(){return this.$store.getters.conversation(this.token)||this.$store.getters.dummyConversation},isStartingRecording(){return this.conversation.callRecording===l.D0.RECORDING.VIDEO_STARTING||this.conversation.callRecording===l.D0.RECORDING.AUDIO_STARTING},isRecording(){return this.conversation.callRecording===l.D0.RECORDING.VIDEO||this.conversation.callRecording===l.D0.RECORDING.AUDIO},isShowRecordingControls(){return this.$store.getters.isModerator&&(this.isStartingRecording||this.isRecording)},isButtonDisabled(){return!this.isShowRecordingControls&&!this.isCallDurationHintShown},recordingButtonTitle(){return this.isStartingRecording?t("spreed","Starting the recording"):this.isRecording?t("spreed","Recording"):""}},watch:{callTime(p){p&&!this.untilCallDurationHintShown&&(this.untilCallDurationHintShown=1e3*60*60-p+1e3,setTimeout(()=>{this.showCallDurationHint()},this.untilCallDurationHintShown))}},mounted(){this.timer=setInterval(this.computeElapsedTime,1e3)},beforeDestroy(){clearInterval(this.timer)},methods:{formattedTime:u.B,stopRecording(){this.$store.dispatch("stopCallRecording",{token:this.token}),this.showPopover=!1},computeElapsedTime(){this.start!==0&&(this.callTime=new Date-this.callStart)},showCallDurationHint(){this.showPopover=!0,this.isCallDurationHintShown=!0,this.$store.getters.windowIsVisible()?setTimeout(()=>{this.showPopover=!1},1e4):window.onfocus=()=>setTimeout(()=>{this.showPopover=!1},1e4)}}}},68737:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(18849),_=s(69183),r=s(60539),e=s(82662),i=s(61057);const l={name:"ReactionMenu",components:{NcActions:i.Z,NcActionButton:r.Z,NcActionButtonGroup:e.Z,EmoticonOutline:o.Z},props:{token:{type:String,required:!0},localCallParticipantModel:{type:Object,required:!0},supportedReactions:{type:Array,validator:u=>u.every(c=>typeof c=="string"),required:!0}},data(){return{throttleTimer:null}},computed:{container(){return this.$store.getters.getMainContainerSelector()},reactionsInSingleRow(){return Math.ceil(this.supportedReactions.length/2)}},methods:{throttledSendReaction(u){this.throttleTimer||(this.sendReaction(u),this.throttleTimer=setTimeout(()=>{this.throttleTimer=null},2e3))},sendReaction(u){this.localCallParticipantModel.sendReaction(u),(0,_.j8)("send-reaction",{model:this.localCallParticipantModel,reaction:u})}}}},32963:(A,a,s)=>{"use strict";s.d(a,{Z:()=>x});var o=s(46544),_=s(65878),r=s(69183),e=s(928),i=s(53211),l=s(30589),u=s(77013),c=s(32602),p=s(8222),h=s(91764),f=s(20774),m=s(65260),v=s(41673),d=s(18374),P=s(94418),y=s(19914),T=s(4594),b=s(31341);const x={name:"TopBar",directives:{Tooltip:i.Z},components:{BreakoutRoomsEditor:m.Z,CallButton:u.Z,CallTime:c.Z,ConversationIcon:v.Z,TopBarMediaControls:h.Z,NcButton:e.Z,TopBarMenu:f.Z,ReactionMenu:p.Z,AccountMultiple:o.Z},mixins:[l.ZP],props:{isInCall:{type:Boolean,required:!0},isSidebar:{type:Boolean,default:!1}},setup(){return(0,d.g)(),{localCallParticipantModel:b.BY,localMediaModel:b.kL}},data:()=>({showBreakoutRoomsEditor:!1}),computed:{container(){return this.$store.getters.getMainContainerSelector()},isOneToOneConversation(){return this.conversation.type===P.Sl.TYPE.ONE_TO_ONE},isModeratorOrUser(){return this.$store.getters.isModeratorOrUser},token(){return this.$store.getters.getToken()},conversation(){return this.$store.getters.conversation(this.token)||this.$store.getters.dummyConversation},showUserStatusAsDescription(){return this.isOneToOneConversation&&this.statusMessage},statusMessage(){return(0,T._)(this.conversation)},renderedDescription(){return this.renderContent(this.conversation.description)},actorId(){return this.$store.getters.getActorId()},isPeerInactive(){if(!this.isOneToOneConversation)return;let M;const g=this.$store.getters.participantsList(this.token);for(const C of g)C.actorId!==this.actorId&&(M=C);return M?!M.sessionIds.length:!1},participantsInCall(){return this.$store.getters.participantsInCall(this.token)||""},participantsInCallAriaLabel(){return n("spreed","%n participant in call","%n participants in call",this.$store.getters.participantsInCall(this.token))},supportedReactions(){return(0,_.F)()?.spreed?.config?.call?.["supported-reactions"]},hasReactionSupport(){return this.isInCall&&this.supportedReactions?.length>0},topBarStyle(){return{"--original-color-main-background":window.getComputedStyle(document.body).getPropertyValue("--color-main-background")}}},mounted(){document.body.classList.add("has-topbar"),document.addEventListener("fullscreenchange",this.fullScreenChanged,!1),document.addEventListener("mozfullscreenchange",this.fullScreenChanged,!1),document.addEventListener("MSFullscreenChange",this.fullScreenChanged,!1),document.addEventListener("webkitfullscreenchange",this.fullScreenChanged,!1)},beforeDestroy(){this.notifyUnreadMessages(null),document.removeEventListener("fullscreenchange",this.fullScreenChanged,!1),document.removeEventListener("mozfullscreenchange",this.fullScreenChanged,!1),document.removeEventListener("MSFullscreenChange",this.fullScreenChanged,!1),document.removeEventListener("webkitfullscreenchange",this.fullScreenChanged,!1),document.body.classList.remove("has-topbar")},methods:{openSidebar(M){typeof M=="string"&&(0,r.j8)("spreed:select-active-sidebar-tab",M),this.$store.dispatch("showSidebar"),y.Z.setItem("sidebarOpen","true")},fullScreenChanged(){this.$store.dispatch("setIsFullscreen",document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)},openConversationSettings(){(0,r.j8)("show-conversation-settings",{token:this.token})}}}},26192:(A,a,s)=>{"use strict";s.d(a,{Z:()=>B});var o=s(95573),_=s.n(o),r=s(98362),e=s(364),i=s(28499),l=s(92577),u=s(20719),c=s(31533),p=s(64024),h=s(69183),f=s(60539),m=s(61057),v=s(928),d=s(14714),P=s(53211),y=s(71470),T=s(69581),b=s(84749),x=s(94418),M=s(16746),g=s(31341),C=s(2496);const B={name:"TopBarMediaControls",directives:{tooltip:P.Z},components:{LocalAudioControlButton:y.Z,LocalVideoControlButton:T.Z,NcActionButton:f.Z,NcActions:m.Z,NcButton:v.Z,NcPopover:d.Z,Blur:r.Z,BlurOff:e.Z,Monitor:i.Z,MonitorOff:l.Z,MonitorShare:u.Z,NetworkStrength2Alert:c.Z},props:{token:{type:String,required:!0},model:{type:Object,required:!0},localCallParticipantModel:{type:Object,required:!0},isSidebar:{type:Boolean,default:!1}},setup(){return{isInCall:(0,b.E)(),callAnalyzer:g.bI}},data(){return{speakingWhileMutedNotification:null,screenSharingMenuOpen:!1,boundaryElement:document.querySelector(".main-view"),mouseover:!1,qualityWarningInGracePeriodTimeout:null,audioEnabledBeforeSpacebarKeydown:void 0,spacebarKeyDown:!1}},computed:{isVirtualBackgroundAvailable(){return this.model.attributes.virtualBackgroundAvailable},isVirtualBackgroundEnabled(){return this.model.attributes.virtualBackgroundEnabled},toggleVirtualBackgroundButtonLabel(){return this.isVirtualBackgroundEnabled?t("spreed","Disable background blur"):t("spreed","Blur background")},conversation(){return this.$store.getters.conversation(this.token)||this.$store.getters.dummyConversation},isScreensharingAllowed(){return this.conversation.permissions&x.oM.PERMISSIONS.PUBLISH_SCREEN},blurButtonClass(){return{"blur-disabled":this.isVirtualBackgroundEnabled}},screenSharingButtonClass(){return{"screensharing-enabled":this.isScreensharingAllowed&&this.isScreensharing,"no-screensharing-available":!this.isScreensharingAllowed}},isScreensharing(){return this.model.attributes.localScreen},screenSharingButtonTooltip(){return this.isScreensharingAllowed?this.screenSharingMenuOpen?null:this.isScreensharingAllowed?this.isScreensharing?t("spreed","Screensharing options"):t("spreed","Enable screensharing"):t("spreed","No screensharing"):t("spreed","You are not allowed to enable screensharing")},screenSharingButtonAriaLabel(){return this.screenSharingMenuOpen||this.isScreensharing?t("spreed","Screensharing options"):t("spreed","Enable screensharing")},container(){return this.$store.getters.getMainContainerSelector()},isQualityWarningTooltipDismissed(){return this.$store.getters.isQualityWarningTooltipDismissed},showQualityWarningTooltip(){return this.qualityWarningTooltip&&(!this.isQualityWarningTooltipDismissed||this.mouseover)},showQualityWarning(){return this.senderConnectionQualityIsBad||this.qualityWarningInGracePeriodTimeout},senderConnectionQualityIsBad(){return this.senderConnectionQualityAudioIsBad||this.senderConnectionQualityVideoIsBad||this.senderConnectionQualityScreenIsBad},senderConnectionQualityAudioIsBad(){return g.bI&&(g.bI.attributes.senderConnectionQualityAudio===M.ud.VERY_BAD||g.bI.attributes.senderConnectionQualityAudio===M.ud.NO_TRANSMITTED_DATA)},senderConnectionQualityVideoIsBad(){return g.bI&&(g.bI.attributes.senderConnectionQualityVideo===M.ud.VERY_BAD||g.bI.attributes.senderConnectionQualityVideo===M.ud.NO_TRANSMITTED_DATA)},senderConnectionQualityScreenIsBad(){return g.bI&&(g.bI.attributes.senderConnectionQualityScreen===M.ud.VERY_BAD||g.bI.attributes.senderConnectionQualityScreen===M.ud.NO_TRANSMITTED_DATA)},qualityWarningAriaLabel(){let R="";return!this.model.attributes.audioEnabled&&this.model.attributes.videoEnabled&&this.model.attributes.localScreen?R=t("spreed","Bad sent video and screen quality."):!this.model.attributes.audioEnabled&&this.model.attributes.localScreen?R=t("spreed","Bad sent screen quality."):!this.model.attributes.audioEnabled&&this.model.attributes.videoEnabled?R=t("spreed","Bad sent video quality."):this.model.attributes.videoEnabled&&this.model.attributes.localScreen?R=t("spreed","Bad sent audio, video and screen quality."):this.model.attributes.localScreen?R=t("spreed","Bad sent audio and screen quality."):this.model.attributes.videoEnabled?R=t("spreed","Bad sent audio and video quality."):R=t("spreed","Bad sent audio quality."),R},qualityWarningTooltip(){if(!this.showQualityWarning)return null;const R=this.isVirtualBackgroundAvailable&&this.model.attributes.virtualBackgroundEnabled,O={};return!this.model.attributes.audioEnabled&&this.model.attributes.videoEnabled&&R&&this.model.attributes.localScreen?(O.content=t("spreed","Your internet connection or computer are busy and other participants might be unable to see your screen. To improve the situation try to disable the background blur or your video while doing a screen share."),O.actionLabel=t("spreed","Disable background blur"),O.action="disableVirtualBackground"):!this.model.attributes.audioEnabled&&this.model.attributes.videoEnabled&&this.model.attributes.localScreen?(O.content=t("spreed","Your internet connection or computer are busy and other participants might be unable to see your screen. To improve the situation try to disable your video while doing a screenshare."),O.actionLabel=t("spreed","Disable video"),O.action="disableVideo"):!this.model.attributes.audioEnabled&&this.model.attributes.localScreen?(O.content=t("spreed","Your internet connection or computer are busy and other participants might be unable to see your screen."),O.actionLabel="",O.action=""):!this.model.attributes.audioEnabled&&this.model.attributes.videoEnabled?(O.content=t("spreed","Your internet connection or computer are busy and other participants might be unable to see you."),O.actionLabel="",O.action=""):this.model.attributes.videoEnabled&&R&&this.model.attributes.localScreen?(O.content=t("spreed","Your internet connection or computer are busy and other participants might be unable to understand and see you. To improve the situation try to disable the background blur or your video while doing a screenshare."),O.actionLabel=t("spreed","Disable background blur"),O.action="disableVirtualBackground"):this.model.attributes.videoEnabled&&this.model.attributes.localScreen?(O.content=t("spreed","Your internet connection or computer are busy and other participants might be unable to understand and see you. To improve the situation try to disable your video while doing a screenshare."),O.actionLabel=t("spreed","Disable video"),O.action="disableVideo"):this.model.attributes.localScreen?(O.content=t("spreed","Your internet connection or computer are busy and other participants might be unable to understand you and see your screen. To improve the situation try to disable your screenshare."),O.actionLabel=t("spreed","Disable screenshare"),O.action="disableScreenShare"):this.model.attributes.videoEnabled&&R?(O.content=t("spreed","Your internet connection or computer are busy and other participants might be unable to understand and see you. To improve the situation try to disable the background blur or your video."),O.actionLabel=t("spreed","Disable background blur"),O.action="disableVirtualBackground"):this.model.attributes.videoEnabled?(O.content=t("spreed","Your internet connection or computer are busy and other participants might be unable to understand and see you. To improve the situation try to disable your video."),O.actionLabel=t("spreed","Disable video"),O.action="disableVideo"):(O.content=t("spreed","Your internet connection or computer are busy and other participants might be unable to understand you."),O.actionLabel="",O.action=""),O},disableKeyboardShortcuts(){return OCP.Accessibility.disableKeyboardShortcuts()}},watch:{senderConnectionQualityIsBad(R){R&&(this.qualityWarningInGracePeriodTimeout&&window.clearTimeout(this.qualityWarningInGracePeriodTimeout),this.qualityWarningInGracePeriodTimeout=window.setTimeout(()=>{this.qualityWarningInGracePeriodTimeout=null},1e4))}},mounted(){this.speakingWhileMutedWarner=new C.Z(this.model,this)},beforeDestroy(){this.speakingWhileMutedWarner.destroy()},methods:{handleShortkey(){this.model.attributes.audioAvailable&&(this.spacebarKeyDown?(this.spacebarKeyDown=!1,this.audioEnabledBeforeSpacebarKeydown?this.model.enableAudio():this.model.disableAudio(),this.audioEnabledBeforeSpacebarKeydown=void 0):(this.audioEnabledBeforeSpacebarKeydown=this.model.attributes.audioEnabled,this.spacebarKeyDown=!0,this.$refs.audioControl.toggleAudio()))},setSpeakingWhileMutedNotification(R){this.speakingWhileMutedNotification=R},toggleVirtualBackground(){this.model.attributes.virtualBackgroundEnabled?this.model.disableVirtualBackground():this.model.enableVirtualBackground()},toggleScreenSharingMenu(){if(this.isScreensharingAllowed){if(!this.model.getWebRtc().capabilities.supportScreenSharing){window.location.protocol==="https:"?(0,p.PV)(t("spreed","Screen sharing is not supported by your browser.")):(0,p.PV)(t("spreed","Screen sharing requires the page to be loaded through HTTPS."));return}this.isScreensharing||this.startShareScreen()}},showScreen(){this.isScreensharing&&(0,h.j8)("switch-screen-to-id",this.localCallParticipantModel.attributes.peerId)},stopScreen(){this.model.stopSharingScreen()},startShareScreen(R){this.model.shareScreen(R,function(O){if(!O)return;let W=null;switch(O.name){case"HTTPS_REQUIRED":(0,p.PV)(t("spreed","Screensharing requires the page to be loaded through HTTPS."));break;case"PERMISSION_DENIED":case"NotAllowedError":case"CEF_GETSCREENMEDIA_CANCELED":break;case"FF52_REQUIRED":(0,p.PV)(t("spreed","Sharing your screen only works with Firefox version 52 or newer."));break;case"EXTENSION_UNAVAILABLE":if(window.chrome&&(W="https://chrome.google.com/webstore/detail/screensharing-for-nextclo/kepnpjhambipllfmgmbapncekcmabkol"),W){const k=t("spreed","Screensharing extension is required to share your screen."),z='<a href="'+W+'" target="_blank">'+_()(k)+"</a>";(0,p.PV)(z,{isHTML:!0})}else(0,p.PV)(t("spreed","Please use a different browser like Firefox or Chrome to share your screen."));break;default:(0,p.PV)(t("spreed","An error occurred while starting screensharing."));break}})},executeQualityWarningTooltipAction(){this.qualityWarningTooltip.action!==""&&(this.qualityWarningTooltip.action==="disableScreenShare"?(this.model.stopSharingScreen(),this.dismissQualityWarningTooltip()):this.qualityWarningTooltip.action==="disableVirtualBackground"?(this.model.disableVirtualBackground(),this.dismissQualityWarningTooltip()):this.qualityWarningTooltip.action==="disableVideo"&&(this.model.disableVideo(),this.dismissQualityWarningTooltip()))},dismissQualityWarningTooltip(){this.$store.dispatch("dismissQualityWarningTooltip")}}}},49729:(A,a,s)=>{"use strict";s.d(a,{Z:()=>z});var o=s(46703),_=s(35653),r=s(13511),e=s(57701),i=s(87720),l=s(72181),u=s(13767),c=s(27347),p=s(83969),h=s(2091),f=s(97167),m=s(28532),v=s(65878),d=s(64024),P=s(69183),y=s(60539),T=s(78043),b=s(61057),x=s(52014),M=s(928),g=s(40515),C=s(2529),B=s(84749),R=s(94418),O=s(54432),W=s(69104),k=s(31341);const z={name:"TopBarMenu",components:{NcActionButton:y.Z,NcActionLink:T.Z,NcActionSeparator:x.Z,NcActions:b.Z,NcButton:M.Z,NcLoadingIcon:g.Z,Cog:o.Z,DotsCircle:_.Z,DotsHorizontal:r.Z,File:e.Z,Fullscreen:i.Z,FullscreenExit:l.Z,GridView:m.Z,HandBackLeft:u.Z,MicrophoneOff:c.Z,PromotedView:C.Z,RecordCircle:p.Z,StopIcon:h.Z,VideoIcon:f.Z},props:{token:{type:String,required:!0},model:{type:Object,required:!0},showActions:{type:Boolean,default:!0},isSidebar:{type:Boolean,default:!1}},emits:["open-breakout-rooms-editor"],setup(){return{isInCall:(0,B.E)(),breakoutRoomsStore:(0,O.V)()}},data(){return{boundaryElement:document.querySelector(".main-view")}},computed:{conversation(){return this.$store.getters.conversation(this.token)||this.$store.getters.dummyConversation},isFullscreen(){return this.$store.getters.isFullscreen()},labelFullscreen(){return this.isFullscreen?t("spreed","Exit full screen (F)"):t("spreed","Full screen (F)")},isFileConversation(){return this.conversation.objectType===R.Sl.OBJECT_TYPE.FILE&&this.conversation.objectId},linkToFile(){return this.isFileConversation?(0,W.Eq)("/f/{objectId}",{objectId:this.conversation.objectId}):""},isOneToOneConversation(){return this.conversation.type===R.Sl.TYPE.ONE_TO_ONE||this.conversation.type===R.Sl.TYPE.ONE_TO_ONE_FORMER},container(){return this.$store.getters.getMainContainerSelector()},changeViewText(){return this.isGrid?t("spreed","Speaker view"):t("spreed","Grid view")},isGrid(){return this.$store.getters.isGrid},isVirtualBackgroundAvailable(){return this.model.attributes.virtualBackgroundAvailable},isVirtualBackgroundEnabled(){return this.model.attributes.virtualBackgroundEnabled},isHandRaised(){return this.model.attributes.raisedHand?.state===!0},raiseHandButtonLabel(){return this.isHandRaised?this.disableKeyboardShortcuts?t("spreed","Lower hand"):t("spreed","Lower hand (R)"):this.disableKeyboardShortcuts?t("spreed","Raise hand"):t("spreed","Raise hand (R)")},disableKeyboardShortcuts(){return OCP.Accessibility.disableKeyboardShortcuts()},participantType(){return this.conversation.participantType},canFullModerate(){return this.participantType===R.oM.TYPE.OWNER||this.participantType===R.oM.TYPE.MODERATOR},canModerate(){return this.canFullModerate||this.participantType===R.oM.TYPE.GUEST_MODERATOR},canModerateRecording(){const w=(0,v.F)()?.spreed?.config?.call?.recording||!1;return this.canFullModerate&&w},canConfigureBreakoutRooms(){return this.conversation.type!==R.Sl.TYPE.GROUP||!this.canFullModerate?!1:!!(0,v.F)()?.spreed?.config?.call?.["breakout-rooms"]},isStartingRecording(){return this.conversation.callRecording===R.D0.RECORDING.VIDEO_STARTING||this.conversation.callRecording===R.D0.RECORDING.AUDIO_STARTING},isRecording(){return this.conversation.callRecording===R.D0.RECORDING.VIDEO||this.conversation.callRecording===R.D0.RECORDING.AUDIO},userIsInBreakoutRoomAndInCall(){return this.conversation.objectType===R.Sl.OBJECT_TYPE.BREAKOUT_ROOM&&this.isInCall}},methods:{forceMuteOthers(){k.ln.callParticipantModels.value.forEach(w=>{w.forceMute()})},toggleFullscreen(){if(Array.from(document.body.childNodes).filter(w=>w.nodeName==="DIV"&&w.classList.contains("modal-mask")&&window.getComputedStyle(w).display!=="none").length!==0){(0,d.K2)(t("spreed","You need to close a dialog to toggle full screen"));return}this.isFullscreen?(this.disableFullscreen(),this.$store.dispatch("setIsFullscreen",!1)):(this.enableFullscreen(),this.$store.dispatch("setIsFullscreen",!0))},enableFullscreen(){const w=document.getElementById("content-vue");w.requestFullscreen?w.requestFullscreen():w.webkitRequestFullscreen?w.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):w.mozRequestFullScreen?w.mozRequestFullScreen():w.msRequestFullscreen&&w.msRequestFullscreen()},disableFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()},toggleVirtualBackground(){this.model.attributes.virtualBackgroundEnabled?this.model.disableVirtualBackground():this.model.enableVirtualBackground()},changeView(){this.$store.dispatch("setCallViewMode",{isGrid:!this.isGrid}),this.$store.dispatch("selectedVideoPeerId",null)},showMediaSettingsDialog(){(0,P.j8)("talk:media-settings:show")},toggleHandRaised(){const w=!this.isHandRaised;if(this.model.toggleHandRaised(w),this.$store.dispatch("setParticipantHandRaised",{sessionId:this.$store.getters.getSessionId(),raisedHand:this.model.attributes.raisedHand}),this.userIsInBreakoutRoomAndInCall&&!this.canModerate){if(Object.keys(this.$store.getters.participantRaisedHandList).filter(Z=>Z!==this.$store.getters.getSessionId()).length!==0)return;const U=this.conversation.breakoutRoomStatus===R.Sl.BREAKOUT_ROOM_STATUS.STATUS_ASSISTANCE_REQUESTED;w&&!U?this.breakoutRoomsStore.requestAssistance(this.token):!w&&U&&this.breakoutRoomsStore.dismissRequestAssistance(this.token)}},openConversationSettings(){(0,P.j8)("show-conversation-settings",{token:this.token})},startRecording(){this.$store.dispatch("startCallRecording",{token:this.token,callRecording:R.D0.RECORDING.VIDEO})},stopRecording(){this.$store.dispatch("stopCallRecording",{token:this.token})}}}},18027:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon promoted-view-icon",attrs:{"aria-hidden":!e.title,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 16 16"}},[i("rect",{attrs:{x:"1",y:"1",width:"13",height:"9"}}),e._v(" "),i("rect",{attrs:{x:"1",y:"12",width:"3",height:"3"}}),e._v(" "),i("rect",{attrs:{x:"6",y:"12",width:"3",height:"3"}}),e._v(" "),i("rect",{attrs:{x:"11",y:"12",width:"3",height:"3"}}),e._v(" "),e.title?i("title",[e._v(e._s(e.title))]):e._e()])])},_=[]},13448:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("NcModal",e._g(e._b({class:{"modal-mask__participants-step":e.isEditingParticipants},attrs:{container:e.container}},"NcModal",e.$attrs,!1),e.$listeners),[i("div",{staticClass:"breakout-rooms-editor",class:{"breakout-rooms-editor__participants-step":e.isEditingParticipants}},[i("h2",[e._v(e._s(e.modalTitle))]),e._v(" "),e.isEditingParticipants?[i("BreakoutRoomsParticipantsEditor",e._g({attrs:{token:e.token,"room-number":e.amount},on:{back:function(l){e.isEditingParticipants=!1},"create-rooms":e.handleCreateRooms}},e.$listeners))]:[i("div",{staticClass:"breakout-rooms-editor__main"},[i("label",{staticClass:"breakout-rooms-editor__caption",attrs:{for:"room-number"}},[e._v(e._s(e.t("spreed","Number of breakout rooms"))+" ")]),e._v(" "),e.isInvalidAmount?i("p",{staticClass:"breakout-rooms-editor__error-hint"},[e._v(`
					`+e._s(e.t("spreed","You can create from 1 to 20 breakout rooms."))+`
				`)]):e._e(),e._v(" "),i("NcInputField",{ref:"inputField",staticClass:"breakout-rooms-editor__number-input",attrs:{id:"room-number",value:e.amount,type:"number",min:"1",max:"20"},on:{"update:value":function(l){e.amount=l}}}),e._v(" "),i("label",{staticClass:"breakout-rooms-editor__caption"},[e._v(e._s(e.t("spreed","Assignment method")))]),e._v(" "),i("fieldset",[i("NcCheckboxRadioSwitch",{attrs:{checked:e.mode,value:"1",name:"mode_radio",type:"radio"},on:{"update:checked":function(l){e.mode=l}}},[e._v(`
						`+e._s(e.t("spreed","Automatically assign participants"))+`
					`)]),e._v(" "),i("NcCheckboxRadioSwitch",{attrs:{checked:e.mode,value:"2",name:"mode_radio",type:"radio"},on:{"update:checked":function(l){e.mode=l}}},[e._v(`
						`+e._s(e.t("spreed","Manually assign participants"))+`
					`)]),e._v(" "),i("NcCheckboxRadioSwitch",{attrs:{checked:e.mode,value:"3",name:"mode_radio",type:"radio"},on:{"update:checked":function(l){e.mode=l}}},[e._v(`
						`+e._s(e.t("spreed","Allow participants to choose"))+`
					`)])],1)],1),e._v(" "),i("div",{staticClass:"breakout-rooms-editor__buttons"},[e.mode==="2"?i("NcButton",{attrs:{type:"primary",disabled:e.isInvalidAmount},on:{click:function(l){e.isEditingParticipants=!0}}},[e._v(`
					`+e._s(e.t("spreed","Assign participants to rooms"))+`
				`)]):i("NcButton",{attrs:{type:"primary",disabled:e.isInvalidAmount},on:{click:e.handleCreateRooms}},[e._v(`
					`+e._s(e.t("spreed","Create rooms"))+`
				`)])],1)]],2)])},_=[]},95152:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"participants-editor"},[i("ul",{staticClass:"participants-editor__scroller"},[i("BreakoutRoomItem",{staticClass:"participants-editor__section",attrs:{name:e.t("spreed","Unassigned participants")}},e._l(e.unassignedParticipants,function(l){return i("SelectableParticipant",{key:l.attendeeId,attrs:{value:l.attendeeId,checked:e.selectedParticipants,participant:l},on:{"update:checked":function(u){e.selectedParticipants=u}}})}),1),e._v(" "),e._l(e.assignments,function(l,u){return[i("BreakoutRoomItem",{key:u,staticClass:"participants-editor__section",attrs:{name:e.roomName(u)}},e._l(l,function(c){return i("SelectableParticipant",{key:c,attrs:{value:e.assignments,checked:e.selectedParticipants,participant:e.attendeesById[c]},on:{"update:checked":function(p){e.selectedParticipants=p}}})}),1)]})],2),e._v(" "),i("div",{staticClass:"participants-editor__buttons"},[e.breakoutRoomsConfigured?i("NcButton",{staticClass:"delete",attrs:{title:e.deleteButtonLabel,"aria-label":e.deleteButtonLabel,type:"error"},on:{click:e.toggleShowDialog},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Delete",{attrs:{size:20}})]},proxy:!0}],null,!1,2705356561)},[e._v(`
			`+e._s(e.deleteButtonLabel)+`
		`)]):e._e(),e._v(" "),e.isReorganizingAttendees?e._e():i("NcButton",{attrs:{type:"tertiary"},on:{click:e.goBack},scopedSlots:e._u([{key:"icon",fn:function(){return[i("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)},[e._v(`
			`+e._s(e.t("spreed","Back"))+`
		`)]),e._v(" "),e.hasAssigned?i("NcButton",{attrs:{type:"tertiary"},on:{click:e.resetAssignments},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Reload",{attrs:{size:20}})]},proxy:!0}],null,!1,163584889)},[e._v(`
			`+e._s(e.resetButtonLabel)+`
		`)]):e._e(),e._v(" "),e.hasSelected?i("NcActions",{attrs:{type:"primary",container:".participants-editor__buttons","menu-name":e.t("spreed","Assign")}},e._l(e.assignments,function(l,u){return i("NcActionButton",{key:u,attrs:{"close-after-click":!0},on:{click:function(c){return e.assignAttendees(u)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("DotsCircle",{attrs:{size:20}})]},proxy:!0}],null,!0)},[e._v(`
				`+e._s(e.roomName(u))+`
			`)])}),1):e._e(),e._v(" "),i("NcButton",{attrs:{disabled:!e.hasAssigned,type:e.confirmButtonType},on:{click:e.handleSubmit}},[e._v(`
			`+e._s(e.confirmButtonLabel)+`
		`)])],1),e._v(" "),i("NcDialog",{attrs:{open:e.showDialog,name:e.t("spreed","Delete breakout rooms"),message:e.dialogMessage,container:".participants-editor"},on:{"update:open":function(l){e.showDialog=l}},scopedSlots:e._u([{key:"actions",fn:function(){return[i("NcButton",{attrs:{type:"tertiary"},on:{click:e.toggleShowDialog}},[e._v(`
				`+e._s(e.t("spreed","Cancel"))+`
			`)]),e._v(" "),i("NcButton",{attrs:{type:"error"},on:{click:e.deleteBreakoutRooms}},[e._v(`
				`+e._s(e.t("spreed","Delete breakout rooms"))+`
			`)])]},proxy:!0}])})],1)},_=[]},56057:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"selectable-participant",attrs:{tabindex:"0"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.modelProxy,expression:"modelProxy"}],attrs:{id:"participant.attendeeId",type:"checkbox",name:"participant.attendeeId"},domProps:{value:e.participant.attendeeId,checked:Array.isArray(e.modelProxy)?e._i(e.modelProxy,e.participant.attendeeId)>-1:e.modelProxy},on:{change:function(l){var u=e.modelProxy,c=l.target,p=!!c.checked;if(Array.isArray(u)){var h=e.participant.attendeeId,f=e._i(u,h);c.checked?f<0&&(e.modelProxy=u.concat([h])):f>-1&&(e.modelProxy=u.slice(0,f).concat(u.slice(f+1)))}else e.modelProxy=p}}}),e._v(" "),i("AvatarWrapper",{attrs:{id:e.participant.actorId,name:e.participant.displayName,source:e.participant.source||e.participant.actorType,"disable-menu":"","disable-tooltip":"","show-user-status":"","show-user-status-compact":""}}),e._v(" "),i("div",[e._v(`
		`+e._s(e.participant.displayName)+`
	`)])],1)},_=[]},9437:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("NcModal",e._g({ref:"modal",attrs:{container:e.container}},e.$listeners),[i("div",{staticClass:"send-message-dialog"},[i("h2",{staticClass:"send-message-dialog__title"},[e._v(`
			`+e._s(e.dialogTitle)+`
		`)]),e._v(" "),e.modalContainerId?i("NewMessage",{key:e.modalContainerId,ref:"newMessage",attrs:{role:"region",token:e.token,container:e.modalContainerId,"aria-label":e.t("spreed","Post message"),broadcast:e.broadcast},on:{sent:e.handleMessageSent,failure:e.handleMessageFailure}}):e._e()],1)])},_=[]},26188:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{class:{blurred:e.isBackgroundBlurred},attrs:{id:"call-container"}},[e.isViewerOverlay?i("ViewerOverlayCallView",{attrs:{token:e.token,model:e.promotedParticipantModel,"shared-data":e.promotedParticipantModel&&e.sharedDatas[e.promotedParticipantModel.attributes.peerId],screens:e.screens,"local-shared-data":e.localSharedData}}):[!e.callParticipantModels.length&&!e.screenSharingActive&&!e.isGrid?i("EmptyCallView",{attrs:{"is-sidebar":e.isSidebar}}):e._e(),e._v(" "),i("div",{attrs:{id:"videos"}},[e.isGrid?e._e():i("div",{staticClass:"video__promoted",class:{"full-page":e.showFullPage}},[e.showSelectedVideo&&e.selectedCallParticipantModel?i("VideoVue",{key:e.selectedVideoPeerId,attrs:{token:e.token,model:e.selectedCallParticipantModel,"shared-data":e.sharedDatas[e.selectedVideoPeerId],"show-talking-highlight":!1,"is-one-to-one":e.isOneToOne,"is-grid":"","is-big":"","fit-video":""}}):e.showLocalVideo?i("LocalVideo",{ref:"localVideo",attrs:{token:e.token,"local-media-model":e.localMediaModel,"local-call-participant-model":e.localCallParticipantModel,"is-stripe":!1,"show-controls":!1,"is-sidebar":!1,"is-big":"","fit-video":""}}):e.showLocalScreen?i("Screen",{key:"screen-local",attrs:{token:e.token,"local-media-model":e.localMediaModel,"shared-data":e.localSharedData,"is-big":""}}):e.showRemoteScreen||e.showSelectedScreen?[e.shownRemoteScreenCallParticipantModel?i("Screen",{key:`screen-${e.shownRemoteScreenPeerId}`,attrs:{token:e.token,"call-participant-model":e.shownRemoteScreenCallParticipantModel,"shared-data":e.sharedDatas[e.shownRemoteScreenPeerId],"is-big":""}}):e._e(),e._v(" "),e.shouldShowPresenterOverlay?i("PresenterOverlay",{attrs:{token:e.token,model:e.shownRemoteScreenCallParticipantModel,"shared-data":e.sharedDatas[e.shownRemoteScreenPeerId],"is-collapsed":!e.showPresenterOverlay},on:{click:e.toggleShowPresenterOverlay}}):e._e()]:e.promotedParticipantModel?i("VideoVue",{key:e.promotedParticipantModel.attributes.peerId,attrs:{token:e.token,model:e.promotedParticipantModel,"shared-data":e.sharedDatas[e.promotedParticipantModel.attributes.peerId],"show-talking-highlight":!1,"is-grid":"","fit-video":"","is-big":"","is-one-to-one":e.isOneToOne,"is-sidebar":e.isSidebar}}):e._e()],2),e._v(" "),e.isSidebar?e._e():i("Grid",e._b({attrs:{"is-stripe":!e.isGrid,"is-recording":e.isRecording,token:e.token,"has-pagination":!0,"call-participant-models":e.callParticipantModels,screens:e.screens,"local-media-model":e.localMediaModel,"local-call-participant-model":e.localCallParticipantModel,"shared-datas":e.sharedDatas},on:{"select-video":e.handleSelectVideo,"click-local-video":e.handleClickLocalVideo}},"Grid",e.$attrs,!1)),e._v(" "),e.supportedReactions?.length?i("ReactionToaster",{attrs:{token:e.token,"supported-reactions":e.supportedReactions,"call-participant-models":e.callParticipantModels}}):e._e(),e._v(" "),e.isSidebar&&!e.showLocalVideo?i("LocalVideo",{ref:"localVideo",staticClass:"local-video",class:{"local-video--sidebar":e.isSidebar},attrs:{"show-controls":!1,"fit-video":!0,"is-stripe":!0,token:e.token,"local-media-model":e.localMediaModel,"local-call-participant-model":e.localCallParticipantModel,"is-sidebar":e.isSidebar},on:{"click-video":e.handleClickLocalVideo}}):e._e()],1)]],2)},_=[]},44343:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"grid-main-wrapper",class:{"is-grid":!e.isStripe,transparent:e.isLessThanTwoVideos}},[e.isStripe&&!e.isRecording?i("NcButton",{staticClass:"stripe--collapse",attrs:{type:"tertiary-no-background","aria-label":e.stripeButtonTooltip},on:{click:e.handleClickStripeCollapse},scopedSlots:e._u([{key:"icon",fn:function(){return[e.stripeOpen?i("ChevronDown",{attrs:{"fill-color":"#ffffff",size:20}}):i("ChevronUp",{attrs:{"fill-color":"#ffffff",size:20}})]},proxy:!0}],null,!1,2967664880)}):e._e(),e._v(" "),i("TransitionWrapper",{attrs:{name:e.isStripe?"slide-down":void 0}},[!e.isStripe||e.stripeOpen?i("div",{staticClass:"wrapper",style:e.wrapperStyle},[i("div",{class:[e.isStripe?"stripe-wrapper":"grid-wrapper"]},[e.hasPreviousPage&&e.gridWidth>0?i("NcButton",{staticClass:"grid-navigation grid-navigation__previous",attrs:{type:"tertiary-no-background","aria-label":e.t("spreed","Previous page of videos")},on:{click:e.handleClickPrevious},scopedSlots:e._u([{key:"icon",fn:function(){return[i("ChevronLeft",{attrs:{"fill-color":"#ffffff",size:20}})]},proxy:!0}],null,!1,2547924082)}):e._e(),e._v(" "),i("div",{ref:"grid",staticClass:"grid",class:{stripe:e.isStripe},style:e.gridStyle,on:{mousemove:e.handleMovement,keydown:e.handleMovement}},[!e.devMode&&(!e.isLessThanTwoVideos||!e.isStripe)?[e.videos.length===0&&!e.isStripe?i("EmptyCallView",{staticClass:"video",attrs:{"is-grid":!0}}):e._e(),e._v(" "),e._l(e.displayedVideos,function(l){return[i("VideoVue",{key:l.attributes.peerId,class:{video:!e.isStripe},attrs:{"show-video-overlay":e.showVideoOverlay,token:e.token,model:l,"is-grid":!0,"show-talking-highlight":!e.isStripe,"is-stripe":e.isStripe,"is-promoted":e.sharedDatas[l.attributes.peerId].promoted,"is-selected":e.isSelected(l),"shared-data":e.sharedDatas[l.attributes.peerId]},on:{"click-video":function(u){return e.handleClickVideo(u,l.attributes.peerId)}}})]})]:e._e(),e._v(" "),e.devMode?[e._l(e.displayedVideos,function(l,u){return i("div",{key:l,staticClass:"dev-mode-video video",class:{"dev-mode-screenshot":e.screenshotMode}},[i("img",{attrs:{src:e.placeholderImage(u)}}),e._v(" "),i("VideoBottomBar",{attrs:{"has-shadow":!1,model:e.placeholderModel(u),"shared-data":e.placeholderSharedData(u),token:e.token,"participant-name":e.placeholderName(u)}})],1)}),e._v(" "),e.screenshotMode?i("div",{staticClass:"dev-mode-video--self video",style:{background:"url("+e.placeholderImage(8)+")"}}):i("h1",{staticClass:"dev-mode__title"},[e._v(`
							Dev mode on ;-)
						`)])]:e._e(),e._v(" "),!e.isStripe&&!e.isRecording&&!e.screenshotMode?i("LocalVideo",{ref:"localVideo",staticClass:"video",attrs:{"is-grid":!0,"fit-video":e.isStripe,token:e.token,"local-media-model":e.localMediaModel,"local-call-participant-model":e.localCallParticipantModel},on:{"click-video":e.handleClickLocalVideo}}):e._e()],2),e._v(" "),e.hasNextPage&&e.gridWidth>0?i("NcButton",{staticClass:"grid-navigation grid-navigation__next",attrs:{type:"tertiary-no-background","aria-label":e.t("spreed","Next page of videos")},on:{click:e.handleClickNext},scopedSlots:e._u([{key:"icon",fn:function(){return[i("ChevronRight",{attrs:{"fill-color":"#ffffff",size:20}})]},proxy:!0}],null,!1,226061961)}):e._e()],1),e._v(" "),e.isStripe&&!e.isRecording&&!e.screenshotMode?i("LocalVideo",{ref:"localVideo",staticClass:"video",attrs:{"is-stripe":!0,"show-controls":!1,token:e.token,"local-media-model":e.localMediaModel,"local-call-participant-model":e.localCallParticipantModel},on:{"click-video":e.handleClickLocalVideo}}):e._e(),e._v(" "),(e.numberOfPages!==0&&e.hasPagination,e._e()),e._v(" "),e.devMode&&!e.screenshotMode?i("div",{staticClass:"dev-mode__data"},[i("p",[e._v("GRID INFO")]),e._v(" "),i("p",[e._v("Videos (total): "+e._s(e.videosCount))]),e._v(" "),i("p",[e._v("Displayed videos n: "+e._s(e.displayedVideos.length))]),e._v(" "),i("p",[e._v("Max per page: ~"+e._s(e.videosCap))]),e._v(" "),i("p",[e._v("Grid width: "+e._s(e.gridWidth))]),e._v(" "),i("p",[e._v("Grid height: "+e._s(e.gridHeight))]),e._v(" "),i("p",[e._v("Min video width: "+e._s(e.minWidth)+" ")]),e._v(" "),i("p",[e._v("Min video Height: "+e._s(e.minHeight)+" ")]),e._v(" "),i("p",[e._v("Grid aspect ratio: "+e._s(e.gridAspectRatio))]),e._v(" "),i("p",[e._v("Number of pages: "+e._s(e.numberOfPages))]),e._v(" "),i("p",[e._v("Current page: "+e._s(e.currentPage))])]):e._e()],1):e._e()])],1)},_=[]},71693:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"empty-call-view",class:{"empty-call-view--sidebar":e.isSidebar,"empty-call-view--small":e.isSmall}},[i("div",{staticClass:"icon",class:e.iconClass}),e._v(" "),i("h2",[e._v(e._s(e.title))]),e._v(" "),e.isSmall?e._e():[e.message?i("p",{staticClass:"emptycontent-additional"},[e._v(`
			`+e._s(e.message)+`
		`)]):e._e(),e._v(" "),e.showLink?i("NcButton",{attrs:{type:"primary"},on:{click:function(l){return l.stopPropagation(),e.handleCopyLink.apply(null,arguments)}}},[e._v(`
			`+e._s(e.t("spreed","Copy link"))+`
		`)]):e._e()]],2)},_=[]},37435:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("NcButton",{directives:[{name:"shortkey",rawName:"v-shortkey.once",value:e.disableKeyboardShortcuts?null:["m"],expression:"disableKeyboardShortcuts ? null : ['m']",modifiers:{once:!0}},{name:"tooltip",rawName:"v-tooltip",value:e.audioButtonTooltip,expression:"audioButtonTooltip"}],class:{"no-audio-available":!e.isAudioAllowed||!e.model.attributes.audioAvailable},attrs:{type:e.type,"aria-label":e.audioButtonAriaLabel},on:{shortkey:e.toggleAudio,click:function(l){return l.stopPropagation(),e.toggleAudio.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("VolumeIndicator",{attrs:{"audio-preview-available":e.model.attributes.audioAvailable,"audio-enabled":e.showMicrophoneOn,"current-volume":e.model.attributes.currentVolume,"volume-threshold":e.model.attributes.volumeThreshold,"overlay-muted-color":"#888888"}})]},proxy:!0}])})},_=[]},81664:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{ref:"videoContainer",staticClass:"localVideoContainer videoContainer videoView",class:e.videoContainerClass,on:{mouseover:function(l){e.mouseover=!0},mouseleave:function(l){e.mouseover=!1},click:function(l){return e.$emit("click-video")}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.localMediaModel.attributes.videoEnabled,expression:"localMediaModel.attributes.videoEnabled"}],staticClass:"videoWrapper",class:e.videoWrapperClass,style:e.videoWrapperStyle},[i("video",{ref:"video",staticClass:"video",class:e.fitVideo?"video--fit":"video--fill",attrs:{id:"localVideo",disablePictureInPicture:"true"},on:{playing:e.updateVideoAspectRatio}})]),e._v(" "),!e.localMediaModel.attributes.videoEnabled&&!e.isSidebar?i("div",{staticClass:"avatar-container"},[e.isGrid||e.isStripe?i("VideoBackground",{attrs:{"display-name":e.displayName,user:e.userId}}):e._e(),e._v(" "),i("AvatarWrapper",{class:e.avatarClass,attrs:{id:e.userId,token:e.token,name:e.displayName,source:e.actorType,size:e.avatarSize,"disable-menu":"","disable-tooltip":""}})],1):e._e(),e._v(" "),i("div",{staticClass:"bottom-bar"},[e.isBig?i("NcButton",{staticClass:"bottom-bar__button",attrs:{type:"tertiary"},on:{click:e.handleStopFollowing}},[e._v(`
			`+e._s(e.stopFollowingLabel)+`
		`)]):e._e()],1)])},_=[]},12788:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("NcButton",{directives:[{name:"shortkey",rawName:"v-shortkey.once",value:e.disableKeyboardShortcuts?null:["v"],expression:"disableKeyboardShortcuts ? null : ['v']",modifiers:{once:!0}},{name:"tooltip",rawName:"v-tooltip",value:e.videoButtonTooltip,expression:"videoButtonTooltip"}],class:{"no-video-available":!e.isVideoAllowed||!e.model.attributes.videoAvailable},attrs:{type:e.type,"aria-label":e.videoButtonAriaLabel},on:{shortkey:e.toggleVideo,click:function(l){return l.stopPropagation(),e.toggleVideo.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.showVideoOn?i("VideoIcon",{attrs:{size:20}}):i("VideoOff",{attrs:{size:20}})]},proxy:!0}])})},_=[]},84277:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return e.isCollapsed?i("NcButton",{staticClass:"presenter-overlay--collapsed",attrs:{"aria-label":e.t("spreed","Show presenter"),title:e.t("spreed","Show presenter"),type:"tertiary-no-background"},on:{click:function(l){return e.$emit("click")}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("AccountBox",{attrs:{"fill-color":"#ffffff",size:20}})]},proxy:!0}])}):i("VueDraggableResizable",{key:e.presenterOverlaySize,attrs:{parent:"",resizable:!1,h:e.presenterOverlaySize,w:e.presenterOverlaySize,x:10,y:10},on:{dragging:function(l){e.isDragging=!0},dragstop:function(l){e.isDragging=!1}}},[i("VideoVue",{staticClass:"presenter-overlay__video",class:{dragging:e.isDragging},attrs:{token:e.token,model:e.model,"shared-data":e.sharedData,"is-presenter-overlay":"","un-selectable":"","hide-bottom-bar":""},on:{"click-presenter":function(l){return e.$emit("click")}}})],1)},_=[]},17004:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("TransitionWrapper",{staticClass:"toaster",attrs:{name:"toast",tag:"ul",group:""}},e._l(e.toasts,function(l){return i("li",{key:l.seed,staticClass:"toast",style:e.styled(l.name,l.seed)},[l.reactionURL?i("img",{staticClass:"toast__reaction-img",attrs:{src:l.reactionURL,alt:l.reaction,width:"34",height:"34"}}):i("span",{staticClass:"toast__reaction"},[e._v(`
			`+e._s(l.reaction)+`
		`)]),e._v(" "),i("span",{staticClass:"toast__name"},[e._v(`
			`+e._s(l.name)+`
		`)])])}),0)},_=[]},14709:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"screenContainer",attrs:{id:e.screenContainerId}},[i("video",{directives:[{name:"show",rawName:"v-show",value:e.localMediaModel&&e.localMediaModel.attributes.localScreen||e.callParticipantModel&&e.callParticipantModel.attributes.screen,expression:"(localMediaModel && localMediaModel.attributes.localScreen) || (callParticipantModel && callParticipantModel.attributes.screen)"}],ref:"screen",staticClass:"screen",class:e.screenClass,attrs:{disablePictureInPicture:e.isBig?"false":"true"}}),e._v(" "),e.isBig?i("VideoBottomBar",e._b({attrs:{"is-big":!0,"is-screen":!0,model:e.model,"participant-name":e.remoteParticipantName}},"VideoBottomBar",e.$props,!1)):e._e()],1)},_=[]},80998:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"wrapper",class:{"wrapper--big":e.isBig}},[i("TransitionWrapper",{attrs:{name:"fade"}},[e.showRaiseHandIndicator?i("div",{staticClass:"status-indicator raiseHandIndicator"},[i("HandBackLeft",{attrs:{size:18,"fill-color":"#ffffff"}})],1):e._e()]),e._v(" "),e.isSidebar?e._e():i("div",{staticClass:"bottom-bar"},[i("TransitionWrapper",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showParticipantName,expression:"showParticipantName"}],staticClass:"participant-name",class:{"participant-name--active":e.isCurrentlyActive,"participant-name--has-shadow":e.hasShadow}},[e._v(`
				`+e._s(e.participantName)+`
			`)])]),e._v(" "),e.isScreen?e._e():i("TransitionWrapper",{directives:[{name:"show",rawName:"v-show",value:e.showVideoOverlay,expression:"showVideoOverlay"}],staticClass:"media-indicators",attrs:{name:"fade",group:""}},[e.showAudioIndicator?i("NcButton",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.audioButtonTooltip,expression:"audioButtonTooltip"}],key:"audioIndicator",staticClass:"audioIndicator",attrs:{"aria-label":e.audioButtonTooltip,type:"tertiary-no-background",disabled:e.isAudioButtonDisabled},on:{click:function(l){return l.stopPropagation(),e.forceMute.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.model.attributes.audioAvailable?i("Microphone",{attrs:{size:20,"fill-color":"#ffffff"}}):i("MicrophoneOff",{attrs:{size:20,"fill-color":"#ffffff"}})]},proxy:!0}],null,!1,3980758650)}):e._e(),e._v(" "),e.showVideoIndicator?i("NcButton",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.videoButtonTooltip,expression:"videoButtonTooltip"}],key:"videoIndicator",staticClass:"videoIndicator",attrs:{"aria-label":e.videoButtonTooltip,type:"tertiary-no-background"},on:{click:function(l){return l.stopPropagation(),e.toggleVideo.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isRemoteVideoEnabled?i("VideoIcon",{attrs:{size:20,"fill-color":"#ffffff"}}):i("VideoOff",{attrs:{size:20,"fill-color":"#ffffff"}})]},proxy:!0}],null,!1,408660308)}):e._e(),e._v(" "),e.showScreenSharingIndicator?i("NcButton",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.t("spreed","Show screen"),expression:"t('spreed', 'Show screen')"}],key:"screenSharingIndicator",staticClass:"screenSharingIndicator",class:{"screen-visible":e.sharedData.screenVisible},attrs:{"aria-label":e.t("spreed","Show screen"),type:"tertiary-no-background"},on:{click:function(l){return l.stopPropagation(),e.switchToScreen.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Monitor",{attrs:{size:20,"fill-color":"#ffffff"}})]},proxy:!0}],null,!1,1275473774)}):e._e(),e._v(" "),e.connectionStateFailedNoRestart?i("div",{key:"iceFailedIndicator",staticClass:"status-indicator iceFailedIndicator"},[i("AlertCircle",{attrs:{size:20,"fill-color":"#ffffff"}})],1):e._e()],1),e._v(" "),e.showStopFollowingButton?i("NcButton",{staticClass:"following-button",attrs:{type:"tertiary"},on:{click:e.handleStopFollowing}},[e._v(`
			`+e._s(e.t("spreed","Stop following"))+`
		`)]):e._e()],1)],1)},_=[]},32341:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{directives:[{name:"show",rawName:"v-show",value:!e.placeholderForPromoted||e.sharedData.promoted,expression:"!placeholderForPromoted || sharedData.promoted"}],ref:"videoContainer",staticClass:"video-container",class:e.containerClass,attrs:{id:(e.placeholderForPromoted?"placeholder-":"")+"container_"+e.peerId+"_video_incoming"},on:{mouseover:function(l){e.mouseover=!0},mouseleave:function(l){e.mouseover=!1},click:function(l){return e.$emit("click-video")}}},[i("TransitionWrapper",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showVideo,expression:"showVideo"}],staticClass:"videoWrapper",class:e.videoWrapperClass,style:e.videoWrapperStyle},[i("video",{ref:"video",staticClass:"video",class:e.fitVideo?"video--fit":"video--fill",attrs:{disablePictureInPicture:!e.isBig},on:{playing:e.updateVideoAspectRatio}}),e._v(" "),e.isPresenterOverlay&&e.mouseover?i("AccountOff",{staticClass:"presenter-icon__hide",attrs:{"aria-label":e.t("spreed","Hide presenter video"),title:e.t("spreed","Hide presenter video"),size:32},on:{click:function(l){return e.$emit("click-presenter")}}}):e._e()],1)]),e._v(" "),i("TransitionWrapper",{attrs:{name:"fade"}},[e.showSharedScreen?i("Screen",{attrs:{"is-big":e.isBig,token:e.token,"call-participant-model":e.model,"shared-data":e.sharedData}}):e._e()],1),e._v(" "),i("TransitionWrapper",{attrs:{name:"fade"}},[e.showBackgroundAndAvatar?i("div",{key:"backgroundAvatar",staticClass:"avatar-container"},[i("VideoBackground",{attrs:{"display-name":e.participantName,user:e.participantUserId}}),e._v(" "),i("AvatarWrapper",{class:e.avatarClass,attrs:{id:e.participantUserId,token:e.token,name:e.participantName,source:e.participantActorType,size:e.avatarSize,"disable-menu":"","disable-tooltip":""}})],1):e._e()]),e._v(" "),i("TransitionWrapper",{attrs:{name:"fade"}},[e.showPlaceholderForPromoted?i("div",{key:"placeholderForPromoted",staticClass:"placeholder-for-promoted"},[e.isPromoted||e.isSelected?i("AccountCircle",{attrs:{"fill-color":"#FFFFFF",size:64}}):e._e()],1):e._e()]),e._v(" "),e.connectionMessage?i("div",{staticClass:"connection-message",class:e.connectionMessageClass},[e._v(`
		`+e._s(e.connectionMessage)+`
	`)]):e._e(),e._v(" "),e.hideBottomBar?e._e():e._t("bottom-bar",function(){return[i("VideoBottomBar",e._b({attrs:{"has-shadow":e.hasVideo,"participant-name":e.participantName}},"VideoBottomBar",e.$props,!1))]})],2)},_=[]},50807:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{ref:"ghost",staticClass:"viewer-overlay-ghost"},[i("Portal",{key:e.portalSelector,attrs:{selector:e.portalSelector}},[i("div",{staticClass:"viewer-overlay app-talk",style:{right:e.position.right+"px",bottom:e.position.bottom+"px"}},[i("div",{staticClass:"viewer-overlay__collapse",class:{collapsed:e.isCollapsed}},[i("NcButton",{staticClass:"viewer-overlay__button",attrs:{type:"secondary","aria-label":e.isCollapsed?e.t("spreed","Collapse"):e.t("spreed","Expand")},on:{click:function(l){l.stopPropagation(),e.isCollapsed=!e.isCollapsed}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isCollapsed?i("ChevronUp",{attrs:{size:20}}):i("ChevronDown",{attrs:{size:20}})]},proxy:!0}])})],1),e._v(" "),i("TransitionWrapper",{attrs:{name:"slide-down"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapsed,expression:"!isCollapsed"}],staticClass:"viewer-overlay__video-container",attrs:{tabindex:"0"},on:{click:e.maximize}},[i("div",{staticClass:"video-overlay__top-bar"},[i("NcButton",{staticClass:"viewer-overlay__button",attrs:{type:"secondary","aria-label":e.t("spreed","Expand")},on:{click:function(l){return l.stopPropagation(),e.maximize.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("ArrowExpand",{attrs:{size:20}})]},proxy:!0}])})],1),e._v(" "),e.showLocalScreen?i("Screen",{attrs:{token:e.token,"local-media-model":e.localModel,"shared-data":e.localSharedData}}):e.model&&e.screens[e.model.attributes.peerId]?i("Screen",{attrs:{token:e.token,"call-participant-model":e.model,"shared-data":e.sharedData}}):e.model?i("VideoVue",{staticClass:"viewer-overlay__video",attrs:{token:e.token,model:e.model,"shared-data":e.sharedData,"is-grid":"","un-selectable":"","hide-bottom-bar":""},on:{"click-video":e.maximize},scopedSlots:e._u([{key:"bottom-bar",fn:function(){},proxy:!0}])}):i("EmptyCallView",{attrs:{"is-small":""}}),e._v(" "),e.localModel.attributes.videoEnabled?i("LocalVideo",{staticClass:"viewer-overlay__local-video",attrs:{token:e.token,"show-controls":!1,"local-media-model":e.localModel,"local-call-participant-model":e.localCallParticipantModel,"is-small":"","un-selectable":""}}):e._e(),e._v(" "),i("div",{staticClass:"viewer-overlay__bottom-bar"},[i("LocalAudioControlButton",{staticClass:"viewer-overlay__button",attrs:{token:e.token,conversation:e.conversation,model:e.localModel,type:"secondary","disable-keyboard-shortcuts":""}}),e._v(" "),i("LocalVideoControlButton",{staticClass:"viewer-overlay__button",attrs:{token:e.token,conversation:e.conversation,model:e.localModel,type:"secondary","disable-keyboard-shortcuts":""}})],1)],1)])],1)])],1)},_=[]},55507:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("li",{key:e.roomName,staticClass:"breakout-room-item",on:{mouseenter:function(l){e.elementHoveredOrFocused=!0},mouseleave:function(l){e.elementHoveredOrFocused=!1}}},[i("div",{staticClass:"breakout-room-item__wrapper"},[i("NcButton",{attrs:{type:"tertiary-no-background","aria-label":e.toggleParticipantsListLabel},on:{focus:function(l){e.elementHoveredOrFocused=!0},blur:function(l){e.elementHoveredOrFocused=!1},click:e.toggleParticipantsVisibility},scopedSlots:e._u([{key:"icon",fn:function(){return[e.elementHoveredOrFocused?e.showParticipants?i("MenuDown",{attrs:{size:20}}):i("MenuRight",{attrs:{size:20}}):i("DotsCircle",{attrs:{size:20}})]},proxy:!0}])}),e._v(" "),i("span",{staticClass:"breakout-room-item__room-name"},[e._v(`
			`+e._s(e.roomName)+`
		`)]),e._v(" "),e.isParticipantsEditor?e._e():[e.showJoinButton?i("NcButton",{on:{click:e.joinRoom}},[e._v(`
				`+e._s(e.t("spreed","Join"))+`
			`)]):e._e(),e._v(" "),e.canModerate?i("NcActions",{attrs:{container:e.container,inline:e.showAssistanceButton?1:0,"force-menu":!e.showAssistanceButton}},[e.showAssistanceButton?i("NcActionButton",{on:{click:e.dismissRequestAssistance},scopedSlots:e._u([{key:"icon",fn:function(){return[i("HandBackLeft",{attrs:{size:16}})]},proxy:!0}],null,!1,2548594270)},[e._v(`
					`+e._s(e.t("spreed","Dismiss request for assistance"))+`
				`)]):e._e(),e._v(" "),i("NcActionButton",{on:{click:e.openSendMessageDialog},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Send",{attrs:{size:16}})]},proxy:!0}],null,!1,2211961201)},[e._v(`
					`+e._s(e.t("spreed","Send message to room"))+`
				`)])],1):e._e(),e._v(" "),e.isDialogOpened?i("SendMessageDialog",{attrs:{"display-name":e.roomName,token:e.roomToken},on:{close:e.closeSendMessageDialog}}):e._e()]],2),e._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.showParticipants,expression:"showParticipants"}]},[e._t("default")],2)])},_=[]},78188:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("NcPopover",{staticClass:"call-time",attrs:{shown:e.showPopover,"focus-trap":e.isShowRecordingControls,triggers:[],container:e.container},on:{"update:shown":function(l){e.showPopover=l}},scopedSlots:e._u([{key:"trigger",fn:function(){return[i("NcButton",{attrs:{disabled:e.isButtonDisabled,wide:!0,title:e.recordingButtonTitle,type:"tertiary"},on:{click:function(l){e.showPopover=!e.showPopover}},scopedSlots:e._u([e.isRecording||e.isStartingRecording?{key:"icon",fn:function(){return[e.isRecording?i("RecordCircle",{attrs:{size:20,"fill-color":"#e9322d"}}):i("RecordCircle",{attrs:{size:20,"fill-color":"var(--color-loading-light)"}})]},proxy:!0}:null],null,!0)},[e._v(`
			`+e._s(e.formattedTime(e.callTime))+`
		`)])]},proxy:!0}])},[e._v(" "),e.isCallDurationHintShown?i("span",{staticClass:"call-duration-hint"},[e._v(`
		`+e._s(e.t("spreed","The call has been running for one hour."))+`
	`)]):e._e(),e._v(" "),e.isShowRecordingControls?[e.isCallDurationHintShown?i("hr",{staticClass:"solid"}):e._e(),e._v(" "),e.isStartingRecording?i("NcButton",{attrs:{type:"tertiary-no-background",wide:!0},on:{click:e.stopRecording},scopedSlots:e._u([{key:"icon",fn:function(){return[i("NcLoadingIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,3155754792)},[e._v(`
			`+e._s(e.t("spreed","Cancel recording start"))+`
		`)]):i("NcButton",{attrs:{type:"tertiary-no-background",wide:!0},on:{click:e.stopRecording},scopedSlots:e._u([{key:"icon",fn:function(){return[i("StopIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,3077665531)},[e._v(`
			`+e._s(e.t("spreed","Stop recording"))+`
		`)])]:e._e()],2)},_=[]},23798:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("NcActions",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.t("spreed","Send a reaction"),expression:"t('spreed', 'Send a reaction')"}],staticClass:"reaction",attrs:{type:"tertiary","aria-label":e.t("spreed","Send a reaction"),container:e.container},scopedSlots:e._u([{key:"icon",fn:function(){return[i("EmoticonOutline",{attrs:{size:20}})]},proxy:!0}])},[e._v(" "),i("NcActionButtonGroup",{staticClass:"reaction__group",style:{"--reactions-in-single-row":e.reactionsInSingleRow}},e._l(e.supportedReactions,function(l,u){return i("NcActionButton",{key:u,staticClass:"reaction__button",attrs:{"aria-label":e.t("spreed","React with {reaction}",{reaction:l})},on:{click:function(c){return e.throttledSendReaction(l)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e._v(`
				`+e._s(l)+`
			`)]},proxy:!0}],null,!0)})}),1)],1)},_=[]},71015:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"top-bar",style:e.topBarStyle,attrs:{"data-theme-dark":e.isInCall}},[i("ConversationIcon",{key:e.conversation.token,staticClass:"conversation-icon",attrs:{offline:e.isPeerInactive,item:e.conversation,"disable-menu":!1,"show-user-online-status":"","hide-favorite":!1,"hide-call":!1}}),e._v(" "),i("a",{staticClass:"conversation-header",attrs:{role:"button"},on:{click:e.openConversationSettings}},[i("div",{staticClass:"conversation-header__text",class:{"conversation-header__text--offline":e.isPeerInactive}},[i("p",{staticClass:"title"},[e._v(`
				`+e._s(e.conversation.displayName)+`
			`)]),e._v(" "),e.showUserStatusAsDescription?i("p",{staticClass:"description",class:{"description__in-chat":!e.isInCall}},[e._v(`
				`+e._s(e.statusMessage)+`
			`)]):e._e(),e._v(" "),e.conversation.description?[i("p",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:{content:e.renderedDescription,delay:{show:500,hide:500},autoHide:!1,html:!0},expression:`{
						content: renderedDescription,
						delay: { show: 500, hide: 500 },
						autoHide: false,
						html: true,
					}`,modifiers:{bottom:!0}}],staticClass:"description",class:{"description__in-chat":!e.isInCall}},[e._v(`
					`+e._s(e.conversation.description)+`
				`)])]:e._e()],2)]),e._v(" "),e.isInCall?i("CallTime",{attrs:{start:e.conversation.callStartTime}}):e._e(),e._v(" "),e.isInCall&&!e.isOneToOneConversation&&e.isModeratorOrUser?i("NcButton",{attrs:{title:e.participantsInCallAriaLabel,"aria-label":e.participantsInCallAriaLabel,type:"tertiary"},on:{click:function(l){return e.openSidebar("participants")}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("AccountMultiple",{attrs:{size:20}})]},proxy:!0}],null,!1,3330675289)},[e._v(`
		`+e._s(e.participantsInCall)+`
	`)]):e._e(),e._v(" "),e.isInCall&&e.hasReactionSupport?i("ReactionMenu",{attrs:{token:e.token,"supported-reactions":e.supportedReactions,"local-call-participant-model":e.localCallParticipantModel}}):e._e(),e._v(" "),e.isInCall?i("TopBarMediaControls",{attrs:{token:e.token,model:e.localMediaModel,"is-sidebar":e.isSidebar,"local-call-participant-model":e.localCallParticipantModel}}):e._e(),e._v(" "),i("TopBarMenu",{attrs:{token:e.token,"show-actions":!e.isSidebar,"is-sidebar":e.isSidebar,model:e.localMediaModel},on:{"open-breakout-rooms-editor":function(l){e.showBreakoutRoomsEditor=!0}}}),e._v(" "),i("CallButton",{attrs:{"shrink-on-mobile":"","is-screensharing":!!e.localMediaModel.attributes.localScreen}}),e._v(" "),e.showBreakoutRoomsEditor?i("BreakoutRoomsEditor",{attrs:{token:e.token},on:{close:function(l){e.showBreakoutRoomsEditor=!1}}}):e._e()],1)},_=[]},3362:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{directives:[{name:"shortkey",rawName:"v-shortkey.push",value:e.disableKeyboardShortcuts?null:["space"],expression:"disableKeyboardShortcuts ? null : ['space']",modifiers:{push:!0}}],staticClass:"buttons-bar",on:{shortkey:e.handleShortkey}},[i("div",{staticClass:"network-connection-state"},[e.qualityWarningTooltip?i("NcPopover",{attrs:{boundary:e.boundaryElement,"aria-label":e.qualityWarningAriaLabel,trigger:"hover","auto-hide":!1,shown:e.showQualityWarningTooltip},scopedSlots:e._u([{key:"trigger",fn:function(){return[i("NcButton",{staticClass:"trigger",attrs:{id:"quality_warning_button",type:"tertiary-no-background","aria-label":e.qualityWarningAriaLabel},on:{click:function(l){e.mouseover=!e.mouseover}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("NetworkStrength2Alert",{attrs:{"fill-color":"#e9322d",size:20}})]},proxy:!0}],null,!1,2948639982)})]},proxy:!0}],null,!1,1086642517)},[e._v(" "),i("div",{staticClass:"hint"},[i("span",[e._v(e._s(e.qualityWarningTooltip.content))]),e._v(" "),i("div",{staticClass:"hint__actions"},[e.qualityWarningTooltip.action?i("NcButton",{staticClass:"hint__button",attrs:{type:"primary"},on:{click:e.executeQualityWarningTooltipAction}},[e._v(`
						`+e._s(e.qualityWarningTooltip.actionLabel)+`
					`)]):e._e(),e._v(" "),e.isQualityWarningTooltipDismissed?e._e():i("NcButton",{staticClass:"hint__button",attrs:{type:"tertiary"},on:{click:e.dismissQualityWarningTooltip}},[e._v(`
						`+e._s(e.t("spreed","Dismiss"))+`
					`)])],1)])]):e._e()],1),e._v(" "),i("LocalAudioControlButton",{ref:"audioControl",attrs:{token:e.token,conversation:e.conversation,model:e.model,type:"tertiary"}}),e._v(" "),i("LocalVideoControlButton",{attrs:{token:e.token,conversation:e.conversation,model:e.model,type:"tertiary"}}),e._v(" "),e.isVirtualBackgroundAvailable&&e.isSidebar?i("NcButton",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.toggleVirtualBackgroundButtonLabel,expression:"toggleVirtualBackgroundButtonLabel"}],class:e.blurButtonClass,attrs:{type:"tertiary","aria-label":e.toggleVirtualBackgroundButtonLabel},on:{click:function(l){return l.stopPropagation(),e.toggleVirtualBackground.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isVirtualBackgroundEnabled?i("Blur",{attrs:{size:20}}):i("BlurOff",{attrs:{size:20}})]},proxy:!0}],null,!1,2914827365)}):e._e(),e._v(" "),!e.isSidebar&&e.isScreensharing?i("NcActions",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.screenSharingButtonTooltip,expression:"screenSharingButtonTooltip"}],staticClass:"app-navigation-entry-utils-menu-button",class:e.screenSharingButtonClass,attrs:{id:"screensharing-button",type:"error","aria-label":e.screenSharingButtonAriaLabel,"boundaries-element":e.boundaryElement,container:e.container,open:e.screenSharingMenuOpen},on:{"update:open":function(l){e.screenSharingMenuOpen=l}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("MonitorOff",{attrs:{size:20}})]},proxy:!0}],null,!1,5547723)},[e._v(" "),i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.showScreen},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Monitor",{attrs:{size:20}})]},proxy:!0}],null,!1,3052506116)},[e._v(`
			`+e._s(e.t("spreed","Show your screen"))+`
		`)]),e._v(" "),i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.stopScreen},scopedSlots:e._u([{key:"icon",fn:function(){return[i("MonitorOff",{attrs:{size:20}})]},proxy:!0}],null,!1,5547723)},[e._v(`
			`+e._s(e.t("spreed","Stop screensharing"))+`
		`)])],1):e.isSidebar?e._e():i("NcButton",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.screenSharingButtonTooltip,expression:"screenSharingButtonTooltip"}],attrs:{type:"tertiary","aria-label":e.screenSharingButtonAriaLabel},on:{click:function(l){return l.stopPropagation(),e.toggleScreenSharingMenu.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("MonitorShare",{attrs:{size:20}})]},proxy:!0}])})],1)},_=[]},66229:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"top-bar__wrapper"},[i("NcButton",{directives:[{name:"show",rawName:"v-show",value:e.isInCall&&e.isHandRaised,expression:"isInCall && isHandRaised"},{name:"shortkey",rawName:"v-shortkey.once",value:e.disableKeyboardShortcuts?null:["r"],expression:"disableKeyboardShortcuts ? null : ['r']",modifiers:{once:!0}},{name:"tooltip",rawName:"v-tooltip",value:e.raiseHandButtonLabel,expression:"raiseHandButtonLabel"}],attrs:{"aria-label":e.raiseHandButtonLabel,type:"tertiary"},on:{shortkey:e.toggleHandRaised,click:function(l){return l.stopPropagation(),e.toggleHandRaised.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("HandBackLeft",{attrs:{size:18}})]},proxy:!0}])}),e._v(" "),e.isSidebar?e._e():i("NcActions",{directives:[{name:"shortkey",rawName:"v-shortkey.once",value:e.disableKeyboardShortcuts?null:["f"],expression:"disableKeyboardShortcuts ? null : ['f']",modifiers:{once:!0}},{name:"tooltip",rawName:"v-tooltip",value:e.t("spreed","Conversation actions"),expression:"t('spreed', 'Conversation actions')"}],attrs:{"aria-label":e.t("spreed","Conversation actions"),type:"tertiary",container:e.container},nativeOn:{shortkey:function(l){return e.toggleFullscreen.apply(null,arguments)}},scopedSlots:e._u([e.isInCall?{key:"icon",fn:function(){return[i("DotsHorizontal",{attrs:{size:20}})]},proxy:!0}:null],null,!0)},[e._v(" "),e.showActions&&e.isInCall?[i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.toggleHandRaised},scopedSlots:e._u([{key:"icon",fn:function(){return[i("HandBackLeft",{attrs:{size:16}})]},proxy:!0}],null,!1,2548594270)},[e._v(`
				`+e._s(e.raiseHandButtonLabel)+`
			`)]),e._v(" "),!e.isOneToOneConversation&&e.canFullModerate?[i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.forceMuteOthers},scopedSlots:e._u([{key:"icon",fn:function(){return[i("MicrophoneOff",{attrs:{size:20}})]},proxy:!0}],null,!1,1379016993)},[e._v(`
					`+e._s(e.t("spreed","Mute others"))+`
				`)])]:e._e(),e._v(" "),i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.showMediaSettingsDialog},scopedSlots:e._u([{key:"icon",fn:function(){return[i("VideoIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,650382738)},[e._v(`
				`+e._s(e.t("spreed","Media settings"))+`
			`)]),e._v(" "),i("NcActionSeparator")]:e._e(),e._v(" "),e.showActions&&e.isInCall?i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.changeView},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isGrid?i("PromotedView",{attrs:{size:20}}):i("GridView",{attrs:{size:20}})]},proxy:!0}],null,!1,3939960603)},[e._v(`
			`+e._s(e.changeViewText)+`
		`)]):e._e(),e._v(" "),i("NcActionButton",{attrs:{"aria-label":e.t("spreed","Toggle full screen"),"close-after-click":""},on:{click:e.toggleFullscreen},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isFullscreen?i("FullscreenExit",{attrs:{size:20}}):i("Fullscreen",{attrs:{size:20}})]},proxy:!0}],null,!1,2670005374)},[e._v(`
			`+e._s(e.labelFullscreen)+`
		`)]),e._v(" "),e.isFileConversation?i("NcActionLink",{attrs:{href:e.linkToFile},scopedSlots:e._u([{key:"icon",fn:function(){return[i("File",{attrs:{size:20}})]},proxy:!0}],null,!1,395998446)},[e._v(`
			`+e._s(e.t("spreed","Go to file"))+`
		`)]):e._e(),e._v(" "),e.canModerateRecording?[!e.isRecording&&!e.isStartingRecording&&e.isInCall?i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.startRecording},scopedSlots:e._u([{key:"icon",fn:function(){return[i("RecordCircle",{attrs:{size:20}})]},proxy:!0}],null,!1,2988432247)},[e._v(`
				`+e._s(e.t("spreed","Start recording"))+`
			`)]):e.isStartingRecording&&e.isInCall?i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.stopRecording},scopedSlots:e._u([{key:"icon",fn:function(){return[i("NcLoadingIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,3155754792)},[e._v(`
				`+e._s(e.t("spreed","Cancel recording start"))+`
			`)]):e.isRecording&&e.isInCall?i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.stopRecording},scopedSlots:e._u([{key:"icon",fn:function(){return[i("StopIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,3077665531)},[e._v(`
				`+e._s(e.t("spreed","Stop recording"))+`
			`)]):e._e()]:e._e(),e._v(" "),e.canConfigureBreakoutRooms?i("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(l){return e.$emit("open-breakout-rooms-editor")}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("DotsCircle",{attrs:{size:20}})]},proxy:!0}],null,!1,2422295094)},[e._v(`
			`+e._s(e.t("spreed","Set up breakout rooms"))+`
		`)]):e._e(),e._v(" "),i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.openConversationSettings},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Cog",{attrs:{size:20}})]},proxy:!0}],null,!1,3604109635)},[e._v(`
			`+e._s(e.t("spreed","Conversation settings"))+`
		`)])],2)],1)},_=[]},18374:(A,a,s)=>{"use strict";s.d(a,{g:()=>p});var o=s(20296),_=s.n(o),r=s(20144),e=s(69183),i=s(84749),l=s(43656),u=s(94418),c=s(1036);/**
 * @copyright Copyright (c) 2024 Dorra Jaouad <dorra.jaoued1@gmail.com>
 *
 * @author Dorra Jaouad <dorra.jaoued1@gmail.com>
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
 */function p(h=(0,r.iH)(!0),f=!0){const m=(0,l.o)(),v=(0,r.Fl)(()=>m.getters.getToken()),d=(0,r.Fl)(()=>m.getters.conversation(v.value)),P=(0,i.E)(),y=(0,r.Fl)(()=>d.value?.type===u.Sl.TYPE.ONE_TO_ONE);let T=!1,b=!0;function x(){c.N.$on("joined-conversation",g),c.N.$on("signaling-participant-list-changed",C),(0,e.Ld)("guest-promoted",g)}function M(){c.N.$off("joined-conversation",g),c.N.$off("signaling-participant-list-changed",C),(0,e.r1)("guest-promoted",g)}const g=()=>{y.value?B():(0,r.Y3)(()=>C())},C=()=>{if(!h.value&&!P.value){b=!0;return}m.getters.windowIsVisible()&&(P.value||!d.value?.hasCall)?R():O(),b=!1},B=async()=>{const W=m.getters.isInLobby,k=m.getters.isModeratorOrUser;T||v.value===""||W||!k||(T=!0,R.clear(),O.clear(),await m.dispatch("fetchParticipants",{token:v.value}),T=!1)},R=_()(B,3e3),O=_()(B,15e3);return(0,r.bv)(()=>{f&&x()}),(0,r.YP)(h,W=>{W&&b&&C()}),(0,r.Jd)(()=>{f&&M()}),{cancelableGetParticipants:B}}},4594:(A,a,s)=>{"use strict";s.d(a,{_:()=>o});/**
 * @copyright Copyright (c) 2020 Marco Ambrosini <marcoambrosini@icloud.com>
 * @copyright Copyright (c) 2023 Maksim Sukharev <antreesy.web@gmail.com>
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
 */function o(r){let e=r.statusIcon?r.statusIcon+" ":"";return r.statusMessage?e+=r.statusMessage:r.status==="dnd"?e+=t("spreed","Do not disturb"):r.status==="away"?e+=t("spreed","Away"):e+="",e}function _(r){return r?.status==="dnd"}},82604:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});/**
 *
 * @copyright Copyright (c) 2022, Daniel Calviño Sánchez (danxuliu@gmail.com)
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
 */function o(_){this._model=_,this._blocked=!1,this._enabled=!0,this._visibleCounter=1,this._blockVideoTimeout=null,this.decreaseVisibleCounter()}o.prototype={destroy(){this._destroyed=!0,clearTimeout(this._blockVideoTimeout)},isVideoEnabled(){return this._enabled},setVideoEnabled(_){if(this._destroyed)return;this._enabled=_;const r=this._blockVideoTimeout;clearTimeout(this._blockVideoTimeout),this._blockVideoTimeout=null,!(!this._visibleCounter&&!r)&&this._setVideoBlocked(!_)},increaseVisibleCounter(){this._destroyed||(this._visibleCounter++,clearTimeout(this._blockVideoTimeout),this._blockVideoTimeout=null,this._enabled&&this._setVideoBlocked(!1))},decreaseVisibleCounter(){if(!this._destroyed){if(this._visibleCounter<=0){console.error("Visible counter decreased when not visible");return}this._visibleCounter--,!(this._visibleCounter>0||!this._enabled)&&(clearTimeout(this._blockVideoTimeout),this._blockVideoTimeout=setTimeout(()=>{this._setVideoBlocked(!0),this._blockVideoTimeout=null},5e3))}},_setVideoBlocked(_){this._blocked!==_&&(this._blocked=_,this._model.setVideoBlocked(_))}}},2496:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});/**
 *
 * @copyright Copyright (c) 2019, Daniel Calviño Sánchez (danxuliu@gmail.com)
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
 */function o(_,r){this._model=_,this._view=r,this._handleSpeakingWhileMutedChangeBound=this._handleSpeakingWhileMutedChange.bind(this),this._model.on("change:speakingWhileMuted",this._handleSpeakingWhileMutedChangeBound)}o.prototype={destroy(){this._model.off("change:speakingWhileMuted",this._handleSpeakingWhileMutedChangeBound)},_handleSpeakingWhileMutedChange(_,r){r?this._handleSpeakingWhileMuted():this._handleStoppedSpeakingWhileMuted()},_handleSpeakingWhileMuted(){this._startedSpeakingTimeout=setTimeout(function(){delete this._startedSpeakingTimeout,this._showWarning()}.bind(this),3e3)},_handleStoppedSpeakingWhileMuted(){this._startedSpeakingTimeout&&(clearTimeout(this._startedSpeakingTimeout),delete this._startedSpeakingTimeout),this._hideWarning()},_showWarning(){const _=t("spreed","You seem to be talking while muted, please unmute yourself for others to hear you");document.hidden?(this._pendingBrowserNotification=!0,this._showBrowserNotification(_).catch(function(){this._pendingBrowserNotification&&(this._pendingBrowserNotification=!1,this._showNotification(_))}.bind(this))):this._showNotification(_)},_showNotification(_){this._notification||(this._view.setSpeakingWhileMutedNotification(_),this._notification=!0)},_showBrowserNotification(_){return new Promise(function(r,e){if(this._browserNotification){r();return}if(!Notification){e();return}if(Notification.permission==="denied"){e();return}if(Notification.permission==="granted"){this._pendingBrowserNotification=!1,this._browserNotification=new Notification(_),r();return}Notification.requestPermission().then(function(i){i==="granted"?(this._pendingBrowserNotification&&(this._pendingBrowserNotification=!1,this._browserNotification=new Notification(_)),r()):e()}.bind(this))}.bind(this))},_hideWarning(){this._pendingBrowserNotification=!1,this._notification&&(this._view.setSpeakingWhileMutedNotification(null),this._notification=!1),this._browserNotification&&(this._browserNotification.close(),this._browserNotification=null)}}},59597:(A,a,s)=>{"use strict";s.d(a,{B:()=>o});function o(r,e=!1){if(!r)return e?"--:--":"-- : --";const i=Math.floor(r/1e3%60),l=Math.floor(r/(1e3*60)%60);return[Math.floor(r/(1e3*60*60)%24),l.toString().padStart(2,"0"),i.toString().padStart(2,"0")].filter(c=>!!c).join(e?":":" : ")}function _(r){const e=r-Date.now(),i=Math.floor(e/(60*60*1e3)),l=Math.floor((e-i*60*60*1e3)/(60*1e3));return i>=1?l===0?n("spreed","In %n hour","In %n hours",i):t("spreed","In {hours} and {minutes}",{hours:n("spreed","%n hour","%n hours",i),minutes:n("spreed","%n minute ","%n minutes",l)}):n("spreed","In %n minute","In %n minutes",l)}},87581:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(73968),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},47981:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(85908),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},74660:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(79369),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},75156:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(44106),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},97899:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(61617),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},76202:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(41599),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},12067:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(33111),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},3879:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(68687),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},57346:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(29086),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},42106:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(47621),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},20815:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(80399),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},329:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(75385),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},77574:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(14169),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},39380:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(33356),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},78278:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(35862),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},67412:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(423),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},34505:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(14462),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},78823:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(89361),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},86982:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(14472),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},3595:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(0),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},75855:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(77647),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},8658:(A,a,s)=>{"use strict";var o=s(93379),_=s.n(o),r=s(7795),e=s.n(r),i=s(90569),l=s.n(i),u=s(3565),c=s.n(u),p=s(19216),h=s.n(p),f=s(44589),m=s.n(f),v=s(69414),d={};d.styleTagTransform=m(),d.setAttributes=c(),d.insert=l().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=h();var P=_()(v.Z,d),y=v.Z&&v.Z.locals?v.Z.locals:void 0},40764:function(A){(function(a,s){A.exports=s()})(typeof self<"u"?self:this,function(){return function(a){var s={};function o(_){if(s[_])return s[_].exports;var r=s[_]={i:_,l:!1,exports:{}};return a[_].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=a,o.c=s,o.d=function(_,r,e){o.o(_,r)||Object.defineProperty(_,r,{enumerable:!0,get:e})},o.r=function(_){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},o.t=function(_,r){if(1&r&&(_=o(_)),8&r||4&r&&typeof _=="object"&&_&&_.__esModule)return _;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:_}),2&r&&typeof _!="string")for(var i in _)o.d(e,i,function(l){return _[l]}.bind(null,i));return e},o.n=function(_){var r=_&&_.__esModule?function(){return _.default}:function(){return _};return o.d(r,"a",r),r},o.o=function(_,r){return Object.prototype.hasOwnProperty.call(_,r)},o.p="",o(o.s="fb15")}({"0029":function(a,s){a.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"0185":function(a,s,o){var _=o("e5fa");a.exports=function(r){return Object(_(r))}},"01f9":function(a,s,o){"use strict";var _=o("2d00"),r=o("5ca1"),e=o("2aba"),i=o("32e9"),l=o("84f2"),u=o("41a0"),c=o("7f20"),p=o("38fd"),h=o("2b4c")("iterator"),f=!([].keys&&"next"in[].keys()),m="@@iterator",v="keys",d="values",P=function(){return this};a.exports=function(y,T,b,x,M,g,C){u(b,T,x);var B,R,O,W=function(q){if(!f&&q in V)return V[q];switch(q){case v:return function(){return new b(this,q)};case d:return function(){return new b(this,q)}}return function(){return new b(this,q)}},k=T+" Iterator",z=M==d,w=!1,V=y.prototype,U=V[h]||V[m]||M&&V[M],Z=U||W(M),H=M?z?W("entries"):Z:void 0,ee=T=="Array"&&V.entries||U;if(ee&&(O=p(ee.call(new y)),O!==Object.prototype&&O.next&&(c(O,k,!0),_||typeof O[h]=="function"||i(O,h,P))),z&&U&&U.name!==d&&(w=!0,Z=function(){return U.call(this)}),_&&!C||!f&&!w&&V[h]||i(V,h,Z),l[T]=Z,l[k]=P,M)if(B={values:z?Z:W(d),keys:g?Z:W(v),entries:H},C)for(R in B)R in V||e(V,R,B[R]);else r(r.P+r.F*(f||w),T,B);return B}},"02f4":function(a,s,o){var _=o("4588"),r=o("be13");a.exports=function(e){return function(i,l){var u,c,p=String(r(i)),h=_(l),f=p.length;return h<0||h>=f?e?"":void 0:(u=p.charCodeAt(h),u<55296||u>56319||h+1===f||(c=p.charCodeAt(h+1))<56320||c>57343?e?p.charAt(h):u:e?p.slice(h,h+2):c-56320+(u-55296<<10)+65536)}}},"0a49":function(a,s,o){var _=o("9b43"),r=o("626a"),e=o("4bf8"),i=o("9def"),l=o("cd1c");a.exports=function(u,c){var p=u==1,h=u==2,f=u==3,m=u==4,v=u==6,d=u==5||v,P=c||l;return function(y,T,b){for(var x,M,g=e(y),C=r(g),B=_(T,b,3),R=i(C.length),O=0,W=p?P(y,R):h?P(y,0):void 0;R>O;O++)if((d||O in C)&&(x=C[O],M=B(x,O,g),u)){if(p)W[O]=M;else if(M)switch(u){case 3:return!0;case 5:return x;case 6:return O;case 2:W.push(x)}else if(m)return!1}return v?-1:f||m?m:W}}},"0a91":function(a,s,o){o("b42c"),o("93c4"),a.exports=o("b77f")},"0bfb":function(a,s,o){"use strict";var _=o("cb7c");a.exports=function(){var r=_(this),e="";return r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.unicode&&(e+="u"),r.sticky&&(e+="y"),e}},"0d58":function(a,s,o){var _=o("ce10"),r=o("e11e");a.exports=Object.keys||function(e){return _(e,r)}},"0f89":function(a,s,o){var _=o("6f8a");a.exports=function(r){if(!_(r))throw TypeError(r+" is not an object!");return r}},"103a":function(a,s,o){var _=o("da3c").document;a.exports=_&&_.documentElement},1169:function(a,s,o){var _=o("2d95");a.exports=Array.isArray||function(r){return _(r)=="Array"}},"11e9":function(a,s,o){var _=o("52a7"),r=o("4630"),e=o("6821"),i=o("6a99"),l=o("69a8"),u=o("c69a"),c=Object.getOwnPropertyDescriptor;s.f=o("9e1e")?c:function(p,h){if(p=e(p),h=i(h,!0),u)try{return c(p,h)}catch{}if(l(p,h))return r(!_.f.call(p,h),p[h])}},"12fd":function(a,s,o){var _=o("6f8a"),r=o("da3c").document,e=_(r)&&_(r.createElement);a.exports=function(i){return e?r.createElement(i):{}}},1495:function(a,s,o){var _=o("86cc"),r=o("cb7c"),e=o("0d58");a.exports=o("9e1e")?Object.defineProperties:function(i,l){r(i);for(var u,c=e(l),p=c.length,h=0;p>h;)_.f(i,u=c[h++],l[u]);return i}},1938:function(a,s,o){var _=o("d13f");_(_.S,"Array",{isArray:o("b5aa")})},"1b55":function(a,s,o){var _=o("7772")("wks"),r=o("7b00"),e=o("da3c").Symbol,i=typeof e=="function",l=a.exports=function(u){return _[u]||(_[u]=i&&e[u]||(i?e:r)("Symbol."+u))};l.store=_},"1b8f":function(a,s,o){var _=o("a812"),r=Math.max,e=Math.min;a.exports=function(i,l){return i=_(i),i<0?r(i+l,0):e(i,l)}},"1c01":function(a,s,o){var _=o("5ca1");_(_.S+_.F*!o("9e1e"),"Object",{defineProperty:o("86cc").f})},"1fa8":function(a,s,o){var _=o("cb7c");a.exports=function(r,e,i,l){try{return l?e(_(i)[0],i[1]):e(i)}catch(c){var u=r.return;throw u!==void 0&&_(u.call(r)),c}}},"230e":function(a,s,o){var _=o("d3f4"),r=o("7726").document,e=_(r)&&_(r.createElement);a.exports=function(i){return e?r.createElement(i):{}}},2312:function(a,s,o){a.exports=o("8ce0")},"23c6":function(a,s,o){var _=o("2d95"),r=o("2b4c")("toStringTag"),e=_(function(){return arguments}())=="Arguments",i=function(l,u){try{return l[u]}catch{}};a.exports=function(l){var u,c,p;return l===void 0?"Undefined":l===null?"Null":typeof(c=i(u=Object(l),r))=="string"?c:e?_(u):(p=_(u))=="Object"&&typeof u.callee=="function"?"Arguments":p}},2418:function(a,s,o){var _=o("6a9b"),r=o("a5ab"),e=o("1b8f");a.exports=function(i){return function(l,u,c){var p,h=_(l),f=r(h.length),m=e(c,f);if(i&&u!=u){for(;f>m;)if(p=h[m++],p!=p)return!0}else for(;f>m;m++)if((i||m in h)&&h[m]===u)return i||m||0;return!i&&-1}}},"245b":function(a,s){a.exports=function(o,_){return{value:_,done:!!o}}},2621:function(a,s){s.f=Object.getOwnPropertySymbols},2695:function(a,s,o){var _=o("43c8"),r=o("6a9b"),e=o("2418")(!1),i=o("5d8f")("IE_PROTO");a.exports=function(l,u){var c,p=r(l),h=0,f=[];for(c in p)c!=i&&_(p,c)&&f.push(c);for(;u.length>h;)_(p,c=u[h++])&&(~e(f,c)||f.push(c));return f}},"27ee":function(a,s,o){var _=o("23c6"),r=o("2b4c")("iterator"),e=o("84f2");a.exports=o("8378").getIteratorMethod=function(i){if(i!=null)return i[r]||i["@@iterator"]||e[_(i)]}},"2a4e":function(a,s,o){var _=o("a812"),r=o("e5fa");a.exports=function(e){return function(i,l){var u,c,p=String(r(i)),h=_(l),f=p.length;return h<0||h>=f?e?"":void 0:(u=p.charCodeAt(h),u<55296||u>56319||h+1===f||(c=p.charCodeAt(h+1))<56320||c>57343?e?p.charAt(h):u:e?p.slice(h,h+2):c-56320+(u-55296<<10)+65536)}}},"2aba":function(a,s,o){var _=o("7726"),r=o("32e9"),e=o("69a8"),i=o("ca5a")("src"),l="toString",u=Function[l],c=(""+u).split(l);o("8378").inspectSource=function(p){return u.call(p)},(a.exports=function(p,h,f,m){var v=typeof f=="function";v&&(e(f,"name")||r(f,"name",h)),p[h]!==f&&(v&&(e(f,i)||r(f,i,p[h]?""+p[h]:c.join(String(h)))),p===_?p[h]=f:m?p[h]?p[h]=f:r(p,h,f):(delete p[h],r(p,h,f)))})(Function.prototype,l,function(){return typeof this=="function"&&this[i]||u.call(this)})},"2aeb":function(a,s,o){var _=o("cb7c"),r=o("1495"),e=o("e11e"),i=o("613b")("IE_PROTO"),l=function(){},u="prototype",c=function(){var p,h=o("230e")("iframe"),f=e.length,m="<",v=">";for(h.style.display="none",o("fab2").appendChild(h),h.src="javascript:",p=h.contentWindow.document,p.open(),p.write(m+"script"+v+"document.F=Object"+m+"/script"+v),p.close(),c=p.F;f--;)delete c[u][e[f]];return c()};a.exports=Object.create||function(p,h){var f;return p!==null?(l[u]=_(p),f=new l,l[u]=null,f[i]=p):f=c(),h===void 0?f:r(f,h)}},"2b4c":function(a,s,o){var _=o("5537")("wks"),r=o("ca5a"),e=o("7726").Symbol,i=typeof e=="function",l=a.exports=function(u){return _[u]||(_[u]=i&&e[u]||(i?e:r)("Symbol."+u))};l.store=_},"2d00":function(a,s){a.exports=!1},"2d95":function(a,s){var o={}.toString;a.exports=function(_){return o.call(_).slice(8,-1)}},"2ea1":function(a,s,o){var _=o("6f8a");a.exports=function(r,e){if(!_(r))return r;var i,l;if(e&&typeof(i=r.toString)=="function"&&!_(l=i.call(r))||typeof(i=r.valueOf)=="function"&&!_(l=i.call(r))||!e&&typeof(i=r.toString)=="function"&&!_(l=i.call(r)))return l;throw TypeError("Can't convert object to primitive value")}},"2f21":function(a,s,o){"use strict";var _=o("79e5");a.exports=function(r,e){return!!r&&_(function(){e?r.call(null,function(){},1):r.call(null)})}},"2fdb":function(a,s,o){"use strict";var _=o("5ca1"),r=o("d2c8"),e="includes";_(_.P+_.F*o("5147")(e),"String",{includes:function(i){return!!~r(this,i,e).indexOf(i,arguments.length>1?arguments[1]:void 0)}})},"32e9":function(a,s,o){var _=o("86cc"),r=o("4630");a.exports=o("9e1e")?function(e,i,l){return _.f(e,i,r(1,l))}:function(e,i,l){return e[i]=l,e}},"33a4":function(a,s,o){var _=o("84f2"),r=o("2b4c")("iterator"),e=Array.prototype;a.exports=function(i){return i!==void 0&&(_.Array===i||e[r]===i)}},3425:function(a,s,o){"use strict";var _=function(){var E,D=this,L=D.$createElement,I=D._self._c||L;return I("div",{class:[(E={},E[D.classNameActive]=D.enabled,E[D.classNameDragging]=D.dragging,E[D.classNameResizing]=D.resizing,E[D.classNameDraggable]=D.draggable,E[D.classNameResizable]=D.resizable,E),D.className],style:D.style,on:{mousedown:D.elementMouseDown,touchstart:D.elementTouchDown}},[D._l(D.actualHandles,function(S){return I("div",{key:S,class:[D.classNameHandle,D.classNameHandle+"-"+S],style:{display:D.enabled?"block":"none"},on:{mousedown:function(K){K.stopPropagation(),K.preventDefault(),D.handleDown(S,K)},touchstart:function(K){K.stopPropagation(),K.preventDefault(),D.handleTouchDown(S,K)}}},[D._t(S)],2)}),D._v(" "),D._t("default")],2)},r=[],e=(o("1c01"),o("58b2"),o("8e6e"),o("f3e2"),o("456d"),o("85f2")),i=o.n(e);function l(E,D,L){return D in E?i()(E,D,{value:L,enumerable:!0,configurable:!0,writable:!0}):E[D]=L,E}o("3b2b");var u=o("a745"),c=o.n(u);function p(E){if(c()(E))return E}var h=o("5d73"),f=o.n(h),m=o("c8bb"),v=o.n(m);function d(E,D){if(v()(Object(E))||Object.prototype.toString.call(E)==="[object Arguments]"){var L=[],I=!0,S=!1,K=void 0;try{for(var N,F=f()(E);!(I=(N=F.next()).done)&&(L.push(N.value),!(D&&L.length===D));I=!0);}catch(X){S=!0,K=X}finally{try{I||F.return==null||F.return()}finally{if(S)throw K}}return L}}function P(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function y(E,D){return p(E)||d(E,D)||P()}o("6762"),o("2fdb"),o("d25f"),o("ac6a"),o("cadf"),o("5df3"),o("4f7f"),o("c5f6"),o("7514"),o("6b54"),o("87b3");function T(E){return typeof E=="function"||Object.prototype.toString.call(E)==="[object Function]"}function b(E,D,L){var I=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,S=typeof I=="number"?[I,I]:I,K=y(S,2),N=K[0],F=K[1],X=Math.round(D/N/E[0])*E[0],$=Math.round(L/F/E[1])*E[1];return[X,$]}function x(E,D,L){return E-D-L}function M(E,D,L){return E-D-L}function g(E,D,L){return D!==null&&E<D?D:L!==null&&L<E?L:E}function C(E,D,L){var I=E,S=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find(function(K){return T(I[K])});if(!T(I[S]))return!1;do{if(I[S](D))return!0;if(I===L)return!1;I=I.parentNode}while(I);return!1}function B(E){var D=window.getComputedStyle(E);return[parseFloat(D.getPropertyValue("width"),10),parseFloat(D.getPropertyValue("height"),10)]}function R(E,D,L){E&&(E.attachEvent?E.attachEvent("on"+D,L):E.addEventListener?E.addEventListener(D,L,!0):E["on"+D]=L)}function O(E,D,L){E&&(E.detachEvent?E.detachEvent("on"+D,L):E.removeEventListener?E.removeEventListener(D,L,!0):E["on"+D]=null)}function W(E,D){var L=Object.keys(E);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(E);D&&(I=I.filter(function(S){return Object.getOwnPropertyDescriptor(E,S).enumerable})),L.push.apply(L,I)}return L}function k(E){for(var D=1;D<arguments.length;D++){var L=arguments[D]!=null?arguments[D]:{};D%2?W(L,!0).forEach(function(I){l(E,I,L[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(L)):W(L).forEach(function(I){Object.defineProperty(E,I,Object.getOwnPropertyDescriptor(L,I))})}return E}var z={mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"},touch:{start:"touchstart",move:"touchmove",stop:"touchend"}},w={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},V={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"},U=z.mouse,Z={replace:!0,name:"vue-draggable-resizable",props:{className:{type:String,default:"vdr"},classNameDraggable:{type:String,default:"draggable"},classNameResizable:{type:String,default:"resizable"},classNameDragging:{type:String,default:"dragging"},classNameResizing:{type:String,default:"resizing"},classNameActive:{type:String,default:"active"},classNameHandle:{type:String,default:"handle"},disableUserSelect:{type:Boolean,default:!0},enableNativeDrag:{type:Boolean,default:!1},preventDeactivation:{type:Boolean,default:!1},active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},lockAspectRatio:{type:Boolean,default:!1},w:{type:[Number,String],default:200,validator:function(E){return typeof E=="number"?E>0:E==="auto"}},h:{type:[Number,String],default:200,validator:function(E){return typeof E=="number"?E>0:E==="auto"}},minWidth:{type:Number,default:0,validator:function(E){return E>=0}},minHeight:{type:Number,default:0,validator:function(E){return E>=0}},maxWidth:{type:Number,default:null,validator:function(E){return E>=0}},maxHeight:{type:Number,default:null,validator:function(E){return E>=0}},x:{type:Number,default:0},y:{type:Number,default:0},z:{type:[String,Number],default:"auto",validator:function(E){return typeof E=="string"?E==="auto":E>=0}},handles:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]},validator:function(E){var D=new Set(["tl","tm","tr","mr","br","bm","bl","ml"]);return new Set(E.filter(function(L){return D.has(L)})).size===E.length}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},axis:{type:String,default:"both",validator:function(E){return["x","y","both"].includes(E)}},grid:{type:Array,default:function(){return[1,1]}},parent:{type:Boolean,default:!1},scale:{type:[Number,Array],default:1,validator:function(E){return typeof E=="number"?E>0:E.length===2&&E[0]>0&&E[1]>0}},onDragStart:{type:Function,default:function(){return!0}},onDrag:{type:Function,default:function(){return!0}},onResizeStart:{type:Function,default:function(){return!0}},onResize:{type:Function,default:function(){return!0}}},data:function(){return{left:this.x,top:this.y,right:null,bottom:null,width:null,height:null,widthTouched:!1,heightTouched:!1,aspectFactor:null,parentWidth:null,parentHeight:null,minW:this.minWidth,minH:this.minHeight,maxW:this.maxWidth,maxH:this.maxHeight,handle:null,enabled:this.active,resizing:!1,dragging:!1,dragEnable:!1,resizeEnable:!1,zIndex:this.z}},created:function(){this.maxWidth&&this.minWidth>this.maxWidth&&console.warn("[Vdr warn]: Invalid prop: minWidth cannot be greater than maxWidth"),this.maxWidth&&this.minHeight>this.maxHeight&&console.warn("[Vdr warn]: Invalid prop: minHeight cannot be greater than maxHeight"),this.resetBoundsAndMouseState()},mounted:function(){this.enableNativeDrag||(this.$el.ondragstart=function(){return!1});var E=this.getParentSize(),D=y(E,2),L=D[0],I=D[1];this.parentWidth=L,this.parentHeight=I;var S=B(this.$el),K=y(S,2),N=K[0],F=K[1];this.aspectFactor=(this.w!=="auto"?this.w:N)/(this.h!=="auto"?this.h:F),this.width=this.w!=="auto"?this.w:N,this.height=this.h!=="auto"?this.h:F,this.right=this.parentWidth-this.width-this.left,this.bottom=this.parentHeight-this.height-this.top,this.active&&this.$emit("activated"),R(document.documentElement,"mousedown",this.deselect),R(document.documentElement,"touchend touchcancel",this.deselect),R(window,"resize",this.checkParentSize)},beforeDestroy:function(){O(document.documentElement,"mousedown",this.deselect),O(document.documentElement,"touchstart",this.handleUp),O(document.documentElement,"mousemove",this.move),O(document.documentElement,"touchmove",this.move),O(document.documentElement,"mouseup",this.handleUp),O(document.documentElement,"touchend touchcancel",this.deselect),O(window,"resize",this.checkParentSize)},methods:{resetBoundsAndMouseState:function(){this.mouseClickPosition={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},this.bounds={minLeft:null,maxLeft:null,minRight:null,maxRight:null,minTop:null,maxTop:null,minBottom:null,maxBottom:null}},checkParentSize:function(){if(this.parent){var E=this.getParentSize(),D=y(E,2),L=D[0],I=D[1];this.parentWidth=L,this.parentHeight=I,this.right=this.parentWidth-this.width-this.left,this.bottom=this.parentHeight-this.height-this.top}},getParentSize:function(){if(this.parent){var E=window.getComputedStyle(this.$el.parentNode,null);return[parseInt(E.getPropertyValue("width"),10),parseInt(E.getPropertyValue("height"),10)]}return[null,null]},elementTouchDown:function(E){U=z.touch,this.elementDown(E)},elementMouseDown:function(E){U=z.mouse,this.elementDown(E)},elementDown:function(E){if(!(E instanceof MouseEvent&&E.which!==1)){var D=E.target||E.srcElement;if(this.$el.contains(D)){if(this.onDragStart(E)===!1)return;if(this.dragHandle&&!C(D,this.dragHandle,this.$el)||this.dragCancel&&C(D,this.dragCancel,this.$el))return void(this.dragging=!1);this.enabled||(this.enabled=!0,this.$emit("activated"),this.$emit("update:active",!0)),this.draggable&&(this.dragEnable=!0),this.mouseClickPosition.mouseX=E.touches?E.touches[0].pageX:E.pageX,this.mouseClickPosition.mouseY=E.touches?E.touches[0].pageY:E.pageY,this.mouseClickPosition.left=this.left,this.mouseClickPosition.right=this.right,this.mouseClickPosition.top=this.top,this.mouseClickPosition.bottom=this.bottom,this.parent&&(this.bounds=this.calcDragLimits()),R(document.documentElement,U.move,this.move),R(document.documentElement,U.stop,this.handleUp)}}},calcDragLimits:function(){return{minLeft:this.left%this.grid[0],maxLeft:Math.floor((this.parentWidth-this.width-this.left)/this.grid[0])*this.grid[0]+this.left,minRight:this.right%this.grid[0],maxRight:Math.floor((this.parentWidth-this.width-this.right)/this.grid[0])*this.grid[0]+this.right,minTop:this.top%this.grid[1],maxTop:Math.floor((this.parentHeight-this.height-this.top)/this.grid[1])*this.grid[1]+this.top,minBottom:this.bottom%this.grid[1],maxBottom:Math.floor((this.parentHeight-this.height-this.bottom)/this.grid[1])*this.grid[1]+this.bottom}},deselect:function(E){var D=E.target||E.srcElement,L=new RegExp(this.className+"-([trmbl]{2})","");this.$el.contains(D)||L.test(D.className)||(this.enabled&&!this.preventDeactivation&&(this.enabled=!1,this.$emit("deactivated"),this.$emit("update:active",!1)),O(document.documentElement,U.move,this.handleResize)),this.resetBoundsAndMouseState()},handleTouchDown:function(E,D){U=z.touch,this.handleDown(E,D)},handleDown:function(E,D){D instanceof MouseEvent&&D.which!==1||this.onResizeStart(E,D)!==!1&&(D.stopPropagation&&D.stopPropagation(),this.lockAspectRatio&&!E.includes("m")?this.handle="m"+E.substring(1):this.handle=E,this.resizeEnable=!0,this.mouseClickPosition.mouseX=D.touches?D.touches[0].pageX:D.pageX,this.mouseClickPosition.mouseY=D.touches?D.touches[0].pageY:D.pageY,this.mouseClickPosition.left=this.left,this.mouseClickPosition.right=this.right,this.mouseClickPosition.top=this.top,this.mouseClickPosition.bottom=this.bottom,this.bounds=this.calcResizeLimits(),R(document.documentElement,U.move,this.handleResize),R(document.documentElement,U.stop,this.handleUp))},calcResizeLimits:function(){var E=this.minW,D=this.minH,L=this.maxW,I=this.maxH,S=this.aspectFactor,K=y(this.grid,2),N=K[0],F=K[1],X=this.width,$=this.height,Q=this.left,Y=this.top,G=this.right,J=this.bottom;this.lockAspectRatio&&(E/D>S?D=E/S:E=S*D,L&&I?(L=Math.min(L,S*I),I=Math.min(I,L/S)):L?I=L/S:I&&(L=S*I)),L-=L%N,I-=I%F;var j={minLeft:null,maxLeft:null,minTop:null,maxTop:null,minRight:null,maxRight:null,minBottom:null,maxBottom:null};return this.parent?(j.minLeft=Q%N,j.maxLeft=Q+Math.floor((X-E)/N)*N,j.minTop=Y%F,j.maxTop=Y+Math.floor(($-D)/F)*F,j.minRight=G%N,j.maxRight=G+Math.floor((X-E)/N)*N,j.minBottom=J%F,j.maxBottom=J+Math.floor(($-D)/F)*F,L&&(j.minLeft=Math.max(j.minLeft,this.parentWidth-G-L),j.minRight=Math.max(j.minRight,this.parentWidth-Q-L)),I&&(j.minTop=Math.max(j.minTop,this.parentHeight-J-I),j.minBottom=Math.max(j.minBottom,this.parentHeight-Y-I)),this.lockAspectRatio&&(j.minLeft=Math.max(j.minLeft,Q-Y*S),j.minTop=Math.max(j.minTop,Y-Q/S),j.minRight=Math.max(j.minRight,G-J*S),j.minBottom=Math.max(j.minBottom,J-G/S))):(j.minLeft=null,j.maxLeft=Q+Math.floor((X-E)/N)*N,j.minTop=null,j.maxTop=Y+Math.floor(($-D)/F)*F,j.minRight=null,j.maxRight=G+Math.floor((X-E)/N)*N,j.minBottom=null,j.maxBottom=J+Math.floor(($-D)/F)*F,L&&(j.minLeft=-(G+L),j.minRight=-(Q+L)),I&&(j.minTop=-(J+I),j.minBottom=-(Y+I)),this.lockAspectRatio&&L&&I&&(j.minLeft=Math.min(j.minLeft,-(G+L)),j.minTop=Math.min(j.minTop,-(I+J)),j.minRight=Math.min(j.minRight,-Q-L),j.minBottom=Math.min(j.minBottom,-Y-I))),j},move:function(E){this.resizing?this.handleResize(E):this.dragEnable&&this.handleDrag(E)},handleDrag:function(E){var D=this.axis,L=this.grid,I=this.bounds,S=this.mouseClickPosition,K=D&&D!=="y"?S.mouseX-(E.touches?E.touches[0].pageX:E.pageX):0,N=D&&D!=="x"?S.mouseY-(E.touches?E.touches[0].pageY:E.pageY):0,F=b(L,K,N,this.scale),X=y(F,2),$=X[0],Q=X[1],Y=g(S.left-$,I.minLeft,I.maxLeft),G=g(S.top-Q,I.minTop,I.maxTop);if(this.onDrag(Y,G)!==!1){var J=g(S.right+$,I.minRight,I.maxRight),j=g(S.bottom+Q,I.minBottom,I.maxBottom);this.left=Y,this.top=G,this.right=J,this.bottom=j,this.$emit("dragging",this.left,this.top),this.dragging=!0}},moveHorizontally:function(E){var D=b(this.grid,E,this.top,1),L=y(D,2),I=L[0],S=(L[1],g(I,this.bounds.minLeft,this.bounds.maxLeft));this.left=S,this.right=this.parentWidth-this.width-S},moveVertically:function(E){var D=b(this.grid,this.left,E,1),L=y(D,2),I=(L[0],L[1]),S=g(I,this.bounds.minTop,this.bounds.maxTop);this.top=S,this.bottom=this.parentHeight-this.height-S},handleResize:function(E){var D=this.left,L=this.top,I=this.right,S=this.bottom,K=this.mouseClickPosition,N=(this.lockAspectRatio,this.aspectFactor),F=K.mouseX-(E.touches?E.touches[0].pageX:E.pageX),X=K.mouseY-(E.touches?E.touches[0].pageY:E.pageY);!this.widthTouched&&F&&(this.widthTouched=!0),!this.heightTouched&&X&&(this.heightTouched=!0);var $=b(this.grid,F,X,this.scale),Q=y($,2),Y=Q[0],G=Q[1];this.handle.includes("b")?(S=g(K.bottom+G,this.bounds.minBottom,this.bounds.maxBottom),this.lockAspectRatio&&this.resizingOnY&&(I=this.right-(this.bottom-S)*N)):this.handle.includes("t")&&(L=g(K.top-G,this.bounds.minTop,this.bounds.maxTop),this.lockAspectRatio&&this.resizingOnY&&(D=this.left-(this.top-L)*N)),this.handle.includes("r")?(I=g(K.right+Y,this.bounds.minRight,this.bounds.maxRight),this.lockAspectRatio&&this.resizingOnX&&(S=this.bottom-(this.right-I)/N)):this.handle.includes("l")&&(D=g(K.left-Y,this.bounds.minLeft,this.bounds.maxLeft),this.lockAspectRatio&&this.resizingOnX&&(L=this.top-(this.left-D)/N));var J=x(this.parentWidth,D,I),j=M(this.parentHeight,L,S);this.onResize(this.handle,D,L,J,j)!==!1&&(this.left=D,this.top=L,this.right=I,this.bottom=S,this.width=J,this.height=j,this.$emit("resizing",this.left,this.top,this.width,this.height),this.resizing=!0)},changeWidth:function(E){var D=b(this.grid,E,0,1),L=y(D,2),I=L[0],S=(L[1],g(this.parentWidth-I-this.left,this.bounds.minRight,this.bounds.maxRight)),K=this.bottom;this.lockAspectRatio&&(K=this.bottom-(this.right-S)/this.aspectFactor);var N=x(this.parentWidth,this.left,S),F=M(this.parentHeight,this.top,K);this.right=S,this.bottom=K,this.width=N,this.height=F},changeHeight:function(E){var D=b(this.grid,0,E,1),L=y(D,2),I=(L[0],L[1]),S=g(this.parentHeight-I-this.top,this.bounds.minBottom,this.bounds.maxBottom),K=this.right;this.lockAspectRatio&&(K=this.right-(this.bottom-S)*this.aspectFactor);var N=x(this.parentWidth,this.left,K),F=M(this.parentHeight,this.top,S);this.right=K,this.bottom=S,this.width=N,this.height=F},handleUp:function(E){this.handle=null,this.resetBoundsAndMouseState(),this.dragEnable=!1,this.resizeEnable=!1,this.resizing&&(this.resizing=!1,this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,this.$emit("dragstop",this.left,this.top)),O(document.documentElement,U.move,this.handleResize)}},computed:{style:function(){return k({transform:"translate(".concat(this.left,"px, ").concat(this.top,"px)"),width:this.computedWidth,height:this.computedHeight,zIndex:this.zIndex},this.dragging&&this.disableUserSelect?w:V)},actualHandles:function(){return this.resizable?this.handles:[]},computedWidth:function(){return this.w!=="auto"||this.widthTouched?this.width+"px":"auto"},computedHeight:function(){return this.h!=="auto"||this.heightTouched?this.height+"px":"auto"},resizingOnX:function(){return!!this.handle&&(this.handle.includes("l")||this.handle.includes("r"))},resizingOnY:function(){return!!this.handle&&(this.handle.includes("t")||this.handle.includes("b"))},isCornerHandle:function(){return!!this.handle&&["tl","tr","br","bl"].includes(this.handle)}},watch:{active:function(E){this.enabled=E,E?this.$emit("activated"):this.$emit("deactivated")},z:function(E){(E>=0||E==="auto")&&(this.zIndex=E)},x:function(E){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcDragLimits()),this.moveHorizontally(E))},y:function(E){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcDragLimits()),this.moveVertically(E))},lockAspectRatio:function(E){this.aspectFactor=E?this.width/this.height:void 0},minWidth:function(E){E>0&&E<=this.width&&(this.minW=E)},minHeight:function(E){E>0&&E<=this.height&&(this.minH=E)},maxWidth:function(E){this.maxW=E},maxHeight:function(E){this.maxH=E},w:function(E){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcResizeLimits()),this.changeWidth(E))},h:function(E){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcResizeLimits()),this.changeHeight(E))}}},H=Z;function ee(E,D,L,I,S,K,N,F){var X,$=typeof E=="function"?E.options:E;if(D&&($.render=D,$.staticRenderFns=L,$._compiled=!0),I&&($.functional=!0),K&&($._scopeId="data-v-"+K),N?(X=function(G){G=G||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,G||typeof __VUE_SSR_CONTEXT__>"u"||(G=__VUE_SSR_CONTEXT__),S&&S.call(this,G),G&&G._registeredComponents&&G._registeredComponents.add(N)},$._ssrRegister=X):S&&(X=F?function(){S.call(this,this.$root.$options.shadowRoot)}:S),X)if($.functional){$._injectStyles=X;var Q=$.render;$.render=function(G,J){return X.call(J),Q(G,J)}}else{var Y=$.beforeCreate;$.beforeCreate=Y?[].concat(Y,X):[X]}return{exports:E,options:$}}var q=ee(H,_,r,!1,null,null,null);s.a=q.exports},3846:function(a,s,o){o("9e1e")&&/./g.flags!="g"&&o("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:o("0bfb")})},"38fd":function(a,s,o){var _=o("69a8"),r=o("4bf8"),e=o("613b")("IE_PROTO"),i=Object.prototype;a.exports=Object.getPrototypeOf||function(l){return l=r(l),_(l,e)?l[e]:typeof l.constructor=="function"&&l instanceof l.constructor?l.constructor.prototype:l instanceof Object?i:null}},"3adc":function(a,s,o){var _=o("0f89"),r=o("a47f"),e=o("2ea1"),i=Object.defineProperty;s.f=o("7d95")?Object.defineProperty:function(l,u,c){if(_(l),u=e(u,!0),_(c),r)try{return i(l,u,c)}catch{}if("get"in c||"set"in c)throw TypeError("Accessors not supported!");return"value"in c&&(l[u]=c.value),l}},"3b2b":function(a,s,o){var _=o("7726"),r=o("5dbc"),e=o("86cc").f,i=o("9093").f,l=o("aae3"),u=o("0bfb"),c=_.RegExp,p=c,h=c.prototype,f=/a/g,m=/a/g,v=new c(f)!==f;if(o("9e1e")&&(!v||o("79e5")(function(){return m[o("2b4c")("match")]=!1,c(f)!=f||c(m)==m||c(f,"i")!="/a/i"}))){c=function(T,b){var x=this instanceof c,M=l(T),g=b===void 0;return!x&&M&&T.constructor===c&&g?T:r(v?new p(M&&!g?T.source:T,b):p((M=T instanceof c)?T.source:T,M&&g?u.call(T):b),x?this:h,c)};for(var d=function(T){T in c||e(c,T,{configurable:!0,get:function(){return p[T]},set:function(b){p[T]=b}})},P=i(p),y=0;P.length>y;)d(P[y++]);h.constructor=c,c.prototype=h,o("2aba")(_,"RegExp",c)}o("7a56")("RegExp")},"41a0":function(a,s,o){"use strict";var _=o("2aeb"),r=o("4630"),e=o("7f20"),i={};o("32e9")(i,o("2b4c")("iterator"),function(){return this}),a.exports=function(l,u,c){l.prototype=_(i,{next:r(1,c)}),e(l,u+" Iterator")}},"43c8":function(a,s){var o={}.hasOwnProperty;a.exports=function(_,r){return o.call(_,r)}},"456d":function(a,s,o){var _=o("4bf8"),r=o("0d58");o("5eda")("keys",function(){return function(e){return r(_(e))}})},4588:function(a,s){var o=Math.ceil,_=Math.floor;a.exports=function(r){return isNaN(r=+r)?0:(r>0?_:o)(r)}},4630:function(a,s){a.exports=function(o,_){return{enumerable:!(1&o),configurable:!(2&o),writable:!(4&o),value:_}}},"4a59":function(a,s,o){var _=o("9b43"),r=o("1fa8"),e=o("33a4"),i=o("cb7c"),l=o("9def"),u=o("27ee"),c={},p={};s=a.exports=function(h,f,m,v,d){var P,y,T,b,x=d?function(){return h}:u(h),M=_(m,v,f?2:1),g=0;if(typeof x!="function")throw TypeError(h+" is not iterable!");if(e(x)){for(P=l(h.length);P>g;g++)if(b=f?M(i(y=h[g])[0],y[1]):M(h[g]),b===c||b===p)return b}else for(T=x.call(h);!(y=T.next()).done;)if(b=r(T,M,y.value,f),b===c||b===p)return b},s.BREAK=c,s.RETURN=p},"4bf8":function(a,s,o){var _=o("be13");a.exports=function(r){return Object(_(r))}},"4f7f":function(a,s,o){"use strict";var _=o("c26b"),r=o("b39a"),e="Set";a.exports=o("e0b8")(e,function(i){return function(){return i(this,arguments.length>0?arguments[0]:void 0)}},{add:function(i){return _.def(r(this,e),i=i===0?0:i,i)}},_)},5147:function(a,s,o){var _=o("2b4c")("match");a.exports=function(r){var e=/./;try{"/./"[r](e)}catch{try{return e[_]=!1,!"/./"[r](e)}catch{}}return!0}},"52a7":function(a,s){s.f={}.propertyIsEnumerable},5537:function(a,s,o){var _=o("8378"),r=o("7726"),e="__core-js_shared__",i=r[e]||(r[e]={});(a.exports=function(l,u){return i[l]||(i[l]=u!==void 0?u:{})})("versions",[]).push({version:_.version,mode:o("2d00")?"pure":"global",copyright:"\xA9 2018 Denis Pushkarev (zloirock.ru)"})},"58b2":function(a,s,o){var _=o("5ca1");_(_.S+_.F*!o("9e1e"),"Object",{defineProperties:o("1495")})},"5ca1":function(a,s,o){var _=o("7726"),r=o("8378"),e=o("32e9"),i=o("2aba"),l=o("9b43"),u="prototype",c=function(p,h,f){var m,v,d,P,y=p&c.F,T=p&c.G,b=p&c.S,x=p&c.P,M=p&c.B,g=T?_:b?_[h]||(_[h]={}):(_[h]||{})[u],C=T?r:r[h]||(r[h]={}),B=C[u]||(C[u]={});for(m in T&&(f=h),f)v=!y&&g&&g[m]!==void 0,d=(v?g:f)[m],P=M&&v?l(d,_):x&&typeof d=="function"?l(Function.call,d):d,g&&i(g,m,d,p&c.U),C[m]!=d&&e(C,m,P),x&&B[m]!=d&&(B[m]=d)};_.core=r,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,a.exports=c},"5cc5":function(a,s,o){var _=o("2b4c")("iterator"),r=!1;try{var e=[7][_]();e.return=function(){r=!0},Array.from(e,function(){throw 2})}catch{}a.exports=function(i,l){if(!l&&!r)return!1;var u=!1;try{var c=[7],p=c[_]();p.next=function(){return{done:u=!0}},c[_]=function(){return p},i(c)}catch{}return u}},"5ce7":function(a,s,o){"use strict";var _=o("7108"),r=o("f845"),e=o("c0d8"),i={};o("8ce0")(i,o("1b55")("iterator"),function(){return this}),a.exports=function(l,u,c){l.prototype=_(i,{next:r(1,c)}),e(l,u+" Iterator")}},"5d73":function(a,s,o){a.exports=o("0a91")},"5d8f":function(a,s,o){var _=o("7772")("keys"),r=o("7b00");a.exports=function(e){return _[e]||(_[e]=r(e))}},"5dbc":function(a,s,o){var _=o("d3f4"),r=o("8b97").set;a.exports=function(e,i,l){var u,c=i.constructor;return c!==l&&typeof c=="function"&&(u=c.prototype)!==l.prototype&&_(u)&&r&&r(e,u),e}},"5df3":function(a,s,o){"use strict";var _=o("02f4")(!0);o("01f9")(String,"String",function(r){this._t=String(r),this._i=0},function(){var r,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(r=_(e,i),this._i+=r.length,{value:r,done:!1})})},"5eda":function(a,s,o){var _=o("5ca1"),r=o("8378"),e=o("79e5");a.exports=function(i,l){var u=(r.Object||{})[i]||Object[i],c={};c[i]=l(u),_(_.S+_.F*e(function(){u(1)}),"Object",c)}},"613b":function(a,s,o){var _=o("5537")("keys"),r=o("ca5a");a.exports=function(e){return _[e]||(_[e]=r(e))}},"626a":function(a,s,o){var _=o("2d95");a.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return _(r)=="String"?r.split(""):Object(r)}},6762:function(a,s,o){"use strict";var _=o("5ca1"),r=o("c366")(!0);_(_.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")("includes")},"67ab":function(a,s,o){var _=o("ca5a")("meta"),r=o("d3f4"),e=o("69a8"),i=o("86cc").f,l=0,u=Object.isExtensible||function(){return!0},c=!o("79e5")(function(){return u(Object.preventExtensions({}))}),p=function(d){i(d,_,{value:{i:"O"+ ++l,w:{}}})},h=function(d,P){if(!r(d))return typeof d=="symbol"?d:(typeof d=="string"?"S":"P")+d;if(!e(d,_)){if(!u(d))return"F";if(!P)return"E";p(d)}return d[_].i},f=function(d,P){if(!e(d,_)){if(!u(d))return!0;if(!P)return!1;p(d)}return d[_].w},m=function(d){return c&&v.NEED&&u(d)&&!e(d,_)&&p(d),d},v=a.exports={KEY:_,NEED:!1,fastKey:h,getWeak:f,onFreeze:m}},6821:function(a,s,o){var _=o("626a"),r=o("be13");a.exports=function(e){return _(r(e))}},"69a8":function(a,s){var o={}.hasOwnProperty;a.exports=function(_,r){return o.call(_,r)}},"6a99":function(a,s,o){var _=o("d3f4");a.exports=function(r,e){if(!_(r))return r;var i,l;if(e&&typeof(i=r.toString)=="function"&&!_(l=i.call(r))||typeof(i=r.valueOf)=="function"&&!_(l=i.call(r))||!e&&typeof(i=r.toString)=="function"&&!_(l=i.call(r)))return l;throw TypeError("Can't convert object to primitive value")}},"6a9b":function(a,s,o){var _=o("8bab"),r=o("e5fa");a.exports=function(e){return _(r(e))}},"6b54":function(a,s,o){"use strict";o("3846");var _=o("cb7c"),r=o("0bfb"),e=o("9e1e"),i="toString",l=/./[i],u=function(c){o("2aba")(RegExp.prototype,i,c,!0)};o("79e5")(function(){return l.call({source:"a",flags:"b"})!="/a/b"})?u(function(){var c=_(this);return"/".concat(c.source,"/","flags"in c?c.flags:!e&&c instanceof RegExp?r.call(c):void 0)}):l.name!=i&&u(function(){return l.call(this)})},"6e1f":function(a,s){var o={}.toString;a.exports=function(_){return o.call(_).slice(8,-1)}},"6f42":function(a,s,o){},"6f8a":function(a,s){a.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},7108:function(a,s,o){var _=o("0f89"),r=o("f568"),e=o("0029"),i=o("5d8f")("IE_PROTO"),l=function(){},u="prototype",c=function(){var p,h=o("12fd")("iframe"),f=e.length,m="<",v=">";for(h.style.display="none",o("103a").appendChild(h),h.src="javascript:",p=h.contentWindow.document,p.open(),p.write(m+"script"+v+"document.F=Object"+m+"/script"+v),p.close(),c=p.F;f--;)delete c[u][e[f]];return c()};a.exports=Object.create||function(p,h){var f;return p!==null?(l[u]=_(p),f=new l,l[u]=null,f[i]=p):f=c(),h===void 0?f:r(f,h)}},7514:function(a,s,o){"use strict";var _=o("5ca1"),r=o("0a49")(5),e="find",i=!0;e in[]&&Array(1)[e](function(){i=!1}),_(_.P+_.F*i,"Array",{find:function(l){return r(this,l,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")(e)},7633:function(a,s,o){var _=o("2695"),r=o("0029");a.exports=Object.keys||function(e){return _(e,r)}},7726:function(a,s){var o=a.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=o)},7772:function(a,s,o){var _=o("a7d3"),r=o("da3c"),e="__core-js_shared__",i=r[e]||(r[e]={});(a.exports=function(l,u){return i[l]||(i[l]=u!==void 0?u:{})})("versions",[]).push({version:_.version,mode:o("b457")?"pure":"global",copyright:"\xA9 2019 Denis Pushkarev (zloirock.ru)"})},"77f1":function(a,s,o){var _=o("4588"),r=Math.max,e=Math.min;a.exports=function(i,l){return i=_(i),i<0?r(i+l,0):e(i,l)}},"79e5":function(a,s){a.exports=function(o){try{return!!o()}catch{return!0}}},"7a56":function(a,s,o){"use strict";var _=o("7726"),r=o("86cc"),e=o("9e1e"),i=o("2b4c")("species");a.exports=function(l){var u=_[l];e&&u&&!u[i]&&r.f(u,i,{configurable:!0,get:function(){return this}})}},"7b00":function(a,s){var o=0,_=Math.random();a.exports=function(r){return"Symbol(".concat(r===void 0?"":r,")_",(++o+_).toString(36))}},"7d8a":function(a,s,o){var _=o("6e1f"),r=o("1b55")("toStringTag"),e=_(function(){return arguments}())=="Arguments",i=function(l,u){try{return l[u]}catch{}};a.exports=function(l){var u,c,p;return l===void 0?"Undefined":l===null?"Null":typeof(c=i(u=Object(l),r))=="string"?c:e?_(u):(p=_(u))=="Object"&&typeof u.callee=="function"?"Arguments":p}},"7d95":function(a,s,o){a.exports=!o("d782")(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},"7f20":function(a,s,o){var _=o("86cc").f,r=o("69a8"),e=o("2b4c")("toStringTag");a.exports=function(i,l,u){i&&!r(i=u?i:i.prototype,e)&&_(i,e,{configurable:!0,value:l})}},8378:function(a,s){var o=a.exports={version:"2.6.1"};typeof __e=="number"&&(__e=o)},"84f2":function(a,s){a.exports={}},"85f2":function(a,s,o){a.exports=o("ec5b")},"86cc":function(a,s,o){var _=o("cb7c"),r=o("c69a"),e=o("6a99"),i=Object.defineProperty;s.f=o("9e1e")?Object.defineProperty:function(l,u,c){if(_(l),u=e(u,!0),_(c),r)try{return i(l,u,c)}catch{}if("get"in c||"set"in c)throw TypeError("Accessors not supported!");return"value"in c&&(l[u]=c.value),l}},"87b3":function(a,s,o){var _=Date.prototype,r="Invalid Date",e="toString",i=_[e],l=_.getTime;new Date(NaN)+""!=r&&o("2aba")(_,e,function(){var u=l.call(this);return u===u?i.call(this):r})},8875:function(a,s,o){var _,r,e;(function(i,l){r=[],_=l,e=typeof _=="function"?_.apply(s,r):_,e===void 0||(a.exports=e)})(typeof self<"u"&&self,function(){function i(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(T){var l,u,c,p=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,h=/@([^@]*):(\d+):(\d+)\s*$/gi,f=p.exec(T.stack)||h.exec(T.stack),m=f&&f[1]||!1,v=f&&f[2]||!1,d=document.location.href.replace(document.location.hash,""),P=document.getElementsByTagName("script");m===d&&(l=document.documentElement.outerHTML,u=new RegExp("(?:[^\\n]+?\\n){0,"+(v-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),c=l.replace(u,"$1").trim());for(var y=0;y<P.length;y++)if(P[y].readyState==="interactive"||P[y].src===m||m===d&&P[y].innerHTML&&P[y].innerHTML.trim()===c)return P[y];return null}}return i})},"89ca":function(a,s,o){o("b42c"),o("93c4"),a.exports=o("d38f")},"8b97":function(a,s,o){var _=o("d3f4"),r=o("cb7c"),e=function(i,l){if(r(i),!_(l)&&l!==null)throw TypeError(l+": can't set as prototype!")};a.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(i,l,u){try{u=o("9b43")(Function.call,o("11e9").f(Object.prototype,"__proto__").set,2),u(i,[]),l=!(i instanceof Array)}catch{l=!0}return function(c,p){return e(c,p),l?c.__proto__=p:u(c,p),c}}({},!1):void 0),check:e}},"8bab":function(a,s,o){var _=o("6e1f");a.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return _(r)=="String"?r.split(""):Object(r)}},"8ce0":function(a,s,o){var _=o("3adc"),r=o("f845");a.exports=o("7d95")?function(e,i,l){return _.f(e,i,r(1,l))}:function(e,i,l){return e[i]=l,e}},"8e6e":function(a,s,o){var _=o("5ca1"),r=o("990b"),e=o("6821"),i=o("11e9"),l=o("f1ae");_(_.S,"Object",{getOwnPropertyDescriptors:function(u){for(var c,p,h=e(u),f=i.f,m=r(h),v={},d=0;m.length>d;)p=f(h,c=m[d++]),p!==void 0&&l(v,c,p);return v}})},9093:function(a,s,o){var _=o("ce10"),r=o("e11e").concat("length","prototype");s.f=Object.getOwnPropertyNames||function(e){return _(e,r)}},"93c4":function(a,s,o){"use strict";var _=o("2a4e")(!0);o("e4a9")(String,"String",function(r){this._t=String(r),this._i=0},function(){var r,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(r=_(e,i),this._i+=r.length,{value:r,done:!1})})},"990b":function(a,s,o){var _=o("9093"),r=o("2621"),e=o("cb7c"),i=o("7726").Reflect;a.exports=i&&i.ownKeys||function(l){var u=_.f(e(l)),c=r.f;return c?u.concat(c(l)):u}},"9b43":function(a,s,o){var _=o("d8e8");a.exports=function(r,e,i){if(_(r),e===void 0)return r;switch(i){case 1:return function(l){return r.call(e,l)};case 2:return function(l,u){return r.call(e,l,u)};case 3:return function(l,u,c){return r.call(e,l,u,c)}}return function(){return r.apply(e,arguments)}}},"9c6c":function(a,s,o){var _=o("2b4c")("unscopables"),r=Array.prototype;r[_]==null&&o("32e9")(r,_,{}),a.exports=function(e){r[_][e]=!0}},"9def":function(a,s,o){var _=o("4588"),r=Math.min;a.exports=function(e){return e>0?r(_(e),9007199254740991):0}},"9e1e":function(a,s,o){a.exports=!o("79e5")(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},a47f:function(a,s,o){a.exports=!o("7d95")&&!o("d782")(function(){return Object.defineProperty(o("12fd")("div"),"a",{get:function(){return 7}}).a!=7})},a5ab:function(a,s,o){var _=o("a812"),r=Math.min;a.exports=function(e){return e>0?r(_(e),9007199254740991):0}},a745:function(a,s,o){a.exports=o("d604")},a7d3:function(a,s){var o=a.exports={version:"2.6.9"};typeof __e=="number"&&(__e=o)},a812:function(a,s){var o=Math.ceil,_=Math.floor;a.exports=function(r){return isNaN(r=+r)?0:(r>0?_:o)(r)}},aa77:function(a,s,o){var _=o("5ca1"),r=o("be13"),e=o("79e5"),i=o("fdef"),l="["+i+"]",u="\u200B\x85",c=RegExp("^"+l+l+"*"),p=RegExp(l+l+"*$"),h=function(m,v,d){var P={},y=e(function(){return!!i[m]()||u[m]()!=u}),T=P[m]=y?v(f):i[m];d&&(P[d]=T),_(_.P+_.F*y,"String",P)},f=h.trim=function(m,v){return m=String(r(m)),1&v&&(m=m.replace(c,"")),2&v&&(m=m.replace(p,"")),m};a.exports=h},aae3:function(a,s,o){var _=o("d3f4"),r=o("2d95"),e=o("2b4c")("match");a.exports=function(i){var l;return _(i)&&((l=i[e])!==void 0?!!l:r(i)=="RegExp")}},ac6a:function(a,s,o){for(var _=o("cadf"),r=o("0d58"),e=o("2aba"),i=o("7726"),l=o("32e9"),u=o("84f2"),c=o("2b4c"),p=c("iterator"),h=c("toStringTag"),f=u.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=r(m),d=0;d<v.length;d++){var P,y=v[d],T=m[y],b=i[y],x=b&&b.prototype;if(x&&(x[p]||l(x,p,f),x[h]||l(x,h,y),u[y]=f,T))for(P in _)x[P]||e(x,P,_[P],!0)}},b22a:function(a,s){a.exports={}},b39a:function(a,s,o){var _=o("d3f4");a.exports=function(r,e){if(!_(r)||r._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return r}},b3e7:function(a,s){a.exports=function(){}},b42c:function(a,s,o){o("fa54");for(var _=o("da3c"),r=o("8ce0"),e=o("b22a"),i=o("1b55")("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<l.length;u++){var c=l[u],p=_[c],h=p&&p.prototype;h&&!h[i]&&r(h,i,c),e[c]=e.Array}},b457:function(a,s){a.exports=!0},b5aa:function(a,s,o){var _=o("6e1f");a.exports=Array.isArray||function(r){return _(r)=="Array"}},b635:function(a,s,o){"use strict";(function(_){o.d(s,"b",function(){return e}),o("6f42");var r=o("3425");function e(u){e.installed||(e.installed=!0,u.component("VueDraggableResizable",r.a))}var i={install:e},l=null;typeof window<"u"?l=window.Vue:typeof _<"u"&&(l=_.Vue),l&&l.use(i),s.a=r.a}).call(this,o("c8ba"))},b77f:function(a,s,o){var _=o("0f89"),r=o("f159");a.exports=o("a7d3").getIterator=function(e){var i=r(e);if(typeof i!="function")throw TypeError(e+" is not iterable!");return _(i.call(e))}},bc25:function(a,s,o){var _=o("f2fe");a.exports=function(r,e,i){if(_(r),e===void 0)return r;switch(i){case 1:return function(l){return r.call(e,l)};case 2:return function(l,u){return r.call(e,l,u)};case 3:return function(l,u,c){return r.call(e,l,u,c)}}return function(){return r.apply(e,arguments)}}},be13:function(a,s){a.exports=function(o){if(o==null)throw TypeError("Can't call method on  "+o);return o}},c0d8:function(a,s,o){var _=o("3adc").f,r=o("43c8"),e=o("1b55")("toStringTag");a.exports=function(i,l,u){i&&!r(i=u?i:i.prototype,e)&&_(i,e,{configurable:!0,value:l})}},c26b:function(a,s,o){"use strict";var _=o("86cc").f,r=o("2aeb"),e=o("dcbc"),i=o("9b43"),l=o("f605"),u=o("4a59"),c=o("01f9"),p=o("d53b"),h=o("7a56"),f=o("9e1e"),m=o("67ab").fastKey,v=o("b39a"),d=f?"_s":"size",P=function(y,T){var b,x=m(T);if(x!=="F")return y._i[x];for(b=y._f;b;b=b.n)if(b.k==T)return b};a.exports={getConstructor:function(y,T,b,x){var M=y(function(g,C){l(g,M,T,"_i"),g._t=T,g._i=r(null),g._f=void 0,g._l=void 0,g[d]=0,C!=null&&u(C,b,g[x],g)});return e(M.prototype,{clear:function(){for(var g=v(this,T),C=g._i,B=g._f;B;B=B.n)B.r=!0,B.p&&(B.p=B.p.n=void 0),delete C[B.i];g._f=g._l=void 0,g[d]=0},delete:function(g){var C=v(this,T),B=P(C,g);if(B){var R=B.n,O=B.p;delete C._i[B.i],B.r=!0,O&&(O.n=R),R&&(R.p=O),C._f==B&&(C._f=R),C._l==B&&(C._l=O),C[d]--}return!!B},forEach:function(g){v(this,T);for(var C,B=i(g,arguments.length>1?arguments[1]:void 0,3);C=C?C.n:this._f;)for(B(C.v,C.k,this);C&&C.r;)C=C.p},has:function(g){return!!P(v(this,T),g)}}),f&&_(M.prototype,"size",{get:function(){return v(this,T)[d]}}),M},def:function(y,T,b){var x,M,g=P(y,T);return g?g.v=b:(y._l=g={i:M=m(T,!0),k:T,v:b,p:x=y._l,n:void 0,r:!1},y._f||(y._f=g),x&&(x.n=g),y[d]++,M!=="F"&&(y._i[M]=g)),y},getEntry:P,setStrong:function(y,T,b){c(y,T,function(x,M){this._t=v(x,T),this._k=M,this._l=void 0},function(){for(var x=this,M=x._k,g=x._l;g&&g.r;)g=g.p;return x._t&&(x._l=g=g?g.n:x._t._f)?p(0,M=="keys"?g.k:M=="values"?g.v:[g.k,g.v]):(x._t=void 0,p(1))},b?"entries":"values",!b,!0),h(T)}}},c366:function(a,s,o){var _=o("6821"),r=o("9def"),e=o("77f1");a.exports=function(i){return function(l,u,c){var p,h=_(l),f=r(h.length),m=e(c,f);if(i&&u!=u){for(;f>m;)if(p=h[m++],p!=p)return!0}else for(;f>m;m++)if((i||m in h)&&h[m]===u)return i||m||0;return!i&&-1}}},c5f6:function(a,s,o){"use strict";var _=o("7726"),r=o("69a8"),e=o("2d95"),i=o("5dbc"),l=o("6a99"),u=o("79e5"),c=o("9093").f,p=o("11e9").f,h=o("86cc").f,f=o("aa77").trim,m="Number",v=_[m],d=v,P=v.prototype,y=e(o("2aeb")(P))==m,T="trim"in String.prototype,b=function(C){var B=l(C,!1);if(typeof B=="string"&&B.length>2){B=T?B.trim():f(B,3);var R,O,W,k=B.charCodeAt(0);if(k===43||k===45){if(R=B.charCodeAt(2),R===88||R===120)return NaN}else if(k===48){switch(B.charCodeAt(1)){case 66:case 98:O=2,W=49;break;case 79:case 111:O=8,W=55;break;default:return+B}for(var z,w=B.slice(2),V=0,U=w.length;V<U;V++)if(z=w.charCodeAt(V),z<48||z>W)return NaN;return parseInt(w,O)}}return+B};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(C){var B=arguments.length<1?0:C,R=this;return R instanceof v&&(y?u(function(){P.valueOf.call(R)}):e(R)!=m)?i(new d(b(B)),R,v):b(B)};for(var x,M=o("9e1e")?c(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;M.length>g;g++)r(d,x=M[g])&&!r(v,x)&&h(v,x,p(d,x));v.prototype=P,P.constructor=v,o("2aba")(_,m,v)}},c69a:function(a,s,o){a.exports=!o("9e1e")&&!o("79e5")(function(){return Object.defineProperty(o("230e")("div"),"a",{get:function(){return 7}}).a!=7})},c8ba:function(a,s){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch{typeof window=="object"&&(o=window)}a.exports=o},c8bb:function(a,s,o){a.exports=o("89ca")},ca5a:function(a,s){var o=0,_=Math.random();a.exports=function(r){return"Symbol(".concat(r===void 0?"":r,")_",(++o+_).toString(36))}},cadf:function(a,s,o){"use strict";var _=o("9c6c"),r=o("d53b"),e=o("84f2"),i=o("6821");a.exports=o("01f9")(Array,"Array",function(l,u){this._t=i(l),this._i=0,this._k=u},function(){var l=this._t,u=this._k,c=this._i++;return!l||c>=l.length?(this._t=void 0,r(1)):r(0,u=="keys"?c:u=="values"?l[c]:[c,l[c]])},"values"),e.Arguments=e.Array,_("keys"),_("values"),_("entries")},cb7c:function(a,s,o){var _=o("d3f4");a.exports=function(r){if(!_(r))throw TypeError(r+" is not an object!");return r}},cd1c:function(a,s,o){var _=o("e853");a.exports=function(r,e){return new(_(r))(e)}},ce10:function(a,s,o){var _=o("69a8"),r=o("6821"),e=o("c366")(!1),i=o("613b")("IE_PROTO");a.exports=function(l,u){var c,p=r(l),h=0,f=[];for(c in p)c!=i&&_(p,c)&&f.push(c);for(;u.length>h;)_(p,c=u[h++])&&(~e(f,c)||f.push(c));return f}},d13f:function(a,s,o){var _=o("da3c"),r=o("a7d3"),e=o("bc25"),i=o("8ce0"),l=o("43c8"),u="prototype",c=function(p,h,f){var m,v,d,P=p&c.F,y=p&c.G,T=p&c.S,b=p&c.P,x=p&c.B,M=p&c.W,g=y?r:r[h]||(r[h]={}),C=g[u],B=y?_:T?_[h]:(_[h]||{})[u];for(m in y&&(f=h),f)v=!P&&B&&B[m]!==void 0,v&&l(g,m)||(d=v?B[m]:f[m],g[m]=y&&typeof B[m]!="function"?f[m]:x&&v?e(d,_):M&&B[m]==d?function(R){var O=function(W,k,z){if(this instanceof R){switch(arguments.length){case 0:return new R;case 1:return new R(W);case 2:return new R(W,k)}return new R(W,k,z)}return R.apply(this,arguments)};return O[u]=R[u],O}(d):b&&typeof d=="function"?e(Function.call,d):d,b&&((g.virtual||(g.virtual={}))[m]=d,p&c.R&&C&&!C[m]&&i(C,m,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,a.exports=c},d25f:function(a,s,o){"use strict";var _=o("5ca1"),r=o("0a49")(2);_(_.P+_.F*!o("2f21")([].filter,!0),"Array",{filter:function(e){return r(this,e,arguments[1])}})},d2c8:function(a,s,o){var _=o("aae3"),r=o("be13");a.exports=function(e,i,l){if(_(i))throw TypeError("String#"+l+" doesn't accept regex!");return String(r(e))}},d38f:function(a,s,o){var _=o("7d8a"),r=o("1b55")("iterator"),e=o("b22a");a.exports=o("a7d3").isIterable=function(i){var l=Object(i);return l[r]!==void 0||"@@iterator"in l||e.hasOwnProperty(_(l))}},d3f4:function(a,s){a.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},d53b:function(a,s){a.exports=function(o,_){return{value:_,done:!!o}}},d604:function(a,s,o){o("1938"),a.exports=o("a7d3").Array.isArray},d782:function(a,s){a.exports=function(o){try{return!!o()}catch{return!0}}},d8e8:function(a,s){a.exports=function(o){if(typeof o!="function")throw TypeError(o+" is not a function!");return o}},da3c:function(a,s){var o=a.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=o)},dcbc:function(a,s,o){var _=o("2aba");a.exports=function(r,e,i){for(var l in e)_(r,l,e[l],i);return r}},e0b8:function(a,s,o){"use strict";var _=o("7726"),r=o("5ca1"),e=o("2aba"),i=o("dcbc"),l=o("67ab"),u=o("4a59"),c=o("f605"),p=o("d3f4"),h=o("79e5"),f=o("5cc5"),m=o("7f20"),v=o("5dbc");a.exports=function(d,P,y,T,b,x){var M=_[d],g=M,C=b?"set":"add",B=g&&g.prototype,R={},O=function(U){var Z=B[U];e(B,U,U=="delete"||U=="has"?function(H){return!(x&&!p(H))&&Z.call(this,H===0?0:H)}:U=="get"?function(H){return x&&!p(H)?void 0:Z.call(this,H===0?0:H)}:U=="add"?function(H){return Z.call(this,H===0?0:H),this}:function(H,ee){return Z.call(this,H===0?0:H,ee),this})};if(typeof g=="function"&&(x||B.forEach&&!h(function(){new g().entries().next()}))){var W=new g,k=W[C](x?{}:-0,1)!=W,z=h(function(){W.has(1)}),w=f(function(U){new g(U)}),V=!x&&h(function(){for(var U=new g,Z=5;Z--;)U[C](Z,Z);return!U.has(-0)});w||(g=P(function(U,Z){c(U,g,d);var H=v(new M,U,g);return Z!=null&&u(Z,b,H[C],H),H}),g.prototype=B,B.constructor=g),(z||V)&&(O("delete"),O("has"),b&&O("get")),(V||k)&&O(C),x&&B.clear&&delete B.clear}else g=T.getConstructor(P,d,b,C),i(g.prototype,y),l.NEED=!0;return m(g,d),R[d]=g,r(r.G+r.W+r.F*(g!=M),R),x||T.setStrong(g,d,b),g}},e11e:function(a,s){a.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},e341:function(a,s,o){var _=o("d13f");_(_.S+_.F*!o("7d95"),"Object",{defineProperty:o("3adc").f})},e4a9:function(a,s,o){"use strict";var _=o("b457"),r=o("d13f"),e=o("2312"),i=o("8ce0"),l=o("b22a"),u=o("5ce7"),c=o("c0d8"),p=o("ff0c"),h=o("1b55")("iterator"),f=!([].keys&&"next"in[].keys()),m="@@iterator",v="keys",d="values",P=function(){return this};a.exports=function(y,T,b,x,M,g,C){u(b,T,x);var B,R,O,W=function(q){if(!f&&q in V)return V[q];switch(q){case v:return function(){return new b(this,q)};case d:return function(){return new b(this,q)}}return function(){return new b(this,q)}},k=T+" Iterator",z=M==d,w=!1,V=y.prototype,U=V[h]||V[m]||M&&V[M],Z=U||W(M),H=M?z?W("entries"):Z:void 0,ee=T=="Array"&&V.entries||U;if(ee&&(O=p(ee.call(new y)),O!==Object.prototype&&O.next&&(c(O,k,!0),_||typeof O[h]=="function"||i(O,h,P))),z&&U&&U.name!==d&&(w=!0,Z=function(){return U.call(this)}),_&&!C||!f&&!w&&V[h]||i(V,h,Z),l[T]=Z,l[k]=P,M)if(B={values:z?Z:W(d),keys:g?Z:W(v),entries:H},C)for(R in B)R in V||e(V,R,B[R]);else r(r.P+r.F*(f||w),T,B);return B}},e5fa:function(a,s){a.exports=function(o){if(o==null)throw TypeError("Can't call method on  "+o);return o}},e853:function(a,s,o){var _=o("d3f4"),r=o("1169"),e=o("2b4c")("species");a.exports=function(i){var l;return r(i)&&(l=i.constructor,typeof l!="function"||l!==Array&&!r(l.prototype)||(l=void 0),_(l)&&(l=l[e],l===null&&(l=void 0))),l===void 0?Array:l}},ec5b:function(a,s,o){o("e341");var _=o("a7d3").Object;a.exports=function(r,e,i){return _.defineProperty(r,e,i)}},f159:function(a,s,o){var _=o("7d8a"),r=o("1b55")("iterator"),e=o("b22a");a.exports=o("a7d3").getIteratorMethod=function(i){if(i!=null)return i[r]||i["@@iterator"]||e[_(i)]}},f1ae:function(a,s,o){"use strict";var _=o("86cc"),r=o("4630");a.exports=function(e,i,l){i in e?_.f(e,i,r(0,l)):e[i]=l}},f2fe:function(a,s){a.exports=function(o){if(typeof o!="function")throw TypeError(o+" is not a function!");return o}},f3e2:function(a,s,o){"use strict";var _=o("5ca1"),r=o("0a49")(0),e=o("2f21")([].forEach,!0);_(_.P+_.F*!e,"Array",{forEach:function(i){return r(this,i,arguments[1])}})},f568:function(a,s,o){var _=o("3adc"),r=o("0f89"),e=o("7633");a.exports=o("7d95")?Object.defineProperties:function(i,l){r(i);for(var u,c=e(l),p=c.length,h=0;p>h;)_.f(i,u=c[h++],l[u]);return i}},f605:function(a,s){a.exports=function(o,_,r,e){if(!(o instanceof _)||e!==void 0&&e in o)throw TypeError(r+": incorrect invocation!");return o}},f845:function(a,s){a.exports=function(o,_){return{enumerable:!(1&o),configurable:!(2&o),writable:!(4&o),value:_}}},fa54:function(a,s,o){"use strict";var _=o("b3e7"),r=o("245b"),e=o("b22a"),i=o("6a9b");a.exports=o("e4a9")(Array,"Array",function(l,u){this._t=i(l),this._i=0,this._k=u},function(){var l=this._t,u=this._k,c=this._i++;return!l||c>=l.length?(this._t=void 0,r(1)):r(0,u=="keys"?c:u=="values"?l[c]:[c,l[c]])},"values"),e.Arguments=e.Array,_("keys"),_("values"),_("entries")},fab2:function(a,s,o){var _=o("7726").document;a.exports=_&&_.documentElement},fb15:function(a,s,o){"use strict";if(o.r(s),o.d(s,"install",function(){return i.b}),typeof window<"u"){var _=window.document.currentScript,r=o("8875");_=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r});var e=_&&_.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);e&&(o.p=e[1])}var i=o("b635");s.default=i.a},fdef:function(a,s){a.exports=`	
\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`},ff0c:function(a,s,o){var _=o("43c8"),r=o("0185"),e=o("5d8f")("IE_PROTO"),i=Object.prototype;a.exports=Object.getPrototypeOf||function(l){return l=r(l),_(l,e)?l[e]:typeof l.constructor=="function"&&l instanceof l.constructor?l.constructor.prototype:l instanceof Object?i:null}}}).default})},24900:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(53356),_=s(18187),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},7888:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"AccountBoxOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},71203:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(83515),_=s(27782),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},39850:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"AccountCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},46544:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(31006),_=s(39398),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},39390:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"AccountMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},33135:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(11634),_=s(82314),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},36624:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"AccountOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},16889:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(48450),_=s(48762),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},26766:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"ArrowExpandIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},364:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(11207),_=s(21516),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},94253:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"BlurOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},79209:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(81356),_=s(92331),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},2471:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"ChevronDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},54351:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(84686),_=s(51735),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},89416:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"ChevronLeftIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},52796:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(27494),_=s(3184),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},41624:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"ChevronRightIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},35653:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(61860),_=s(97094),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},82054:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"DotsCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},13511:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(75850),_=s(58393),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},87664:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"DotsHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},87720:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(39945),_=s(2687),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},81189:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"FullscreenIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},72181:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(94012),_=s(374),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},6010:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"FullscreenExitIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},13767:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(24600),_=s(63466),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},31851:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"HandBackLeftIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},8344:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(15333),_=s(60334),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},84808:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"MenuDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},2671:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(72695),_=s(27992),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},88847:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"MenuRightIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},28499:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(58687),_=s(82438),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},23987:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"MonitorIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},92577:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(56988),_=s(34841),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},53673:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"MonitorOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},20719:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(96943),_=s(87832),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},23098:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"MonitorShareIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},31533:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(58605),_=s(46720),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},37500:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"NetworkStrength2AlertIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},83969:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(12764),_=s(10239),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},12821:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"RecordCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},2091:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(67960),_=s(883),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},42662:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"StopIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},28532:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(96045),_=s(61773),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},3408:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o});const o={name:"ViewGridIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}},2529:(A,a,s)=>{"use strict";s.d(a,{Z:()=>i});var o=s(18027),_=s(43877),r=s(51900),e=(0,r.Z)(_.Z,o.s,o.x,!1,null,null,null);const i=e.exports},65260:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(13448),_=s(72148),r=s(26865),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"48b1e8d4",null);const l=i.exports},53997:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(95152),_=s(77046),r=s(98179),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"592120f8",null);const l=i.exports},51743:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(56057),_=s(67152),r=s(69547),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"251b8509",null);const l=i.exports},78475:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(9437),_=s(11915),r=s(1796),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"777f4383",null);const l=i.exports},88360:(A,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>l});var o=s(26188),_=s(36472),r=s(78541),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"1421fc07",null);const l=i.exports},25434:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(44343),_=s(69697),r=s(62362),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"6fda80da",null);const l=i.exports},18471:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(71693),_=s(13651),r=s(39781),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"4567cc6c",null);const l=i.exports},71470:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(37435),_=s(31715),r=s(39133),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"24d1b620",null);const l=i.exports},14512:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(81664),_=s(61909),r=s(15054),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"0335eda8",null);const l=i.exports},69581:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(12788),_=s(76409),r=s(41566),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"05333e6d",null);const l=i.exports},58184:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(84277),_=s(48578),r=s(40369),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"2247350e",null);const l=i.exports},7874:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(17004),_=s(62887),r=s(20918),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"5c1f5918",null);const l=i.exports},85718:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(14709),_=s(69574),r=s(53821),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"ceee52ca",null);const l=i.exports},68352:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(80998),_=s(28475),r=s(57565),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"1bdc6dd0",null);const l=i.exports},38137:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(32341),_=s(5591),r=s(62486),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"21f9be60",null);const l=i.exports},48171:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(50807),_=s(71271),r=s(93609),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"0fc70246",null);const l=i.exports},34648:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(55507),_=s(91261),r=s(581),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"88e39986",null);const l=i.exports},32602:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(78188),_=s(18876),r=s(61565),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"611b8335",null);const l=i.exports},8222:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(23798),_=s(28390),r=s(42793),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"2785e419",null);const l=i.exports},49449:(A,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>l});var o=s(71015),_=s(76310),r=s(69604),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"4ad28c90",null);const l=i.exports},91764:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(3362),_=s(51602),r=s(64849),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"860291ca",null);const l=i.exports},20774:(A,a,s)=>{"use strict";s.d(a,{Z:()=>l});var o=s(66229),_=s(52674),r=s(75782),e=s(51900),i=(0,e.Z)(_.Z,o.s,o.x,!1,null,"3d97808e",null);const l=i.exports},43877:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(70905);const _=o.Z},72148:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(12039);const _=o.Z},77046:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(14295);const _=o.Z},67152:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(25734);const _=o.Z},11915:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(92382);const _=o.Z},36472:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(13722);const _=o.Z},69697:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(63522);const _=o.Z},13651:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(5753);const _=o.Z},31715:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(60640);const _=o.Z},61909:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(73891);const _=o.Z},76409:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(31423);const _=o.Z},48578:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(78082);const _=o.Z},62887:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(91973);const _=o.Z},69574:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(41870);const _=o.Z},28475:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(43090);const _=o.Z},5591:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(37102);const _=o.Z},71271:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(46237);const _=o.Z},91261:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(17576);const _=o.Z},18876:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(81481);const _=o.Z},28390:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(68737);const _=o.Z},76310:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(32963);const _=o.Z},51602:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(26192);const _=o.Z},52674:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(49729);const _=o.Z},26865:(A,a,s)=>{"use strict";var o=s(87581)},98179:(A,a,s)=>{"use strict";var o=s(47981)},69547:(A,a,s)=>{"use strict";var o=s(74660)},1796:(A,a,s)=>{"use strict";var o=s(75156)},78541:(A,a,s)=>{"use strict";var o=s(97899)},62362:(A,a,s)=>{"use strict";var o=s(76202)},39781:(A,a,s)=>{"use strict";var o=s(12067)},15054:(A,a,s)=>{"use strict";var o=s(3879)},41566:(A,a,s)=>{"use strict";var o=s(57346)},40369:(A,a,s)=>{"use strict";var o=s(42106)},20918:(A,a,s)=>{"use strict";var o=s(20815)},53821:(A,a,s)=>{"use strict";var o=s(329)},57565:(A,a,s)=>{"use strict";var o=s(77574)},62486:(A,a,s)=>{"use strict";var o=s(39380)},93609:(A,a,s)=>{"use strict";var o=s(78278)},581:(A,a,s)=>{"use strict";var o=s(67412)},61565:(A,a,s)=>{"use strict";var o=s(34505)},42793:(A,a,s)=>{"use strict";var o=s(78823)},69604:(A,a,s)=>{"use strict";var o=s(86982)},64849:(A,a,s)=>{"use strict";var o=s(3595)},75782:(A,a,s)=>{"use strict";var o=s(75855)},39133:(A,a,s)=>{"use strict";var o=s(8658)},18187:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(7888);const _=o.Z},27782:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(39850);const _=o.Z},39398:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(39390);const _=o.Z},82314:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(36624);const _=o.Z},48762:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(26766);const _=o.Z},21516:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(94253);const _=o.Z},92331:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(2471);const _=o.Z},51735:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(89416);const _=o.Z},3184:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(41624);const _=o.Z},97094:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(82054);const _=o.Z},58393:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(87664);const _=o.Z},2687:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(81189);const _=o.Z},374:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(6010);const _=o.Z},63466:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(31851);const _=o.Z},60334:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(84808);const _=o.Z},27992:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(88847);const _=o.Z},82438:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(23987);const _=o.Z},34841:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(53673);const _=o.Z},87832:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(23098);const _=o.Z},46720:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(37500);const _=o.Z},10239:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(12821);const _=o.Z},883:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(42662);const _=o.Z},61773:(A,a,s)=>{"use strict";s.d(a,{Z:()=>_});var o=s(3408);const _=o.Z},53356:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon account-box-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},83515:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon account-circle-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},31006:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon account-multiple-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},11634:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon account-off-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12,4A4,4 0 0,1 16,8C16,9.95 14.6,11.58 12.75,11.93L8.07,7.25C8.42,5.4 10.05,4 12,4M12.28,14L18.28,20L20,21.72L18.73,23L15.73,20H4V18C4,16.16 6.5,14.61 9.87,14.14L2.78,7.05L4.05,5.78L12.28,14M20,18V19.18L15.14,14.32C18,14.93 20,16.35 20,18Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},48450:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon arrow-expand-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},11207:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon blur-off-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3,13.5A0.5,0.5 0 0,0 2.5,14A0.5,0.5 0 0,0 3,14.5A0.5,0.5 0 0,0 3.5,14A0.5,0.5 0 0,0 3,13.5M6,17A1,1 0 0,0 5,18A1,1 0 0,0 6,19A1,1 0 0,0 7,18A1,1 0 0,0 6,17M10,20.5A0.5,0.5 0 0,0 9.5,21A0.5,0.5 0 0,0 10,21.5A0.5,0.5 0 0,0 10.5,21A0.5,0.5 0 0,0 10,20.5M3,9.5A0.5,0.5 0 0,0 2.5,10A0.5,0.5 0 0,0 3,10.5A0.5,0.5 0 0,0 3.5,10A0.5,0.5 0 0,0 3,9.5M6,13A1,1 0 0,0 5,14A1,1 0 0,0 6,15A1,1 0 0,0 7,14A1,1 0 0,0 6,13M21,13.5A0.5,0.5 0 0,0 20.5,14A0.5,0.5 0 0,0 21,14.5A0.5,0.5 0 0,0 21.5,14A0.5,0.5 0 0,0 21,13.5M10,17A1,1 0 0,0 9,18A1,1 0 0,0 10,19A1,1 0 0,0 11,18A1,1 0 0,0 10,17M2.5,5.27L6.28,9.05L6,9A1,1 0 0,0 5,10A1,1 0 0,0 6,11A1,1 0 0,0 7,10C7,9.9 6.97,9.81 6.94,9.72L9.75,12.53C9.04,12.64 8.5,13.26 8.5,14A1.5,1.5 0 0,0 10,15.5C10.74,15.5 11.36,14.96 11.47,14.25L14.28,17.06C14.19,17.03 14.1,17 14,17A1,1 0 0,0 13,18A1,1 0 0,0 14,19A1,1 0 0,0 15,18C15,17.9 14.97,17.81 14.94,17.72L18.72,21.5L20,20.23L3.77,4L2.5,5.27M14,20.5A0.5,0.5 0 0,0 13.5,21A0.5,0.5 0 0,0 14,21.5A0.5,0.5 0 0,0 14.5,21A0.5,0.5 0 0,0 14,20.5M18,7A1,1 0 0,0 19,6A1,1 0 0,0 18,5A1,1 0 0,0 17,6A1,1 0 0,0 18,7M18,11A1,1 0 0,0 19,10A1,1 0 0,0 18,9A1,1 0 0,0 17,10A1,1 0 0,0 18,11M18,15A1,1 0 0,0 19,14A1,1 0 0,0 18,13A1,1 0 0,0 17,14A1,1 0 0,0 18,15M10,7A1,1 0 0,0 11,6A1,1 0 0,0 10,5A1,1 0 0,0 9,6A1,1 0 0,0 10,7M21,10.5A0.5,0.5 0 0,0 21.5,10A0.5,0.5 0 0,0 21,9.5A0.5,0.5 0 0,0 20.5,10A0.5,0.5 0 0,0 21,10.5M10,3.5A0.5,0.5 0 0,0 10.5,3A0.5,0.5 0 0,0 10,2.5A0.5,0.5 0 0,0 9.5,3A0.5,0.5 0 0,0 10,3.5M14,3.5A0.5,0.5 0 0,0 14.5,3A0.5,0.5 0 0,0 14,2.5A0.5,0.5 0 0,0 13.5,3A0.5,0.5 0 0,0 14,3.5M13.8,11.5H14A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 14,8.5A1.5,1.5 0 0,0 12.5,10V10.2C12.61,10.87 13.13,11.39 13.8,11.5M14,7A1,1 0 0,0 15,6A1,1 0 0,0 14,5A1,1 0 0,0 13,6A1,1 0 0,0 14,7Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},81356:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon chevron-down-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},84686:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon chevron-left-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},27494:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon chevron-right-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},61860:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon dots-circle-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12 19C13.1 19 14 19.9 14 21S13.1 23 12 23 10 22.1 10 21 10.9 19 12 19M12 1C13.1 1 14 1.9 14 3S13.1 5 12 5 10 4.1 10 3 10.9 1 12 1M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M3 10C4.1 10 5 10.9 5 12S4.1 14 3 14 1 13.1 1 12 1.9 10 3 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M21 10C22.1 10 23 10.9 23 12S22.1 14 21 14 19 13.1 19 12 19.9 10 21 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},75850:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon dots-horizontal-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},39945:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon fullscreen-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},94012:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon fullscreen-exit-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},24600:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon hand-back-left-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3 16V5.75C3 5.06 3.56 4.5 4.25 4.5S5.5 5.06 5.5 5.75V12H6.5V2.75C6.5 2.06 7.06 1.5 7.75 1.5C8.44 1.5 9 2.06 9 2.75V12H10V1.25C10 .56 10.56 0 11.25 0S12.5 .56 12.5 1.25V12H13.5V3.25C13.5 2.56 14.06 2 14.75 2S16 2.56 16 3.25V15H16.75L18.16 11.47C18.38 10.92 18.84 10.5 19.4 10.31L20.19 10.05C21 9.79 21.74 10.58 21.43 11.37L18.4 19C17.19 22 14.26 24 11 24C6.58 24 3 20.42 3 16Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},15333:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon menu-down-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M7,10L12,15L17,10H7Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},72695:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon menu-right-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M10,17L15,12L10,7V17Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},58687:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon monitor-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},56988:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon monitor-off-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M14,18V20H16V22H8V20H10V18H3A2,2 0 0,1 1,16V4L0,3L1.41,1.58L22.16,22.34L20.75,23.75L15,18H14M3,16H13L3,6V16M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H20.66L18.66,16H21V4H6.66L4.66,2H21Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},96943:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon monitor-share-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M23 4V16C23 17.11 22.11 18 21 18H15V16H21V4H3V16H9V18H3C1.9 18 1 17.11 1 16V4C1 2.89 1.89 2 3 2H21C22.1 2 23 2.89 23 4M13 13H16L12 9L8 13H11V20H8V22H16V20H13V13Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},58605:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon network-strength2-alert-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M21 1L1 21H17V19H13V11.8L19 5.8V9H21M19 11V17H21V11M19 19V21H21V19"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},12764:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon record-circle-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},67960:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon stop-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M18,18H6V6H18V18Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},96045:(A,a,s)=>{"use strict";s.d(a,{s:()=>o,x:()=>_});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon view-grid-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(l){return e.$emit("click",l)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},_=[]},82662:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o.N});var o=s(35678)},95642:(A,a,s)=>{"use strict";s.d(a,{Z:()=>o.N});var o=s(84294)},30589:(A,a,s)=>{"use strict";s.d(a,{ZP:()=>o.r});var o=s(23951),_=s(91509),r=s(95573),e=s(43726)}}]);})();

//# sourceMappingURL=talk-files-sidebar-call-chunk.js.map?v=f56e7d42aad13938b316