(()=>{(self.webpackChunktalk=self.webpackChunktalk||[]).push([["files-sidebar-tab-chunk"],{2208:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".chatView[data-v-6d514c3d]{width:100%;height:100%;display:flex;flex-direction:column;flex-grow:1;min-height:0}.dragover[data-v-6d514c3d]{position:absolute;top:10%;left:10%;width:80%;height:80%;background:var(--color-primary-element-light);z-index:11;display:flex;box-shadow:0 0 36px var(--color-box-shadow);border-radius:var(--border-radius);opacity:90%;pointer-events:none}.drop-hint[data-v-6d514c3d]{margin:auto}.drop-hint__icon[data-v-6d514c3d]{background-size:48px;height:48px;margin-bottom:16px}.scroll-to-bottom[data-v-6d514c3d]{position:relative;height:0}.scroll-to-bottom__button[data-v-6d514c3d]{position:absolute !important;bottom:8px;right:24px;z-index:2}","",{version:3,sources:["webpack://./src/components/ChatView.vue"],names:[],mappings:"AACA,2BACC,UAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CAGD,2BACC,iBAAA,CACA,OAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,6CAAA,CACA,UAAA,CACA,YAAA,CACA,2CAAA,CACA,kCAAA,CACA,WAAA,CACA,mBAAA,CAGD,4BACC,WAAA,CACA,kCACC,oBAAA,CACA,WAAA,CACA,kBAAA,CAIF,mCACC,iBAAA,CACA,QAAA,CAEA,2CACC,4BAAA,CACA,UAAA,CACA,UAAA,CACA,SAAA",sourcesContent:[`
.chatView {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	min-height: 0;
}

.dragover {
	position: absolute;
	top: 10%;
	left: 10%;
	width: 80%;
	height: 80%;
	background: var(--color-primary-element-light);
	z-index: 11;
	display: flex;
	box-shadow: 0 0 36px var(--color-box-shadow);
	border-radius: var(--border-radius);
	opacity: 90%;
	pointer-events: none;
}

.drop-hint {
	margin: auto;
	&__icon {
		background-size: 48px;
		height: 48px;
		margin-bottom: 16px;
	}
}

.scroll-to-bottom {
	position: relative;
	height: 0;

	&__button {
		position: absolute !important;
		bottom: 8px;
		right: 24px;
		z-index: 2;
	}
}
`],sourceRoot:""}]);const F=A},16963:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".modal__content[data-v-525010ac]{padding:calc(var(--default-grid-baseline)*4);background-color:var(--color-main-background);margin:0px 12px}.conversation-information[data-v-525010ac]{margin-top:5px;display:flex;flex-direction:column;align-items:center}.description[data-v-525010ac]{margin-bottom:12px}.username-form__input[data-v-525010ac]{margin-bottom:20px}.submit-button[data-v-525010ac]{margin:0 auto}","",{version:3,sources:["webpack://./src/components/GuestWelcomeWindow.vue"],names:[],mappings:"AACA,iCACC,4CAAA,CACA,6CAAA,CACA,eAAA,CAGD,2CACC,cAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CAGD,8BACC,kBAAA,CAGD,uCACC,kBAAA,CAGD,gCACC,aAAA",sourcesContent:[`
.modal__content {
	padding: calc(var(--default-grid-baseline) * 4);
	background-color: var(--color-main-background);
	margin: 0px 12px;
}

.conversation-information {
	margin-top: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.description {
	margin-bottom: 12px;
}

.username-form__input {
	margin-bottom: 20px;
}

.submit-button {
	margin: 0 auto;
}
`],sourceRoot:""}]);const F=A},87278:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".media-devices-selector[data-v-ebebf45e]{display:flex;margin:16px 0}.media-devices-selector__icon[data-v-ebebf45e]{display:flex;justify-content:flex-start;align-items:center;width:36px}.media-devices-selector__heading[data-v-ebebf45e]{font-weight:bold}.media-devices-selector[data-v-ebebf45e] .v-select.select{width:100%}","",{version:3,sources:["webpack://./src/components/MediaSettings/MediaDevicesSelector.vue"],names:[],mappings:"AACA,yCACC,YAAA,CACA,aAAA,CACA,+CACC,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,UAAA,CAED,kDACC,gBAAA,CAGD,0DACC,UAAA",sourcesContent:[`
.media-devices-selector {
	display: flex;
	margin: 16px 0;
	&__icon {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 36px;
	}
	&__heading {
		font-weight: bold;
	}

	:deep(.v-select.select) {
		width: 100%;
	}
}
`],sourceRoot:""}]);const F=A},97698:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".media-devices-checker[data-v-4c7334b4]{display:flex;margin:16px 0}.media-devices-checker__icon[data-v-4c7334b4]{display:flex;justify-content:flex-start;align-items:center;width:36px}.media-devices-checker .equalizer[data-v-4c7334b4]{margin-left:8px;height:var(--default-clickable-area);display:flex;align-items:center}.media-devices-checker .equalizer__bar[data-v-4c7334b4]{width:8px;height:100%;background:var(--color-primary-element);border-radius:4px;margin:0 2px;will-change:height;animation:equalizer-4c7334b4 2s steps(15, end) infinite}@keyframes equalizer-4c7334b4{0%{height:61%}4%{height:43%}8%{height:44%}12%{height:49%}16%{height:82%}20%{height:39%}24%{height:35%}28%{height:30%}32%{height:33%}36%{height:50%}40%{height:80%}44%{height:49%}48%{height:30%}52%{height:55%}56%{height:25%}60%{height:37%}}","",{version:3,sources:["webpack://./src/components/MediaSettings/MediaDevicesSpeakerTest.vue"],names:[],mappings:"AACA,wCACC,YAAA,CACA,aAAA,CAEA,8CACC,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,UAAA,CAGD,mDACC,eAAA,CACA,oCAAA,CACA,YAAA,CACA,kBAAA,CAEA,wDACC,SAAA,CACA,WAAA,CACA,uCAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,uDAAA,CAKH,8BAEE,GAAA,UAAA,CAAA,GAAA,UAAA,CAAA,GAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA",sourcesContent:[`
.media-devices-checker {
	display: flex;
	margin: 16px 0;

	&__icon {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 36px;
	}

	.equalizer {
		margin-left: 8px;
		height: var(--default-clickable-area);
		display: flex;
		align-items: center;

		&__bar {
			width: 8px;
			height: 100%;
			background: var(--color-primary-element);
			border-radius: 4px;
			margin: 0 2px;
			will-change: height;
			animation: equalizer 2s steps(15, end) infinite;
		}
	}
}

@keyframes equalizer {
	@for $i from 0 through 15 {
		#{4*$i}% { height: random(70) + 20%; }
	}
}
`],sourceRoot:""}]);const F=A},34701:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".media-settings[data-v-7e02ecb2]{padding:calc(var(--default-grid-baseline)*5);padding-bottom:0}.media-settings__title[data-v-7e02ecb2]{text-align:center}.media-settings__preview[data-v-7e02ecb2]{position:relative;margin:0 auto calc(var(--default-grid-baseline)*3);display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:calc(var(--default-grid-baseline)*3);background-color:var(--color-loading-dark);width:100%;aspect-ratio:4/3}.media-settings__preview>.media-settings__preview-mirror[data-v-7e02ecb2]{position:absolute;top:var(--default-grid-baseline);right:var(--default-grid-baseline)}.media-settings__toggles-wrapper[data-v-7e02ecb2]{width:100%;display:flex;justify-content:center;position:relative;height:calc(var(--default-grid-baseline)*4)}.media-settings__toggles[data-v-7e02ecb2]{display:flex;position:absolute;top:calc(var(--default-grid-baseline)*-9);background:var(--color-main-background);border-radius:var(--border-radius-pill);box-shadow:0 0 var(--default-grid-baseline) var(--color-box-shadow)}.media-settings__device-selection[data-v-7e02ecb2]{width:100%}.media-settings__call-preferences[data-v-7e02ecb2]{height:var(--default-clickable-area);display:flex;justify-content:center;align-items:center;gap:calc(var(--default-grid-baseline)*2)}.media-settings__call-buttons[data-v-7e02ecb2]{display:flex;z-index:1;align-items:center;justify-content:center;gap:var(--default-grid-baseline);position:sticky;bottom:0;background-color:var(--color-main-background);padding:10px 0 20px}.preview__video[data-v-7e02ecb2]{max-width:100%;object-fit:contain;max-height:100%}.preview__video--mirrored[data-v-7e02ecb2]{transform:none !important}.preview__novideo[data-v-7e02ecb2]{display:flex;align-items:center;justify-content:center;overflow:hidden;width:100%}.call-button[data-v-7e02ecb2]{display:flex;justify-content:center;align-items:center}.checkbox[data-v-7e02ecb2]{display:flex;justify-content:center;margin:calc(var(--default-grid-baseline)*2)}.checkbox--warning[data-v-7e02ecb2]:focus-within .checkbox-radio-switch__label,.checkbox--warning[data-v-7e02ecb2] .checkbox-radio-switch__label:hover{background-color:var(--note-background) !important}[data-v-7e02ecb2] .modal-wrapper--normal > .modal-container{max-width:500px !important}","",{version:3,sources:["webpack://./src/components/MediaSettings/MediaSettings.vue"],names:[],mappings:"AACA,iCACC,4CAAA,CACA,gBAAA,CAEA,wCACC,iBAAA,CAGD,0CACC,iBAAA,CACA,kDAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,kDAAA,CACA,0CAAA,CACA,UAAA,CACA,gBAAA,CAGD,0EACC,iBAAA,CACA,gCAAA,CACA,kCAAA,CAGD,kDACC,UAAA,CACA,YAAA,CACA,sBAAA,CACA,iBAAA,CACA,2CAAA,CAGD,0CACC,YAAA,CACA,iBAAA,CACA,yCAAA,CACA,uCAAA,CACA,uCAAA,CACA,mEAAA,CAGD,mDACC,UAAA,CAGD,mDACC,oCAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,wCAAA,CAGD,+CACC,YAAA,CACA,SAAA,CACA,kBAAA,CACA,sBAAA,CACA,gCAAA,CACA,eAAA,CACA,QAAA,CACA,6CAAA,CACA,mBAAA,CAKD,iCACC,cAAA,CACA,kBAAA,CACA,eAAA,CAEA,2CACC,yBAAA,CAIF,mCACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,UAAA,CAIF,8BACC,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,2BACC,YAAA,CACA,sBAAA,CACA,2CAAA,CAGC,uJAEC,kDAAA,CAKH,4DACC,0BAAA",sourcesContent:[`
.media-settings {
	padding: calc(var(--default-grid-baseline) * 5);
	padding-bottom: 0;

	&__title {
		text-align: center;
	}

	&__preview {
		position: relative;
		margin: 0 auto calc(var(--default-grid-baseline) * 3);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: calc(var(--default-grid-baseline) * 3);
		background-color: var(--color-loading-dark);
		width: 100%;
		aspect-ratio: 4/3;
	}

	&__preview > &__preview-mirror {
		position: absolute;
		top: var(--default-grid-baseline);
		right: var(--default-grid-baseline);
	}

	&__toggles-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		position: relative;
		height: calc(var(--default-grid-baseline) * 4);
	}

	&__toggles {
		display: flex;
		position: absolute;
		top: calc(var(--default-grid-baseline) * -9);
		background: var(--color-main-background);
		border-radius: var(--border-radius-pill);
		box-shadow: 0 0 var(--default-grid-baseline) var(--color-box-shadow);
	}

	&__device-selection {
		width: 100%;
	}

	&__call-preferences {
		height: var(--default-clickable-area);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: calc(var(--default-grid-baseline) * 2);
	}

	&__call-buttons {
		display: flex;
		z-index: 1;
		align-items: center;
		justify-content: center;
		gap: var(--default-grid-baseline);
		position: sticky;
		bottom: 0;
		background-color: var(--color-main-background);
		padding: 10px 0 20px;
	}
}

.preview {
	&__video {
		max-width: 100%;
		object-fit: contain;
		max-height: 100%;

		&--mirrored {
			transform: none !important;
		}
	}

	&__novideo {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		width: 100%;
	}
}

.call-button {
	display: flex;
	justify-content: center;
	align-items: center;
}

.checkbox {
	display: flex;
	justify-content: center;
	margin: calc(var(--default-grid-baseline) * 2);

	&--warning {
		&:focus-within :deep(.checkbox-radio-switch__label),
		& :deep(.checkbox-radio-switch__label:hover) {
			background-color: var(--note-background) !important;
		}
	}
}

:deep(.modal-wrapper--normal > .modal-container) {
	max-width: 500px !important;
}
`],sourceRoot:""}]);const F=A},42017:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".background-editor[data-v-fbae5de0]{display:grid;grid-template-columns:repeat(4, 1fr);gap:calc(var(--default-grid-baseline)*2);margin-top:calc(var(--default-grid-baseline)*2)}.background-editor__element[data-v-fbae5de0]{border:none;margin:0 !important;border-radius:calc(var(--border-radius-large)*1.5);height:calc(var(--default-grid-baseline)*16);display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(28,175,255,.1803921569);background-size:cover;background-position:center;flex:1 0 108px}.background-editor__element--selected[data-v-fbae5de0]{box-shadow:inset 0 0 0 var(--default-grid-baseline) var(--color-primary-element)}","",{version:3,sources:["webpack://./src/components/MediaSettings/VideoBackgroundEditor.vue"],names:[],mappings:"AACA,oCACC,YAAA,CACA,oCAAA,CACA,wCAAA,CACA,+CAAA,CAEA,6CACC,WAAA,CACA,mBAAA,CACA,kDAAA,CACA,4CAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,6CAAA,CACA,qBAAA,CACA,0BAAA,CACA,cAAA,CAEA,uDACC,gFAAA",sourcesContent:[`
.background-editor {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: calc(var(--default-grid-baseline) * 2);
	margin-top: calc(var(--default-grid-baseline) * 2);

	&__element {
		border: none;
		margin: 0 !important;
		border-radius: calc(var(--border-radius-large) * 1.5);
		height: calc(var(--default-grid-baseline) * 16);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #1cafff2e;
		background-size: cover;
		background-position: center;
		flex: 1 0 108px;

		&--selected {
			box-shadow: inset 0 0 0 var(--default-grid-baseline) var(--color-primary-element);
		}
	}
}

`],sourceRoot:""}]);const F=A},34085:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".message[data-v-a09ceeca]{position:relative}.message:hover .normal-message-body[data-v-a09ceeca],.message:hover .combined-system[data-v-a09ceeca],.message--hovered .normal-message-body[data-v-a09ceeca]{border-radius:8px;background-color:var(--color-background-hover)}.message-body[data-v-a09ceeca]{padding:4px 4px 4px 8px;font-size:var(--default-font-size);line-height:var(--default-line-height);position:relative}.message-body__scroll[data-v-a09ceeca]{position:absolute;top:0;right:0;width:fit-content;height:100%;padding:8px 8px 0 0}.message--highlighted[data-v-a09ceeca]{animation:highlight-animation-a09ceeca 5s 1;border-radius:8px}@keyframes highlight-animation-a09ceeca{0%{background-color:var(--color-background-hover)}50%{background-color:var(--color-background-hover)}100%{background-color:rgba(var(--color-background-hover), 0)}}.new-message-marker[data-v-a09ceeca]{position:relative;margin:20px 15px;border-top:1px solid var(--color-border)}.new-message-marker span[data-v-a09ceeca]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(-50%);padding:0 7px 0 7px;text-align:center;white-space:nowrap;color:var(--color-text-light);border-radius:var(--border-radius);background-color:var(--color-main-background)}.message-buttons-bar[data-v-a09ceeca]{display:flex;right:14px;top:8px;position:sticky;background-color:var(--color-main-background);border-radius:calc(var(--default-clickable-area)/2);box-shadow:0 0 4px 0 var(--color-box-shadow);height:44px;z-index:1}.message-buttons-bar h6[data-v-a09ceeca]{margin-left:auto}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/Message.vue"],names:[],mappings:"AACA,0BACC,iBAAA,CAEA,8JAGC,iBAAA,CACA,8CAAA,CAIF,+BACC,uBAAA,CACA,kCAAA,CACA,sCAAA,CACA,iBAAA,CAEA,uCACC,iBAAA,CACA,KAAA,CACA,OAAA,CACA,iBAAA,CACA,WAAA,CACA,mBAAA,CAIF,uCACC,2CAAA,CACA,iBAAA,CAGD,wCACC,GAAA,8CAAA,CACA,IAAA,8CAAA,CACA,KAAA,uDAAA,CAAA,CAGD,qCACC,iBAAA,CACA,gBAAA,CACA,wCAAA,CAEA,0CACC,iBAAA,CACA,KAAA,CACA,QAAA,CACA,2CAAA,CACA,mBAAA,CACA,iBAAA,CACA,kBAAA,CACA,6BAAA,CACA,kCAAA,CACA,6CAAA,CAIF,sCACC,YAAA,CACA,UAAA,CACA,OAAA,CACA,eAAA,CACA,6CAAA,CACA,mDAAA,CACA,4CAAA,CACA,WAAA,CACA,SAAA,CAEA,yCACC,gBAAA",sourcesContent:[`
.message {
	position: relative;

	&:hover .normal-message-body,
	&:hover .combined-system,
	&--hovered .normal-message-body {
		border-radius: 8px;
		background-color: var(--color-background-hover);
	}
}

.message-body {
	padding: 4px 4px 4px 8px;
	font-size: var(--default-font-size);
	line-height: var(--default-line-height);
	position: relative;

	&__scroll {
		position: absolute;
		top: 0;
		right: 0;
		width: fit-content;
		height: 100%;
		padding: 8px 8px 0 0;
	}
}

.message--highlighted {
	animation: highlight-animation 5s 1;
	border-radius: 8px;
}

@keyframes highlight-animation {
	0% { background-color: var(--color-background-hover); }
	50% { background-color: var(--color-background-hover); }
	100% { background-color: rgba(var(--color-background-hover), 0); }
}

.new-message-marker {
	position: relative;
	margin: 20px 15px;
	border-top: 1px solid var(--color-border);

	span {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		padding: 0 7px 0 7px;
		text-align: center;
		white-space: nowrap;
		color: var(--color-text-light);
		border-radius: var(--border-radius);
		background-color: var(--color-main-background);
	}
}

.message-buttons-bar {
	display: flex;
	right: 14px;
	top: 8px;
	position: sticky;
	background-color: var(--color-main-background);
	border-radius: calc(var(--default-clickable-area) / 2);
	box-shadow: 0 0 4px 0 var(--color-box-shadow);
	height: 44px;
	z-index: 1;

	& h6 {
		margin-left: auto;
	}
}
`],sourceRoot:""}]);const F=A},45312:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,'.action--nested[data-v-6bc29d92] .action-button::after{content:" ";width:20px;height:44px;margin-left:auto;background:no-repeat center var(--icon-triangle-e-dark)}.edit-timestamp[data-v-6bc29d92] .action-text__longtext-wrapper{padding:0}',"",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessageButtonsBar/MessageButtonsBar.vue"],names:[],mappings:"AAEC,uDACC,WAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,uDAAA,CAIF,gEACC,SAAA",sourcesContent:[`
.action--nested {
	:deep(.action-button::after) {
		content: " ";
		width: 20px;
		height: 44px;
		margin-left: auto;
		background: no-repeat center var(--icon-triangle-e-dark);
	}
}

.edit-timestamp :deep(.action-text__longtext-wrapper) {
	padding: 0;
}
`],sourceRoot:""}]);const F=A},91359:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,"[data-v-04fd61f8] .empty-content{padding:20px}[data-v-04fd61f8] .empty-content__action{gap:10px}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessageButtonsBar/MessageForwarder.vue"],names:[],mappings:"AAEA,iCACC,YAAA,CAED,yCACC,QAAA",sourcesContent:[`

:deep(.empty-content) {
	padding: 20px;
}
:deep(.empty-content__action) {
	gap: 10px;
}
`],sourceRoot:""}]);const F=A},21730:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".translate-dialog[data-v-36e28070]{position:relative;display:flex;flex-direction:column;min-height:400px;padding:calc(var(--default-grid-baseline)*3);background-color:var(--color-main-background)}.translate-dialog__wrapper[data-v-36e28070]{display:flex;align-items:center;gap:calc(var(--default-grid-baseline)*4);padding:calc(var(--default-grid-baseline)*2)}.translate-dialog .translate-dialog__select[data-v-36e28070]{width:50%}.translate-dialog__button[data-v-36e28070]{flex-shrink:0;margin-left:auto}.translate-dialog__message[data-v-36e28070]{padding:calc(var(--default-grid-baseline)*2);flex-grow:1;border-radius:var(--border-radius-large)}.translate-dialog__message-source[data-v-36e28070]{color:var(--color-text-maxcontrast);margin-bottom:calc(var(--default-grid-baseline)*2);border:2px solid var(--color-border)}.translate-dialog__message-translation[data-v-36e28070]{border:2px solid var(--color-primary-element)}.translate-dialog .translate-dialog__copy-button[data-v-36e28070]{margin-top:calc(var(--default-grid-baseline)*2);align-self:end}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessageButtonsBar/MessageTranslateDialog.vue"],names:[],mappings:"AACA,mCACC,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,gBAAA,CACA,4CAAA,CACA,6CAAA,CAEA,4CACC,YAAA,CACA,kBAAA,CACA,wCAAA,CACA,4CAAA,CAGD,6DACC,SAAA,CAGD,2CACC,aAAA,CACA,gBAAA,CAGD,4CACC,4CAAA,CACA,WAAA,CACA,wCAAA,CAEA,mDACC,mCAAA,CACA,kDAAA,CACA,oCAAA,CAGD,wDACC,6CAAA,CAIF,kEACC,+CAAA,CACA,cAAA",sourcesContent:[`
.translate-dialog {
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 400px;
	padding: calc(var(--default-grid-baseline) * 3);
	background-color: var(--color-main-background);

	&__wrapper {
		display: flex;
		align-items: center;
		gap: calc(var(--default-grid-baseline) * 4);
		padding: calc(var(--default-grid-baseline) * 2);
	}

	& &__select {
		width: 50%;
	}

	&__button {
		flex-shrink: 0;
		margin-left: auto;
	}

	&__message {
		padding: calc(var(--default-grid-baseline) * 2);
		flex-grow: 1;
		border-radius: var(--border-radius-large);

		&-source {
			color: var(--color-text-maxcontrast);
			margin-bottom: calc(var(--default-grid-baseline) * 2);
			border: 2px solid var(--color-border);
		}

		&-translation {
			border: 2px solid var(--color-primary-element);
		}
	}

	& &__copy-button {
		margin-top: calc(var(--default-grid-baseline) * 2);
		align-self: end;
	}
}
`],sourceRoot:""}]);const F=A},99161:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".contact[data-v-d23756a4]{display:flex;transition:box-shadow .1s ease-in-out;border:1px solid var(--color-border);box-shadow:0 0 2px 0 var(--color-box-shadow);border-radius:var(--border-radius-large);font-size:100%;background-color:var(--color-main-background);margin:12px 0;max-width:300px;padding:12px;white-space:nowrap;align-items:center}.contact[data-v-d23756a4]:hover,.contact[data-v-d23756a4]:focus{box-shadow:0 0 5px 0 var(--color-box-shadow)}.contact__image[data-v-d23756a4]{display:inline-block;border-radius:50%;max-width:44px;max-height:44px}.contact__icon[data-v-d23756a4]{display:inline-block;width:44px;height:44px}.contact__lineone[data-v-d23756a4]{height:30px;display:flex;justify-content:flex-start;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.contact__lineone .title[data-v-d23756a4]{margin-left:12px}.icon-contacts[data-v-d23756a4]{opacity:.8}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/Contact.vue"],names:[],mappings:"AACA,0BACC,YAAA,CACA,qCAAA,CACA,oCAAA,CACA,4CAAA,CACA,wCAAA,CACA,cAAA,CACA,6CAAA,CACA,aAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,gEAEC,4CAAA,CAED,iCACC,oBAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CAED,gCACC,oBAAA,CACA,UAAA,CACA,WAAA,CAED,mCACC,WAAA,CACA,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAEA,0CACC,gBAAA,CAKH,gCACC,UAAA",sourcesContent:[`
.contact {
	display: flex;
	transition: box-shadow 0.1s ease-in-out;
	border: 1px solid var(--color-border);
	box-shadow: 0 0 2px 0 var(--color-box-shadow);
	border-radius: var(--border-radius-large);
	font-size: 100%;
	background-color: var(--color-main-background);
	margin: 12px 0;
	max-width: 300px;
	padding: 12px;
	white-space: nowrap;
	align-items: center;
	&:hover,
	&:focus{
		box-shadow: 0 0 5px 0 var(--color-box-shadow);
	}
	&__image {
		display: inline-block;
		border-radius: 50%;
		max-width: 44px;
		max-height: 44px;
	}
	&__icon {
		display: inline-block;
		width: 44px;
		height: 44px;
	}
	&__lineone {
		height: 30px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

		.title {
			margin-left: 12px;
		}
	}
}

.icon-contacts {
	opacity: .8;
}

`],sourceRoot:""}]);const F=A},69726:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".deck-card[data-v-6411757a]{display:flex;border:2px solid var(--color-border);border-radius:var(--border-radius-large);font-size:100%;background-color:var(--color-main-background);max-width:300px;padding:8px 16px;flex-direction:column;white-space:nowrap;transition:border-color .1s ease-in-out}.deck-card[data-v-6411757a]:hover,.deck-card[data-v-6411757a]:focus,.deck-card[data-v-6411757a]:focus-visible{border-color:var(--color-primary-element);outline:none}.deck-card__lineone[data-v-6411757a]{height:30px;display:flex;justify-content:flex-start;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.deck-card__lineone .title[data-v-6411757a]{margin-left:8px}.deck-card__linetwo[data-v-6411757a]{height:30px;color:var(--color-text-maxcontrast);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.icon-deck[data-v-6411757a]{opacity:.8}.wide[data-v-6411757a]{max-width:400px;width:100%}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/DeckCard.vue"],names:[],mappings:"AACA,4BACC,YAAA,CACA,oCAAA,CACA,wCAAA,CACA,cAAA,CACA,6CAAA,CACA,eAAA,CACA,gBAAA,CACA,qBAAA,CACA,kBAAA,CACA,uCAAA,CAEA,8GAGC,yCAAA,CACA,YAAA,CAGD,qCACC,WAAA,CACA,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAEA,4CACC,eAAA,CAIF,qCACC,WAAA,CACA,mCAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAIF,4BACC,UAAA,CAGD,uBACC,eAAA,CACA,UAAA",sourcesContent:[`
.deck-card {
	display: flex;
	border: 2px solid var(--color-border);
	border-radius: var(--border-radius-large);
	font-size: 100%;
	background-color: var(--color-main-background);
	max-width: 300px;
	padding: 8px 16px;
	flex-direction: column;
	white-space: nowrap;
	transition: border-color 0.1s ease-in-out;

	&:hover,
	&:focus,
	&:focus-visible {
		border-color: var(--color-primary-element);
		outline: none;
	}

	&__lineone {
		height: 30px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

		.title {
			margin-left: 8px;
		}
	}

	&__linetwo {
		height: 30px;
		color: var(--color-text-maxcontrast);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}

.icon-deck {
	opacity: .8;
}

.wide {
	max-width: 400px;
	width: 100%;
}

`],sourceRoot:""}]);const F=A},71834:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".location[data-v-46aa7f57]{display:flex;flex-direction:column;position:relative;z-index:1;white-space:initial;overflow:hidden;border-radius:var(--border-radius-large);height:300px;max-height:30vh;margin:4px;transition:outline .1s ease-in-out}.location[data-v-46aa7f57]:hover,.location[data-v-46aa7f57]:focus,.location[data-v-46aa7f57]:focus-visible{outline:2px solid var(--color-primary-element)}.location.wide[data-v-46aa7f57]{width:100%;height:100%;margin:0}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/Location.vue"],names:[],mappings:"AACA,2BACC,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,SAAA,CACA,mBAAA,CACA,eAAA,CACA,wCAAA,CACA,YAAA,CACA,eAAA,CACA,UAAA,CACA,kCAAA,CAEA,2GAGC,8CAAA,CAGD,gCACC,UAAA,CACA,WAAA,CACA,QAAA",sourcesContent:[`
.location {
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 1;
	white-space: initial;
	overflow: hidden;
	border-radius: var(--border-radius-large);
	height: 300px;
	max-height: 30vh;
	margin: 4px;
	transition: outline 0.1s ease-in-out;

	&:hover,
	&:focus,
	&:focus-visible {
		outline: 2px solid var(--color-primary-element);
	}

	&.wide {
		width: 100%;
		height: 100%;
		margin: 0;
	}
}
`],sourceRoot:""}]);const F=A},66488:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".mention[data-v-45a8eb1a]{display:contents;white-space:nowrap}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/Mention.vue"],names:[],mappings:"AACA,0BACC,gBAAA,CACA,kBAAA",sourcesContent:[`
.mention {
	display: contents;
	white-space: nowrap;
}
`],sourceRoot:""}]);const F=A},59664:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".message-main[data-v-6b067cad]{display:flex;justify-content:space-between;align-items:flex-start;min-width:100%}.message-main__text[data-v-6b067cad]{flex:0 1 600px;width:100%;min-width:0;max-width:600px;color:var(--color-text-light)}.message-main__text>.single-emoji[data-v-6b067cad]{font-size:250%;line-height:100%}.message-main__text.system-message[data-v-6b067cad]{color:var(--color-text-maxcontrast);text-align:center;padding:0 20px}.message-main__text.message-highlighted[data-v-6b067cad]{color:var(--color-text-light);background-color:var(--color-primary-element-light);padding:10px;border-radius:var(--border-radius-large);text-align:center}.message-main__text.deleted-message[data-v-6b067cad]{display:flex;align-items:center;color:var(--color-text-maxcontrast)}.message-main__text.deleted-message[data-v-6b067cad] .rich-text--wrapper{flex-grow:1;text-align:start}.message-main__text.markdown-message[data-v-6b067cad]{position:relative}.message-main__text.markdown-message .message-copy-code[data-v-6b067cad]{position:absolute;top:0;right:4px;margin-top:4px;background-color:var(--color-background-dark)}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper{text-align:start}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper h4{font-size:100%}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper em{font-style:italic}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper ul,.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper ol{padding-left:0;padding-inline-start:15px}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper ul.contains-task-list,.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper ol.contains-task-list{padding:0}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper input:disabled+.checkbox-content{opacity:1 !important;pointer-events:none !important}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper div:has(table){overflow-x:auto}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper pre{padding:4px;margin:2px 0;border-radius:var(--border-radius);background-color:var(--color-background-dark);overflow-x:auto}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper pre code{margin:0;padding:0}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper code{display:inline-block;padding:2px 4px;margin:2px 0;border-radius:var(--border-radius);background-color:var(--color-background-dark)}.message-main__text.markdown-message[data-v-6b067cad] .rich-text--wrapper blockquote{padding-left:0;padding-inline-start:13px;border-left:none;border-inline-start:4px solid var(--color-border)}.message-main__info[data-v-6b067cad]{justify-self:flex-start;justify-content:flex-end;position:relative;user-select:none;display:flex;color:var(--color-text-maxcontrast);font-size:var(--default-font-size);flex:1 0 auto;padding:0 8px 0 8px}.message-main__info .date--hidden[data-v-6b067cad]{pointer-events:none;opacity:0}.message-main__info .date[data-v-6b067cad]:last-child{margin-right:var(--default-clickable-area)}.message-status[data-v-6b067cad]{width:var(--default-clickable-area);height:24px;display:flex;justify-content:center;align-items:center}.message-status.retry-option[data-v-6b067cad]{cursor:pointer}[data-v-6b067cad] .rich-text--component{direction:ltr}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/MessageBody.vue","webpack://./src/assets/markdown.scss"],names:[],mappings:"AAGA,+BACC,YAAA,CACA,6BAAA,CACA,sBAAA,CACA,cAAA,CAEA,qCACC,cAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,6BAAA,CAEA,mDACC,cAAA,CACA,gBAAA,CAGD,oDACC,mCAAA,CACA,iBAAA,CACA,cAAA,CAGD,yDACC,6BAAA,CACA,mDAAA,CACA,YAAA,CACA,wCAAA,CACA,iBAAA,CAGD,qDACC,YAAA,CACA,kBAAA,CACA,mCAAA,CACA,yEACC,WAAA,CACA,gBAAA,CAIF,sDACC,iBAAA,CAEA,yEACC,iBAAA,CACA,KAAA,CACA,SAAA,CACA,cAAA,CACA,6CAAA,CAGD,0EACC,gBAAA,CCpCH,6EACC,cAAA,CAGD,6EACC,iBAAA,CAGD,0JAEC,cAAA,CACA,yBAAA,CAEA,gMACC,SAAA,CAIF,2GACC,oBAAA,CACA,8BAAA,CAGD,yFACC,eAAA,CAGD,8EACC,WAAA,CACA,YAAA,CACA,kCAAA,CACA,6CAAA,CACA,eAAA,CAEA,mFACC,QAAA,CACA,SAAA,CAIF,+EACC,oBAAA,CACA,eAAA,CACA,YAAA,CACA,kCAAA,CACA,6CAAA,CAGD,qFACC,cAAA,CACA,yBAAA,CACA,gBAAA,CACA,iDAAA,CDVD,qCACC,uBAAA,CACA,wBAAA,CACA,iBAAA,CACA,gBAAA,CACA,YAAA,CACA,mCAAA,CACA,kCAAA,CACA,aAAA,CACA,mBAAA,CAGC,mDACC,mBAAA,CACA,SAAA,CAGD,sDACC,0CAAA,CAMJ,iCACC,mCAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,8CACC,cAAA,CAKF,wCACC,aAAA",sourcesContent:[`
@import '../../../../../assets/markdown';

.message-main {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	min-width: 100%;

	&__text {
		flex: 0 1 600px;
		width: 100%;
		min-width: 0;
		max-width: 600px;
		color: var(--color-text-light);

		& > .single-emoji {
			font-size: 250%;
			line-height: 100%;
		}

		&.system-message {
			color: var(--color-text-maxcontrast);
			text-align: center;
			padding: 0 20px;
		}

		&.message-highlighted {
			color: var(--color-text-light);
			background-color: var(--color-primary-element-light);
			padding: 10px;
			border-radius: var(--border-radius-large);
			text-align: center;
		}

		&.deleted-message {
			display: flex;
			align-items: center;
			color: var(--color-text-maxcontrast);
			:deep(.rich-text--wrapper) {
				flex-grow: 1;
				text-align: start;
			}
		}

		&.markdown-message {
			position: relative;

			.message-copy-code {
				position: absolute;
				top: 0;
				right: 4px;
				margin-top: 4px;
				background-color: var(--color-background-dark);
			}

			:deep(.rich-text--wrapper) {
				text-align: start;
				@include markdown;
			}
		}
	}

	&__info {
		justify-self: flex-start;
		justify-content: flex-end;
		position: relative;
		user-select: none;
		display: flex;
		color: var(--color-text-maxcontrast);
		font-size: var(--default-font-size);
		flex: 1 0 auto;
		padding: 0 8px 0 8px;

		.date {
			&--hidden {
				pointer-events: none;
				opacity: 0;
			}

			&:last-child {
				margin-right: var(--default-clickable-area);
			}
		}
	}
}

.message-status {
	width: var(--default-clickable-area);
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;

	&.retry-option {
		cursor: pointer;
	}
}

// Hardcode to prevent RTL affecting on user mentions
:deep(.rich-text--component) {
	direction: ltr;
}
`,`/*
 * @copyright Copyright (c) 2024 Maksim Sukharev <antreesy.web@gmail.com>
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
 */

@mixin markdown {
	// Overwrite core styles, otherwise h4 is lesser than default font-size
	h4 {
		font-size: 100%;
	}

	em {
		font-style: italic;
	}

	ul,
	ol {
		padding-left: 0;
		padding-inline-start: 15px;

		&.contains-task-list {
			padding: 0;
		}
	}

	input:disabled + .checkbox-content {
		opacity: 1 !important;
		pointer-events: none !important;
	}

	div:has(table) {
		overflow-x: auto;
	}

	pre {
		padding: 4px;
		margin: 2px 0;
		border-radius: var(--border-radius);
		background-color: var(--color-background-dark);
		overflow-x: auto;

		& code {
			margin: 0;
			padding: 0;
		}
	}

	code {
		display: inline-block;
		padding: 2px 4px;
		margin: 2px 0;
		border-radius: var(--border-radius);
		background-color: var(--color-background-dark);
	}

	blockquote {
		padding-left: 0;
		padding-inline-start: 13px;
		border-left: none;
		border-inline-start: 4px solid var(--color-border);
	}
}
`],sourceRoot:""}]);const F=A},71632:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".poll-card[data-v-0ad85c26]{display:block;max-width:300px;padding:16px;border:2px solid var(--color-border);border-radius:var(--border-radius-large);background:var(--color-main-background);transition:border-color .1s ease-in-out}.poll-card[data-v-0ad85c26]:hover,.poll-card[data-v-0ad85c26]:focus,.poll-card[data-v-0ad85c26]:focus-visible{border-color:var(--color-primary-element);outline:none}.poll-card__header[data-v-0ad85c26]{display:flex;align-items:flex-start;gap:8px;margin-bottom:16px;font-weight:bold;white-space:normal;word-wrap:anywhere}.poll-card__header[data-v-0ad85c26] .material-design-icon{margin-bottom:auto}.poll-card__footer[data-v-0ad85c26]{color:var(--color-text-maxcontrast);white-space:normal}.poll-closed[data-v-0ad85c26]{margin:4px auto}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/Poll.vue"],names:[],mappings:"AACA,4BACC,aAAA,CACA,eAAA,CACA,YAAA,CACA,oCAAA,CACA,wCAAA,CACA,uCAAA,CACA,uCAAA,CAEA,8GAGC,yCAAA,CACA,YAAA,CAGD,oCACC,YAAA,CACA,sBAAA,CACA,OAAA,CACA,kBAAA,CACA,gBAAA,CACA,kBAAA,CACA,kBAAA,CAEA,0DACC,kBAAA,CAIF,oCACC,mCAAA,CACA,kBAAA,CAIF,8BACC,eAAA",sourcesContent:[`
.poll-card {
	display: block;
	max-width: 300px;
	padding: 16px;
	border: 2px solid var(--color-border);
	border-radius: var(--border-radius-large);
	background: var(--color-main-background);
	transition: border-color 0.1s ease-in-out;

	&:hover,
	&:focus,
	&:focus-visible {
		border-color: var(--color-primary-element);
		outline: none;
	}

	&__header {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		margin-bottom: 16px;
		font-weight: bold;
		white-space: normal;
		word-wrap: anywhere;

		:deep(.material-design-icon) {
			margin-bottom: auto;
		}
	}

	&__footer {
		color: var(--color-text-maxcontrast);
		white-space: normal;
	}
}

.poll-closed {
	margin: 4px auto;
}
`],sourceRoot:""}]);const F=A},37973:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".reactions-wrapper[data-v-06fb7962]{display:flex;flex-wrap:wrap;margin:4px 175px 4px -2px}.reaction-button[data-v-06fb7962]{min-height:0 !important;margin:2px;height:26px;padding:0 6px !important}.reaction-button[data-v-06fb7962] .button-vue__text{font-weight:normal}.reaction-details[data-v-06fb7962]{padding:8px;max-width:250px}.details-loading[data-v-06fb7962]{display:flex;justify-content:center;width:38px}.more-reactions-button[data-v-06fb7962]{text-decoration:underline}.more-reactions-button[data-v-06fb7962]:hover{text-decoration:none}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/Reactions.vue"],names:[],mappings:"AACA,oCACC,YAAA,CACA,cAAA,CACA,yBAAA,CAED,kCAEC,uBAAA,CACA,UAAA,CACA,WAAA,CACA,wBAAA,CAEA,oDACC,kBAAA,CAIF,mCACC,WAAA,CACA,eAAA,CAGD,kCACC,YAAA,CACA,sBAAA,CACA,UAAA,CAGD,wCACC,yBAAA,CACA,8CACC,oBAAA",sourcesContent:[`
.reactions-wrapper {
	display: flex;
	flex-wrap: wrap;
	margin: 4px 175px 4px -2px;
}
.reaction-button {
	// Clear server rules
	min-height: 0 !important;
	margin: 2px;
	height: 26px;
	padding: 0 6px !important;

	:deep(.button-vue__text) {
		font-weight: normal;
	}
}

.reaction-details {
	padding: 8px;
	max-width: 250px;
}

.details-loading {
	display: flex;
	justify-content: center;
	width: 38px;
}

.more-reactions-button {
	text-decoration: underline;
	&:hover {
		text-decoration: none;
	}
}
`],sourceRoot:""}]);const F=A},625:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".reactions__modal[data-v-51a8af7c]{min-height:450px;padding:18px}.reactions-list__navigation[data-v-51a8af7c]{display:flex;gap:2px;flex-wrap:wrap}.reactions-list__navigation[data-v-51a8af7c] .button-vue{border-radius:var(--border-radius-large)}.reactions-list__navigation[data-v-51a8af7c] .button-vue.active{background-color:var(--color-primary-element-light)}.all-reactions__button[data-v-51a8af7c] .button-vue__text{display:inline-flex;gap:4px}.reactions-list__scrollable[data-v-51a8af7c]{overflow-y:auto;overflow-x:hidden;height:327px}.reactions-item[data-v-51a8af7c]{display:flex;align-items:center;gap:8px;width:100%;padding:6px 0}.reactions-item__name[data-v-51a8af7c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.reactions-item__emojis[data-v-51a8af7c]{margin-left:auto;max-width:180px;direction:rtl;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;position:relative}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/ReactionsList.vue"],names:[],mappings:"AACA,mCACC,gBAAA,CACA,YAAA,CAED,6CACC,YAAA,CACA,OAAA,CACA,cAAA,CAEA,yDACC,wCAAA,CACA,gEACC,mDAAA,CAKH,0DACC,mBAAA,CACA,OAAA,CAGD,6CACC,eAAA,CACA,iBAAA,CACA,YAAA,CAGD,iCACC,YAAA,CACA,kBAAA,CACA,OAAA,CACA,UAAA,CACA,aAAA,CAEA,uCACC,kBAAA,CACA,eAAA,CACA,sBAAA,CAGD,yCACC,gBAAA,CACA,eAAA,CACA,aAAA,CACA,mBAAA,CACA,oBAAA,CACA,2BAAA,CACA,eAAA,CACA,iBAAA",sourcesContent:[`
.reactions__modal{
	min-height: 450px;
	padding: 18px;
}
.reactions-list__navigation {
	display: flex;
	gap: 2px;
	flex-wrap: wrap;

	:deep(.button-vue) {
		border-radius: var(--border-radius-large);
		&.active {
			background-color: var(--color-primary-element-light);
		}
	}
}

.all-reactions__button :deep(.button-vue__text) {
	display: inline-flex;
	gap: 4px;
}

.reactions-list__scrollable {
	overflow-y: auto;
	overflow-x: hidden;
	height: calc(450px - 123px); // 123px is the height of the header 105px and the footer 18px
}

.reactions-item {
	display: flex;
	align-items: center;
	gap: 8px;
	width: 100%;
	padding: 6px 0;

	&__name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&__emojis {
		margin-left: auto;
		max-width: 180px;
		direction: rtl;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		position: relative;
	}
}
`],sourceRoot:""}]);const F=A},5450:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".wrapper[data-v-751d2045]{max-width:800px;display:flex;margin:auto;padding:0}.wrapper[data-v-751d2045]:focus{background-color:rgba(47,47,47,.068)}.messages[data-v-751d2045]{flex:auto;display:flex;padding:8px 0 8px 0;flex-direction:column;width:100%;min-width:0}.messages__avatar[data-v-751d2045]{position:sticky;top:0;height:52px;width:52px;padding:18px 10px 10px 10px}.messages__author[data-v-751d2045]{display:flex;gap:4px;max-width:600px;padding:4px 0 0 8px;color:var(--color-text-maxcontrast)}.messages__author-name[data-v-751d2045]{flex-shrink:0}.messages__author-edit[data-v-751d2045],.messages__author-server[data-v-751d2045]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/MessagesGroup.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,0BACC,eCmByB,CDlBzB,YAAA,CACA,WAAA,CACA,SAAA,CAEA,gCACC,oCAAA,CAIF,2BACC,SAAA,CACA,YAAA,CACA,mBAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CAEA,mCACC,eAAA,CACA,KAAA,CACA,WAAA,CACA,UAAA,CACA,2BAAA,CAGD,mCACC,YAAA,CACA,OAAA,CACA,eAAA,CACA,mBAAA,CACA,mCAAA,CAEA,wCACC,aAAA,CAGD,kFAEC,kBAAA,CACA,eAAA,CACA,sBAAA",sourcesContent:[`
@import '../../../assets/variables';

.wrapper {
	max-width: $messages-list-max-width;
	display: flex;
	margin: auto;
	padding: 0;

	&:focus {
		background-color: rgba(47, 47, 47, 0.068);
	}
}

.messages {
	flex: auto;
	display: flex;
	padding: 8px 0 8px 0;
	flex-direction: column;
	width: 100%;
	min-width: 0;

	&__avatar {
		position: sticky;
		top: 0;
		height: 52px;
		width: 52px;
		padding: 18px 10px 10px 10px;
	}

	&__author {
		display: flex;
		gap: 4px;
		max-width: 600px;
		padding: 4px 0 0 8px;
		color: var(--color-text-maxcontrast);

		&-name {
			flex-shrink: 0;
		}

		&-edit,
		&-server {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
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
`],sourceRoot:""}]);const F=A},52055:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".messages-group__system[data-v-bde8b61a]{display:flex;flex-direction:column}.wrapper[data-v-bde8b61a]{max-width:800px;display:flex;margin:auto;padding:0}.wrapper--system[data-v-bde8b61a]{flex-direction:column;padding-left:calc(var(--default-clickable-area) + 8px)}.wrapper[data-v-bde8b61a]:focus{background-color:rgba(47,47,47,.068)}.messages[data-v-bde8b61a]{flex:auto;display:flex;flex-direction:column;width:100%;min-width:0}.messages--collapsed[data-v-bde8b61a]{border-radius:var(--border-radius-large);background-color:var(--color-background-hover)}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/MessagesSystemGroup.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,yCACC,YAAA,CACA,qBAAA,CAGD,0BACC,eCcyB,CDbzB,YAAA,CACA,WAAA,CACA,SAAA,CACA,kCACC,qBAAA,CACA,sDAAA,CAED,gCACC,oCAAA,CAIF,2BACC,SAAA,CACA,YAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CAIA,sCACC,wCAAA,CACA,8CAAA",sourcesContent:[`
@import '../../../assets/variables';

.messages-group__system {
	display: flex;
	flex-direction: column;
}

.wrapper {
	max-width: $messages-list-max-width;
	display: flex;
	margin: auto;
	padding: 0;
	&--system {
		flex-direction: column;
		padding-left: calc(var(--default-clickable-area) + 8px);
	}
	&:focus {
		background-color: rgba(47, 47, 47, 0.068);
	}
}

.messages {
	flex: auto;
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 0;

	&--header {
	}
	&--collapsed {
		border-radius: var(--border-radius-large);
		background-color: var(--color-background-hover);
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
`],sourceRoot:""}]);const F=A},23947:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".scroller[data-v-7c21abd7]{position:relative;flex:1 0;padding-top:20px;overflow-y:scroll;overflow-x:hidden;border-bottom:1px solid var(--color-border);transition:all var(--animation-quick, 100ms) ease-in-out}.scroller--chatScrolledToBottom[data-v-7c21abd7]{border-bottom-color:rgba(0,0,0,0)}.scroller__loading[data-v-7c21abd7]{height:40px;transform:translatex(-64px)}.messages-list__placeholder[data-v-7c21abd7]{display:flex;flex-direction:column-reverse;overflow:hidden;height:100%}.messages-list__empty-content[data-v-7c21abd7]{height:100%}.messages-group__date[data-v-7c21abd7]{position:sticky;top:0;display:flex;justify-content:center;z-index:2;margin-bottom:5px}.messages-group__date-text[data-v-7c21abd7]{margin-right:calc(var(--default-clickable-area)*2);content:attr(data-date);padding:4px 12px;left:50%;color:var(--color-text-maxcontrast);background-color:var(--color-background-dark);border-radius:var(--border-radius-pill)}.messages-group[data-v-7c21abd7]:last-child{margin-bottom:16px}.has-sticky .messages-group__date[data-v-7c21abd7]{transition:opacity .3s ease-in-out;transition-delay:2s;opacity:0}.scroller--isScrolling .has-sticky .messages-group__date[data-v-7c21abd7]{opacity:1;transition:opacity 0s}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesList.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,2BACC,iBAAA,CACA,QAAA,CACA,gBAAA,CACA,iBAAA,CACA,iBAAA,CACA,2CAAA,CACA,wDC2BY,CDzBZ,iDACC,iCAAA,CAGD,oCACC,WAAA,CACA,2BAAA,CAKD,6CACC,YAAA,CACA,6BAAA,CACA,eAAA,CACA,WAAA,CAGD,+CACC,WAAA,CAKD,uCACC,eAAA,CACA,KAAA,CACA,YAAA,CACA,sBAAA,CACA,SAAA,CACA,iBAAA,CAGD,4CACC,kDAAA,CACA,uBAAA,CACA,gBAAA,CACA,QAAA,CACA,mCAAA,CACA,6CAAA,CACA,uCAAA,CAGD,4CACC,kBAAA,CAIF,mDACC,kCAAA,CACA,mBAAA,CACA,SAAA,CAGD,0EACC,SAAA,CACA,qBAAA",sourcesContent:[`
@import '../../assets/variables';

.scroller {
	position: relative;
	flex: 1 0;
	padding-top: 20px;
	overflow-y: scroll;
	overflow-x: hidden;
	border-bottom: 1px solid var(--color-border);
	transition: $transition;

	&--chatScrolledToBottom {
		border-bottom-color: transparent;
	}

	&__loading {
		height: 40px;
		transform: translatex(-64px);
	}
}

.messages-list {
	&__placeholder {
		display: flex;
		flex-direction: column-reverse;
		overflow: hidden;
		height: 100%;
	}

	&__empty-content {
		height: 100%;
	}
}

.messages-group {
	&__date {
		position: sticky;
		top: 0;
		display: flex;
		justify-content: center;
		z-index: 2;
		margin-bottom: 5px;
	}

	&__date-text {
		margin-right: calc(var(--default-clickable-area) * 2);
		content: attr(data-date);
		padding: 4px 12px;
		left: 50%;
		color: var(--color-text-maxcontrast);
		background-color: var(--color-background-dark);
		border-radius: var(--border-radius-pill);
	}

	&:last-child {
		margin-bottom: 16px;
	}
}

.has-sticky .messages-group__date {
	transition: opacity 0.3s ease-in-out;
	transition-delay: 2s;
	opacity: 0;
}

.scroller--isScrolling .has-sticky .messages-group__date {
	opacity: 1;
	transition: opacity 0s;
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
`],sourceRoot:""}]);const F=A},88100:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".upload-editor[data-v-e234d874]{height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:16px}.upload-editor__previews[data-v-e234d874]{display:flex;position:relative;overflow:auto;flex-wrap:wrap}.upload-editor__previews.dragging-over[data-v-e234d874]{outline:3px dashed var(--color-primary-element);border-radius:var(--border-radius-large)}.upload-editor__actions[data-v-e234d874]{display:flex;justify-content:flex-end;gap:4px;padding:12px 0}.add-more[data-v-e234d874]{width:180px;height:180px;display:flex;margin:10px}.add-more__button[data-v-e234d874]{margin:auto}","",{version:3,sources:["webpack://./src/components/NewMessage/NewMessageUploadEditor.vue"],names:[],mappings:"AACA,gCACC,WAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,YAAA,CAEA,0CACC,YAAA,CACA,iBAAA,CACA,aAAA,CACA,cAAA,CAEA,wDACC,+CAAA,CACA,wCAAA,CAGF,yCACC,YAAA,CACA,wBAAA,CACA,OAAA,CACA,cAAA,CAIF,2BACC,WAAA,CACA,YAAA,CACA,YAAA,CACA,WAAA,CACA,mCACC,WAAA",sourcesContent:[`
.upload-editor {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 16px;

	&__previews {
		display: flex;
		position: relative;
		overflow: auto;
		flex-wrap: wrap;

		&.dragging-over {
			outline: 3px dashed var(--color-primary-element);
			border-radius: var(--border-radius-large);
		}
	}
	&__actions {
		display: flex;
		justify-content: flex-end;
		gap: 4px;
		padding: 12px 0;
	}
}

.add-more {
	width: 180px;
	height: 180px;
	display: flex;
	margin: 10px;
	&__button {
		margin: auto;
	}
}
`],sourceRoot:""}]);const F=A},62765:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".poll-modal[data-v-7d225646]{position:relative;padding:20px}.poll-modal__header[data-v-7d225646]{display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;font-weight:bold;font-size:18px;white-space:normal;word-wrap:anywhere}.poll-modal__header[data-v-7d225646] .material-design-icon{margin-bottom:auto}.poll-modal__summary[data-v-7d225646]{color:var(--color-text-maxcontrast);margin-bottom:16px}.poll-modal__options[data-v-7d225646]{display:flex;flex-direction:column;gap:4px;word-wrap:anywhere}.poll-modal__actions[data-v-7d225646]{position:sticky;bottom:0;display:flex;justify-content:center;gap:8px;padding:8px 0 0;background-color:var(--color-main-background)}.poll-modal__loading[data-v-7d225646]{height:200px}.results__options[data-v-7d225646]{display:flex;flex-direction:column;gap:24px;word-wrap:anywhere;margin:8px 0 20px 0}.results__option[data-v-7d225646]{display:flex;flex-direction:column}.results__option__details[data-v-7d225646]{display:flex;margin-bottom:8px}.results__option-subtitle[data-v-7d225646]{color:var(--color-text-maxcontrast)}.results__option-progress[data-v-7d225646]{margin-top:4px}.results__option-title[data-v-7d225646]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px}.results__option-title .percentage[data-v-7d225646]{white-space:nowrap;margin-left:16px}.critical[data-v-7d225646] .action-button{color:var(--color-error) !important}","",{version:3,sources:["webpack://./src/components/PollViewer/PollViewer.vue"],names:[],mappings:"AACA,6BACC,iBAAA,CACA,YAAA,CAEA,qCACC,YAAA,CACA,sBAAA,CACA,OAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,kBAAA,CACA,kBAAA,CAEA,2DACC,kBAAA,CAIF,sCACC,mCAAA,CACA,kBAAA,CAGD,sCACC,YAAA,CACA,qBAAA,CACA,OAAA,CACA,kBAAA,CAGD,sCACC,eAAA,CACA,QAAA,CACA,YAAA,CACA,sBAAA,CACA,OAAA,CACA,eAAA,CACA,6CAAA,CAGD,sCACC,YAAA,CAIF,mCACC,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBAAA,CACA,mBAAA,CAGD,kCACC,YAAA,CACA,qBAAA,CAEA,2CACC,YAAA,CACA,iBAAA,CAGD,2CACC,mCAAA,CAGD,2CACC,cAAA,CAGD,wCACC,YAAA,CACA,6BAAA,CACA,sBAAA,CACA,iBAAA,CAEA,oDACC,kBAAA,CACA,gBAAA,CAKH,0CACC,mCAAA",sourcesContent:[`
.poll-modal {
	position: relative;
	padding: 20px;

	&__header {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		margin-bottom: 8px;
		font-weight: bold;
		font-size: 18px;
		white-space: normal;
		word-wrap: anywhere;

		:deep(.material-design-icon) {
			margin-bottom: auto;
		}
	}

	&__summary {
		color: var(--color-text-maxcontrast);
		margin-bottom: 16px;
	}

	&__options {
		display: flex;
		flex-direction: column;
		gap: 4px;
		word-wrap: anywhere;
	}

	&__actions {
		position: sticky;
		bottom: 0;
		display: flex;
		justify-content: center;
		gap: 8px;
		padding: 8px 0 0;
		background-color: var(--color-main-background);
	}

	&__loading {
		height: 200px;
	}
}

.results__options {
	display: flex;
	flex-direction: column;
	gap: 24px;
	word-wrap: anywhere;
	margin: 8px 0 20px 0;
}

.results__option {
	display: flex;
	flex-direction: column;

	&__details {
		display: flex;
		margin-bottom: 8px;
	}

	&-subtitle {
		color: var(--color-text-maxcontrast);
	}

	&-progress {
		margin-top: 4px;
	}

	&-title {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 4px;

		.percentage {
			white-space: nowrap;
			margin-left: 16px;
		}
	}
}

.critical :deep(.action-button) {
	color: var(--color-error) !important;
}
`],sourceRoot:""}]);const F=A},28379:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,".poll-voters-details[data-v-11505399]{max-width:30%;margin-right:8px}.poll-voters-details .poll-voters-details__button[data-v-11505399],.poll-voters-details__button[data-v-11505399] .button-vue__icon{min-height:auto;height:auto;min-width:auto;width:auto !important;flex-wrap:wrap;justify-content:flex-start;border-radius:0;overflow:visible}.poll-voters-details__popover[data-v-11505399]{padding:8px;max-height:400px;overflow-y:scroll}.poll-voters-details__display-name[data-v-11505399]{margin-left:4px}.poll-voters-details__list-item[data-v-11505399]{display:flex;justify-content:flex-start;align-items:center;min-width:150px;height:32px;margin-bottom:var(--margin-small)}","",{version:3,sources:["webpack://./src/components/PollViewer/PollVotersDetails.vue"],names:[],mappings:"AAEA,sCACC,aAAA,CACA,gBAAA,CAEA,mIAEC,eAAA,CACA,WAAA,CACA,cAAA,CACA,qBAAA,CACA,cAAA,CACA,0BAAA,CACA,eAAA,CACA,gBAAA,CAGD,+CACC,WAAA,CACA,gBAAA,CACA,iBAAA,CAGD,oDACE,eAAA,CAGF,iDACC,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,eAAA,CACA,WAAA,CACA,iCAAA",sourcesContent:[`

.poll-voters-details {
	max-width: 30%;
	margin-right: 8px;

	& &__button,
	&__button :deep(.button-vue__icon) {
		min-height: auto;
		height: auto;
		min-width: auto;
		width: auto !important;
		flex-wrap: wrap;
		justify-content: flex-start;
		border-radius: 0;
		overflow: visible;
	}

	&__popover {
		padding: 8px;
		max-height: 400px;
		overflow-y: scroll;
	}

	&__display-name {
			margin-left: 4px;
		}

	&__list-item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		min-width: 150px;
		height: 32px;
		margin-bottom: var(--margin-small);
	}
}

`],sourceRoot:""}]);const F=A},33679:(y,E,r)=>{"use strict";r.d(E,{Z:()=>F});var f=r(87537),g=r.n(f),C=r(23645),b=r.n(C),A=b()(g());A.push([y.id,`
.talk-tab__wrapper[data-v-51e3042b]{
	height: 100%;
}
.call-button[data-v-51e3042b] {
	/* Center button horizontally. */
	margin-left: auto;
	margin-right: auto;

	margin-top: 10px;
	margin-bottom: 10px;
}
.chatView[data-v-51e3042b] {
	overflow: hidden;
	/* Considering the call button height (44px + 10px * 2) */
	height: calc(100% - 64px);
}
`,"",{version:3,sources:["webpack://./src/views/FilesSidebarChatView.vue"],names:[],mappings:";AAyDA;CACA,YAAA;AACA;AAEA;CACA,gCAAA;CACA,iBAAA;CACA,kBAAA;;CAEA,gBAAA;CACA,mBAAA;AACA;AAEA;CACA,gBAAA;CACA,yDAAA;CACA,yBAAA;AACA",sourcesContent:[`<!--
  - @copyright Copyright (c) 2023 Dorra Jaouad <dorra.jaoued1@gmail.com>
  -
  - @author Dorra Jaouad <dorra.jaoued1@gmail.com>
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
	<div class="talk-tab__wrapper">
		<CallButton class="call-button" />
		<ChatView />
		<PollViewer />
		<MediaSettings :recording-consent-given.sync="recordingConsentGiven" />
	</div>
</template>
<script>

import ChatView from '../components/ChatView.vue'
import MediaSettings from '../components/MediaSettings/MediaSettings.vue'
import PollViewer from '../components/PollViewer/PollViewer.vue'
import CallButton from '../components/TopBar/CallButton.vue'

export default {

	name: 'FilesSidebarChatView',

	components: {
		CallButton,
		ChatView,
		MediaSettings,
		PollViewer,
	},

	data() {
		return {
			recordingConsentGiven: false,
		}
	},
}

<\/script>

<style scoped>
.talk-tab__wrapper{
	height: 100%;
}

.call-button {
	/* Center button horizontally. */
	margin-left: auto;
	margin-right: auto;

	margin-top: 10px;
	margin-bottom: 10px;
}

.chatView {
	overflow: hidden;
	/* Considering the call button height (44px + 10px * 2) */
	height: calc(100% - 64px);
}
</style>
`],sourceRoot:""}]);const F=A},29932:y=>{function E(r,f){for(var g=-1,C=r==null?0:r.length,b=Array(C);++g<C;)b[g]=f(r[g],g,r);return b}y.exports=E},80531:(y,E,r)=>{var f=r(62705),g=r(29932),C=r(1469),b=r(33448),A=1/0,F=f?f.prototype:void 0,st=F?F.toString:void 0;function Fe(h){if(typeof h=="string")return h;if(C(h))return g(h,Fe)+"";if(b(h))return st?st.call(h):"";var Me=h+"";return Me=="0"&&1/h==-A?"-0":Me}y.exports=Fe},33448:(y,E,r)=>{var f=r(44239),g=r(37005),C="[object Symbol]";function b(A){return typeof A=="symbol"||g(A)&&f(A)==C}y.exports=b},79833:(y,E,r)=>{var f=r(80531);function g(C){return C==null?"":f(C)}y.exports=g},73955:(y,E,r)=>{var f=r(79833),g=0;function C(b){var A=++g;return f(b)+A}y.exports=C},35381:(y,E,r)=>{"use strict";r.r(E),r.d(E,{default:()=>Pd});var f=function(){var e=this,s=e._self._c;return s("div",{staticClass:"talk-tab__wrapper"},[s("CallButton",{staticClass:"call-button"}),e._v(" "),s("ChatView"),e._v(" "),s("PollViewer"),e._v(" "),s("MediaSettings",{attrs:{"recording-consent-given":e.recordingConsentGiven},on:{"update:recordingConsentGiven":function(i){e.recordingConsentGiven=i},"update:recording-consent-given":function(i){e.recordingConsentGiven=i}}})],1)},g=[],C=function(){var e=this,s=e._self._c;return s("div",{staticClass:"chatView",on:{dragover:function(i){return i.preventDefault(),e.handleDragOver.apply(null,arguments)},dragleave:function(i){return i.preventDefault(),e.handleDragLeave.apply(null,arguments)},drop:function(i){return i.preventDefault(),e.handleDropFiles.apply(null,arguments)}}},[e.isGuestWithoutDisplayName?s("GuestWelcomeWindow",{attrs:{token:e.token}}):e._e(),e._v(" "),s("TransitionWrapper",{attrs:{name:"slide-up",mode:"out-in"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isDraggingOver,expression:"isDraggingOver"}],staticClass:"dragover"},[s("div",{staticClass:"drop-hint"},[s("div",{staticClass:"drop-hint__icon",class:{"icon-upload":!e.isGuest&&!e.isReadOnly,"icon-user":e.isGuest,"icon-error":e.isReadOnly}}),e._v(" "),s("h2",{staticClass:"drop-hint__text"},[e._v(`
					`+e._s(e.dropHintText)+`
				`)])])])]),e._v(" "),s("MessagesList",{attrs:{role:"region","aria-label":e.t("spreed","Conversation messages"),token:e.token,"is-chat-scrolled-to-bottom":e.isChatScrolledToBottom,"is-visible":e.isVisible},on:{"update:isChatScrolledToBottom":function(i){e.isChatScrolledToBottom=i},"update:is-chat-scrolled-to-bottom":function(i){e.isChatScrolledToBottom=i}}}),e._v(" "),s("div",{staticClass:"scroll-to-bottom"},[s("TransitionWrapper",{attrs:{name:"fade"}},[s("NcButton",{directives:[{name:"show",rawName:"v-show",value:!e.isChatScrolledToBottom,expression:"!isChatScrolledToBottom"}],staticClass:"scroll-to-bottom__button",attrs:{type:"secondary","aria-label":e.t("spreed","Scroll to bottom")},on:{click:e.smoothScrollToBottom},scopedSlots:e._u([{key:"icon",fn:function(){return[s("ChevronDoubleDown",{attrs:{size:20}})]},proxy:!0}])})],1)],1),e._v(" "),e.containerId?s("NewMessage",{key:e.containerId,attrs:{role:"region",token:e.token,container:e.containerId,"has-typing-indicator":"","aria-label":e.t("spreed","Post message")}}):e._e(),e._v(" "),s("NewMessageUploadEditor")],1)},b=[],A=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon chevron-double-down-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},F=[];const Fe={name:"ChevronDoubleDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var h=r(51900),Me=(0,h.Z)(Fe,A,F,!1,null,null,null);const ts=Me.exports;var G=r(65878),V=r(928),ss=function(){var e=this,s=e._self._c;return s("NcModal",{attrs:{container:e.container,"can-close":!1,"close-on-click-outside":!1,size:"small"}},[s("div",{staticClass:"modal__content"},[s("div",{staticClass:"conversation-information"},[s("ConversationIcon",{attrs:{item:e.conversation,"hide-user-status":""}}),e._v(" "),s("h2",[e._v(e._s(e.conversationDisplayName))])],1),e._v(" "),s("p",{staticClass:"description"},[e._v(`
			`+e._s(e.conversationDescription)+`
		`)]),e._v(" "),s("label",{attrs:{for:"textField"}},[e._v(e._s(e.t("spreed","Enter your name")))]),e._v(" "),s("NcTextField",{staticClass:"username-form__input",attrs:{id:"textField",value:e.guestUserName,placeholder:e.t("spreed","Guest"),"show-trailing-button":!1,"label-outside":""},on:{"update:value":function(i){e.guestUserName=i},keydown:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.handleChooseUserName.apply(null,arguments)}}}),e._v(" "),s("NcButton",{staticClass:"submit-button",attrs:{type:"primary",disabled:e.invalidGuestUsername},on:{click:e.handleChooseUserName},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Check",{attrs:{size:20}})]},proxy:!0}])},[e._v(`
			`+e._s(e.t("spreed","Submit name and join"))+`
			`)])],1)])},as=[],ns=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon check-bold-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},is=[];const rs={name:"CheckBoldIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var os=(0,h.Z)(rs,ns,is,!1,null,null,null);const mt=os.exports;var X=r(94504),ls=r(49368),ds=r(41673),Ee=r(70012);const us={name:"GuestWelcomeWindow",components:{NcModal:X.Z,NcTextField:ls.Z,ConversationIcon:ds.Z,NcButton:V.Z,Check:mt},props:{token:{type:String,required:!0}},setup(){return{guestNameStore:(0,Ee.t)()}},data(){return{guestUserName:""}},computed:{container(){return this.$store.getters.getMainContainerSelector()},conversation(){return this.$store.getters.conversation(this.token)},conversationDisplayName(){return this.conversation?.displayName},conversationDescription(){return this.conversation?.description},invalidGuestUsername(){return this.guestUserName.trim()===""}},methods:{handleChooseUserName(){this.guestNameStore.submitGuestUsername(this.token,this.guestUserName)}}};var cs=r(93379),w=r.n(cs),ps=r(7795),O=r.n(ps),_s=r(90569),L=r.n(_s),As=r(3565),R=r.n(As),ms=r(19216),P=r.n(ms),gs=r(44589),I=r.n(gs),Be=r(16963),Q={};Q.styleTagTransform=I(),Q.setAttributes=R(),Q.insert=L().bind(null,"head"),Q.domAPI=O(),Q.insertStyleElement=P();var zd=w()(Be.Z,Q);const Wd=Be.Z&&Be.Z.locals?Be.Z.locals:void 0;var hs=(0,h.Z)(us,ss,as,!1,null,"525010ac",null);const Cs=hs.exports;var vs=function(){var e=this,s=e._self._c;return s("div",{key:e.token,ref:"scroller",staticClass:"scroller messages-list__scroller",class:{"scroller--chatScrolledToBottom":e.isChatScrolledToBottom,"scroller--isScrolling":e.isScrolling},on:{scroll:e.onScroll,scrollend:e.endScroll}},[s("TransitionWrapper",{attrs:{name:"fade"}},[e.displayMessagesLoader?s("ul",{staticClass:"scroller__loading icon-loading"}):e._e()]),e._v(" "),e._l(e.messagesGroupedByDateByAuthor,function(i,o){return s("ul",{key:`section_${o}`,ref:`dateGroup-${e.token}`,refInFor:!0,class:{"has-sticky":o===e.stickyDate},attrs:{"data-date-timestamp":o}},[s("li",{staticClass:"messages-group__date"},[s("span",{staticClass:"messages-group__date-text",attrs:{role:"heading","aria-level":"3"}},[e._v(`
				`+e._s(e.dateSeparatorLabels[o])+`
			`)])]),e._v(" "),e._l(i,function(l){return s(e.messagesGroupComponent(l),{key:l.id,tag:"component",staticClass:"messages-group",attrs:{token:e.token,messages:l.messages,"previous-message-id":l.previousMessageId,"next-message-id":l.nextMessageId}})})],2)}),e._v(" "),e.showLoadingAnimation?[s("LoadingPlaceholder",{staticClass:"messages-list__placeholder",attrs:{type:"messages",count:15}})]:e.showEmptyContent?s("NcEmptyContent",{staticClass:"messages-list__empty-content",attrs:{name:e.t("spreed","No messages"),description:e.t("spreed","All messages have expired or have been deleted.")},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Message",{attrs:{size:64}})]},proxy:!0}])}):e._e()],2)},fs=[],Ds=r(20296),gt=r.n(Ds),ys=r(73955),bs=r.n(ys),Es=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon message-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Fs=[];const Ms={name:"MessageIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Bs=(0,h.Z)(Ms,Es,Fs,!1,null,null,null);const xs=Bs.exports;var Y=r(93664),W=r(69183),N=r(57883),ht=r(50451),ks=function(){var e=this,s=e._self._c;return s("li",{staticClass:"wrapper"},[s("div",{staticClass:"messages__avatar"},[s("AvatarWrapper",{attrs:{id:e.actorId,token:e.token,name:e.actorDisplayName,source:e.actorType,size:e.AVATAR.SIZE.SMALL,"disable-menu":e.disableMenu,"disable-tooltip":""}})],1),e._v(" "),s("ul",{staticClass:"messages"},[s("li",{staticClass:"messages__author",attrs:{"aria-level":"4"}},[s("span",{staticClass:"messages__author-name"},[e._v(e._s(e.actorDisplayName))]),e._v(" "),e.isFederatedUser?s("span",{staticClass:"messages__author-server"},[e._v(e._s(e.getRemoteServer))]):e._e(),e._v(" "),e.lastEditTimestamp?s("span",{staticClass:"messages__author-edit"},[e._v(e._s(e.getLastEditor))]):e._e()]),e._v(" "),e._l(e.messages,function(i,o){return s("Message",e._b({key:i.id,attrs:{token:e.token,"is-temporary":i.timestamp===0,"next-message-id":e.messages[o+1]&&e.messages[o+1].id||e.nextMessageId,"previous-message-id":o>0&&e.messages[o-1].id||e.previousMessageId,"actor-type":e.actorType,"actor-id":e.actorId}},"Message",i,!1))})],2)])},Ts=[],Ss=function(){var e=this,s=e._self._c;return s("li",{ref:"message",staticClass:"message",class:{"message--highlighted":e.isHighlighted,"message--hovered":e.showMessageButtonsBar},attrs:{id:`message_${e.id}`,"data-message-id":e.id,"data-seen":e.seen,"data-next-message-id":e.nextMessageId,"data-previous-message-id":e.previousMessageId,tabindex:"0"},on:{animationend:function(i){e.isHighlighted=!1},mouseover:e.handleMouseover,mouseleave:e.handleMouseleave}},[s("div",{staticClass:"message-body",class:{"normal-message-body":!e.isSystemMessage&&!e.isDeletedMessage,system:e.isSystemMessage,"combined-system":e.isCombinedSystemMessage}},[s("MessageBody",e._b({attrs:{"rich-parameters":e.richParameters,"is-deleting":e.isDeleting,"has-call":e.conversation.hasCall}},"MessageBody",{...e.$props,...e.readInfoProps},!1)),e._v(" "),Object.keys(e.reactions).length?s("Reactions",{attrs:{id:e.id,token:e.token,"can-react":e.canReact,"show-controls":e.isHovered||e.isFollowUpEmojiPickerOpen},on:{"emoji-picker-toggled":e.toggleFollowUpEmojiPicker}}):e._e()],1),e._v(" "),s("div",{staticClass:"message-body__scroll"},[e.showMessageButtonsBar?s("MessageButtonsBar",e._b({ref:"messageButtonsBar",staticClass:"message-buttons-bar",attrs:{"is-translation-available":e.isTranslationAvailable,"is-action-menu-open":e.isActionMenuOpen,"is-emoji-picker-open":e.isEmojiPickerOpen,"is-reactions-menu-open":e.isReactionsMenuOpen,"is-forwarder-open":e.isForwarderOpen,"can-react":e.canReact},on:{"update:isActionMenuOpen":function(i){e.isActionMenuOpen=i},"update:is-action-menu-open":function(i){e.isActionMenuOpen=i},"update:isEmojiPickerOpen":function(i){e.isEmojiPickerOpen=i},"update:is-emoji-picker-open":function(i){e.isEmojiPickerOpen=i},"update:isReactionsMenuOpen":function(i){e.isReactionsMenuOpen=i},"update:is-reactions-menu-open":function(i){e.isReactionsMenuOpen=i},"update:isForwarderOpen":function(i){e.isForwarderOpen=i},"update:is-forwarder-open":function(i){e.isForwarderOpen=i},"show-translate-dialog":function(i){e.isTranslateDialogOpen=!0},reply:e.handleReply,edit:e.handleEdit,delete:e.handleDelete}},"MessageButtonsBar",{...e.$props,...e.readInfoProps},!1)):e.showCombinedSystemMessageToggle?s("div",{staticClass:"message-buttons-bar"},[s("NcButton",{attrs:{type:"tertiary","aria-label":e.t("spreed","Show or collapse system messages"),title:e.t("spreed","Show or collapse system messages")},on:{click:e.toggleCombinedSystemMessage},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isCombinedSystemMessageCollapsed?s("UnfoldMore"):s("UnfoldLess")]},proxy:!0}])})],1):e._e()],1),e._v(" "),e.isForwarderOpen?s("MessageForwarder",{attrs:{id:e.id,token:e.token},on:{close:function(i){e.isForwarderOpen=!1}}}):e._e(),e._v(" "),e.isTranslationAvailable&&e.isTranslateDialogOpen?s("MessageTranslateDialog",{attrs:{message:e.message,"rich-parameters":e.richParameters},on:{close:function(i){e.isTranslateDialogOpen=!1}}}):e._e(),e._v(" "),e.isLastReadMessage?s("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.lastReadMessageVisibilityChanged,expression:"lastReadMessageVisibilityChanged"}],staticClass:"new-message-marker"},[s("span",[e._v(e._s(e.t("spreed","Unread messages")))])]):e._e()],1)},ws=[],Os=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon unfold-less-horizontal-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M16.59,5.41L15.17,4L12,7.17L8.83,4L7.41,5.41L12,10M7.41,18.59L8.83,20L12,16.83L15.17,20L16.58,18.59L12,14L7.41,18.59Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Ls=[];const Rs={name:"UnfoldLessHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ps=(0,h.Z)(Rs,Os,Ls,!1,null,null,null);const Is=Ps.exports;var Ns=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon unfold-more-horizontal-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},js=[];const $s={name:"UnfoldMoreHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Us=(0,h.Z)($s,Ns,js,!1,null,null,null);const Zs=Us.exports;var j=r(64024),Vs=function(){var e=this,s=e._self._c;return s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.handleClickOutside,expression:"handleClickOutside"}]},[e.isReactionsMenuOpen?[s("NcButton",{attrs:{type:"tertiary","aria-label":e.t("spreed","Close reactions menu")},on:{click:e.closeReactionsMenu},scopedSlots:e._u([{key:"icon",fn:function(){return[s("ArrowLeft",{attrs:{size:20}})]},proxy:!0}])}),e._v(" "),e._l(e.frequentlyUsedEmojis,function(i){return s("NcButton",{key:i,attrs:{type:"tertiary","aria-label":e.t("spreed","React with {emoji}",{emoji:i})},on:{click:function(o){return e.handleReactionClick(i)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("span",[e._v(e._s(i))])]},proxy:!0}],null,!0)})}),e._v(" "),s("NcEmojiPicker",{attrs:{container:e.mainContainer,boundary:e.boundariesElement,placement:"auto"},on:{select:e.handleReactionClick,"after-show":e.onEmojiPickerOpen,"after-hide":e.onEmojiPickerClose}},[s("NcButton",{attrs:{type:"tertiary","aria-label":e.t("spreed","React with another emoji")},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Plus",{attrs:{size:20}})]},proxy:!0}])})],1)]:[e.canReact?s("NcButton",{attrs:{type:"tertiary","aria-label":e.t("spreed","Add a reaction to this message"),title:e.t("spreed","Add a reaction to this message")},on:{click:e.openReactionsMenu},scopedSlots:e._u([{key:"icon",fn:function(){return[s("EmoticonOutline",{attrs:{size:20}})]},proxy:!0}],null,!1,1267396848)}):e._e(),e._v(" "),e.canReply?s("NcButton",{attrs:{type:"tertiary","aria-label":e.t("spreed","Reply"),title:e.t("spreed","Reply")},on:{click:e.handleReply},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Reply",{attrs:{size:16}})]},proxy:!0}],null,!1,2449574943)}):e._e(),e._v(" "),s("NcActions",{attrs:{"force-menu":!0,placement:"bottom-end",container:e.messageContainer,"boundaries-element":e.boundariesElement},on:{open:e.onMenuOpen,close:e.onMenuClose}},[e.submenu===null?[s("NcActionText",{scopedSlots:e._u([{key:"icon",fn:function(){return[e.showCommonReadIcon?s("span",{attrs:{title:e.commonReadIconTooltip,"aria-label":e.commonReadIconTooltip}},[s("CheckAll",{attrs:{size:16}})],1):e.showSentIcon?s("span",{attrs:{title:e.sentIconTooltip,"aria-label":e.sentIconTooltip}},[s("Check",{attrs:{size:16}})],1):s("ClockOutline",{attrs:{size:16}})]},proxy:!0}],null,!1,788874519)},[e._v(`
					`+e._s(e.messageDateTime)+`
				`)]),e._v(" "),e.lastEditTimestamp?s("NcActionText",{staticClass:"edit-timestamp",attrs:{name:e.lastEditActorLabel},scopedSlots:e._u([{key:"icon",fn:function(){return[s("ClockEditOutline",{attrs:{size:16}})]},proxy:!0}],null,!1,109138201)},[e._v(`
					`+e._s(e.editedDateTime)+`
				`)]):e._e(),e._v(" "),s("NcActionSeparator"),e._v(" "),e.supportReminders?s("NcActionButton",{staticClass:"action--nested",on:{click:function(i){i.stopPropagation(),e.submenu="reminder"}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("AlarmIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,1813317200)},[e._v(`
					`+e._s(e.t("spreed","Set reminder"))+`
				`)]):e._e(),e._v(" "),e.isPrivateReplyable?s("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.handlePrivateReply.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("AccountIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,2066712834)},[e._v(`
					`+e._s(e.t("spreed","Reply privately"))+`
				`)]):e._e(),e._v(" "),e.isEditable?s("NcActionButton",{attrs:{"aria-label":e.t("spreed","Edit message"),"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.editMessage.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Pencil",{attrs:{size:20}})]},proxy:!0}],null,!1,580569589)},[e._v(`
					`+e._s(e.t("spreed","Edit message"))+`
				`)]):e._e(),e._v(" "),e.isFileShareOnly?e._e():s("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.handleCopyMessageText.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("ContentCopy",{attrs:{size:20}})]},proxy:!0}],null,!1,1478045380)},[e._v(`
					`+e._s(e.t("spreed","Copy formatted message"))+`
				`)]),e._v(" "),s("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.handleCopyMessageLink.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("OpenInNewIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,1266168172)},[e._v(`
					`+e._s(e.t("spreed","Copy message link"))+`
				`)]),e._v(" "),s("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.handleMarkAsUnread.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("EyeOffOutline",{attrs:{size:16}})]},proxy:!0}],null,!1,3681331803)},[e._v(`
					`+e._s(e.t("spreed","Mark as unread"))+`
				`)]),e._v(" "),e.linkToFile?s("NcActionLink",{attrs:{href:e.linkToFile},scopedSlots:e._u([{key:"icon",fn:function(){return[s("File",{attrs:{size:20}})]},proxy:!0}],null,!1,395998446)},[e._v(`
					`+e._s(e.t("spreed","Go to file"))+`
				`)]):e._e(),e._v(" "),e.canForwardMessage&&!e.isInNoteToSelf?s("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.forwardToNote},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Note",{attrs:{size:16}})]},proxy:!0}],null,!1,4139916445)},[e._v(`
					`+e._s(e.t("spreed","Note to self"))+`
				`)]):e._e(),e._v(" "),e.canForwardMessage?s("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.openForwarder.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Share",{attrs:{size:16}})]},proxy:!0}],null,!1,4243449760)},[e._v(`
					`+e._s(e.t("spreed","Forward message"))+`
				`)]):e._e(),e._v(" "),e.messageActions.length>0?s("NcActionSeparator"):e._e(),e._v(" "),e._l(e.messageActions,function(i){return s("NcActionButton",{key:i.label,attrs:{icon:i.icon,"close-after-click":""},on:{click:function(o){return i.callback(e.messageApiData)}}},[e._v(`
					`+e._s(i.label)+`
				`)])}),e._v(" "),e.isTranslationAvailable&&!e.isFileShareOnly?s("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.$emit("show-translate-dialog",!0)},close:function(i){return e.$emit("show-translate-dialog",!1)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Translate",{attrs:{size:16}})]},proxy:!0}],null,!1,3658990123)},[e._v(`
					`+e._s(e.t("spreed","Translate"))+`
				`)]):e._e(),e._v(" "),e.isDeleteable?[s("NcActionSeparator"),e._v(" "),s("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.handleDelete.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("DeleteIcon",{attrs:{size:16}})]},proxy:!0}],null,!1,4498431)},[e._v(`
						`+e._s(e.t("spreed","Delete"))+`
					`)])]:e._e()]:e.supportReminders&&e.submenu==="reminder"?[s("NcActionButton",{attrs:{"aria-label":e.t("spreed","Back")},on:{click:function(i){i.stopPropagation(),e.submenu=null}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("ArrowLeft")]},proxy:!0}],null,!1,378723937)},[e._v(`
					`+e._s(e.t("spreed","Back"))+`
				`)]),e._v(" "),e.currentReminder?s("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.removeReminder.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("CloseCircleOutline",{attrs:{size:20}})]},proxy:!0}],null,!1,3165582732)},[e._v(`
					`+e._s(e.clearReminderLabel)+`
				`)]):e._e(),e._v(" "),s("NcActionSeparator"),e._v(" "),e._l(e.reminderOptions,function(i){return s("NcActionButton",{key:i.key,attrs:{"aria-label":i.ariaLabel,"close-after-click":""},on:{click:function(o){return o.stopPropagation(),e.setReminder(i.timestamp)}}},[e._v(`
					`+e._s(i.label)+`
				`)])}),e._v(" "),s("NcActionSeparator"),e._v(" "),s("NcActionInput",{attrs:{type:"datetime-local","is-native-picker":"",value:e.customReminderDateTime,min:new Date},on:{change:e.setCustomReminderDateTime},scopedSlots:e._u([{key:"icon",fn:function(){return[s("CalendarClock",{attrs:{size:20}})]},proxy:!0}],null,!1,1325980530)}),e._v(" "),s("NcActionButton",{attrs:{"aria-label":e.t("spreed","Set custom reminder"),"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.setCustomReminder(e.customReminderDateTime)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Check",{attrs:{size:20}})]},proxy:!0}],null,!1,4226377742)},[e._v(`
					`+e._s(e.t("spreed","Set custom reminder"))+`
				`)])]:e._e()],2)]],2)},Gs=[],zs=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon account-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Ws=[];const Hs={name:"AccountIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ys=(0,h.Z)(Hs,zs,Ws,!1,null,null,null);const Ks=Ys.exports;var Xs=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon alarm-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Js=[];const Qs={name:"AlarmIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var qs=(0,h.Z)(Qs,Xs,Js,!1,null,null,null);const ea=qs.exports;var ta=r(33687),sa=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon calendar-clock-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},aa=[];const na={name:"CalendarClockIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ia=(0,h.Z)(na,sa,aa,!1,null,null,null);const ra=ia.exports;var at=r(58441),oa=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon check-all-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},la=[];const da={name:"CheckAllIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ua=(0,h.Z)(da,oa,la,!1,null,null,null);const Ct=ua.exports;var ca=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon clock-edit-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1M19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9M12.5 7V12.2L16.5 14.6L15.5 15.6L11 13V7H12.5M11 21.9C5.9 21.4 2 17.1 2 12C2 6.5 6.5 2 12 2C17.3 2 21.6 6.1 22 11.3C21.7 11.2 21.4 11.1 21 11.1C20.6 11.1 20.3 11.2 20 11.3C19.6 7.2 16.2 4 12 4C7.6 4 4 7.6 4 12C4 16.1 7.1 19.5 11.1 19.9L11 20.1V21.9Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},pa=[];const _a={name:"ClockEditOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Aa=(0,h.Z)(_a,ca,pa,!1,null,null,null);const ma=Aa.exports;var ga=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon clock-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},ha=[];const Ca={name:"ClockOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var va=(0,h.Z)(Ca,ga,ha,!1,null,null,null);const fa=va.exports;var Da=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon close-circle-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},ya=[];const ba={name:"CloseCircleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ea=(0,h.Z)(ba,Da,ya,!1,null,null,null);const Fa=Ea.exports;var Ma=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon content-copy-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Ba=[];const xa={name:"ContentCopyIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ka=(0,h.Z)(xa,Ma,Ba,!1,null,null,null);const nt=ka.exports;var Ta=r(76188),Sa=r(18849),wa=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon eye-off-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Oa=[];const La={name:"EyeOffOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ra=(0,h.Z)(La,wa,Oa,!1,null,null,null);const Pa=Ra.exports;var Ia=r(57701),Na=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon note-edit-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},ja=[];const $a={name:"NoteEditOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ua=(0,h.Z)($a,Na,ja,!1,null,null,null);const Za=Ua.exports;var Va=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon open-in-new-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Ga=[];const za={name:"OpenInNewIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Wa=(0,h.Z)(za,Va,Ga,!1,null,null,null);const Ha=Wa.exports;var Ya=r(2887),vt=r(99270),Ka=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon reply-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Xa=[];const Ja={name:"ReplyIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Qa=(0,h.Z)(Ja,Ka,Xa,!1,null,null,null);const qa=Qa.exports;var en=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon share-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},tn=[];const sn={name:"ShareIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var an=(0,h.Z)(sn,en,tn,!1,null,null,null);const nn=an.exports;var rn=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon translate-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},on=[];const ln={name:"TranslateIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var dn=(0,h.Z)(ln,rn,on,!1,null,null,null);const un=dn.exports;var it=r(60539),cn=r(22912),pn=r(78043),rt=r(61057),_n=r(52014),An=r(64310),ft=r(56288),mn=r(67594),D=r(94418),H=r(11480);/**
 * @copyright Copyright (c) 2023 Maksim Sukharev <antreesy.web@gmail.com>
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
 */const gn=async function(a,e){return Y.Z.get((0,H.Ii)("apps/spreed/api/v1/chat/{token}/{messageId}/reminder",{token:a,messageId:e}))},hn=async function(a,e,s){return Y.Z.post((0,H.Ii)("apps/spreed/api/v1/chat/{token}/{messageId}/reminder",{token:a,messageId:e}),{timestamp:s})},Cn=async function(a,e){return Y.Z.delete((0,H.Ii)("apps/spreed/api/v1/chat/{token}/{messageId}/reminder",{token:a,messageId:e}))};var vn=r(39081),Dt=r(72057),fn=r(69104),ot=r(58784);const Dn=(0,G.F)()?.spreed?.features?.includes("remind-me-later"),yt=(0,G.F)()?.spreed?.features?.includes("edit-messages"),yn=(0,G.F)()?.spreed?.features?.includes("delete-messages-unlimited"),bn={name:"MessageButtonsBar",components:{NcActionButton:it.Z,NcActionInput:cn.N,NcActionLink:pn.Z,NcActionSeparator:_n.Z,NcActionText:An.Z,NcActions:rt.Z,NcButton:V.Z,NcEmojiPicker:ft.Z,AccountIcon:Ks,AlarmIcon:ea,ArrowLeft:ta.Z,CalendarClock:ra,CloseCircleOutline:Fa,Check:at.Z,CheckAll:Ct,ClockEditOutline:ma,ClockOutline:fa,ContentCopy:nt,DeleteIcon:Ta.Z,EmoticonOutline:Sa.Z,EyeOffOutline:Pa,File:Ia.Z,Note:Za,OpenInNewIcon:Ha,Pencil:Ya.Z,Plus:vt.Z,Reply:qa,Share:nn,Translate:un},inject:["getMessagesListScroller"],inheritAttrs:!1,props:{token:{type:String,required:!0},previousMessageId:{type:[String,Number],required:!0},isReplyable:{type:Boolean,required:!0},actorId:{type:String,required:!0},actorType:{type:String,required:!0},messageParameters:{type:[Array,Object],required:!0},timestamp:{type:Number,default:0},id:{type:[String,Number],required:!0},message:{type:String,required:!0},messageType:{type:String,required:!0},lastEditActorDisplayName:{type:String,default:""},lastEditTimestamp:{type:Number,default:0},isActionMenuOpen:{type:Boolean,required:!0},isEmojiPickerOpen:{type:Boolean,required:!0},isReactionsMenuOpen:{type:Boolean,required:!0},isForwarderOpen:{type:Boolean,required:!0},canReact:{type:Boolean,required:!0},showCommonReadIcon:{type:Boolean,required:!0},showSentIcon:{type:Boolean,required:!0},commonReadIconTooltip:{type:String,required:!0},sentIconTooltip:{type:String,required:!0},isTranslationAvailable:{type:Boolean,required:!0}},emits:["delete","update:isActionMenuOpen","update:isEmojiPickerOpen","update:isReactionsMenuOpen","update:isForwarderOpen","show-translate-dialog","reply","edit"],setup(){const a=(0,Dt.R)(),{messageActions:e}=(0,vn.q)();return{messageActions:e,supportReminders:Dn,reactionsStore:a}},data(){return{frequentlyUsedEmojis:[],submenu:null,currentReminder:null,customReminderDateTime:new Date((0,N.Z)().add(2,"hours").minute(0).second(0).valueOf())}},computed:{conversation(){return this.$store.getters.conversation(this.token)},mainContainer(){return this.$store.getters.getMainContainerSelector()},messageContainer(){return`#message_${this.id}`},boundariesElement(){return this.getMessagesListScroller()},isModifiable(){return!this.isConversationReadOnly&&this.conversation.participantType!==D.oM.TYPE.GUEST},isOneToOne(){return this.conversation.type===D.Sl.TYPE.ONE_TO_ONE||this.conversation.type===D.Sl.TYPE.ONE_TO_ONE_FORMER},isEditable(){return!yt||!this.isModifiable||this.isObjectShare||(!this.$store.getters.isModerator||this.isOneToOne)&&!this.isMyMsg?!1:(0,N.Z)(this.timestamp*1e3).add(1,"d")>(0,N.Z)()},isDeleteable(){return this.isModifiable?(yn||(0,N.Z)(this.timestamp*1e3).add(6,"h")>(0,N.Z)())&&(this.messageType==="comment"||this.messageType==="voice-message")&&!this.isDeleting&&(this.isMyMsg||this.conversation.type!==D.Sl.TYPE.ONE_TO_ONE&&this.conversation.type!==D.Sl.TYPE.ONE_TO_ONE_FORMER&&(this.conversation.participantType===D.oM.TYPE.OWNER||this.conversation.participantType===D.oM.TYPE.MODERATOR)):!1},isPrivateReplyable(){return this.isReplyable&&(this.conversation.type===D.Sl.TYPE.PUBLIC||this.conversation.type===D.Sl.TYPE.GROUP)&&!this.isMyMsg&&this.actorType===D.DM.ACTOR_TYPE.USERS&&this.$store.getters.isActorUser()},linkToFile(){if(this.isFileShare){const a=Object.keys(this.messageParameters).find(e=>e.startsWith("file"));return this.messageParameters?.[a]?.link}else return""},isFileShare(){return Object.keys(Object(this.messageParameters)).some(a=>a.startsWith("file"))},isFileShareOnly(){return this.isFileShare&&this.message==="{file}"},isObjectShare(){return Object.keys(Object(this.messageParameters)).some(a=>a.startsWith("object"))},isCurrentGuest(){return this.$store.getters.isActorGuest()},isMyMsg(){return this.actorId===this.$store.getters.getActorId()&&this.actorType===this.$store.getters.getActorType()},isConversationReadOnly(){return this.conversation.readOnly===D.Sl.STATE.READ_ONLY},isDeletedMessage(){return this.messageType==="comment_deleted"},isPollMessage(){return this.messageType==="comment"&&this.messageParameters?.object?.type==="talk-poll"},isInNoteToSelf(){return this.conversation.type===D.Sl.TYPE.NOTE_TO_SELF},canForwardMessage(){return!this.isCurrentGuest&&!this.isFileShare&&!this.isDeletedMessage&&!this.isPollMessage},messageDateTime(){return(0,N.Z)(this.timestamp*1e3).format("lll")},editedDateTime(){return(0,N.Z)(this.lastEditTimestamp*1e3).format("lll")},reminderOptions(){const a=(0,N.Z)(),e=a.hour()<17?(0,N.Z)().hour(18):null,s=(0,N.Z)().add(1,"days").hour(8),i=a.day()>0&&a.day()<5?(0,N.Z)().day(6).hour(8):null,o=a.day()!==0?(0,N.Z)().add(1,"weeks").day(1).hour(8):null;return[{key:"laterToday",timestamp:this.getTimestamp(e),label:t("spreed","Later today \u2013 {timeLocale}",{timeLocale:e?.format("LT")}),ariaLabel:t("spreed","Set reminder for later today")},{key:"tomorrow",timestamp:this.getTimestamp(s),label:t("spreed","Tomorrow \u2013 {timeLocale}",{timeLocale:s?.format("ddd LT")}),ariaLabel:t("spreed","Set reminder for tomorrow")},{key:"thisWeekend",timestamp:this.getTimestamp(i),label:t("spreed","This weekend \u2013 {timeLocale}",{timeLocale:i?.format("ddd LT")}),ariaLabel:t("spreed","Set reminder for this weekend")},{key:"nextWeek",timestamp:this.getTimestamp(o),label:t("spreed","Next week \u2013 {timeLocale}",{timeLocale:o?.format("ddd LT")}),ariaLabel:t("spreed","Set reminder for next week")}].filter(l=>l.timestamp!==null)},clearReminderLabel(){return this.currentReminder?t("spreed","Clear reminder \u2013 {timeLocale}",{timeLocale:(0,N.Z)(this.currentReminder.timestamp*1e3).format("ddd LT")}):""},messageApiData(){return{message:this.$store.getters.message(this.token,this.id),metadata:this.$store.getters.conversation(this.token),apiVersion:"v3"}},lastEditActorLabel(){return t("spreed","Edited by {actor}",{actor:this.lastEditActorDisplayName})},canReply(){return this.isReplyable&&!this.isConversationReadOnly&&(this.conversation.permissions&D.oM.PERMISSIONS.CHAT)!==0}},watch:{submenu(a){a==="reminder"&&this.getReminder()}},methods:{handleReply(){this.$emit("reply")},async handlePrivateReply(){const a=await this.$store.dispatch("createOneToOneConversation",this.actorId);this.$router.push({name:"conversation",params:{token:a.token}}).catch(e=>console.debug(`Error while pushing the new conversation's route: ${e}`))},async handleCopyMessageText(){const a=(0,ot.i)(this.message,this.messageParameters);try{await navigator.clipboard.writeText(a),(0,j.s$)(t("spreed","Message text copied to clipboard"))}catch{(0,j.x2)(t("spreed","Message text could not be copied"))}},handleCopyMessageLink(){(0,fn.aY)(this.token,this.id)},async handleMarkAsUnread(){await this.$store.dispatch("updateLastReadMessage",{token:this.token,id:this.previousMessageId,updateVisually:!0})},handleReactionClick(a){this.reactionsSelf?.includes(a)?(console.debug("user has already reacted, removing reaction"),this.reactionsStore.removeReactionFromMessage({token:this.token,messageId:this.id,selectedEmoji:a})):this.reactionsStore.addReactionToMessage({token:this.token,messageId:this.id,selectedEmoji:a}),this.closeReactionsMenu()},handleDelete(){this.$emit("delete")},onMenuOpen(){this.$emit("update:isActionMenuOpen",!0)},onMenuClose(){this.$emit("update:isActionMenuOpen",!1)},onEmojiPickerOpen(){this.updateFrequentlyUsedEmojis(),this.$emit("update:isEmojiPickerOpen",!0)},onEmojiPickerClose(){this.$emit("update:isEmojiPickerOpen",!1)},openReactionsMenu(){this.updateFrequentlyUsedEmojis(),this.$emit("update:isReactionsMenuOpen",!0)},async forwardToNote(){try{await this.$store.dispatch("forwardMessage",{messageToBeForwarded:this.$store.getters.message(this.token,this.id)}),(0,j.s$)(t("spreed",'Message forwarded to "Note to self"'))}catch(a){console.error('Error while forwarding message to "Note to self"',a),(0,j.x2)(t("spreed",'Error while forwarding message to "Note to self"'))}},openForwarder(){this.$emit("update:isForwarderOpen",!0)},handleClickOutside(a){a.composedPath().some(e=>e.classList?.contains("v-popper__popper--shown"))||a.composedPath().includes(this.$el)||this.closeReactionsMenu()},closeReactionsMenu(){this.$emit("update:isReactionsMenuOpen",!1)},updateFrequentlyUsedEmojis(){this.frequentlyUsedEmojis=(0,mn.e)("",5).map(a=>a.native)},getTimestamp(a){return a?.minute(0).second(0).millisecond(0).valueOf()||null},async getReminder(){try{const a=await gn(this.token,this.id);this.currentReminder=a.data.ocs.data}catch(a){console.debug(a)}},async removeReminder(){try{await Cn(this.token,this.id),(0,j.s$)(t("spreed","A reminder was successfully removed"))}catch(a){console.error(a),(0,j.x2)(t("spreed","Error occurred when removing a reminder"))}},async setReminder(a){try{await hn(this.token,this.id,a/1e3),(0,j.s$)(t("spreed","A reminder was successfully set at {datetime}",{datetime:(0,N.Z)(a).format("LLL")}))}catch(e){console.error(e),(0,j.x2)(t("spreed","Error occurred when creating a reminder"))}},setCustomReminderDateTime(a){this.customReminderDateTime=new Date(a.target.value)},setCustomReminder(){this.setReminder(this.customReminderDateTime.valueOf())},editMessage(){yt&&this.$emit("edit")}}};var xe=r(45312),q={};q.styleTagTransform=I(),q.setAttributes=R(),q.insert=L().bind(null,"head"),q.domAPI=O(),q.insertStyleElement=P();var cu=w()(xe.Z,q);const pu=xe.Z&&xe.Z.locals?xe.Z.locals:void 0;var En=(0,h.Z)(bn,Vs,Gs,!1,null,"6bc29d92",null);const Fn=En.exports;var Mn=function(){var e=this,s=e._self._c;return s("div",{staticClass:"message-forwarder"},[e.showForwardedConfirmation?s("NcModal",{attrs:{container:e.container},on:{close:e.handleClose}},[s("NcEmptyContent",{attrs:{description:e.t("spreed","The message has been forwarded to {selectedConversationName}",{selectedConversationName:e.selectedConversationName})},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Check",{attrs:{size:64}})]},proxy:!0},{key:"action",fn:function(){return[s("NcButton",{attrs:{type:"tertiary"},on:{click:e.handleClose}},[e._v(`
					`+e._s(e.t("spreed","Dismiss"))+`
				`)]),e._v(" "),s("NcButton",{attrs:{type:"primary"},on:{click:e.openConversation}},[e._v(`
					`+e._s(e.t("spreed","Go to conversation"))+`
				`)])]},proxy:!0}])})],1):s("RoomSelector",{attrs:{container:e.container,"show-postable-only":"","dialog-title":e.dialogTitle,"dialog-subtitle":e.dialogSubtitle},on:{select:e.setSelectedConversationToken,close:e.handleClose}})],1)},Bn=[],$=r(20144),bt=r(25968),xn=r(47604),_u=r(23861),kn=(0,h.Z)(xn.Z,bt.s,bt.x,!1,null,"0a5665ec",null);const Tn={name:"MessageForwarder",components:{RoomSelector:kn.exports,NcEmptyContent:ht.Z,NcModal:X.Z,NcButton:V.Z,Check:at.Z},props:{token:{type:String,required:!0},id:{type:[String,Number],required:!0}},emits:["close"],setup(){return{isTalkMainApp:(0,$.f3)("Talk:isMainApp",!1)}},data(){return{selectedConversationToken:null,selectedConversationName:null,showForwardedConfirmation:!1,forwardedMessageID:""}},computed:{container(){return this.$store.getters.getMainContainerSelector()},dialogTitle(){return t("spreed","Forward message")},dialogSubtitle(){return t("spreed","Choose a conversation to forward the selected message.")}},methods:{async setSelectedConversationToken(a){this.selectedConversationToken=a.token,this.selectedConversationName=a.displayName;try{const e=await this.$store.dispatch("forwardMessage",{targetToken:this.selectedConversationToken,messageToBeForwarded:this.$store.getters.message(this.token,this.id)});this.forwardedMessageID=e.data.ocs.data.id,this.showForwardedConfirmation=!0}catch(e){console.error("Error while forwarding message",e),(0,j.x2)(t("spreed","Error while forwarding message"))}},openConversation(){if(this.isTalkMainApp)this.$router.push({name:"conversation",hash:`#message_${this.forwardedMessageID}`,params:{token:`${this.selectedConversationToken}`}}).catch(a=>console.debug(`Error while pushing the new conversation's route: ${a}`));else{const a=(0,H.nu)("/call/{token}#message_{messageId}",{token:this.selectedConversationToken,messageId:this.forwardedMessageID});window.open(a,"_blank").focus()}this.showForwardedConfirmation=!1,this.forwardedMessageID="",this.$emit("close")},handleClose(){this.$emit("close")}}};var ke=r(91359),ee={};ee.styleTagTransform=I(),ee.setAttributes=R(),ee.insert=L().bind(null,"head"),ee.domAPI=O(),ee.insertStyleElement=P();var gu=w()(ke.Z,ee);const hu=ke.Z&&ke.Z.locals?ke.Z.locals:void 0;var Sn=(0,h.Z)(Tn,Mn,Bn,!1,null,"04fd61f8",null);const wn=Sn.exports;var On=function(){var e=this,s=e._self._c;return s("NcModal",{ref:"translate-modal",attrs:{size:"large",container:e.container},on:{close:function(i){return e.$emit("close")}}},[e.isMounted?s("div",{staticClass:"translate-dialog"},[s("h2",[e._v(" "+e._s(e.t("spreed","Translate message"))+" ")]),e._v(" "),s("div",{staticClass:"translate-dialog__wrapper"},[s("NcSelect",{staticClass:"translate-dialog__select",attrs:{"input-id":"from","aria-label-combobox":e.t("spreed","Source language to translate from"),placeholder:e.t("spreed","Translate from"),options:e.optionsFrom,"no-wrap":""},model:{value:e.selectedFrom,callback:function(i){e.selectedFrom=i},expression:"selectedFrom"}}),e._v(" "),s("ArrowRight"),e._v(" "),s("NcSelect",{staticClass:"translate-dialog__select",attrs:{"input-id":"to","aria-label-combobox":e.t("spreed","Target language to translate into"),placeholder:e.t("spreed","Translate to"),options:e.optionsTo,"no-wrap":""},model:{value:e.selectedTo,callback:function(i){e.selectedTo=i},expression:"selectedTo"}}),e._v(" "),s("NcButton",{staticClass:"translate-dialog__button",attrs:{type:"primary",disabled:e.isLoading},on:{click:e.handleTranslate},scopedSlots:e._u([e.isLoading?{key:"icon",fn:function(){return[s("NcLoadingIcon")]},proxy:!0}:null],null,!0)},[e._v(`
				`+e._s(e.isLoading?e.t("spreed","Translating"):e.t("spreed","Translate"))+`
			`)])],1),e._v(" "),s("NcRichText",{staticClass:"translate-dialog__message translate-dialog__message-source",attrs:{text:e.message,arguments:e.richParameters,"reference-limit":0}}),e._v(" "),e.translatedMessage?[s("NcRichText",{staticClass:"translate-dialog__message translate-dialog__message-translation",attrs:{text:e.translatedMessage,arguments:e.richParameters,"reference-limit":0}}),e._v(" "),s("NcButton",{staticClass:"translate-dialog__copy-button",on:{click:e.handleCopyTranslation},scopedSlots:e._u([{key:"icon",fn:function(){return[s("ContentCopy")]},proxy:!0}],null,!1,1967269327)},[e._v(`
				`+e._s(e.t("spreed","Copy translated text"))+`
			`)])]:e._e()],2):e._e()])},Ln=[],Rn=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon arrow-right-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Pn=[];const In={name:"ArrowRightIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Nn=(0,h.Z)(In,Rn,Pn,!1,null,null,null);const jn=Nn.exports;var Te=r(40515),Et=r(78652),Ft=r(59112);/**
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
 */const $n=async function(a){return Y.Z.get((0,H.Ii)("/translation/languages",void 0,a),a)},Un=async function(a,e,s,i){return Y.Z.post((0,H.Ii)("/translation/translate",void 0,i),{text:a,fromLanguage:e,toLanguage:s},i)},Zn={name:"MessageTranslateDialog",components:{ArrowRight:jn,ContentCopy:nt,NcRichText:Et.ZP,NcModal:X.Z,NcSelect:Ft.N,NcButton:V.Z,NcLoadingIcon:Te.Z},props:{message:{type:String,required:!0},richParameters:{type:Object,required:!0}},emits:["close"],data(){return{isMounted:!1,availableLanguages:null,selectedFrom:null,selectedTo:null,isLoading:!1,translatedMessage:""}},computed:{container(){return this.$store.getters.getMainContainerSelector()},userLanguage(){return navigator.language.substring(0,2)},sourceTree(){const a={};return Array.from(new Set(this.availableLanguages?.map(s=>s.from))).forEach(s=>{a[s]={id:s,label:this.availableLanguages?.find(i=>i.from===s)?.fromLabel,translations:this.availableLanguages?.filter(i=>i.from===s).map(i=>({id:i.to,label:i.toLabel}))}}),a},translationTree(){const a={};return Array.from(new Set(this.availableLanguages?.map(s=>s.to))).forEach(s=>{a[s]={id:s,label:this.availableLanguages?.find(i=>i.to===s)?.toLabel,sources:this.availableLanguages?.filter(i=>i.to===s).map(i=>({id:i.from,label:i.fromLabel}))}}),a},optionsFrom(){return this.selectedTo?.id?this.translationTree[this.selectedTo?.id]?.sources:Object.values(this.sourceTree).map(a=>({id:a.id,label:a.label}))},optionsTo(){return this.selectedFrom?.id?this.sourceTree[this.selectedFrom?.id]?.translations:Object.values(this.translationTree).map(a=>({id:a.id,label:a.label}))}},watch:{selectedTo(){this.translatedMessage=""},selectedFrom(){this.translatedMessage=""}},async created(){const a=await $n();this.availableLanguages=a.data.ocs.data.languages},mounted(){this.selectedTo=this.optionsTo.find(a=>a.id===this.userLanguage)||null,this.selectedTo&&this.translateMessage(),this.$nextTick(()=>{this.isMounted=!!this.$refs["translate-modal"].randId})},methods:{handleTranslate(){this.translateMessage(this.selectedFrom?.id)},async translateMessage(a=null){try{this.isLoading=!0;const e=await Un(this.message,a,this.selectedTo?.id);this.translatedMessage=e.data.ocs.data.text}catch(e){console.error(e),(0,j.x2)(e.response?.data?.ocs?.data?.message??t("spreed","The message could not be translated"))}finally{this.isLoading=!1}},async handleCopyTranslation(){try{await navigator.clipboard.writeText(this.translatedMessage),(0,j.s$)(t("spreed","Translation copied to clipboard"))}catch{(0,j.x2)(t("spreed","Translation could not be copied"))}}}};var Se=r(21730),te={};te.styleTagTransform=I(),te.setAttributes=R(),te.insert=L().bind(null,"head"),te.domAPI=O(),te.insertStyleElement=P();var fu=w()(Se.Z,te);const Du=Se.Z&&Se.Z.locals?Se.Z.locals:void 0;var Vn=(0,h.Z)(Zn,On,Ln,!1,null,"36e28070",null);const Gn=Vn.exports;var zn=function(){var e=this,s=e._self._c;return s("a",{staticClass:"contact",attrs:{href:e.link,"aria-label":e.contactAriaLabel,target:"_blank"}},[e.contactPhotoFromBase64?s("img",{class:{contact__image:e.contactHasPhoto,contact__icon:!e.contactHasPhoto},attrs:{alt:"",src:e.contactPhotoFromBase64}}):e._e(),e._v(" "),s("div",{staticClass:"contact__lineone"},[s("div",{staticClass:"title"},[e._v(`
			`+e._s(e.displayName)+`
		`)])])])},Wn=[],lt=r(53211);const Hn={name:"Contact",directives:{tooltip:lt.Z},props:{name:{type:String,required:!0},link:{type:String,required:!0},contactName:{type:String,default:""},contactPhoto:{type:String,default:""},contactPhotoMimetype:{type:String,default:""}},computed:{contactHasPhoto(){return this.contactPhotoMimetype&&this.contactPhoto},contactPhotoFromBase64(){return this.contactHasPhoto?"data:"+this.contactPhotoMimetype+";base64,"+this.contactPhoto:OC.MimeType.getIconUrl("text/vcard")},displayName(){return this.contactName||this.name},contactAriaLabel(){return t("spreed","Contact")}}};var we=r(99161),se={};se.styleTagTransform=I(),se.setAttributes=R(),se.insert=L().bind(null,"head"),se.domAPI=O(),se.insertStyleElement=P();var bu=w()(we.Z,se);const Eu=we.Z&&we.Z.locals?we.Z.locals:void 0;var Yn=(0,h.Z)(Hn,zn,Wn,!1,null,"d23756a4",null);const Kn=Yn.exports;var Xn=function(){var e=this,s=e._self._c;return s("a",{staticClass:"deck-card",class:{wide:e.wide},attrs:{href:e.link,"aria-label":e.deckCardAriaLabel,target:"_blank"}},[s("div",{staticClass:"deck-card__lineone"},[s("div",{staticClass:"icon-deck"}),e._v(" "),s("div",{staticClass:"title"},[e._v(`
			`+e._s(e.name)+`
		`)])]),e._v(" "),s("div",{staticClass:"deck-card__linetwo"},[s("div",[e._v(`
			`+e._s(e.deckLocation)+`
		`)])])])},Jn=[];const Qn={name:"DeckCard",directives:{tooltip:lt.Z},props:{type:{type:String,required:!0},id:{type:String,required:!0},name:{type:String,required:!0},boardname:{type:String,required:!0},stackname:{type:String,required:!0},link:{type:String,required:!0},wide:{type:Boolean,default:!1}},computed:{deckLocation(){return t("spreed","{stack} in {board}",{stack:this.stackname,board:this.boardname})},deckCardAriaLabel(){return t("spreed","Deck Card")}}};var Oe=r(69726),ae={};ae.styleTagTransform=I(),ae.setAttributes=R(),ae.insert=L().bind(null,"head"),ae.domAPI=O(),ae.insertStyleElement=P();var Mu=w()(Oe.Z,ae);const Bu=Oe.Z&&Oe.Z.locals?Oe.Z.locals:void 0;var qn=(0,h.Z)(Qn,Xn,Jn,!1,null,"6411757a",null);const ei=qn.exports;var ti=r(40962),Mt=r(29763),si=function(){var e=this,s=e._self._c;return s("a",{staticClass:"location",class:{wide:e.wide},attrs:{href:e.mapLink,target:"_blank",rel:"noopener noreferrer","aria-label":e.linkAriaLabel}},[s("LMap",{attrs:{zoom:e.previewZoom,center:e.center,options:{scrollWheelZoom:!1,zoomControl:!1,dragging:!1,attributionControl:!1}},on:{scroll:function(i){i.preventDefault()}}},[s("LTileLayer",{attrs:{url:e.url}}),e._v(" "),s("LControlAttribution",{attrs:{position:"bottomright",prefix:e.attribution}}),e._v(" "),s("LMarker",{attrs:{"lat-lng":e.center}},[s("LTooltip",{attrs:{options:{direction:"top",permanent:"true",offset:[-16,-14]}}},[e._v(`
				`+e._s(e.name)+`
			`)])],1)],1)],1)},ai=[],U=r(45243),ni=function(a){return!a||typeof a.charAt!="function"?a:a.charAt(0).toUpperCase()+a.slice(1)},ii=function(a,e,s,i){var o=function(d){var u="set"+ni(d),M=s[d].type===Object||s[d].type===Array||Array.isArray(s[d].type);s[d].custom&&a[u]?a.$watch(d,function(c,p){a[u](c,p)},{deep:M}):u==="setOptions"?a.$watch(d,function(c,p){(0,U.setOptions)(e,c)},{deep:M}):e[u]&&a.$watch(d,function(c,p){e[u](c)},{deep:M})};for(var l in s)o(l)},Bt=function(a){var e={};for(var s in a){var i=a[s];i!=null&&(e[s]=i)}return e},ri=function(a,e){var s=e.options&&e.options.constructor===Object?e.options:{};a=a&&a.constructor===Object?a:{};var i=Bt(s);a=Bt(a);var o=e.$options.props;for(var l in a){var d=o[l]?o[l].default&&typeof o[l].default=="function"?o[l].default.call():o[l].default:Symbol("unique"),u=!1;Array.isArray(d)?u=JSON.stringify(d)===JSON.stringify(a[l]):u=d===a[l],i[l]&&!u?(console.warn(l+" props is overriding the value passed in the options props"),i[l]=a[l]):i[l]||(i[l]=a[l])}return i},oi={props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},li={props:{options:{type:Object,default:function(){return{}}}}},di={name:"LControlAttribution",mixins:[oi,li],props:{prefix:{type:[String,Boolean],default:null}},mounted:function(){var e=this,s=ri(Object.assign({},this.controlOptions,{prefix:this.prefix}),this);this.mapObject=U.control.attribution(s),ii(this,this.mapObject,this.$options.props),this.mapObject.addTo(this.$parent.mapObject),this.$nextTick(function(){e.$emit("ready",e.mapObject)})},render:function(){return null}};function ui(a,e,s,i,o,l,d,u,M,c){typeof d!="boolean"&&(M=u,u=d,d=!1);var p=typeof s=="function"?s.options:s;a&&a.render&&(p.render=a.render,p.staticRenderFns=a.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),i&&(p._scopeId=i);var m;if(l?(m=function(_){_=_||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!_&&typeof __VUE_SSR_CONTEXT__<"u"&&(_=__VUE_SSR_CONTEXT__),e&&e.call(this,M(_)),_&&_._registeredComponents&&_._registeredComponents.add(l)},p._ssrRegister=m):e&&(m=d?function(_){e.call(this,c(_,this.$root.$options.shadowRoot))}:function(_){e.call(this,u(_))}),m)if(p.functional){var v=p.render;p.render=function(T,S){return m.call(S),v(T,S)}}else{var x=p.beforeCreate;p.beforeCreate=x?[].concat(x,m):[m]}return s}var ci=di,pi=void 0,_i=void 0,Ai=void 0,mi=void 0,gi=ui({},pi,ci,_i,mi,Ai,!1,void 0,void 0,void 0);const hi=gi;var Ci=function(a){return!a||typeof a.charAt!="function"?a:a.charAt(0).toUpperCase()+a.slice(1)},vi=function(a,e,s,i){var o=function(d){var u="set"+Ci(d),M=s[d].type===Object||s[d].type===Array||Array.isArray(s[d].type);s[d].custom&&a[u]?a.$watch(d,function(c,p){a[u](c,p)},{deep:M}):u==="setOptions"?a.$watch(d,function(c,p){(0,U.setOptions)(e,c)},{deep:M}):e[u]&&a.$watch(d,function(c,p){e[u](c)},{deep:M})};for(var l in s)o(l)},xt=function(a){var e={};for(var s in a){var i=a[s];i!=null&&(e[s]=i)}return e},fi=function(a,e){var s=e.options&&e.options.constructor===Object?e.options:{};a=a&&a.constructor===Object?a:{};var i=xt(s);a=xt(a);var o=e.$options.props;for(var l in a){var d=o[l]?o[l].default&&typeof o[l].default=="function"?o[l].default.call():o[l].default:Symbol("unique"),u=!1;Array.isArray(d)?u=JSON.stringify(d)===JSON.stringify(a[l]):u=d===a[l],i[l]&&!u?(console.warn(l+" props is overriding the value passed in the options props"),i[l]=a[l]):i[l]||(i[l]=a[l])}return i},Di=function(a){for(var e=!1;a&&!e;)a.mapObject===void 0?a=a.$parent:e=!0;return a},yi={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(e,s){var i=this.$parent.mapObject.attributionControl;i.removeAttribution(s).addAttribution(e)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(e){this.mapObject&&(e?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var e=this.mapObject?this.mapObject.getTooltip():null;e&&e.unbindTooltip()},unbindPopup:function(){var e=this.mapObject?this.mapObject.getPopup():null;e&&e.unbindPopup()},updateVisibleProp:function(e){this.$emit("update:visible",e)}}},bi={mixins:[yi],props:{pane:{type:String,default:"tilePane"},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},tileSize:{type:Number,default:256},noWrap:{type:Boolean,default:!1}},mounted:function(){this.gridLayerOptions=Object.assign({},this.layerOptions,{pane:this.pane,opacity:this.opacity,zIndex:this.zIndex,tileSize:this.tileSize,noWrap:this.noWrap})}},Ei={mixins:[bi],props:{tms:{type:Boolean,default:!1},subdomains:{type:[String,Array],default:"abc",validator:function(a){return typeof a=="string"?!0:Array.isArray(a)?a.every(function(e){return typeof e=="string"}):!1}},detectRetina:{type:Boolean,default:!1}},mounted:function(){this.tileLayerOptions=Object.assign({},this.gridLayerOptions,{tms:this.tms,subdomains:this.subdomains,detectRetina:this.detectRetina})},render:function(){return null}},Fi={props:{options:{type:Object,default:function(){return{}}}}},Mi={name:"LTileLayer",mixins:[Ei,Fi],props:{url:{type:String,default:null},tileLayerClass:{type:Function,default:U.tileLayer}},mounted:function(){var e=this,s=fi(this.tileLayerOptions,this);this.mapObject=this.tileLayerClass(this.url,s),U.DomEvent.on(this.mapObject,this.$listeners),vi(this,this.mapObject,this.$options.props),this.parentContainer=Di(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.$nextTick(function(){e.$emit("ready",e.mapObject)})}};function Bi(a,e,s,i,o,l,d,u,M,c){typeof d!="boolean"&&(M=u,u=d,d=!1);var p=typeof s=="function"?s.options:s;a&&a.render&&(p.render=a.render,p.staticRenderFns=a.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),i&&(p._scopeId=i);var m;if(l?(m=function(_){_=_||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!_&&typeof __VUE_SSR_CONTEXT__<"u"&&(_=__VUE_SSR_CONTEXT__),e&&e.call(this,M(_)),_&&_._registeredComponents&&_._registeredComponents.add(l)},p._ssrRegister=m):e&&(m=d?function(_){e.call(this,c(_,this.$root.$options.shadowRoot))}:function(_){e.call(this,u(_))}),m)if(p.functional){var v=p.render;p.render=function(T,S){return m.call(S),v(T,S)}}else{var x=p.beforeCreate;p.beforeCreate=x?[].concat(x,m):[m]}return s}var xi=Mi,ki=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div")},Ti=[],Si=void 0,wi=void 0,Oi=void 0,Li=!1,Ri=Bi({render:ki,staticRenderFns:Ti},Si,xi,wi,Li,Oi,!1,void 0,void 0,void 0);const Pi=Ri;var Ii=function(a,e){var s,i=function(){for(var o=[],l=arguments.length;l--;)o[l]=arguments[l];var d=this;s&&clearTimeout(s),s=setTimeout(function(){a.apply(d,o),s=null},e)};return i.cancel=function(){s&&clearTimeout(s)},i},Ni=function(a){return!a||typeof a.charAt!="function"?a:a.charAt(0).toUpperCase()+a.slice(1)},ji=function(a,e,s,i){var o=function(d){var u="set"+Ni(d),M=s[d].type===Object||s[d].type===Array||Array.isArray(s[d].type);s[d].custom&&a[u]?a.$watch(d,function(c,p){a[u](c,p)},{deep:M}):u==="setOptions"?a.$watch(d,function(c,p){(0,U.setOptions)(e,c)},{deep:M}):e[u]&&a.$watch(d,function(c,p){e[u](c)},{deep:M})};for(var l in s)o(l)},kt=function(a){var e={};for(var s in a){var i=a[s];i!=null&&(e[s]=i)}return e},$i=function(a,e){var s=e.options&&e.options.constructor===Object?e.options:{};a=a&&a.constructor===Object?a:{};var i=kt(s);a=kt(a);var o=e.$options.props;for(var l in a){var d=o[l]?o[l].default&&typeof o[l].default=="function"?o[l].default.call():o[l].default:Symbol("unique"),u=!1;Array.isArray(d)?u=JSON.stringify(d)===JSON.stringify(a[l]):u=d===a[l],i[l]&&!u?(console.warn(l+" props is overriding the value passed in the options props"),i[l]=a[l]):i[l]||(i[l]=a[l])}return i},Ui={props:{options:{type:Object,default:function(){return{}}}}},Zi={name:"LMap",mixins:[Ui],props:{center:{type:[Object,Array],custom:!0,default:function(){return[0,0]}},bounds:{type:[Array,Object],custom:!0,default:null},maxBounds:{type:[Array,Object],default:null},zoom:{type:Number,custom:!0,default:0},minZoom:{type:Number,default:null},maxZoom:{type:Number,default:null},paddingBottomRight:{type:Array,custom:!0,default:null},paddingTopLeft:{type:Array,custom:!0,default:null},padding:{type:Array,custom:!0,default:null},worldCopyJump:{type:Boolean,default:!1},crs:{type:Object,custom:!0,default:function(){return U.CRS.EPSG3857}},maxBoundsViscosity:{type:Number,default:null},inertia:{type:Boolean,default:null},inertiaDeceleration:{type:Number,default:null},inertiaMaxSpeed:{type:Number,default:null},easeLinearity:{type:Number,default:null},zoomAnimation:{type:Boolean,default:null},zoomAnimationThreshold:{type:Number,default:null},fadeAnimation:{type:Boolean,default:null},markerZoomAnimation:{type:Boolean,default:null},noBlockingAnimations:{type:Boolean,default:!1}},data:function(){return{ready:!1,lastSetCenter:this.center?(0,U.latLng)(this.center):null,lastSetBounds:this.bounds?(0,U.latLngBounds)(this.bounds):null,layerControl:void 0,layersToAdd:[],layersInControl:[]}},computed:{fitBoundsOptions:function(){var e={animate:this.noBlockingAnimations?!1:null};return this.padding?e.padding=this.padding:(this.paddingBottomRight&&(e.paddingBottomRight=this.paddingBottomRight),this.paddingTopLeft&&(e.paddingTopLeft=this.paddingTopLeft)),e}},beforeDestroy:function(){this.debouncedMoveEndHandler&&this.debouncedMoveEndHandler.cancel(),this.mapObject&&this.mapObject.remove()},mounted:function(){var e=this,s=$i({minZoom:this.minZoom,maxZoom:this.maxZoom,maxBounds:this.maxBounds,maxBoundsViscosity:this.maxBoundsViscosity,worldCopyJump:this.worldCopyJump,crs:this.crs,center:this.center,zoom:this.zoom,inertia:this.inertia,inertiaDeceleration:this.inertiaDeceleration,inertiaMaxSpeed:this.inertiaMaxSpeed,easeLinearity:this.easeLinearity,zoomAnimation:this.zoomAnimation,zoomAnimationThreshold:this.zoomAnimationThreshold,fadeAnimation:this.fadeAnimation,markerZoomAnimation:this.markerZoomAnimation},this);this.mapObject=(0,U.map)(this.$el,s),this.bounds&&this.fitBounds(this.bounds),this.debouncedMoveEndHandler=Ii(this.moveEndHandler,100),this.mapObject.on("moveend",this.debouncedMoveEndHandler),this.mapObject.on("overlayadd",this.overlayAddHandler),this.mapObject.on("overlayremove",this.overlayRemoveHandler),U.DomEvent.on(this.mapObject,this.$listeners),ji(this,this.mapObject,this.$options.props),this.ready=!0,this.$emit("leaflet:load"),this.$nextTick(function(){e.$emit("ready",e.mapObject)})},methods:{registerLayerControl:function(e){var s=this;this.layerControl=e,this.mapObject.addControl(e.mapObject),this.layersToAdd.forEach(function(i){s.layerControl.addLayer(i)}),this.layersToAdd=[]},addLayer:function(e,s){if(e.layerType!==void 0)if(this.layerControl===void 0)this.layersToAdd.push(e);else{var i=this.layersInControl.find(function(o){return o.mapObject._leaflet_id===e.mapObject._leaflet_id});i||(this.layerControl.addLayer(e),this.layersInControl.push(e))}!s&&e.visible!==!1&&this.mapObject.addLayer(e.mapObject)},hideLayer:function(e){this.mapObject.removeLayer(e.mapObject)},removeLayer:function(e,s){e.layerType!==void 0&&(this.layerControl===void 0?this.layersToAdd=this.layersToAdd.filter(function(i){return i.name!==e.name}):(this.layerControl.removeLayer(e),this.layersInControl=this.layersInControl.filter(function(i){return i.mapObject._leaflet_id!==e.mapObject._leaflet_id}))),s||this.mapObject.removeLayer(e.mapObject)},setZoom:function(e,s){e!=null&&(this.mapObject.setZoom(e,{animate:this.noBlockingAnimations?!1:null}),this.cacheMapView())},setCenter:function(e,s){if(e!=null){var i=(0,U.latLng)(e),o=this.lastSetCenter||this.mapObject.getCenter();(o.lat!==i.lat||o.lng!==i.lng)&&(this.lastSetCenter=i,this.mapObject.panTo(i,{animate:this.noBlockingAnimations?!1:null}),this.cacheMapView(void 0,i))}},setBounds:function(e,s){if(e){var i=(0,U.latLngBounds)(e);if(i.isValid()){var o=this.lastSetBounds||this.mapObject.getBounds(),l=!o.equals(i,0);l&&(this.fitBounds(i),this.cacheMapView(i))}}},setPaddingBottomRight:function(e,s){this.paddingBottomRight=e},setPaddingTopLeft:function(e,s){this.paddingTopLeft=e},setPadding:function(e,s){this.padding=e},setCrs:function(e,s){var i=this.mapObject,o=i.getBounds();i.options.crs=e,this.fitBounds(o,{animate:!1})},fitBounds:function(e,s){this.mapObject.fitBounds(e,Object.assign({},this.fitBoundsOptions,s))},moveEndHandler:function(){this.$emit("update:zoom",this.mapObject.getZoom());var e=this.mapObject.getCenter();this.$emit("update:center",e);var s=this.mapObject.getBounds();this.$emit("update:bounds",s)},overlayAddHandler:function(e){var s=this.layersInControl.find(function(i){return i.name===e.name});s&&s.updateVisibleProp(!0)},overlayRemoveHandler:function(e){var s=this.layersInControl.find(function(i){return i.name===e.name});s&&s.updateVisibleProp(!1)},cacheMapView:function(e,s){this.lastSetBounds=e||this.mapObject.getBounds(),this.lastSetCenter=s||this.lastSetBounds.getCenter()}}};function Vi(a,e,s,i,o,l,d,u,M,c){typeof d!="boolean"&&(M=u,u=d,d=!1);var p=typeof s=="function"?s.options:s;a&&a.render&&(p.render=a.render,p.staticRenderFns=a.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),i&&(p._scopeId=i);var m;if(l?(m=function(_){_=_||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!_&&typeof __VUE_SSR_CONTEXT__<"u"&&(_=__VUE_SSR_CONTEXT__),e&&e.call(this,M(_)),_&&_._registeredComponents&&_._registeredComponents.add(l)},p._ssrRegister=m):e&&(m=d?function(_){e.call(this,c(_,this.$root.$options.shadowRoot))}:function(_){e.call(this,u(_))}),m)if(p.functional){var v=p.render;p.render=function(T,S){return m.call(S),v(T,S)}}else{var x=p.beforeCreate;p.beforeCreate=x?[].concat(x,m):[m]}return s}var Gi=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function zi(a){return function(e,s){return Wi(e,s)}}var dt,Tt={};function Wi(a,e){var s=Gi?e.media||"default":a,i=Tt[s]||(Tt[s]={ids:new Set,styles:[]});if(!i.ids.has(a)){i.ids.add(a);var o=e.source;if(e.map&&(o+=`
/*# sourceURL=`+e.map.sources[0]+" */",o+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",e.media&&i.element.setAttribute("media",e.media),dt===void 0&&(dt=document.head||document.getElementsByTagName("head")[0]),dt.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(o),i.element.styleSheet.cssText=i.styles.filter(Boolean).join(`
`);else{var l=i.ids.size-1,d=document.createTextNode(o),u=i.element.childNodes;u[l]&&i.element.removeChild(u[l]),u.length?i.element.insertBefore(d,u[l]):i.element.appendChild(d)}}}var Hi=Zi,Yi=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"vue2leaflet-map"},[a.ready?a._t("default"):a._e()],2)},Ki=[],Xi=function(a){a&&a("data-v-09f270aa_0",{source:".vue2leaflet-map{height:100%;width:100%}",map:void 0,media:void 0})},Ji=void 0,Qi=void 0,qi=!1,er=Vi({render:Yi,staticRenderFns:Ki},Xi,Hi,Ji,qi,Qi,!1,zi,void 0,void 0);const tr=er;var sr=function(a,e){var s,i=function(){for(var o=[],l=arguments.length;l--;)o[l]=arguments[l];var d=this;s&&clearTimeout(s),s=setTimeout(function(){a.apply(d,o),s=null},e)};return i.cancel=function(){s&&clearTimeout(s)},i},ar=function(a){return!a||typeof a.charAt!="function"?a:a.charAt(0).toUpperCase()+a.slice(1)},nr=function(a,e,s,i){var o=function(d){var u="set"+ar(d),M=s[d].type===Object||s[d].type===Array||Array.isArray(s[d].type);s[d].custom&&a[u]?a.$watch(d,function(c,p){a[u](c,p)},{deep:M}):u==="setOptions"?a.$watch(d,function(c,p){(0,U.setOptions)(e,c)},{deep:M}):e[u]&&a.$watch(d,function(c,p){e[u](c)},{deep:M})};for(var l in s)o(l)},St=function(a){var e={};for(var s in a){var i=a[s];i!=null&&(e[s]=i)}return e},ir=function(a,e){var s=e.options&&e.options.constructor===Object?e.options:{};a=a&&a.constructor===Object?a:{};var i=St(s);a=St(a);var o=e.$options.props;for(var l in a){var d=o[l]?o[l].default&&typeof o[l].default=="function"?o[l].default.call():o[l].default:Symbol("unique"),u=!1;Array.isArray(d)?u=JSON.stringify(d)===JSON.stringify(a[l]):u=d===a[l],i[l]&&!u?(console.warn(l+" props is overriding the value passed in the options props"),i[l]=a[l]):i[l]||(i[l]=a[l])}return i},rr=function(a){for(var e=!1;a&&!e;)a.mapObject===void 0?a=a.$parent:e=!0;return a},or={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(e,s){var i=this.$parent.mapObject.attributionControl;i.removeAttribution(s).addAttribution(e)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(e){this.mapObject&&(e?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var e=this.mapObject?this.mapObject.getTooltip():null;e&&e.unbindTooltip()},unbindPopup:function(){var e=this.mapObject?this.mapObject.getPopup():null;e&&e.unbindPopup()},updateVisibleProp:function(e){this.$emit("update:visible",e)}}},lr={props:{options:{type:Object,default:function(){return{}}}}},dr={name:"LMarker",mixins:[or,lr],props:{pane:{type:String,default:"markerPane"},draggable:{type:Boolean,custom:!0,default:!1},latLng:{type:[Object,Array],custom:!0,default:null},icon:{type:[Object],custom:!1,default:function(){return new U.Icon.Default}},opacity:{type:Number,custom:!1,default:1},zIndexOffset:{type:Number,custom:!1,default:null}},data:function(){return{ready:!1}},beforeDestroy:function(){this.debouncedLatLngSync&&this.debouncedLatLngSync.cancel()},mounted:function(){var e=this,s=ir(Object.assign({},this.layerOptions,{icon:this.icon,zIndexOffset:this.zIndexOffset,draggable:this.draggable,opacity:this.opacity}),this);this.mapObject=(0,U.marker)(this.latLng,s),U.DomEvent.on(this.mapObject,this.$listeners),this.debouncedLatLngSync=sr(this.latLngSync,100),this.mapObject.on("move",this.debouncedLatLngSync),nr(this,this.mapObject,this.$options.props),this.parentContainer=rr(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.ready=!0,this.$nextTick(function(){e.$emit("ready",e.mapObject)})},methods:{setDraggable:function(e,s){this.mapObject.dragging&&(e?this.mapObject.dragging.enable():this.mapObject.dragging.disable())},setLatLng:function(e){if(e!=null&&this.mapObject){var s=this.mapObject.getLatLng(),i=(0,U.latLng)(e);(i.lat!==s.lat||i.lng!==s.lng)&&this.mapObject.setLatLng(i)}},latLngSync:function(e){this.$emit("update:latLng",e.latlng),this.$emit("update:lat-lng",e.latlng)}},render:function(a){return this.ready&&this.$slots.default?a("div",{style:{display:"none"}},this.$slots.default):null}};function ur(a,e,s,i,o,l,d,u,M,c){typeof d!="boolean"&&(M=u,u=d,d=!1);var p=typeof s=="function"?s.options:s;a&&a.render&&(p.render=a.render,p.staticRenderFns=a.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),i&&(p._scopeId=i);var m;if(l?(m=function(_){_=_||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!_&&typeof __VUE_SSR_CONTEXT__<"u"&&(_=__VUE_SSR_CONTEXT__),e&&e.call(this,M(_)),_&&_._registeredComponents&&_._registeredComponents.add(l)},p._ssrRegister=m):e&&(m=d?function(_){e.call(this,c(_,this.$root.$options.shadowRoot))}:function(_){e.call(this,u(_))}),m)if(p.functional){var v=p.render;p.render=function(T,S){return m.call(S),v(T,S)}}else{var x=p.beforeCreate;p.beforeCreate=x?[].concat(x,m):[m]}return s}var cr=dr,pr=void 0,_r=void 0,Ar=void 0,mr=void 0,gr=ur({},pr,cr,_r,mr,Ar,!1,void 0,void 0,void 0);const hr=gr;var Cr=function(a){return!a||typeof a.charAt!="function"?a:a.charAt(0).toUpperCase()+a.slice(1)},vr=function(a,e,s,i){var o=function(d){var u="set"+Cr(d),M=s[d].type===Object||s[d].type===Array||Array.isArray(s[d].type);s[d].custom&&a[u]?a.$watch(d,function(c,p){a[u](c,p)},{deep:M}):u==="setOptions"?a.$watch(d,function(c,p){(0,U.setOptions)(e,c)},{deep:M}):e[u]&&a.$watch(d,function(c,p){e[u](c)},{deep:M})};for(var l in s)o(l)},wt=function(a){var e={};for(var s in a){var i=a[s];i!=null&&(e[s]=i)}return e},fr=function(a,e){var s=e.options&&e.options.constructor===Object?e.options:{};a=a&&a.constructor===Object?a:{};var i=wt(s);a=wt(a);var o=e.$options.props;for(var l in a){var d=o[l]?o[l].default&&typeof o[l].default=="function"?o[l].default.call():o[l].default:Symbol("unique"),u=!1;Array.isArray(d)?u=JSON.stringify(d)===JSON.stringify(a[l]):u=d===a[l],i[l]&&!u?(console.warn(l+" props is overriding the value passed in the options props"),i[l]=a[l]):i[l]||(i[l]=a[l])}return i},Dr=function(a){for(var e=!1;a&&!e;)a.mapObject===void 0?a=a.$parent:e=!0;return a},yr={props:{content:{type:String,default:null,custom:!0}},mounted:function(){this.popperOptions={}},methods:{setContent:function(e){this.mapObject&&e!==null&&e!==void 0&&this.mapObject.setContent(e)}},render:function(e){return this.$slots.default?e("div",this.$slots.default):null}},br={props:{options:{type:Object,default:function(){return{}}}}},Er={name:"LTooltip",mixins:[yr,br],mounted:function(){var e=this,s=fr(this.popperOptions,this);this.mapObject=(0,U.tooltip)(s),U.DomEvent.on(this.mapObject,this.$listeners),vr(this,this.mapObject,this.$options.props),this.mapObject.setContent(this.content||this.$el),this.parentContainer=Dr(this.$parent),this.parentContainer.mapObject.bindTooltip(this.mapObject),this.$nextTick(function(){e.$emit("ready",e.mapObject)})},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.unbindTooltip?this.parentContainer.unbindTooltip():this.parentContainer.mapObject&&this.parentContainer.mapObject.unbindTooltip&&this.parentContainer.mapObject.unbindTooltip())}};function Fr(a,e,s,i,o,l,d,u,M,c){typeof d!="boolean"&&(M=u,u=d,d=!1);var p=typeof s=="function"?s.options:s;a&&a.render&&(p.render=a.render,p.staticRenderFns=a.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),i&&(p._scopeId=i);var m;if(l?(m=function(_){_=_||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!_&&typeof __VUE_SSR_CONTEXT__<"u"&&(_=__VUE_SSR_CONTEXT__),e&&e.call(this,M(_)),_&&_._registeredComponents&&_._registeredComponents.add(l)},p._ssrRegister=m):e&&(m=d?function(_){e.call(this,c(_,this.$root.$options.shadowRoot))}:function(_){e.call(this,u(_))}),m)if(p.functional){var v=p.render;p.render=function(T,S){return m.call(S),v(T,S)}}else{var x=p.beforeCreate;p.beforeCreate=x?[].concat(x,m):[m]}return s}var Mr=Er,Br=void 0,xr=void 0,kr=void 0,Tr=void 0,Sr=Fr({},Br,Mr,xr,Tr,kr,!1,void 0,void 0,void 0);const wr={name:"Location",components:{LControlAttribution:hi,LTileLayer:Pi,LMap:tr,LMarker:hr,LTooltip:Sr},props:{latitude:{type:Number,required:!0},longitude:{type:Number,required:!0},name:{type:String,default:""},wide:{type:Boolean,default:!1}},data(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",previewZoom:13,linkZoom:18,attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},computed:{center(){return[this.latitude,this.longitude]},mapLink(){return`https://www.openstreetmap.org/?mlat=${this.latitude}&mlon=${this.longitude}#map=${this.linkZoom}/${this.latitude}/${this.longitude}`},linkAriaLabel(){return t("spreed","Open this location in OpenStreetMap")}}};var Le=r(71834),ne={};ne.styleTagTransform=I(),ne.setAttributes=R(),ne.insert=L().bind(null,"head"),ne.domAPI=O(),ne.insertStyleElement=P();var Tu=w()(Le.Z,ne);const Su=Le.Z&&Le.Z.locals?Le.Z.locals:void 0;var Or=(0,h.Z)(wr,si,ai,!1,null,"46aa7f57",null);const Lr=Or.exports;var Rr=function(){var e=this,s=e._self._c;return s("span",{ref:"mention",staticClass:"mention"},[e.size?s("NcUserBubble",{attrs:{"display-name":e.name,"avatar-image":e.avatarUrl,user:e.id,size:e.size,primary:e.primary}}):e._e()],1)},Pr=[],Ir=r(43554),Nr=r(4101),Ot=r(66408),Lt=r(29093);const jr={name:"Mention",components:{NcUserBubble:Nr.N},props:{token:{type:String,required:!0},type:{type:String,required:!0},id:{type:String,required:!0},name:{type:String,required:!0},server:{type:String,default:""}},data(){return{size:null}},computed:{isMentionToAll(){return this.type==="call"},isGroupMention(){return this.type==="user-group"||this.type==="group"},isMentionToGuest(){return this.type==="guest"},isRemoteUser(){return this.type==="user"&&this.server!==""},isCurrentGuest(){return this.$store.getters.isActorGuest()&&this.id==="guest/"+this.$store.getters.getActorId()},isCurrentUser(){return this.isRemoteUser?!1:this.$store.getters.isActorUser()&&this.id===this.$store.getters.getUserId()},isCurrentUserGroup(){return this.isGroupMention&&(0,Ir.j)("spreed","user_group_ids",[]).includes(this.id)},primary(){return this.isMentionToAll||this.isCurrentUser||this.isGroupMention&&this.isCurrentUserGroup||this.isMentionToGuest&&this.isCurrentGuest},avatarUrl(){return this.isRemoteUser?this.token?(0,Ot.Z6)(this.token,this.id+"@"+this.server,Lt.$,64):"icon-user-forced-white":this.isGroupMention?"icon-group-forced-white":this.isMentionToGuest?"icon-user-forced-white":this.isMentionToAll?(0,Ot.aQ)(this.id,Lt.$):void 0}},mounted(){this.size=parseInt(window.getComputedStyle(this.$refs.mention).fontSize,10)*4/3}};var Re=r(66488),ie={};ie.styleTagTransform=I(),ie.setAttributes=R(),ie.insert=L().bind(null,"head"),ie.domAPI=O(),ie.insertStyleElement=P();var Ou=w()(Re.Z,ie);const Lu=Re.Z&&Re.Z.locals?Re.Z.locals:void 0;var $r=(0,h.Z)(jr,Rr,Pr,!1,null,"45a8eb1a",null);const Ur=$r.exports;var Zr=function(){var e=this,s=e._self._c;return s("div",{ref:"messageMain",staticClass:"message-main"},[e.isSystemMessage||e.isDeletedMessage?s("div",{staticClass:"message-main__text",class:{"system-message":e.isSystemMessage&&!e.showJoinCallButton,"deleted-message":e.isDeletedMessage,"message-highlighted":e.showJoinCallButton}},[e.isDeletedMessage?s("CancelIcon",{attrs:{size:16}}):e._e(),e._v(" "),s("NcRichText",{attrs:{text:e.renderedMessage,arguments:e.richParameters,autolink:"",dir:"auto","reference-limit":0}}),e._v(" "),e.showJoinCallButton?s("CallButton"):e._e(),e._v(" "),e.showResultsButton?s("Poll",e._b({attrs:{token:e.token,"show-as-button":""}},"Poll",e.messageParameters.poll,!1)):e._e()],1):s("div",{staticClass:"message-main__text markdown-message",class:{"message-highlighted":e.isNewPollMessage},on:{mouseover:e.handleMarkdownMouseOver,mouseleave:e.handleMarkdownMouseLeave}},[e.parent?s("Quote",e._b({},"Quote",e.parent,!1)):e._e(),e._v(" "),s("NcRichText",{class:{"single-emoji":e.isSingleEmoji},attrs:{text:e.renderedMessage,arguments:e.richParameters,autolink:"",dir:"auto",interactive:e.markdown&&e.isEditable,"use-extended-markdown":e.markdown,"reference-limit":1},on:{"interact:todo":e.handleInteraction}}),e._v(" "),e.containsCodeBlocks?s("NcButton",{directives:[{name:"show",rawName:"v-show",value:e.currentCodeBlock!==null,expression:"currentCodeBlock !== null"}],staticClass:"message-copy-code",style:{top:e.copyButtonOffset},attrs:{type:"tertiary","aria-label":e.t("spreed","Copy code block"),title:e.t("spreed","Copy code block")},on:{click:e.copyCodeBlock},scopedSlots:e._u([{key:"icon",fn:function(){return[s("ContentCopyIcon",{attrs:{size:16}})]},proxy:!0}],null,!1,134070762)}):e._e()],1),e._v(" "),e.isDeletedMessage?e._e():s("div",{staticClass:"message-main__info"},[s("span",{class:["date",{"date--hidden":e.hideDate}],attrs:{title:e.messageDate}},[e._v(e._s(e.messageTime))]),e._v(" "),e.sendingFailure?s("div",{staticClass:"message-status sending-failed",class:{"retry-option":e.sendingErrorCanRetry},attrs:{title:e.sendingErrorIconTooltip,"aria-label":e.sendingErrorIconTooltip,tabindex:"0"},on:{mouseover:function(i){e.showReloadButton=!0},focus:function(i){e.showReloadButton=!0},mouseleave:function(i){e.showReloadButton=!1},blur:function(i){e.showReloadButton=!1}}},[e.sendingErrorCanRetry&&e.showReloadButton?s("NcButton",{attrs:{"aria-label":e.sendingErrorIconTooltip},on:{click:e.handleRetry},scopedSlots:e._u([{key:"icon",fn:function(){return[s("ReloadIcon",{attrs:{size:16}})]},proxy:!0}],null,!1,3321262167)}):s("AlertCircleIcon",{attrs:{size:16}})],1):e.showLoadingIcon?s("div",{staticClass:"icon-loading-small message-status",attrs:{title:e.loadingIconTooltip,"aria-label":e.loadingIconTooltip}}):e.showCommonReadIcon?s("div",{staticClass:"message-status",attrs:{title:e.commonReadIconTooltip,"aria-label":e.commonReadIconTooltip}},[s("CheckAllIcon",{attrs:{size:16}})],1):e.showSentIcon?s("div",{staticClass:"message-status",attrs:{title:e.sentIconTooltip,"aria-label":e.sentIconTooltip}},[s("CheckIcon",{attrs:{size:16}})],1):e._e()])])},Vr=[];const Gr=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;var zr=r(92098),Wr=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon cancel-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Hr=[];const Yr={name:"CancelIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Kr=(0,h.Z)(Yr,Wr,Hr,!1,null,null,null);const Rt=Kr.exports;var Xr=r(77842),Jr=function(){var e=this,s=e._self._c;return e.showAsButton?s("NcButton",{staticClass:"poll-closed",attrs:{type:"secondary"},on:{click:e.openPoll}},[e._v(`
	`+e._s(e.t("spreed","See results"))+`
`)]):s("a",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.getPollData,expression:"getPollData"}],staticClass:"poll-card",attrs:{"aria-label":e.t("spreed","Poll"),role:"button"},on:{click:e.openPoll}},[s("span",{staticClass:"poll-card__header"},[s("PollIcon",{attrs:{size:20}}),e._v(" "),s("span",[e._v(e._s(e.name))])],1),e._v(" "),s("span",{staticClass:"poll-card__footer"},[e._v(`
		`+e._s(e.pollFooterText)+`
	`)])])},Qr=[],Pt=r(20332);const qr={name:"Poll",components:{NcButton:V.Z,PollIcon:Pt.Z},props:{name:{type:String,required:!0},id:{type:String,required:!0},token:{type:String,required:!0},showAsButton:{type:Boolean,default:!1}},computed:{poll(){return this.$store.getters.getPoll(this.token,this.id)},pollFooterText(){return this.poll?.status===D.PD.STATUS.OPEN?this.poll?.votedSelf.length>0?t("spreed","Open poll \u2022 You voted already"):t("spreed","Open poll \u2022 Click to vote"):this.poll?.status===D.PD.STATUS.CLOSED?t("spreed","Poll \u2022 Ended"):t("spreed","Poll")}},methods:{getPollData(){this.poll||this.$store.dispatch("getPollData",{token:this.token,pollId:this.id})},openPoll(){this.$store.dispatch("setActivePoll",{token:this.token,pollId:this.id,name:this.name})}}};var Pe=r(71632),re={};re.styleTagTransform=I(),re.setAttributes=R(),re.insert=L().bind(null,"head"),re.domAPI=O(),re.insertStyleElement=P();var Iu=w()(Pe.Z,re);const Nu=Pe.Z&&Pe.Z.locals?Pe.Z.locals:void 0;var eo=(0,h.Z)(qr,Jr,Qr,!1,null,"0ad85c26",null);const It=eo.exports;var to=r(661),ut=r(77013),Ie=r(84749),Z=r(1036);const so=(0,G.F)()?.spreed?.features?.includes("edit-messages"),ao=Gr(),no={name:"MessageBody",components:{CallButton:ut.Z,NcButton:V.Z,NcRichText:Et.ZP,Poll:It,Quote:to.Z,AlertCircleIcon:zr.Z,CancelIcon:Rt,CheckIcon:at.Z,CheckAllIcon:Ct,ContentCopyIcon:nt,ReloadIcon:Xr.Z},inheritAttrs:!1,props:{id:{type:[String,Number],required:!0},token:{type:String,required:!0},actorId:{type:String,required:!0},actorType:{type:String,required:!0},parent:{type:Object,default:void 0},markdown:{type:Boolean,default:!0},message:{type:String,required:!0},messageType:{type:String,required:!0},systemMessage:{type:String,required:!0},messageParameters:{type:[Array,Object],required:!0},richParameters:{type:Object,required:!0},timestamp:{type:Number,default:0},isDeleting:{type:Boolean,default:!1},isTemporary:{type:Boolean,default:!1},hasCall:{type:Boolean,default:!1},sendingFailure:{type:String,default:""},showCommonReadIcon:{type:Boolean,required:!0},commonReadIconTooltip:{type:String,required:!0},showSentIcon:{type:Boolean,required:!0},sentIconTooltip:{type:String,required:!0}},setup(){return{isInCall:(0,Ie.E)()}},data(){return{isEditing:!1,showReloadButton:!1,codeBlocks:null,currentCodeBlock:null,copyButtonOffset:0}},computed:{renderedMessage(){return this.isFileShareMessage&&this.message!=="{file}"?`{file}

`+this.message:this.message},isSystemMessage(){return this.systemMessage!==""},isDeletedMessage(){return this.messageType==="comment_deleted"},isFileShareMessage(){return this.messageParameters?.file},isNewPollMessage(){return this.messageParameters?.object?.type!=="talk-poll"?!1:this.isInCall&&!!this.$store.getters.getNewPolls[this.messageParameters.object.id]},conversation(){return this.$store.getters.conversation(this.token)},isConversationReadOnly(){return this.conversation.readOnly===D.Sl.STATE.READ_ONLY},isModifiable(){return!this.isConversationReadOnly&&this.conversation.participantType!==D.oM.TYPE.GUEST},isObjectShare(){return Object.keys(Object(this.messageParameters)).some(a=>a.startsWith("object"))},isMyMsg(){return this.actorId===this.$store.getters.getActorId()&&this.actorType===this.$store.getters.getActorType()},isOneToOne(){return this.conversation.type===D.Sl.TYPE.ONE_TO_ONE||this.conversation.type===D.Sl.TYPE.ONE_TO_ONE_FORMER},isEditable(){return!so||!this.isModifiable||this.isObjectShare||(!this.$store.getters.isModerator||this.isOneToOne)&&!this.isMyMsg?!1:(0,N.Z)(this.timestamp*1e3).add(1,"d")>(0,N.Z)()},hideDate(){return this.isTemporary||this.isDeleting||!!this.sendingFailure},messageTime(){return(0,N.Z)(this.isTemporary?void 0:this.timestamp*1e3).format("LT")},messageDate(){return(0,N.Z)(this.isTemporary?void 0:this.timestamp*1e3).format("LL")},isLastCallStartedMessage(){return this.systemMessage==="call_started"&&this.id===this.$store.getters.getLastCallStartedMessageId(this.token)},showJoinCallButton(){return this.hasCall&&!this.isInCall&&this.isLastCallStartedMessage},showResultsButton(){return this.systemMessage==="poll_closed"},isSingleEmoji(){if(this.isSystemMessage||this.isDeletedMessage)return;const a=this.renderedMessage.trim(),e=a.match(ao);return e!==null&&e.length===1&&e[0]===a},showLoadingIcon(){return this.isTemporary||this.isDeleting||this.isEditing},loadingIconTooltip(){return t("spreed","Sending message")},sendingErrorCanRetry(){return["timeout","other","failed-upload"].includes(this.sendingFailure)},sendingErrorIconTooltip(){return this.sendingErrorCanRetry?t("spreed","Failed to send the message. Click to try again"):this.sendingFailure==="quota"?t("spreed","Not enough free space to upload file"):this.sendingFailure==="failed-share"?t("spreed","You are not allowed to share files"):t("spreed","You cannot send messages to this conversation at the moment")},containsCodeBlocks(){return this.message.includes("```")}},watch:{showJoinCallButton(){Z.N.$emit("scroll-chat-to-bottom",{smooth:!0})}},mounted(){Z.N.$on("editing-message-processing",this.setIsEditing),this.containsCodeBlocks&&(this.codeBlocks=Array.from(this.$refs.messageMain?.querySelectorAll("pre")))},methods:{handleMarkdownMouseOver(a){if(!this.containsCodeBlocks)return;const e=this.codeBlocks.findIndex(s=>s.contains(a.target));if(e!==-1){this.currentCodeBlock=e;const s=this.codeBlocks[e];this.copyButtonOffset=`${s.offsetTop}px`}},handleMarkdownMouseLeave(){this.currentCodeBlock=null,this.copyButtonOffset=0},async copyCodeBlock(){const a=this.codeBlocks[this.currentCodeBlock].textContent;try{await navigator.clipboard.writeText(a),(0,j.s$)(t("spreed","Code block copied to clipboard"))}catch{(0,j.x2)(t("spreed","Code block could not be copied"))}},handleRetry(){this.sendingErrorCanRetry&&(this.sendingFailure==="failed-upload"?this.$store.dispatch("retryUploadFiles",{token:this.token,uploadId:this.$store.getters.message(this.token,this.id)?.uploadId,caption:this.renderedMessage!==this.message?this.message:void 0}):(Z.N.$emit("retry-message",this.id),Z.N.$emit("focus-chat-input")))},async handleInteraction(a){if(!this.isEditable)return;const e=a.split("-markdown-input-")[0],s=Array.from(this.$refs.messageMain.querySelectorAll(`span[id^="${e}-markdown-input-"]`)).findIndex(d=>d.id.includes(a));if(s===-1)return;let i=0;const o=this.message.split(`
`);for(let d=0;d<o.length;d++)if(o[d].trim().match(/^- {1,4}\[\s\]/)||o[d].trim().match(/^- {1,4}\[x\]/)){if(i===s){o[d].includes("[x]")?o[d]=o[d].replace("[x]","[ ]"):o[d]=o[d].replace("[ ]","[x]");break}i++}let l=(0,ot.D)(o.join(`
`).trim());l=(0,ot.i)(l,this.messageParameters);try{await this.$store.dispatch("editMessage",{token:this.token,messageId:this.id,updatedMessage:l})}catch(d){console.error(d),(0,j.x2)(t("spreed","Could not update the message"))}},setIsEditing({messageId:a,value:e}){a===this.id&&(this.isEditing=e)}}};var Ne=r(59664),oe={};oe.styleTagTransform=I(),oe.setAttributes=R(),oe.insert=L().bind(null,"head"),oe.domAPI=O(),oe.insertStyleElement=P();var $u=w()(Ne.Z,oe);const Uu=Ne.Z&&Ne.Z.locals?Ne.Z.locals:void 0;var io=(0,h.Z)(no,Zr,Vr,!1,null,"6b067cad",null);const ro=io.exports;var oo=function(){var e=this,s=e._self._c;return e.reactionsCount&&e.reactionsSorted?s("div",{staticClass:"reactions-wrapper"},[e._l(e.reactionsSorted,function(i){return s("NcPopover",{key:i,attrs:{delay:200,"focus-trap":!1,triggers:["hover"],"popper-triggers":["hover"]},on:{"after-show":e.fetchReactions},scopedSlots:e._u([{key:"trigger",fn:function(){return[s("NcButton",{staticClass:"reaction-button",attrs:{type:e.userHasReacted(i)?"primary":"secondary"},on:{click:function(o){return e.handleReactionClick(i)}}},[e._v(`
				`+e._s(i)+" "+e._s(e.reactionsCount(i))+`
			`)])]},proxy:!0}],null,!0)},[e._v(" "),e.hasReactionsLoaded?s("div",{staticClass:"reaction-details"},[s("span",[e._v(e._s(e.getReactionSummary(i))+`
				`),e.reactionsCount(i)>3?s("a",{staticClass:"more-reactions-button",attrs:{role:"button",tabindex:"0"},on:{click:function(o){o.preventDefault(),e.showAllReactions=!0}}},[e._v(`
					`+e._s(e.remainingReactionsLabel(i))+`
				`)]):e._e()])]):s("div",{staticClass:"details-loading"},[s("NcLoadingIcon")],1)])}),e._v(" "),e.showControls?s("NcButton",{staticClass:"reaction-button",attrs:{title:e.t("spreed","Show all reactions")},on:{click:function(i){e.showAllReactions=!0}}},[s("HeartOutlineIcon",{attrs:{size:15}})],1):e._e(),e._v(" "),e.canReact&&e.showControls?s("NcEmojiPicker",{attrs:{"per-line":5,container:`#message_${e.id}`},on:{select:e.handleReactionClick,"after-show":e.emitEmojiPickerStatus,"after-hide":e.emitEmojiPickerStatus}},[s("NcButton",{staticClass:"reaction-button",attrs:{title:e.t("spreed","Add more reactions"),"aria-label":e.t("spreed","Add more reactions")},scopedSlots:e._u([{key:"icon",fn:function(){return[s("EmoticonPlusOutline",{attrs:{size:15}})]},proxy:!0}],null,!1,1465470732)})],1):e._e(),e._v(" "),e.showAllReactions?s("ReactionsList",{attrs:{token:e.token,"detailed-reactions":e.detailedReactions,"reactions-sorted":e.reactionsSorted},on:{close:function(i){e.showAllReactions=!1}}}):e._e()],2):e._e()},lo=[],uo=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon emoticon-plus-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M15 18H18V15H20V18H23V20H20V23H18V20H15V18M12 17.5C9.67 17.5 7.69 16.04 6.89 14H15.69C14.5 14.78 13.62 15.97 13.23 17.36C12.83 17.45 12.42 17.5 12 17.5M8.5 11C7.67 11 7 10.33 7 9.5C7 8.67 7.67 8 8.5 8C9.33 8 10 8.67 10 9.5C10 10.33 9.33 11 8.5 11M15.5 11C14.67 11 14 10.33 14 9.5C14 8.67 14.67 8 15.5 8C16.33 8 17 8.67 17 9.5C17 10.33 16.33 11 15.5 11M12 20L13.07 19.93C13.18 20.61 13.4 21.26 13.72 21.85C13.16 21.95 12.58 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.47 2 12 2C17.5 2 22 6.5 22 12C22 12.59 21.95 13.16 21.85 13.72C21.26 13.4 20.62 13.18 19.93 13.07L20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},co=[];const po={name:"EmoticonPlusOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var _o=(0,h.Z)(po,uo,co,!1,null,null,null);const Ao=_o.exports;var mo=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon heart-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},go=[];const ho={name:"HeartOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Co=(0,h.Z)(ho,mo,go,!1,null,null,null);const Nt=Co.exports;var jt=r(14714),vo=function(){var e=this,s=e._self._c;return s("NcModal",{attrs:{size:"small",container:e.container},on:{close:e.closeModal}},[s("div",{staticClass:"reactions__modal"},[s("h2",[e._v(`
			`+e._s(e.t("spreed","Reactions"))+`
		`)]),e._v(" "),Object.keys(e.reactionsOverview).length>0?[s("div",{staticClass:"reactions-list__navigation"},e._l(e.reactionsMenu,function(i){return s("NcButton",{key:i,class:{active:e.reactionFilter===i,"all-reactions__button":i==="\u2661"},attrs:{type:"tertiary"},on:{click:function(o){return e.handleTabClick(i)}}},[i==="\u2661"?s("HeartOutlineIcon",{attrs:{size:15}}):s("span",[e._v(`
						`+e._s(i)+`
					`)]),e._v(`
					`+e._s(e.reactionsOverview[i].length)+`
				`)],1)}),1),e._v(" "),s("ul",{staticClass:"reactions-list__scrollable"},e._l(e.reactionsOverview[e.reactionFilter],function(i){return s("li",{key:i.actorId+i.actorType,staticClass:"reactions-item"},[s("AvatarWrapper",{attrs:{id:i.actorId,token:e.token,name:i.actorDisplayName,source:i.actorType,size:e.AVATAR.SIZE.SMALL,"disable-menu":""}}),e._v(" "),s("span",{staticClass:"reactions-item__name"},[e._v(e._s(i.actorDisplayName))]),e._v(" "),s("span",{staticClass:"reactions-item__emojis"},[e._v(`
						`+e._s(i.reaction?.join("")??e.reactionFilter)+`
					`)])],1)}),0)]:s("NcLoadingIcon",{attrs:{size:64}})],2)])},fo=[],je=r(67311);const Do={name:"ReactionsList",components:{AvatarWrapper:je.Z,NcModal:X.Z,NcLoadingIcon:Te.Z,NcButton:V.Z,HeartOutlineIcon:Nt},props:{token:{type:String,required:!0},detailedReactions:{type:Object,default:()=>{}},reactionsSorted:{type:Array,default:()=>[]}},emits:["close"],setup(){return{AVATAR:D.pA,guestNameStore:(0,Ee.t)()}},data(){return{reactionFilter:"\u2661"}},computed:{container(){return this.$store.getters.getMainContainerSelector()},reactionsOverview(){const a={},e={};return Object.entries(this.detailedReactions).forEach(([s,i])=>{e[s]=[],i.forEach(o=>{const l=`${o.actorId}-${o.actorType}`,d=this.getDisplayNameForReaction(o);e[s].push({...o,actorDisplayName:d}),a[l]?a[l].reaction.push(s):a[l]={actorDisplayName:d,actorId:o.actorId,actorType:o.actorType,reaction:[s]}})}),{"\u2661":Object.values(a),...e}},reactionsMenu(){return["\u2661",...this.reactionsSorted]}},methods:{closeModal(){this.$emit("close")},getDisplayNameForReaction(a){if(a.actorType===D.DM.ACTOR_TYPE.GUESTS)return this.guestNameStore.getGuestNameWithGuestSuffix(this.token,a.actorId);const e=a.actorDisplayName.trim();return e===""?t("spreed","Deleted user"):e},handleTabClick(a){this.reactionFilter=a}}};var $e=r(625),le={};le.styleTagTransform=I(),le.setAttributes=R(),le.insert=L().bind(null,"head"),le.domAPI=O(),le.insertStyleElement=P();var zu=w()($e.Z,le);const Wu=$e.Z&&$e.Z.locals?$e.Z.locals:void 0;var yo=(0,h.Z)(Do,vo,fo,!1,null,"51a8af7c",null);const bo=yo.exports,Eo={name:"Reactions",components:{NcButton:V.Z,NcEmojiPicker:ft.Z,NcLoadingIcon:Te.Z,NcPopover:jt.Z,ReactionsList:bo,EmoticonPlusOutline:Ao,HeartOutlineIcon:Nt},props:{token:{type:String,required:!0},canReact:{type:Boolean,default:!1},id:{type:[String,Number],required:!0},showControls:{type:Boolean,default:!1}},emits:["emoji-picker-toggled"],setup(){const a=(0,Ee.t)(),e=(0,Dt.R)();return{guestNameStore:a,reactionsStore:e}},data(){return{showAllReactions:!1}},computed:{hasReactionsLoaded(){return Object.keys(Object(this.detailedReactions)).length!==0},detailedReactions(){return this.reactionsStore.getReactions(this.token,this.id)},plainReactions(){return this.$store.getters.message(this.token,this.id).reactions},reactionsSelf(){return this.$store.getters.message(this.token,this.id).reactionsSelf},reactionsSorted(){if(this.detailedReactions)return Object.keys(this.detailedReactions).sort((a,e)=>this.detailedReactions[e].length-this.detailedReactions[a].length);if(this.plainReactions)return Object.keys(this.plainReactions).sort((a,e)=>this.plainReactions[e]-this.plainReactions[a])},hasOutdatedDetails(){const a=Object.fromEntries(Object.entries(this.detailedReactions).sort().map(([e,s])=>[e,s.length]));return this.hasReactionsLoaded&&JSON.stringify(this.plainReactions)!==JSON.stringify(a)}},methods:{fetchReactions(){(!this.hasReactionsLoaded||this.hasOutdatedDetails)&&this.reactionsStore.fetchReactions(this.token,this.id)},userHasReacted(a){return this.reactionsSelf?.includes(a)},async handleReactionClick(a){if(!this.canReact){(0,j.x2)(t("spreed","No permission to post reactions in this conversation"));return}this.userHasReacted(a)?this.reactionsStore.removeReactionFromMessage({token:this.token,messageId:this.id,selectedEmoji:a}):this.reactionsStore.addReactionToMessage({token:this.token,messageId:this.id,selectedEmoji:a})},getDisplayNameForReaction(a){if(a.actorType===D.DM.ACTOR_TYPE.GUESTS)return this.guestNameStore.getGuestNameWithGuestSuffix(this.token,a.actorId);const e=a.actorDisplayName.trim();return e===""?t("spreed","Deleted user"):e},reactionsCount(a){if(!(!this.detailedReactions||!this.plainReactions))return this.detailedReactions?this.detailedReactions[a]?.length:this.plainReactions[a]},getReactionSummary(a){if(!this.hasReactionsLoaded)return"";const e=this.detailedReactions[a].slice(0,3),s=[];for(const i in e)e[i].actorType===this.$store.getters.getActorType()&&e[i].actorId===this.$store.getters.getActorId()?s.unshift(t("spreed","You")):s.push(this.getDisplayNameForReaction(e[i]));return s.join(", ")},emitEmojiPickerStatus(){this.$emit("emoji-picker-toggled")},remainingReactionsLabel(a){return n("spreed","and %n other participant","and %n other participants",this.reactionsCount(a)-3)}}};var Ue=r(37973),de={};de.styleTagTransform=I(),de.setAttributes=R(),de.insert=L().bind(null,"head"),de.domAPI=O(),de.insertStyleElement=P();var Yu=w()(Ue.Z,de);const Ku=Ue.Z&&Ue.Z.locals?Ue.Z.locals:void 0;var Fo=(0,h.Z)(Eo,oo,lo,!1,null,"06fb7962",null);const Mo=Fo.exports;var $t=r(81451),Bo=r(2494);const xo=(0,G.F)()?.spreed?.config?.chat?.["has-translation-providers"]??(0,G.F)()?.spreed?.config?.chat?.translations?.length>0,ko={name:"Message",components:{MessageBody:ro,MessageButtonsBar:Fn,MessageForwarder:wn,MessageTranslateDialog:Gn,NcButton:V.Z,Reactions:Mo,UnfoldLess:Is,UnfoldMore:Zs},inheritAttrs:!1,props:{actorType:{type:String,required:!0},actorId:{type:String,required:!0},message:{type:String,required:!0},messageParameters:{type:[Array,Object],required:!0},timestamp:{type:Number,default:0},id:{type:[String,Number],required:!0},isTemporary:{type:Boolean,default:!1},isReplyable:{type:Boolean,required:!0},token:{type:String,required:!0},systemMessage:{type:String,required:!0},isCombinedSystemMessage:{type:Boolean,default:!1},isCombinedSystemMessageCollapsed:{type:Boolean,default:void 0},isCollapsedSystemMessage:{type:Boolean,default:!1},lastCollapsedMessageId:{type:[String,Number],default:0},messageType:{type:String,required:!0},parent:{type:Object,default:void 0},markdown:{type:Boolean,default:!0},sendingFailure:{type:String,default:""},previousMessageId:{type:[String,Number],default:0},nextMessageId:{type:[String,Number],default:0},reactions:{type:[Array,Object],default:()=>({})},reactionsSelf:{type:Array,default:()=>[]},referenceId:{type:String,default:""},lastEditActorDisplayName:{type:String,default:""},lastEditTimestamp:{type:Number,default:0}},emits:["toggle-combined-system-message"],setup(){return{isTranslationAvailable:xo,chatExtrasStore:(0,$t.a)()}},data(){return{isHovered:!1,isDeleting:!1,isHighlighted:!1,seen:!1,isActionMenuOpen:!1,isEmojiPickerOpen:!1,isFollowUpEmojiPickerOpen:!1,isReactionsMenuOpen:!1,isForwarderOpen:!1,isTranslateDialogOpen:!1}},computed:{isLastMessage(){return!this.nextMessageId||this.id===this.conversation?.lastMessage?.id},visualLastLastReadMessageId(){return this.$store.getters.getVisualLastReadMessageId(this.token)},isLastReadMessage(){return this.isLastMessage?!1:!this.isCollapsedSystemMessage&&this.id===this.visualLastLastReadMessageId||this.isCollapsedSystemMessage&&this.id===this.visualLastLastReadMessageId&&this.id!==this.lastCollapsedMessageId||this.isCombinedSystemMessage&&this.lastCollapsedMessageId===this.visualLastLastReadMessageId},isSystemMessage(){return this.systemMessage!==""},isDeletedMessage(){return this.messageType==="comment_deleted"},conversation(){return this.$store.getters.conversation(this.token)},showCommonReadIcon(){return this.conversation.lastCommonReadMessage>=this.id&&this.showSentIcon&&!this.isDeletedMessage},showSentIcon(){return!this.isSystemMessage&&!this.isTemporary&&!this.isDeleting&&this.actorType===this.$store.getters.getActorType()&&this.actorId===this.$store.getters.getActorId()&&!this.isDeletedMessage},richParameters(){const a={};return Object.keys(this.messageParameters).forEach(function(e){const s=this.messageParameters[e].type,i=this.messageParameters[e].mimetype,o=(0,Bo.F)({messageParameters:this.messageParameters,messageType:this.messageType});if(s==="user"||s==="call"||s==="guest"||s==="user-group"||s==="group")a[e]={component:Ur,props:{...this.messageParameters[e],token:this.token}};else if(s==="file"&&i!=="text/vcard")a[e]={component:Mt.Z,props:Object.assign({token:this.token,itemType:o,referenceId:this.referenceId},this.messageParameters[e])};else if(s==="deck-card")a[e]={component:ei,props:this.messageParameters[e]};else if(s==="geo-location")a[e]={component:Lr,props:this.messageParameters[e]};else if(s==="talk-poll"&&this.systemMessage!=="poll_closed"){const l=Object.assign({},this.messageParameters[e]);l.token=this.token,a[e]={component:It,props:l}}else i==="text/vcard"?a[e]={component:Kn,props:this.messageParameters[e]}:a[e]={component:ti.Z,props:this.messageParameters[e]}}.bind(this)),a},showMessageButtonsBar(){return!this.isSystemMessage&&!this.isDeletedMessage&&!this.isTemporary&&(this.isHovered||this.isActionMenuOpen||this.isEmojiPickerOpen||this.isFollowUpEmojiPickerOpen||this.isReactionsMenuOpen||this.isForwarderOpen||this.isTranslateDialogOpen)},showCombinedSystemMessageToggle(){return this.isSystemMessage&&!this.isDeletedMessage&&!this.isTemporary&&this.isCombinedSystemMessage&&(this.isHovered||!this.isCombinedSystemMessageCollapsed)},readInfoProps(){return{showCommonReadIcon:this.showCommonReadIcon,commonReadIconTooltip:t("spreed","Message read by everyone who shares their reading status"),showSentIcon:this.showSentIcon,sentIconTooltip:t("spreed","Message sent")}},canReact(){return this.conversation.readOnly!==D.Sl.STATE.READ_ONLY&&(this.conversation.permissions&D.oM.PERMISSIONS.CHAT)!==0&&this.messageType!=="command"&&this.messageType!=="comment_deleted"},isFileShareOnly(){return Object.keys(Object(this.messageParameters)).some(a=>a.startsWith("file"))&&this.message==="{file}"}},mounted(){Z.N.$on("highlight-message",this.highlightMessage)},beforeDestroy(){Z.N.$off("highlight-message",this.highlightMessage)},methods:{lastReadMessageVisibilityChanged(a){a&&(this.seen=!0)},highlightMessage(a){this.id===a&&(this.isHighlighted=!0)},handleMouseover(){this.isHovered||(this.isHovered=!0)},handleMouseleave(){this.isHovered&&(this.isHovered=!1)},handleReply(){this.chatExtrasStore.setParentIdToReply({token:this.token,id:this.id}),Z.N.$emit("focus-chat-input")},handleEdit(){this.chatExtrasStore.initiateEditingMessage({token:this.token,id:this.id,message:this.message,messageParameters:this.messageParameters})},async handleDelete(){this.isDeleting=!0;try{const a=await this.$store.dispatch("deleteMessage",{token:this.token,id:this.id,placeholder:t("spreed","Deleting message")});a===202?(0,j.K2)(t("spreed","Message deleted successfully, but a bot or Matterbridge is configured and the message might already be distributed to other services"),{timeout:j.TN*2}):a===200&&(0,j.s$)(t("spreed","Message deleted successfully"))}catch(a){a?.response?.status===400?(0,j.x2)(t("spreed","Message could not be deleted because it is too old")):a?.response?.status===405?(0,j.x2)(t("spreed","Only normal chat messages can be deleted")):((0,j.x2)(t("spreed","An error occurred while deleting the message")),console.error(a)),this.isDeleting=!1;return}this.isDeleting=!1},toggleCombinedSystemMessage(){this.$emit("toggle-combined-system-message")},toggleFollowUpEmojiPicker(){this.isFollowUpEmojiPickerOpen=!this.isFollowUpEmojiPickerOpen}}};var Ze=r(34085),ue={};ue.styleTagTransform=I(),ue.setAttributes=R(),ue.insert=L().bind(null,"head"),ue.domAPI=O(),ue.insertStyleElement=P();var Ju=w()(Ze.Z,ue);const Qu=Ze.Z&&Ze.Z.locals?Ze.Z.locals:void 0;var To=(0,h.Z)(ko,Ss,ws,!1,null,"a09ceeca",null);const Ut=To.exports,So={name:"MessagesGroup",components:{AvatarWrapper:je.Z,Message:Ut},inheritAttrs:!1,props:{token:{type:String,required:!0},messages:{type:Array,required:!0},previousMessageId:{type:[String,Number],default:0},nextMessageId:{type:[String,Number],default:0}},setup(){return{AVATAR:D.pA,guestNameStore:(0,Ee.t)()}},computed:{actorId(){return this.messages[0].actorId},actorType(){return this.messages[0].actorType},lastEditTimestamp(){return this.messages[0].lastEditTimestamp},actorDisplayName(){const a=this.messages[0].actorDisplayName.trim();return this.actorType===D.DM.ACTOR_TYPE.GUESTS?this.guestNameStore.getGuestName(this.token,this.actorId):a===""?t("spreed","Deleted user"):a},isFederatedUser(){return this.actorType===D.DM.ACTOR_TYPE.FEDERATED_USERS},getRemoteServer(){return this.isFederatedUser?"("+this.actorId.split("@").pop()+")":""},getLastEditor(){return this.lastEditTimestamp?this.messages[0].lastEditActorId===this.actorId&&this.messages[0].lastEditActorType===this.actorType?t("spreed","(edited)"):this.messages[0].lastEditActorId===this.$store.getters.getActorId()&&this.messages[0].lastEditActorType===this.$store.getters.getActorType()?t("spreed","(edited by you)"):this.lastEditActorId==="deleted_users"&&this.lastEditActorType==="deleted_users"?t("spreed","(edited by a deleted user)"):t("spreed","(edited by {moderator})",{moderator:this.messages[0].lastEditActorDisplayName}):""},disableMenu(){return this.$store.getters.isActorGuest()||this.actorType===D.DM.ACTOR_TYPE.BRIDGED}}};var Ve=r(5450),ce={};ce.styleTagTransform=I(),ce.setAttributes=R(),ce.insert=L().bind(null,"head"),ce.domAPI=O(),ce.insertStyleElement=P();var ec=w()(Ve.Z,ce);const tc=Ve.Z&&Ve.Z.locals?Ve.Z.locals:void 0;var wo=(0,h.Z)(So,ks,Ts,!1,null,"751d2045",null);const Oo=wo.exports;var Lo=function(){var e=this,s=e._self._c;return s("li",{staticClass:"wrapper wrapper--system"},e._l(e.messagesGroupedBySystemMessage,function(i){return s("div",{key:i.id,staticClass:"messages-group__system"},[i.messages?.length>1?s("ul",{staticClass:"messages messages--header"},[s("Message",e._b({attrs:{token:e.token,"is-combined-system-message":"","is-combined-system-message-collapsed":i.collapsed,"next-message-id":e.getNextMessageId(i.messages.at(-1)),"previous-message-id":e.getPrevMessageId(i.messages.at(0)),"last-collapsed-message-id":i.lastId},on:{"toggle-combined-system-message":function(o){return e.toggleCollapsed(i)}}},"Message",e.createCombinedSystemMessage(i),!1))],1):e._e(),e._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:i.messages?.length===1||!i.collapsed,expression:"messagesCollapsed.messages?.length === 1 || !messagesCollapsed.collapsed"}],staticClass:"messages",class:{"messages--collapsed":i.messages?.length>1}},e._l(i.messages,function(o){return s("Message",e._b({key:o.id,attrs:{token:e.token,"is-collapsed-system-message":i.messages?.length>1,"last-collapsed-message-id":i.lastId,"next-message-id":e.getNextMessageId(o),"previous-message-id":e.getPrevMessageId(o)}},"Message",o,!1))}),1)])}),0)},Ro=[],Po=r(50361),Io=r.n(Po),No=r(43656);/*
 * @copyright Copyright (c) 2023 Maksim Sukharev <antreesy.web@gmail.com>
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
 */function jo(){const a=(0,No.o)();function e(l){return l.actorId===a.getters.getActorId()&&l.actorType===a.getters.getActorType()}function s(l){return l.messageParameters.actor.id===a.getters.getActorId()&&l.messageParameters.actor.type+"s"===a.getters.getActorType()}function i(l){return l.messageParameters.user.id===a.getters.getActorId()&&l.messageParameters.user.type+"s"===a.getters.getActorType()}function o({id:l,messages:d,type:u,collapsed:M}){const c=Io()(d[0]);if(c.id=d[0].id+"_combined",u==="call_reconnected")return s(c)?c.message=t("spreed","You reconnected to the call"):c.message=t("spreed","{actor} reconnected to the call"),c;const p=d[0].messageParameters.actor;c.messageParameters={actor:p};const m=p.id==="guest/cli"&&p.type==="guest";let v=0,x=!1,_=0;if(u==="user_added"&&(d.forEach(T=>{i(T)?x=!0:(c.messageParameters[`user${_}`]=T.messageParameters.user,_++),v++}),e(c)?v===2?c.message=t("spreed","You added {user0} and {user1}"):c.message=n("spreed","You added {user0}, {user1} and %n more participant","You added {user0}, {user1} and %n more participants",v-2):x?v===2?c.message=m?t("spreed","An administrator added you and {user0}"):t("spreed","{actor} added you and {user0}"):c.message=m?n("spreed","An administrator added you, {user0} and %n more participant","An administrator added you, {user0} and %n more participants",v-2):n("spreed","{actor} added you, {user0} and %n more participant","{actor} added you, {user0} and %n more participants",v-2):v===2?c.message=m?t("spreed","An administrator added {user0} and {user1}"):t("spreed","{actor} added {user0} and {user1}"):c.message=m?n("spreed","An administrator added {user0}, {user1} and %n more participant","An administrator added {user0}, {user1} and %n more participants",v-2):n("spreed","{actor} added {user0}, {user1} and %n more participant","{actor} added {user0}, {user1} and %n more participants",v-2)),u==="user_removed"&&(d.forEach(T=>{i(T)?x=!0:(c.messageParameters[`user${_}`]=T.messageParameters.user,_++),v++}),e(c)?v===2?c.message=t("spreed","You removed {user0} and {user1}"):c.message=n("spreed","You removed {user0}, {user1} and %n more participant","You removed {user0}, {user1} and %n more participants",v-2):x?v===2?c.message=m?t("spreed","An administrator removed you and {user0}"):t("spreed","{actor} removed you and {user0}"):c.message=m?n("spreed","An administrator removed you, {user0} and %n more participant","An administrator removed you, {user0} and %n more participants",v-2):n("spreed","{actor} removed you, {user0} and %n more participant","{actor} removed you, {user0} and %n more participants",v-2):v===2?c.message=m?t("spreed","An administrator removed {user0} and {user1}"):t("spreed","{actor} removed {user0} and {user1}"):c.message=m?n("spreed","An administrator removed {user0}, {user1} and %n more participant","An administrator removed {user0}, {user1} and %n more participants",v-2):n("spreed","{actor} removed {user0}, {user1} and %n more participant","{actor} removed {user0}, {user1} and %n more participants",v-2)),u==="call_joined"||u==="call_left"){const T=[];if(d.forEach(S=>{const tt=`${S.messageParameters.actor.id}_${S.messageParameters.actor.type}`;T.includes(tt)||(s(S)?x=!0:(c.messageParameters[`user${_}`]=S.messageParameters.actor,_++),T.push(tt),v++)}),v===1)return c.message=d[0].message,c;u==="call_joined"?x?v===2?c.message=t("spreed","You and {user0} joined the call"):c.message=n("spreed","You, {user0} and %n more participant joined the call","You, {user0} and %n more participants joined the call",v-2):v===2?c.message=t("spreed","{user0} and {user1} joined the call"):c.message=n("spreed","{user0}, {user1} and %n more participant joined the call","{user0}, {user1} and %n more participants joined the call",v-2):u==="call_left"&&(x?v===2?c.message=t("spreed","You and {user0} left the call"):c.message=n("spreed","You, {user0} and %n more participant left the call","You, {user0} and %n more participants left the call",v-2):v===2?c.message=t("spreed","{user0} and {user1} left the call"):c.message=n("spreed","{user0}, {user1} and %n more participant left the call","{user0}, {user1} and %n more participants left the call",v-2))}return u==="moderator_promoted"&&(d.forEach(T=>{i(T)?x=!0:(c.messageParameters[`user${_}`]=T.messageParameters.user,_++),v++}),e(c)?v===2?c.message=t("spreed","You promoted {user0} and {user1} to moderators"):c.message=n("spreed","You promoted {user0}, {user1} and %n more participant to moderators","You promoted {user0}, {user1} and %n more participants to moderators",v-2):x?v===2?c.message=m?t("spreed","An administrator promoted you and {user0} to moderators"):t("spreed","{actor} promoted you and {user0} to moderators"):c.message=m?n("spreed","An administrator promoted you, {user0} and %n more participant to moderators","An administrator promoted you, {user0} and %n more participants to moderators",v-2):n("spreed","{actor} promoted you, {user0} and %n more participant to moderators","{actor} promoted you, {user0} and %n more participants to moderators",v-2):v===2?c.message=m?t("spreed","An administrator promoted {user0} and {user1} to moderators"):t("spreed","{actor} promoted {user0} and {user1} to moderators"):c.message=m?n("spreed","An administrator promoted {user0}, {user1} and %n more participant to moderators","An administrator promoted {user0}, {user1} and %n more participants to moderators",v-2):n("spreed","{actor} promoted {user0}, {user1} and %n more participant to moderators","{actor} promoted {user0}, {user1} and %n more participants to moderators",v-2)),u==="moderator_demoted"&&(d.forEach(T=>{i(T)?x=!0:(c.messageParameters[`user${_}`]=T.messageParameters.user,_++),v++}),e(c)?v===2?c.message=t("spreed","You demoted {user0} and {user1} from moderators"):c.message=n("spreed","You demoted {user0}, {user1} and %n more participant from moderators","You demoted {user0}, {user1} and %n more participants from moderators",v-2):x?v===2?c.message=m?t("spreed","An administrator demoted you and {user0} from moderators"):t("spreed","{actor} demoted you and {user0} from moderators"):c.message=m?n("spreed","An administrator demoted you, {user0} and %n more participant from moderators","An administrator demoted you, {user0} and %n more participants from moderators",v-2):n("spreed","{actor} demoted you, {user0} and %n more participant from moderators","{actor} demoted you, {user0} and %n more participants from moderators",v-2):v===2?c.message=m?t("spreed","An administrator demoted {user0} and {user1} from moderators"):t("spreed","{actor} demoted {user0} and {user1} from moderators"):c.message=m?n("spreed","An administrator demoted {user0}, {user1} and %n more participant from moderators","An administrator demoted {user0}, {user1} and %n more participants from moderators",v-2):n("spreed","{actor} demoted {user0}, {user1} and %n more participant from moderators","{actor} demoted {user0}, {user1} and %n more participants from moderators",v-2)),c}return{createCombinedSystemMessage:o}}const $o={name:"MessagesSystemGroup",components:{Message:Ut},inheritAttrs:!1,props:{token:{type:String,required:!0},messages:{type:Array,required:!0},previousMessageId:{type:[String,Number],default:0},nextMessageId:{type:[String,Number],default:0}},setup(){const{createCombinedSystemMessage:a}=jo();return{createCombinedSystemMessage:a}},data(){return{groupIsCollapsed:{},messagesGroupedBySystemMessage:[]}},computed:{lastReadMessageId(){return this.$store.getters.conversation(this.token)?.lastReadMessage}},watch:{messages:{deep:!0,immediate:!0,handler(a){this.messagesGroupedBySystemMessage=this.groupMessages(a),this.updateCollapsedState()}},lastReadMessageId(){this.updateCollapsedState()}},methods:{messagesShouldBeGrouped(a,e){return e?a.systemMessage==="call_joined"&&a.systemMessage===e.systemMessage?"call_joined":a.systemMessage==="call_left"&&a.systemMessage===e.systemMessage?"call_left":a.actorId!==e.actorId||a.actorType!==e.actorType?"":a.systemMessage==="call_joined"&&e.systemMessage==="call_left"&&a.timestamp-e.timestamp<60*1e3?"call_reconnected":a.systemMessage==="user_added"&&a.systemMessage===e.systemMessage?"user_added":a.systemMessage==="user_removed"&&a.systemMessage===e.systemMessage?"user_removed":(a.systemMessage==="moderator_promoted"||a.systemMessage==="guest_moderator_promoted")&&(e.systemMessage==="moderator_promoted"||e.systemMessage==="guest_moderator_promoted")?"moderator_promoted":(a.systemMessage==="moderator_demoted"||a.systemMessage==="guest_moderator_demoted")&&(e.systemMessage==="moderator_demoted"||e.systemMessage==="guest_moderator_demoted")?"moderator_demoted":"":""},updateCollapsedState(){for(const a of this.messagesGroupedBySystemMessage)this.lastReadMessageId>=a.id&&this.lastReadMessageId<a.lastId?a.collapsed=!1:this.groupIsCollapsed[a.id]!==void 0?a.collapsed=this.groupIsCollapsed[a.id]:a.collapsed=a.messages.length>1},groupMessages(a){const e=[];let s=null,i=!1;for(const o of a){const l=this.messagesShouldBeGrouped(o,s);!l||i?(e.push({id:o.id,lastId:o.id,messages:[o],type:"",collapsed:void 0}),i=!1):(l==="call_reconnected"&&(e.push({id:o.id,lastId:o.id,messages:[e.at(-1).messages.pop()],type:"",collapsed:void 0}),e.at(-1).lastId=e.at(-1).messages.at(-1).id,i=!0),e.at(-1).messages.push(o),e.at(-1).lastId=o.id,e.at(-1).type=l),s=o}return e},toggleCollapsed(a){this.$set(a,"collapsed",!a.collapsed),this.groupIsCollapsed[a.id]=a.collapsed},getNextMessageId(a){return this.messages[this.messages.findIndex(s=>s.id===a.id)+1]?.id||this.nextMessageId},getPrevMessageId(a){return this.messages[this.messages.findIndex(s=>s.id===a.id)-1]?.id||this.previousMessageId}}};var Ge=r(52055),pe={};pe.styleTagTransform=I(),pe.setAttributes=R(),pe.insert=L().bind(null,"head"),pe.domAPI=O(),pe.insertStyleElement=P();var ac=w()(Ge.Z,pe);const nc=Ge.Z&&Ge.Z.locals?Ge.Z.locals:void 0;var Uo=(0,h.Z)($o,Lo,Ro,!1,null,"bde8b61a",null);const Zo=Uo.exports;var Vo=r(89492),ct=r(6991),z=r(81582);const Go={name:"MessagesList",components:{LoadingPlaceholder:Vo.Z,Message:xs,NcEmptyContent:ht.Z,TransitionWrapper:ct.Z},provide(){return{getMessagesListScroller:()=>this.$refs.scroller}},props:{token:{type:String,required:!0},isChatScrolledToBottom:{type:Boolean,default:!0},isVisible:{type:Boolean,default:!0}},emits:["update:is-chat-scrolled-to-bottom"],setup(){return{isInCall:(0,Ie.E)()}},data(){return{messagesGroupedByDateByAuthor:{},viewId:bs()("messagesList"),displayMessagesLoader:!1,previousScrollTopValue:null,pollingErrorTimeout:1,loadingOldMessages:!1,isInitialisingMessages:!1,isFocusingMessage:!1,destroying:!1,expirationInterval:null,debounceUpdateReadMarkerPosition:()=>{},debounceHandleScroll:()=>{},stopFetchingOldMessages:!1,isScrolling:!1,stickyDate:null,dateSeparatorLabels:{},endScrollTimeout:()=>{}}},computed:{isWindowVisible(){return this.$store.getters.windowIsVisible()&&this.isVisible},visualLastReadMessageId(){return this.$store.getters.getVisualLastReadMessageId(this.token)},messagesList(){return this.$store.getters.messagesList(this.token)},showLoadingAnimation(){return!this.$store.getters.isMessageListPopulated(this.token)},showEmptyContent(){return!this.messagesList.length},isSticky(){return this.isChatScrolledToBottom&&!this.isInitialisingMessages},hasMoreMessagesToLoad(){return this.$store.getters.hasMoreMessagesToLoad(this.token)},isParticipant(){return this.conversation?!!this.$store.getters.findParticipant(this.token,this.conversation):!1},isInLobby(){return this.$store.getters.isInLobby},conversation(){return this.$store.getters.conversation(this.token)},chatIdentifier(){return this.token+":"+this.isParticipant+":"+this.viewId},currentDay(){return(0,N.Z)().startOf("day").unix()}},watch:{isWindowVisible(a){a&&this.onWindowFocus()},chatIdentifier:{immediate:!0,handler(a,e){e&&this.$store.dispatch("cancelLookForNewMessages",{requestId:e}),this.handleStartGettingMessagesPreconditions(this.token),this.removeExpiredMessagesFromStore()}},token(a,e){this.$store.dispatch("easeMessageList",{token:e}),this.stopFetchingOldMessages=!1,this.messagesGroupedByDateByAuthor=this.prepareMessagesGroups(this.messagesList)},messagesList:{immediate:!0,handler(a,e){if(e?.length&&a.length&&a[0].token!==e?.at(0)?.token)return;const s=this.prepareMessagesGroups(a);e?this.softUpdateByDateGroups(this.messagesGroupedByDateByAuthor,s):this.messagesGroupedByDateByAuthor=s,this.scrollToBottom({smooth:!0})}}},mounted(){this.debounceUpdateReadMarkerPosition=gt()(this.updateReadMarkerPosition,1e3),this.debounceHandleScroll=gt()(this.handleScroll,50),Z.N.$on("scroll-chat-to-bottom",this.scrollToBottom),Z.N.$on("focus-message",this.focusMessage),Z.N.$on("route-change",this.onRouteChange),(0,W.Ld)("networkOffline",this.handleNetworkOffline),(0,W.Ld)("networkOnline",this.handleNetworkOnline),window.addEventListener("focus",this.onWindowFocus),this.expirationInterval=window.setInterval(()=>{this.removeExpiredMessagesFromStore()},3e4)},beforeDestroy(){this.debounceUpdateReadMarkerPosition.clear?.(),this.debounceHandleScroll.clear?.(),window.removeEventListener("focus",this.onWindowFocus),Z.N.$off("scroll-chat-to-bottom",this.scrollToBottom),Z.N.$off("focus-message",this.focusMessage),Z.N.$off("route-change",this.onRouteChange),this.$store.dispatch("cancelLookForNewMessages",{requestId:this.chatIdentifier}),this.destroying=!0,(0,W.r1)("networkOffline",this.handleNetworkOffline),(0,W.r1)("networkOnline",this.handleNetworkOnline),this.expirationInterval&&(clearInterval(this.expirationInterval),this.expirationInterval=null)},methods:{prepareMessagesGroups(a){let e=null;const s={};let i=null,o=null,l=null;for(const d of a)this.messagesShouldBeGrouped(d,i)?s[e.date][e.groupId].messages.push(d):(o=d.id,d.timestamp===0?l=this.currentDay:l=(0,N.Z)(d.timestamp*1e3).startOf("day").unix(),this.dateSeparatorLabels[l]||(this.dateSeparatorLabels[l]=this.generateDateSeparator(l)),s[l]||(s[l]={}),s[l][o]={id:d.id,messages:[d],token:this.token,dateTimestamp:l,previousMessageId:i?.id||0,nextMessageId:0,isSystemMessagesGroup:d.systemMessage.length!==0},e&&(s[e.date][e.groupId].nextMessageId=d.id),e={date:l,groupId:d.id}),i=d;return s},softUpdateByDateGroups(a,e){new Set([...Object.keys(a),...Object.keys(e)]).forEach(i=>{e[i]?a[i]?this.softUpdateAuthorGroups(a[i],e[i],i):this.$set(this.messagesGroupedByDateByAuthor,i,e[i]):this.$delete(this.messagesGroupedByDateByAuthor,i)})},softUpdateAuthorGroups(a,e,s){new Set([...Object.keys(a),...Object.keys(e)]).forEach(o=>{a[o]&&!e[o]?this.$delete(this.messagesGroupedByDateByAuthor[s],o):(e[o]&&!a[o]||!this.areGroupsIdentical(e[o],a[o]))&&this.$set(this.messagesGroupedByDateByAuthor[s],o,e[o])})},areGroupsIdentical(a,e){return a.messages.length!==e.messages.length||a.dateSeparator!==e.dateSeparator||a.previousMessageId!==e.previousMessageId||a.nextMessageId!==e.nextMessageId?!1:a.messages.every((s,i)=>e.messages[i].id===s.id&&JSON.stringify(e.messages[i])===JSON.stringify(s))},removeExpiredMessagesFromStore(){this.$store.dispatch("removeExpiredMessages",{token:this.token})},messagesShouldBeGrouped(a,e){if(!e||a.lastEditTimestamp||e.lastEditTimestamp||a.actorType===D.DM.ACTOR_TYPE.BOTS&&a.actorId!==D.DM.CHANGELOG_BOT_ID)return!1;const s=a.systemMessage.length!==0,i=e.systemMessage.length!==0;return s!==i||!s&&(a.actorType!==e.actorType||a.actorId!==e.actorId||a.actorType===D.DM.ACTOR_TYPE.BRIDGED&&a.actorDisplayName!==e.actorDisplayName)||this.messagesHaveDifferentDate(a,e)?!1:this.getDateOfMessage(a).diff(this.getDateOfMessage(e))<300*1e3},messagesHaveDifferentDate(a,e){return!e||this.getDateOfMessage(a).format("YYYY-MM-DD")!==this.getDateOfMessage(e).format("YYYY-MM-DD")},getRelativePrefix(a,e){switch(e){case 0:return t("spreed","Today");case 1:return t("spreed","Yesterday");case 7:return t("spreed","A week ago");default:return n("spreed","%n day ago","%n days ago",e)}},generateDateSeparator(a){const e=N.Z.unix(a).startOf("day"),s=(0,N.Z)().startOf("day").diff(e,"days");return s<=7?t("spreed","{relativeDate}, {absoluteDate}",{relativeDate:this.getRelativePrefix(e,s),absoluteDate:e.format("LL")},void 0,{escape:!1}):e.format("LL")},getDateOfMessage(a){return a.id.toString().startsWith("temp-")?(0,N.Z)():N.Z.unix(a.timestamp)},getMessageIdFromHash(a=void 0){return a?parseInt(a.slice(9),10):this.$route?.hash?.startsWith("#message_")?parseInt(this.$route.hash.slice(9),10):null},scrollToFocusedMessage(a){let e=null;if(a){this.focusMessage(a);return}if(this.visualLastReadMessageId&&(e=this.focusMessage(this.visualLastReadMessageId,!1,!1)),!e){const s=this.$store.getters.getFirstDisplayableMessageIdBeforeReadMarker(this.token,this.visualLastReadMessageId);s&&(e=this.focusMessage(s,!1,!1)),e?this.$store.dispatch("setVisualLastReadMessageId",{token:this.token,id:s}):this.scrollToBottom({force:!0})}this.debounceUpdateReadMarkerPosition()},async handleStartGettingMessagesPreconditions(a){if(a&&this.isParticipant&&!this.isInLobby){this.isInitialisingMessages=!0;const e=this.getMessageIdFromHash();if(this.$store.dispatch("setVisualLastReadMessageId",{token:a,id:this.conversation.lastReadMessage}),this.$store.getters.getFirstKnownMessageId(a)===null){const s=e!==null?e:this.conversation.lastReadMessage;this.$store.dispatch("setFirstKnownMessageId",{token:a,id:s}),this.$store.dispatch("setLastKnownMessageId",{token:a,id:s});try{await this.getMessageContext(a,s)}catch{this.$store.dispatch("setFirstKnownMessageId",{token:a,id:null}),this.$store.dispatch("setLastKnownMessageId",{token:a,id:null});return}}this.$nextTick(()=>{this.scrollToFocusedMessage(e)}),this.isInitialisingMessages=!1,await this.lookForNewMessages(a)}else this.$store.dispatch("cancelLookForNewMessages",{requestId:this.chatIdentifier})},async lookForNewMessages(a){if(this._isBeingDestroyed||this._isDestroyed){console.debug("Prevent getting new messages on a destroyed MessagesList");return}await this.getNewMessages(a)},async getMessageContext(a,e){this.loadingOldMessages=!0;try{z.d.start(`${a} | get context`),await this.$store.dispatch("getMessageContext",{token:a,messageId:e,minimumVisible:D.J2.MINIMUM_VISIBLE}),z.d.end(`${a} | get context`,"status 200"),this.loadingOldMessages=!1}catch(s){if(Y.Z.isCancel(s))throw console.debug("The request has been canceled",s),z.d.end(`${a} | get context`,"cancelled"),this.loadingOldMessages=!1,s;s?.response?.status===304&&s?.response?.data===""&&(z.d.end(`${a} | get context`,"status 304"),this.$store.dispatch("loadedMessagesOfConversation",{token:this.token}))}this.loadingOldMessages=!1},async getOldMessages(a){this.loadingOldMessages=!0;try{z.d.start(`${this.token} | fetch history`),await this.$store.dispatch("fetchMessages",{token:this.token,lastKnownMessageId:this.$store.getters.getFirstKnownMessageId(this.token),includeLastKnown:a,minimumVisible:D.J2.MINIMUM_VISIBLE}),z.d.end(`${this.token} | fetch history`,"status 200")}catch(e){Y.Z.isCancel(e)&&(z.d.end(`${this.token} | fetch history`,"cancelled"),console.debug("The request has been canceled",e)),e?.response?.status===304&&(z.d.end(`${this.token} | fetch history`,"status 304"),this.stopFetchingOldMessages=!0)}if(this.loadingOldMessages=!1,!this.stopFetchingOldMessages){const e=this.messagesList?.at(0);e?.messageType==="system"&&["conversation_created","history_cleared"].includes(e.systemMessage)&&(this.stopFetchingOldMessages=!0)}},async getNewMessages(a){if(!this.destroying){if(this.token!==a){console.debug(`token has changed to ${this.token}, breaking the loop for ${a}`);return}try{z.d.start(`${a} | long polling`),this.pollingErrorTimeout=1,await this.$store.dispatch("lookForNewMessages",{token:a,lastKnownMessageId:this.$store.getters.getLastKnownMessageId(a),requestId:this.chatIdentifier}),z.d.end(`${a} | long polling`,"status 200")}catch(e){if(Y.Z.isCancel(e)){z.d.end(`${a} | long polling`,"cancelled"),console.debug("The request has been canceled",e);return}if(e?.response?.status===304){z.d.end(`${a} | long polling`,"status 304"),this.pollingErrorTimeout=1,setTimeout(()=>{this.getNewMessages(a)},500);return}this.pollingErrorTimeout<30&&(this.pollingErrorTimeout+=5),z.d.end(`${a} | long polling`,`status ${e?.response?.status}`),console.debug("Error happened while getting chat messages. Trying again in ",this.pollingErrorTimeout,e),setTimeout(()=>{this.getNewMessages(a)},this.pollingErrorTimeout*1e3);return}setTimeout(()=>{this.getNewMessages(a)},500)}},checkSticky(){const a=this.$refs["dateGroup-"+this.token];if(!a)return;const e=this.$refs.scroller.getBoundingClientRect();a.forEach(s=>{const i=s.getBoundingClientRect();i.top<=e.top&&i.bottom>=e.top&&(this.stickyDate=s.getAttribute("data-date-timestamp"))})},onScroll(){this.isScrolling&&clearTimeout(this.endScrollTimeout),this.isScrolling=!0,this.endScrollTimeout=setTimeout(this.endScroll,3e3),this.$refs.scroller.scrollTop===0?this.stickyDate=null:this.checkSticky(),this.debounceHandleScroll()},async handleScroll(){if(!this.$refs.scroller)return;if(!this.$store.getters.getFirstKnownMessageId(this.token)){console.debug("Ignoring handleScroll as the messages history is empty");return}if(this.isInitialisingMessages){console.debug("Ignore handleScroll as we are initialising the message history");return}if(this.isFocusingMessage){console.debug("Ignore handleScroll as we are programmatically scrolling to focus a message");return}const{scrollHeight:a,scrollTop:e,clientHeight:s}=this.$refs.scroller,i=a-e,o=10;if(i<s+o&&i>s-o&&!this.hasMoreMessagesToLoad){this.setChatScrolledToBottom(!0),this.displayMessagesLoader=!1,this.previousScrollTopValue=e,this.debounceUpdateReadMarkerPosition();return}if(this.setChatScrolledToBottom(!1),a>s&&e<800&&e<this.previousScrollTopValue){if(this.loadingOldMessages||this.stopFetchingOldMessages)return;this.displayMessagesLoader=!0,await this.getOldMessages(!1),this.displayMessagesLoader=!1,this.$refs.scroller.scrollHeight!==a&&this.$refs.scroller.scrollTo({top:e+(this.$refs.scroller.scrollHeight-a)-40})}this.previousScrollTopValue=this.$refs.scroller.scrollTop,this.debounceUpdateReadMarkerPosition()},endScroll(){this.isScrolling=!1,clearTimeout(this.endScrollTimeout)},findFirstVisibleMessage(a){if(!this.$refs.scroller)return;let e=a;if(!e||e.offsetParent===null){const o=this.$store.getters.getFirstDisplayableMessageIdAfterReadMarker(this.token,this.conversation.lastReadMessage);e=document.getElementById("message_"+o)}let s=e;const{scrollTop:i}=this.$refs.scroller;for(;e;){if(e.offsetTop-i>=0)return s;s=e,e=document.getElementById("message_"+e.getAttribute("data-next-message-id"))}return s},refreshReadMarkerPosition(){this.conversation&&(console.debug("setVisualLastReadMessageId token="+this.token+" id="+this.conversation.lastReadMessage),this.$store.dispatch("setVisualLastReadMessageId",{token:this.token,id:this.conversation.lastReadMessage}))},getVisualLastReadMessageElement(){let a=document.getElementById("message_"+this.visualLastReadMessageId);return a&&(a=a.closest(".message"),(a===null||a.offsetParent===null)&&(a=document.querySelector(".new-message-marker"),a?a=a.closest(".message"):console.warn("Visual last read message element not found"))),a},updateReadMarkerPosition(){if(!this.conversation)return;if(this.conversation.lastReadMessage===0){console.debug("clearLastReadMessage because lastReadMessage was 0 token="+this.token),this.$store.dispatch("clearLastReadMessage",{token:this.token,updateVisually:!0});return}if(this.conversation.lastReadMessage===this.conversation.lastMessage?.id)return;const a=this.getVisualLastReadMessageElement();if(a&&a.getAttribute("data-seen")!=="true")return;if(this.isSticky&&!this.hasMoreMessagesToLoad){console.debug("clearLastReadMessage because of isSticky token="+this.token),this.$store.dispatch("clearLastReadMessage",{token:this.token});return}if(a&&this.$refs.scroller&&a.offsetTop-this.$refs.scroller.scrollTop>0)return;const e=this.findFirstVisibleMessage(a);if(!e){console.warn("First visible message not found: ",e);return}const s=parseInt(e.getAttribute("data-message-id"),10);s<=this.conversation.lastReadMessage||(console.debug("updateLastReadMessage token="+this.token+" messageId="+s),this.$store.dispatch("updateLastReadMessage",{token:this.token,id:s,updateVisually:!1}))},scrollToBottom(a={}){this.$nextTick(()=>{if(!this.$refs.scroller||this.isFocusingMessage)return;let e;if(a?.force)e=this.$refs.scroller.scrollHeight,this.setChatScrolledToBottom(!0);else if(this.isSticky)if(this.isWindowVisible)e=this.$refs.scroller.scrollHeight,this.setChatScrolledToBottom(!0);else{const i=this.$refs.scroller.scrollHeight-this.$refs.scroller.scrollTop-this.$refs.scroller.offsetHeight<40?10:40;e=this.$refs.scroller.scrollTop+i,this.setChatScrolledToBottom(!1)}else return;this.$refs.scroller.scrollTo({top:e,behavior:a?.smooth?"smooth":"auto"})})},focusMessage(a,e=!0,s=!0){let i=document.getElementById(`message_${a}`);return i?(i.offsetParent===null&&(console.debug("Message to focus is hidden, scrolling to its nearest visible parent",a),i=i.closest('ul[style="display: none;"]').parentElement),console.debug("Scrolling to a focused message programmatically"),this.isFocusingMessage=!0,i.scrollIntoView({behavior:e?"smooth":"auto",block:"center",inline:"nearest"}),this.$refs.scroller&&!e&&(this.$refs.scroller.scrollTop+=this.$refs.scroller.offsetHeight/4),s&&Z.N.$emit("highlight-message",a),this.isFocusingMessage=!1,!0):(console.warn("Message to focus not found in DOM",a),!1)},getLastKnownMessageId(){let a=this.messagesList.length-1;for(;a>=0;){if(!this.messagesList[a].id.toString().startsWith("temp-"))return this.messagesList[a].id;a--}return"0"},getFirstKnownMessageId(){return this.messagesList[0].id.toString()},handleNetworkOffline(){console.debug("Canceling message request as we are offline"),this.cancelLookForNewMessages&&this.$store.dispatch("cancelLookForNewMessages",{requestId:this.chatIdentifier})},handleNetworkOnline(){console.debug("Restarting polling of new chat messages"),this.getNewMessages(this.token)},async onRouteChange({from:a,to:e}){if(a.name==="conversation"&&e.name==="conversation"&&a.token===e.token&&a.hash!==e.hash&&e.hash&&e.hash.startsWith("#message_")){const s=this.getMessageIdFromHash(e.hash);this.messagesList.find(i=>i.id===s)?window.setTimeout(()=>{this.focusMessage(s,!0)},2):(this.$store.dispatch("setFirstKnownMessageId",{token:this.token,id:s}),this.$store.dispatch("setLastKnownMessageId",{token:this.token,id:s}),await this.getMessageContext(this.token,s),this.focusMessage(s,!0))}},setChatScrolledToBottom(a){this.$emit("update:is-chat-scrolled-to-bottom",a),a&&this.debounceUpdateReadMarkerPosition()},onWindowFocus(){setTimeout(()=>{this.refreshReadMarkerPosition()},2)},messagesGroupComponent(a){return a.isSystemMessagesGroup?Zo:Oo}}};var ze=r(23947),_e={};_e.styleTagTransform=I(),_e.setAttributes=R(),_e.insert=L().bind(null,"head"),_e.domAPI=O(),_e.insertStyleElement=P();var rc=w()(ze.Z,_e);const oc=ze.Z&&ze.Z.locals?ze.Z.locals:void 0;var zo=(0,h.Z)(Go,vs,fs,!1,null,"7c21abd7",null);const Wo=zo.exports;var Zt=r(17834),Ho=function(){var e=this,s=e._self._c;return e.showModal?s("NcModal",{ref:"modal",attrs:{size:e.isVoiceMessage?"small":"normal","close-on-click-outside":!1,container:e.container},on:{close:e.handleDismiss}},[s("div",{staticClass:"upload-editor",on:{dragover:function(i){return i.preventDefault(),e.handleDragOver.apply(null,arguments)},dragleave:function(i){return i.preventDefault(),e.handleDragLeave.apply(null,arguments)},drop:function(i){return i.preventDefault(),e.handleDropFiles.apply(null,arguments)}}},[e.isVoiceMessage?[s("AudioPlayer",{attrs:{name:e.voiceMessageName,"local-url":e.voiceMessageLocalURL}})]:[s("input",{ref:"fileUploadInput",staticClass:"hidden-visually",attrs:{id:"file-upload",multiple:"",type:"file"},on:{change:e.handleFileInput}}),e._v(" "),s("TransitionWrapper",{staticClass:"upload-editor__previews",class:{"dragging-over":e.isDraggingOver},attrs:{name:"fade",tag:"div",group:""}},[e._l(e.files,function(i){return[s("FilePreview",e._b({key:i[1].temporaryMessage.id,attrs:{token:e.token,"is-upload-editor":!0},on:{"remove-file":e.handleRemoveFileFromSelection}},"FilePreview",i[1].temporaryMessage.messageParameters.file,!1))]}),e._v(" "),s("div",{key:"addMore",staticClass:"add-more"},[s("NcButton",{staticClass:"add-more__button",attrs:{"aria-label":e.addMoreAriaLabel,type:"primary"},on:{click:e.clickImportInput},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Plus",{attrs:{size:48}})]},proxy:!0}],null,!1,1550548444)})],1)],2)],e._v(" "),e.supportMediaCaption?e.modalContainerId?s("NewMessage",{key:e.modalContainerId,ref:"newMessage",attrs:{role:"region",upload:"",token:e.token,container:e.modalContainerId,"aria-label":e.t("spreed","Post message")},on:{upload:e.handleUpload,sent:e.handleDismiss,failure:e.handleDismiss}}):e._e():s("div",{staticClass:"upload-editor__actions"},[s("NcButton",{attrs:{type:"tertiary"},on:{click:e.handleDismiss}},[e._v(`
				`+e._s(e.t("spreed","Dismiss"))+`
			`)]),e._v(" "),s("NcButton",{ref:"submitButton",attrs:{type:"primary"},on:{click:function(i){return e.handleUpload({caption:null,options:null})}}},[e._v(`
				`+e._s(e.t("spreed","Send"))+`
			`)])],1)],2)]):e._e()},Yo=[],Ko=r(28830);const Xo=(0,G.F)()?.spreed?.features?.includes("media-caption"),Jo={name:"NewMessageUploadEditor",components:{NcModal:X.Z,FilePreview:Mt.Z,Plus:vt.Z,AudioPlayer:Ko.Z,NcButton:V.Z,NewMessage:Zt.Z,TransitionWrapper:ct.Z},setup(){return{supportMediaCaption:Xo}},data(){return{modalContainerId:null,isDraggingOver:!1}},computed:{token(){return this.$store.getters.getToken()},currentUploadId(){return this.$store.getters.currentUploadId},files(){return this.$store.getters.getInitialisedUploads(this.currentUploadId)},showModal(){return!!this.currentUploadId},container(){return this.$store.getters.getMainContainerSelector()},addMoreAriaLabel(){return t("spreed","Add more files")},firstFile(){return this.files?.at(0)?.at(1)},isVoiceMessage(){return this.firstFile?this.firstFile.temporaryMessage.messageType==="voice-message":!1},voiceMessageName(){return this.firstFile?.file?.name?this.firstFile.file.name:""},voiceMessageLocalURL(){return this.firstFile?.file?.localURL?this.firstFile.file.localURL:""}},watch:{async showModal(a){a&&(await this.getContainerId(),this.supportMediaCaption?(await this.$nextTick(),this.$refs.newMessage.focusInput()):this.$refs.submitButton.$el.focus())}},methods:{async getContainerId(){await this.$nextTick(),this.modalContainerId=`#modal-description-${this.$refs.modal.randId}`},handleDismiss(){this.$store.dispatch("discardUpload",this.currentUploadId)},handleUpload({caption:a,options:e}){this.$store.dispatch("uploadFiles",{token:this.token,uploadId:this.currentUploadId,caption:a,options:e})},clickImportInput(){this.$refs.fileUploadInput.click()},async handleFileInput(a){const e=Object.values(a.target.files);await this.$store.dispatch("initialiseUpload",{files:e,token:this.token,uploadId:this.currentUploadId}),this.$refs.fileUploadInput.value=null},handleRemoveFileFromSelection(a){this.$store.dispatch("removeFileFromSelection",a)},handleDragOver(a){a.dataTransfer.types.includes("Files")&&(this.isDraggingOver=!0)},handleDragLeave(a){a.currentTarget.contains(a.relatedTarget)||(this.isDraggingOver=!1)},handleDropFiles(a){if(!this.isDraggingOver)return;this.isDraggingOver=!1;const e=Object.values(a.dataTransfer.files);this.$store.dispatch("initialiseUpload",{files:e,token:this.token,uploadId:this.currentUploadId})}}};var We=r(88100),Ae={};Ae.styleTagTransform=I(),Ae.setAttributes=R(),Ae.insert=L().bind(null,"head"),Ae.domAPI=O(),Ae.insertStyleElement=P();var dc=w()(We.Z,Ae);const uc=We.Z&&We.Z.locals?We.Z.locals:void 0;var Qo=(0,h.Z)(Jo,Ho,Yo,!1,null,"e234d874",null);const qo=Qo.exports,el=(0,G.F)()?.spreed?.config?.attachments?.allowed,tl=(0,G.F)()?.spreed?.features?.includes("federation-v1"),sl={name:"ChatView",components:{NcButton:V.Z,ChevronDoubleDown:ts,MessagesList:Wo,NewMessage:Zt.Z,NewMessageUploadEditor:qo,TransitionWrapper:ct.Z,GuestWelcomeWindow:Cs},props:{isVisible:{type:Boolean,default:!0}},setup(){return{chatExtrasStore:(0,$t.a)()}},data(){return{isChatScrolledToBottom:!0,isDraggingOver:!1,containerId:void 0}},computed:{isGuest(){return this.$store.getters.isActorGuest()},isGuestWithoutDisplayName(){return!this.$store.getters.getDisplayName()&&this.isGuest},canUploadFiles(){return el&&this.$store.getters.getUserId()&&this.$store.getters.getAttachmentFolderFreeSpace()!==0&&this.conversation.permissions&D.oM.PERMISSIONS.CHAT&&(!tl||!this.conversation.remoteServer)},isDragAndDropBlocked(){return this.chatExtrasStore.getMessageIdToEdit(this.token)!==void 0||!this.canUploadFiles},dropHintText(){return this.isGuest?t("spreed","You need to be logged in to upload files"):this.isReadOnly?t("spreed","This conversation is read-only"):t("spreed","Drop your files to upload")},isReadOnly(){if(this.conversation)return this.conversation.readOnly===D.Sl.STATE.READ_ONLY},token(){return this.$store.getters.getToken()},conversation(){return this.$store.getters.conversation(this.token)},container(){return this.$store.getters.getMainContainerSelector()}},watch:{container(a){this.containerId=a}},mounted(){this.containerId=this.container},methods:{handleDragOver(a){a.dataTransfer.types.includes("Files")&&!this.isDragAndDropBlocked&&(this.isDraggingOver=!0)},handleDragLeave(a){a.currentTarget.contains(a.relatedTarget)||(this.isDraggingOver=!1)},handleDropFiles(a){if(!this.isDraggingOver||this.isDragAndDropBlocked||(this.isDraggingOver=!1,this.isGuest||this.isReadOnly))return;const e=Object.values(a.dataTransfer.files),s=new Date().getTime();this.$store.dispatch("initialiseUpload",{files:e,token:this.token,uploadId:s})},smoothScrollToBottom(){Z.N.$emit("scroll-chat-to-bottom",{smooth:!0,force:!0})}}};var He=r(2208),me={};me.styleTagTransform=I(),me.setAttributes=R(),me.insert=L().bind(null,"head"),me.domAPI=O(),me.insertStyleElement=P();var pc=w()(He.Z,me);const _c=He.Z&&He.Z.locals?He.Z.locals:void 0;var al=(0,h.Z)(sl,C,b,!1,null,"6d514c3d",null);const nl=al.exports;var il=function(){var e=this,s=e._self._c;return e.modal?s("NcModal",{attrs:{container:e.container},on:{close:e.closeModal}},[s("div",{staticClass:"media-settings"},[s("h2",{staticClass:"media-settings__title"},[e._v(`
			`+e._s(e.t("spreed","Media settings"))+`
		`)]),e._v(" "),s("div",{staticClass:"media-settings__preview"},[s("video",{directives:[{name:"show",rawName:"v-show",value:e.showVideo,expression:"showVideo"}],ref:"video",class:["preview__video",{"preview__video--mirrored":e.isMirrored}],attrs:{"disable-picture-in-picture":"true",tabindex:"-1"}}),e._v(" "),e.showVideo?s("NcButton",{staticClass:"media-settings__preview-mirror",attrs:{type:"secondary",title:e.mirrorToggleLabel,"aria-label":e.mirrorToggleLabel},on:{click:function(i){e.isMirrored=!e.isMirrored}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("ReflectHorizontal",{attrs:{size:20}})]},proxy:!0}],null,!1,3262782201)}):e._e(),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showVideo,expression:"!showVideo"}],staticClass:"preview__novideo"},[s("VideoBackground",{attrs:{"display-name":e.displayName,user:e.userId}}),e._v(" "),s("AvatarWrapper",{attrs:{id:e.userId,token:e.token,name:e.displayName,source:e.actorType,size:e.AVATAR.SIZE.EXTRA_LARGE,"disable-menu":"","disable-tooltip":""}})],1)],1),e._v(" "),s("div",{staticClass:"media-settings__toggles-wrapper"},[s("div",{staticClass:"media-settings__toggles"},[s("NcButton",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.audioButtonTooltip,expression:"audioButtonTooltip"}],attrs:{type:"tertiary","aria-label":e.audioButtonTooltip,disabled:!e.audioPreviewAvailable},on:{click:e.toggleAudio},scopedSlots:e._u([{key:"icon",fn:function(){return[s("VolumeIndicator",{attrs:{"audio-preview-available":e.audioPreviewAvailable,"audio-enabled":e.audioOn,"current-volume":e.currentVolume,"volume-threshold":e.currentThreshold,"overlay-muted-color":"#888888"}})]},proxy:!0}],null,!1,1973535079)}),e._v(" "),s("NcButton",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.videoButtonTooltip,expression:"videoButtonTooltip"}],attrs:{type:"tertiary","aria-label":e.videoButtonTooltip,disabled:!e.videoPreviewAvailable},on:{click:e.toggleVideo},scopedSlots:e._u([{key:"icon",fn:function(){return[e.videoOn?s("VideoIcon",{attrs:{size:20}}):s("VideoOff",{attrs:{size:20}})]},proxy:!0}],null,!1,2111044622)})],1)]),e._v(" "),s("div",{staticClass:"media-settings__call-preferences"},[s("NcButton",{attrs:{type:e.showDeviceSelection?"secondary":"tertiary"},on:{click:function(i){return e.toggleTab("devices")}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Cog",{attrs:{size:20}})]},proxy:!0}],null,!1,3604109635)},[e._v(`
				`+e._s(e.t("spreed","Devices"))+`
			`)]),e._v(" "),e.isVirtualBackgroundAvailable?s("NcButton",{attrs:{type:e.showBackgroundEditor?"secondary":"tertiary"},on:{click:function(i){return e.toggleTab("backgrounds")}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Creation",{attrs:{size:20}})]},proxy:!0}],null,!1,676199201)},[e._v(`
				`+e._s(e.t("spreed","Backgrounds"))+`
			`)]):e._e()],1),e._v(" "),e.showDeviceSelection?s("div",{staticClass:"media-settings__device-selection"},[s("MediaDevicesSelector",{attrs:{kind:"audioinput",devices:e.devices,"device-id":e.audioInputId},on:{refresh:e.updateDevices,"update:deviceId":e.handleAudioInputIdChange}}),e._v(" "),s("MediaDevicesSelector",{attrs:{kind:"videoinput",devices:e.devices,"device-id":e.videoInputId},on:{refresh:e.updateDevices,"update:deviceId":e.handleVideoInputIdChange}}),e._v(" "),s("MediaDevicesSpeakerTest")],1):e._e(),e._v(" "),e.showBackgroundEditor?s("VideoBackgroundEditor",{attrs:{token:e.token},on:{"update-background":e.handleUpdateVirtualBackground}}):e._e(),e._v(" "),e.isPublicShareAuthSidebar?e._e():s("NcCheckboxRadioSwitch",{staticClass:"checkbox",attrs:{checked:e.showMediaSettings||e.showRecordingWarning,disabled:e.showRecordingWarning},on:{"update:checked":e.setShowMediaSettings}},[e._v(`
			`+e._s(e.t("spreed","Always show preview for this conversation"))+`
		`)]),e._v(" "),!e.hasCall&&e.canModerateRecording?s("NcCheckboxRadioSwitch",{staticClass:"checkbox",attrs:{checked:e.isRecordingFromStart},on:{"update:checked":function(i){e.isRecordingFromStart=i}}},[e._v(`
			`+e._s(e.t("spreed","Start recording immediately with the call"))+`
		`)]):e._e(),e._v(" "),e.showRecordingWarning?s("NcNoteCard",{attrs:{type:"warning"}},[e.isCurrentlyRecording?s("p",[s("strong",[e._v(e._s(e.t("spreed","The call is being recorded.")))])]):s("p",[s("strong",[e._v(e._s(e.t("spreed","The call might be recorded.")))])]),e._v(" "),e.isRecordingConsentRequired?[s("p",[e._v(`
					`+e._s(e.t("spreed","The recording might include your voice, video from camera, and screen share. Your consent is required before joining the call."))+`
				`)]),e._v(" "),s("NcCheckboxRadioSwitch",{staticClass:"checkbox--warning",attrs:{checked:e.recordingConsentGiven},on:{"update:checked":e.setRecordingConsentGiven}},[e._v(`
					`+e._s(e.t("spreed","Give consent to the recording of this call"))+`
				`)])]:e._e()],2):e._e(),e._v(" "),s("div",{staticClass:"media-settings__call-buttons"},[e.showSilentCallOption?s("NcActions",{attrs:{container:e.container,"force-menu":""}},[e.silentCall?s("NcActionButton",{attrs:{name:e.t("spreed","Normal call"),"close-after-click":""},on:{click:function(i){return e.setSilentCall(!1)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("Bell",{attrs:{size:16}})]},proxy:!0}],null,!1,3167554474)},[e._v(`
					`+e._s(e.t("spreed","The conversation participants will be notified about this call"))+`
				`)]):s("NcActionButton",{attrs:{name:e.t("spreed","Call without notification"),"close-after-click":""},on:{click:function(i){return e.setSilentCall(!0)}},scopedSlots:e._u([{key:"icon",fn:function(){return[s("BellOff",{attrs:{size:16}})]},proxy:!0}],null,!1,1302578213)},[e._v(`
					`+e._s(e.t("spreed","The conversation participants will not be notified about this call"))+`
					`)])],1):e._e(),e._v(" "),e.isInCall?e.showUpdateChangesButton?s("NcButton",{on:{click:e.closeModalAndApplySettings}},[e._v(`
				`+e._s(e.t("spreed","Apply settings"))+`
			`)]):e._e():s("CallButton",{staticClass:"call-button",attrs:{"is-media-settings":"","is-recording-from-start":e.isRecordingFromStart,disabled:e.isRecordingConsentRequired&&!e.recordingConsentGiven,"recording-consent-given":e.recordingConsentGiven,"silent-call":e.silentCall}})],1)],1)]):e._e()},rl=[],ol=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon bell-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},ll=[];const dl={name:"BellIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ul=(0,h.Z)(dl,ol,ll,!1,null,null,null);const cl=ul.exports;var pl=r(84201),_l=r(46703),Al=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon creation-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},ml=[];const gl={name:"CreationIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var hl=(0,h.Z)(gl,Al,ml,!1,null,null,null);const Cl=hl.exports;var vl=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon reflect-horizontal-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M22,20H14A1,1 0 0,1 13,19V4.97C13,4.5 13.31,4.12 13.74,4C14.19,3.88 14.65,4.08 14.87,4.47L22.89,18.5C23.07,18.81 23.07,19.19 22.89,19.5C22.71,19.81 22.38,20 22,20M2,20C1.62,20 1.29,19.81 1.11,19.5C0.93,19.19 0.93,18.81 1.11,18.5L9.13,4.47C9.35,4.08 9.81,3.88 10.26,4C10.69,4.12 11,4.5 11,4.97V19A1,1 0 0,1 10,20H2M9,18V8.74L3.71,18H9Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},fl=[];const Dl={name:"ReflectHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var yl=(0,h.Z)(Dl,vl,fl,!1,null,null,null);const bl=yl.exports;var Vt=r(97167),El=r(8803),Gt=r(9359),Fl=r(8257),Ml=function(){var e=this,s=e._self._c;return s("div",{staticClass:"media-devices-selector"},[s("div",{staticClass:"media-devices-selector__icon"},[e.deviceIcon==="microphone"?s("Microphone",{attrs:{title:"",size:16}}):e._e(),e._v(" "),e.deviceIcon==="camera"?s("VideoIcon",{attrs:{title:"",size:16}}):e._e()],1),e._v(" "),s("NcSelect",{attrs:{"input-id":e.deviceSelectorId,options:e.deviceOptions,label:"label","aria-label-combobox":e.t("spreed","Select a device"),clearable:!1,placeholder:e.deviceSelectorPlaceholder,disabled:!e.enabled||!e.deviceOptionsAvailable},model:{value:e.deviceSelectedOption,callback:function(i){e.deviceSelectedOption=i},expression:"deviceSelectedOption"}}),e._v(" "),s("NcButton",{attrs:{type:"tertiary-no-background",title:e.t("spreed","Refresh devices list"),"aria-lebel":e.t("spreed","Refresh devices list")},on:{click:function(i){return e.$emit("refresh")}}},[s("RefreshIcon",{attrs:{size:20}})],1)],1)},Bl=[],xl=r(56758),kl=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon refresh-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Tl=[];const Sl={name:"RefreshIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var wl=(0,h.Z)(Sl,kl,Tl,!1,null,null,null);const Ol=wl.exports,Ll={name:"MediaDevicesSelector",components:{NcButton:V.Z,NcSelect:Ft.N,Microphone:xl.Z,RefreshIcon:Ol,VideoIcon:Vt.Z},props:{kind:{validator(a){return["audioinput","videoinput"].includes(a)},required:!0},devices:{type:Array,required:!0},deviceId:{type:String,default:void 0},enabled:{type:Boolean,default:!0}},emits:["refresh","update:deviceId"],data(){return{deviceSelectedOption:null}},computed:{deviceSelectorId(){return"device-selector-"+this.kind},deviceIcon(){return this.kind==="audioinput"?"microphone":this.kind==="videoinput"?"camera":null},deviceOptionsAvailable(){return this.deviceOptions.length>1},deviceSelectorPlaceholder(){return this.kind==="audioinput"?this.audioInputSelectorPlaceholder:this.kind==="videoinput"?this.videoInputSelectorPlaceholder:null},audioInputSelectorPlaceholder(){return this.deviceOptionsAvailable?t("spreed","Select microphone"):t("spreed","No microphone available")},videoInputSelectorPlaceholder(){return this.deviceOptionsAvailable?t("spreed","Select camera"):t("spreed","No camera available")},deviceOptions(){const a=this.devices.filter(e=>e.kind===this.kind).map(e=>({id:e.deviceId,label:e.label?e.label:e.fallbackLabel}));return a.push({id:null,label:t("spreed","None")}),a},deviceSelectedOptionFromDeviceId(){return this.deviceOptions.find(a=>a.id===this.deviceId)}},watch:{deviceSelectedOptionFromDeviceId:{handler(a){this.deviceSelectedOption=a},immediate:!0},deviceSelectedOption(a,e){if(!(a&&e&&a.id===e.id)&&!(e&&e.id&&!this.deviceOptions.find(s=>s.id===e.id))&&!(typeof e?.id>"u")){if(a&&a.id===null){this.$emit("update:deviceId",null);return}this.$emit("update:deviceId",a?a.id:void 0)}}}};var Ye=r(87278),ge={};ge.styleTagTransform=I(),ge.setAttributes=R(),ge.insert=L().bind(null,"head"),ge.domAPI=O(),ge.insertStyleElement=P();var vc=w()(Ye.Z,ge);const fc=Ye.Z&&Ye.Z.locals?Ye.Z.locals:void 0;var Rl=(0,h.Z)(Ll,Ml,Bl,!1,null,"ebebf45e",null);const Pl=Rl.exports;var Il=function(){var e=this,s=e._self._c;return s("div",{staticClass:"media-devices-checker"},[s("div",{staticClass:"media-devices-checker__icon"},[s("VolumeHighIcon",{attrs:{size:16}})],1),e._v(" "),s("NcButton",{attrs:{type:"secondary"},on:{click:e.playTestSound}},[e._v(`
		`+e._s(e.buttonLabel)+`
	`)]),e._v(" "),e.isPlayingTestSound?s("div",{staticClass:"equalizer"},e._l(e.equalizerBars,function(i){return s("div",{key:i.key,staticClass:"equalizer__bar",style:i.style})}),0):e._e()],1)},Nl=[],jl=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon volume-high-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},$l=[];const Ul={name:"VolumeHighIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Zl=(0,h.Z)(Ul,jl,$l,!1,null,null,null);const Vl=Zl.exports,Gl={name:"MediaDevicesSpeakerTest",components:{NcButton:V.Z,VolumeHighIcon:Vl},data(){return{isPlayingTestSound:!1}},computed:{buttonLabel(){return this.isPlayingTestSound?t("spreed","Playing \u2026"):t("spreed","Test speakers")},equalizerBars(){return Array.from(Array(4).keys()).map(a=>({key:a,style:{height:Math.random()*100+"%",animationDelay:Math.random()*-2+"s"}}))}},methods:{playTestSound(){if(this.isPlayingTestSound){this.$store.dispatch("pauseWaitAudio");return}this.isPlayingTestSound=!0,this.$store.dispatch("playWaitAudio").then(a=>{a.addEventListener("ended",()=>{this.isPlayingTestSound=!1})})}}};var Ke=r(97698),he={};he.styleTagTransform=I(),he.setAttributes=R(),he.insert=L().bind(null,"head"),he.domAPI=O(),he.insertStyleElement=P();var bc=w()(Ke.Z,he);const Ec=Ke.Z&&Ke.Z.locals?Ke.Z.locals:void 0;var zl=(0,h.Z)(Gl,Il,Nl,!1,null,"4c7334b4",null);const Wl=zl.exports;var Hl=function(){var e=this,s=e._self._c;return s("div",{staticClass:"background-editor"},[s("button",{key:"clear",staticClass:"background-editor__element",class:{"background-editor__element--selected":e.selectedBackground==="none"},on:{click:function(i){return e.handleSelectBackground("none")}}},[s("Cancel",{attrs:{size:20}}),e._v(`
		`+e._s(e.t("spreed","None"))+`
	`)],1),e._v(" "),s("button",{key:"blur",staticClass:"background-editor__element",class:{"background-editor__element--selected":e.selectedBackground==="blur"},on:{click:function(i){return e.handleSelectBackground("blur")}}},[s("Blur",{attrs:{size:20}}),e._v(`
		`+e._s(e.t("spreed","Blur"))+`
	`)],1),e._v(" "),e.predefinedBackgrounds?.length?[e.canUploadBackgrounds?[s("button",{staticClass:"background-editor__element",on:{click:e.clickImportInput}},[s("Upload",{attrs:{size:20}}),e._v(`
				`+e._s(e.t("spreed","Upload"))+`
			`)],1),e._v(" "),s("button",{staticClass:"background-editor__element",class:{"background-editor__element--selected":e.isCustomBackground},on:{click:function(i){e.showFilePicker=!0}}},[s("Folder",{attrs:{size:20}}),e._v(`
				`+e._s(e.t("spreed","Files"))+`
			`)],1)]:e._e(),e._v(" "),e._l(e.predefinedBackgroundsURLs,function(i){return s("button",{key:i,staticClass:"background-editor__element",class:{"background-editor__element--selected":e.selectedBackground===i},style:{"background-image":"url("+i+")"},attrs:{"aria-label":e.ariaLabelForPredefinedBackground(i),title:e.ariaLabelForPredefinedBackground(i)},on:{click:function(o){return e.handleSelectBackground(i)}}},[e.selectedBackground===i?s("CheckBold",{attrs:{size:40,"fill-color":"#fff"}}):e._e()],1)})]:e._e(),e._v(" "),s("input",{ref:"fileUploadInput",staticClass:"hidden-visually",attrs:{id:"custom-background-file",multiple:"",type:"file",tabindex:"-1","aria-hidden":"true"},on:{change:e.handleFileInput}}),e._v(" "),e.showFilePicker?s("FilePickerVue",{attrs:{name:e.t("spreed","File to share"),path:e.relativeBackgroundsFolderPath,container:".background-editor",buttons:e.filePickerButtons,multiselect:!1},on:{close:function(i){e.showFilePicker=!1}}}):e._e()],2)},Yl=[],Kl=r(98362),Xl=r(71875),Jl=r(86119),Ql=r(4558),k=r(19914),zt=r(63413),ql=r(97586);const ed=(0,G.F)()?.spreed?.config?.call?.["can-upload-background"],pt=(0,G.F)()?.spreed?.config?.call?.["predefined-backgrounds"],td={"1_office":t("spreed","Select virtual office background"),"2_home":t("spreed","Select virtual home background"),"3_abstract":t("spreed","Select virtual abstract background"),"4_beach":t("spreed","Select virtual beach background"),"5_park":t("spreed","Select virtual park background"),"6_theater":t("spreed","Select virtual theater background"),"7_library":t("spreed","Select virtual library background"),"8_space_station":t("spreed","Select virtual space station background")},sd={name:"VideoBackgroundEditor",components:{Blur:Kl.Z,Cancel:Rt,CheckBold:mt,FilePickerVue:Ql.J,Folder:Xl.Z,Upload:Jl.Z},props:{token:{type:String,required:!0}},emits:["update-background"],setup(){return{canUploadBackgrounds:ed,predefinedBackgrounds:pt}},data(){return{selectedBackground:void 0,getCapabilities:G.F,showFilePicker:!1}},computed:{isCustomBackground(){return this.selectedBackground!=="none"&&this.selectedBackground!=="blur"&&!this.predefinedBackgroundsURLs.includes(this.selectedBackground)},predefinedBackgroundsURLs(){return pt.map(a=>(0,H.hp)("spreed","backgrounds/"+a))},hasBackgroundsCapability(){return!!pt},relativeBackgroundsFolderPath(){return this.$store.getters.getAttachmentFolder()+"/Backgrounds"},filePickerButtons(){return[{label:t("spreed","Choose"),callback:a=>this.handleFileChoose(a),type:"primary"}]}},async mounted(){if(this.loadBackground(),this.$store.getters.getUserId()===null){console.debug("Skip Talk backgrounds folder check and setup for participants that are not logged in");return}const e="/files/"+this.$store.getters.getUserId()+this.relativeBackgroundsFolderPath;try{const s=(0,zt.E)();await s.exists(e)===!1&&await s.createDirectory(e)}catch(s){console.debug(s)}},methods:{handleSelectBackground(a){this.$emit("update-background",a),this.selectedBackground=a},clickImportInput(){this.$refs.fileUploadInput.click()},async handleFileInput(a){const e=a.target.files[0];a.target.value="";const s="/files/"+this.$store.getters.getUserId(),i=this.$store.getters.getAttachmentFolder()+"/Backgrounds/"+e.name,o=(0,zt.E)(),{uniquePath:l}=await(0,ql.Ng)(o,s,i);try{const d=await new Blob([e]).arrayBuffer();await o.putFileContents(s+l,d,{contentLength:e.size});const u=await(0,H.nu)("/core/preview.png?file={path}&x=-1&y={height}&a=1",{path:i,height:1080});this.handleSelectBackground(u)}catch(d){console.debug(d),(0,j.x2)(t("spreed","Error while uploading the file"))}},handleFileChoose(a){const e=a[0]?.path;if(!e)return;if(!e.startsWith("/"))throw new Error(t("files","Invalid path selected"));const s=(0,H.nu)("/core/preview.png?file={path}&x=-1&y={height}&a=1",{path:e,height:1080});this.handleSelectBackground(s)},loadBackground(){k.Z.getItem("virtualBackgroundEnabled_"+this.token)==="true"?k.Z.getItem("virtualBackgroundType_"+this.token)===D.m7.BACKGROUND_TYPE.BLUR?this.selectedBackground="blur":k.Z.getItem("virtualBackgroundType_"+this.token)===D.m7.BACKGROUND_TYPE.IMAGE?this.selectedBackground=k.Z.getItem("virtualBackgroundUrl_"+this.token):this.selectedBackground="none":this.selectedBackground="none"},ariaLabelForPredefinedBackground(a){const e=a.split("/").pop().split(".").shift();return td[e]??t("spreed","Select virtual background from file {fileName}",{fileName:e})}}};var Xe=r(42017),Ce={};Ce.styleTagTransform=I(),Ce.setAttributes=R(),Ce.insert=L().bind(null,"head"),Ce.domAPI=O(),Ce.insertStyleElement=P();var Mc=w()(Xe.Z,Ce);const Bc=Xe.Z&&Xe.Z.locals?Xe.Z.locals:void 0;var ad=(0,h.Z)(sd,Hl,Yl,!1,null,"fbae5de0",null);const nd=ad.exports;var id=r(18173),rd=r(53400),od=r(58233),ld=r.n(od),dd=r(43e3),ud=r(64540),cd=r(12741),K=r(31341);/**
 * @copyright Copyright (c) 2024 Maksim Sukharev <antreesy.web@gmail.com>
 *
 * @author Maksim Sukharev <antreesy.web@gmail.com>
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
 */function pd(a,e){let s=!1,i=0,o=0;const l=(0,$.iH)(null),d=(0,$.iH)(null),u=(0,$.qj)(K._o);window.OCA.Talk.mediaDevicesManager=K._o;const M=(0,$.iH)(-100),c=(0,$.iH)(-100),p=(0,$.iH)(null),m=(0,$.iH)(null),v=(0,$.iH)(null),x=(0,$.iH)(null),_=(0,$.iH)(null),T=(0,$.Fl)(()=>u.attributes.devices),S=(0,$.Fl)({get(){return u.attributes.audioInputId},set(B){u.set("audioInputId",B)}}),tt=(0,$.Fl)(()=>!!S.value&&!!m.value),Ht=(0,$.Fl)(()=>{if(!m.value)return null;const B=m.value.getAudioTracks();return B.length<1?null:B[0].getSettings().deviceId}),be=(0,$.Fl)({get(){return u.attributes.videoInputId},set(B){u.set("videoInputId",B)}}),Id=(0,$.Fl)(()=>!!be.value&&!!x.value),Yt=(0,$.Fl)(()=>{if(!x.value)return null;const B=x.value.getVideoTracks();return B.length<1?null:B[0].getSettings().deviceId});(0,$.YP)(S,()=>{s&&_t()}),(0,$.YP)(be,()=>{s&&At()}),(0,$.bv)(()=>{p.value=new cd.Z,p.value.setEnabled(!1),d.value=new ud.Z,d.value.addInputTrackSlot("video"),p.value.connectTrackSink("default",d.value,"video"),e&&Kt()}),(0,$.Jd)(()=>{Xt()});function Kt(){s||(s=!0,u.isSupported()||(v.value={message:"MediaDevicesManager is not supported",name:"NotSupportedError"},_.value={message:"MediaDevicesManager is not supported",name:"NotSupportedError"}),u.enableDeviceEvents(),_t(),At())}function Nd(){u._updateDevices()}function jd(B){u.updatePreferences(B)}function Xt(){if(s)s=!1;else return;Qt(),es(),u.disableDeviceEvents()}function Jt(B){m.value=B,B&&(l.value=ld()(B),l.value.on("volume_change",(J,Zd)=>{M.value=J,c.value=Zd}))}function Qt(){m.value&&(m.value.getTracks().forEach(B=>B.stop()),m.value=null,v.value=null,l.value&&(l.value.off("volume_change"),l.value.stop(),l.value=null))}function $d(){const B=i>1;i=0,B&&_t()}function _t(){if(u.isSupported()&&!(Ht.value&&Ht.value===S.value)){if(i){i++;return}Qt(),!(S.value===null||S.value===void 0)&&(i=1,u.getUserMedia({audio:!0}).then(B=>{s?Jt(B):B.getTracks().forEach(J=>J.stop())}).catch(B=>{console.error("Error getting audio stream: "+B.name+": "+B.message),v.value=B,Jt(null)}).finally(()=>{$d()}))}}function qt(B){if(x.value=B,!a.value)return;if(!B){p.value._setInputTrack("default",null);return}p.value._setInputTrack("default",x.value.getVideoTracks()[0]);const J={autoplay:!0,mirror:!0,muted:!0};(0,dd.Z)(d.value.getStream(),a.value,J)}function es(){p.value._setInputTrack("default",null),x.value&&(x.value.getTracks().forEach(B=>B.stop()),x.value=null,_.value=null,a.value&&(a.value.srcObject=null))}function Ud(){const B=o>1;o=0,B&&At()}function At(){if(u.isSupported()&&!(Yt.value&&Yt.value===be.value)){if(o){o++;return}es(),!(be.value===null||be.value===void 0)&&(o=1,u.getUserMedia({video:!0}).then(B=>{s?qt(B):B.getTracks().forEach(J=>J.stop())}).catch(B=>{console.error("Error getting video stream: "+B.name+": "+B.message),_.value=B,qt(null)}).finally(()=>{Ud()}))}}return{devices:T,updateDevices:Nd,currentVolume:M,currentThreshold:c,audioPreviewAvailable:tt,videoPreviewAvailable:Id,audioInputId:S,videoInputId:be,audioStream:m,audioStreamError:v,videoStream:x,videoStreamError:_,initializeDevices:Kt,updatePreferences:jd,stopDevices:Xt,virtualBackground:p}}var _d=r(49059);const Ad=(0,G.F)()?.spreed?.config?.call?.recording||!1,Wt=(0,G.F)()?.spreed?.config?.call?.["recording-consent"],md={name:"MediaSettings",directives:{Tooltip:lt.Z},components:{AvatarWrapper:je.Z,Bell:cl,BellOff:pl.Z,CallButton:ut.Z,Cog:_l.Z,Creation:Cl,NcActionButton:it.Z,NcActions:rt.Z,NcButton:V.Z,NcCheckboxRadioSwitch:Gt.Z,NcModal:X.Z,NcNoteCard:Fl.Z,MediaDevicesSelector:Pl,MediaDevicesSpeakerTest:Wl,ReflectHorizontal:bl,VideoBackground:id.Z,VideoIcon:Vt.Z,VideoOff:El.Z,VolumeIndicator:rd.Z,VideoBackgroundEditor:nd},props:{recordingConsentGiven:{type:Boolean,default:!1}},emits:["update:recording-consent-given"],setup(){const a=(0,$.iH)(null),e=(0,Ie.E)(),s=(0,Ee.t)(),i=(0,_d.F)(),{devices:o,updateDevices:l,updatePreferences:d,currentVolume:u,currentThreshold:M,audioPreviewAvailable:c,videoPreviewAvailable:p,audioInputId:m,videoInputId:v,initializeDevices:x,stopDevices:_,virtualBackground:T}=pd(a,!1);return{AVATAR:D.pA,isInCall:e,guestNameStore:s,settingsStore:i,video:a,devices:o,updateDevices:l,updatePreferences:d,currentVolume:u,currentThreshold:M,audioPreviewAvailable:c,videoPreviewAvailable:p,audioInputId:m,videoInputId:v,initializeDevices:x,stopDevices:_,virtualBackground:T,model:K.kL}},data(){return{modal:!1,tabContent:"none",audioOn:void 0,videoOn:void 0,silentCall:!1,updatedBackground:void 0,audioDeviceStateChanged:!1,videoDeviceStateChanged:!1,isRecordingFromStart:!1,isPublicShareAuthSidebar:!1,isMirrored:!1}},computed:{container(){return this.$store.getters.getMainContainerSelector()},displayName(){return this.$store.getters.getDisplayName()},guestName(){return this.guestNameStore.getGuestName(this.$store.getters.getToken(),this.$store.getters.getActorId())},userId(){return this.$store.getters.getUserId()},actorType(){return this.$store.getters.getActorType()},token(){return this.$store.getters.getToken()},showMediaSettings(){return this.settingsStore.getShowMediaSettings(this.token)},showVideo(){return this.videoPreviewAvailable&&this.videoOn},audioButtonTooltip(){return this.audioPreviewAvailable?this.audioOn?t("spreed","Mute audio"):t("spreed","Unmute audio"):t("spreed","No audio")},videoButtonTooltip(){return this.videoPreviewAvailable?this.videoOn?t("spreed","Disable video"):t("spreed","Enable video"):t("spreed","No camera")},mirrorToggleLabel(){return this.isMirrored?t("spreed","Display video as you will see it (mirrored)"):t("spreed","Display video as others will see it")},conversation(){return this.$store.getters.conversation(this.token)||this.$store.getters.dummyConversation},hasCall(){return this.conversation.hasCall},isCurrentlyRecording(){return[D.D0.RECORDING.VIDEO_STARTING,D.D0.RECORDING.AUDIO_STARTING,D.D0.RECORDING.VIDEO,D.D0.RECORDING.AUDIO].includes(this.conversation.callRecording)},canFullModerate(){return this.conversation.participantType===D.oM.TYPE.OWNER||this.conversation.participantType===D.oM.TYPE.MODERATOR},isInLobby(){return this.$store.getters.isInLobby},canModerateRecording(){return this.canFullModerate&&Ad},isRecordingConsentRequired(){return Wt===D.D0.RECORDING_CONSENT.REQUIRED||Wt===D.D0.RECORDING_CONSENT.OPTIONAL&&this.conversation.recordingConsent===D.D0.RECORDING_CONSENT.REQUIRED},showRecordingWarning(){return!this.isInCall&&(this.isCurrentlyRecording||this.isRecordingConsentRequired)},showSilentCallOption(){return!(this.hasCall&&!this.isInLobby)&&!this.isPublicShareAuthSidebar},showDeviceSelection(){return this.tabContent==="devices"},showBackgroundEditor(){return this.tabContent==="backgrounds"},isVirtualBackgroundAvailable(){return this.virtualBackground.isAvailable()},showUpdateChangesButton(){return this.updatedBackground||this.audioDeviceStateChanged||this.videoDeviceStateChanged}},watch:{modal(a){a?(this.audioOn=!k.Z.getItem("audioDisabled_"+this.token),this.videoOn=!k.Z.getItem("videoDisabled_"+this.token),this.silentCall=!!k.Z.getItem("silentCall_"+this.token),k.Z.getItem("virtualBackgroundEnabled_"+this.token)==="true"?k.Z.getItem("virtualBackgroundType_"+this.token)===D.m7.BACKGROUND_TYPE.BLUR?this.blurVirtualBackground():k.Z.getItem("virtualBackgroundType_"+this.token)===D.m7.BACKGROUND_TYPE.IMAGE&&this.setVirtualBackgroundImage(k.Z.getItem("virtualBackgroundUrl_"+this.token)):this.clearVirtualBackground(),this.initializeDevices()):this.stopDevices()},audioInputId(a){this.showDeviceSelection&&a&&!this.audioOn&&this.toggleAudio()},videoInputId(a){this.showDeviceSelection&&a&&!this.videoOn&&this.toggleVideo()},isRecordingFromStart(a){this.setRecordingConsentGiven(a)}},mounted(){(0,W.Ld)("talk:media-settings:show",this.showModal),(0,W.Ld)("talk:media-settings:hide",this.closeModalAndApplySettings),k.Z.getItem("devicesPreferred")&&k.Z.removeItem("devicesPreferred")},beforeDestroy(){(0,W.r1)("talk:media-settings:show",this.showModal),(0,W.r1)("talk:media-settings:hide",this.closeModalAndApplySettings)},methods:{showModal(a){this.modal=!0,a==="video-verification"&&(this.isPublicShareAuthSidebar=!0),(!k.Z.getItem("audioInputDevicePreferred")||!k.Z.getItem("videoInputDevicePreferred"))&&(this.tabContent="devices")},closeModal(){this.modal=!1,this.updatedBackground=void 0,this.audioDeviceStateChanged=!1,this.videoDeviceStateChanged=!1,this.isPublicShareAuthSidebar=!1,this.isRecordingFromStart=!1,this.isMirrored=!1,this.updatePreferences("audioinput"),this.updatePreferences("videoinput")},toggleAudio(){this.audioOn?(k.Z.setItem("audioDisabled_"+this.token,"true"),this.audioOn=!1):(k.Z.removeItem("audioDisabled_"+this.token),this.audioOn=!0),this.audioDeviceStateChanged=!this.audioDeviceStateChanged},toggleVideo(){this.videoOn?(k.Z.setItem("videoDisabled_"+this.token,"true"),this.videoOn=!1):(k.Z.removeItem("videoDisabled_"+this.token),this.videoOn=!0),this.videoDeviceStateChanged=!this.videoDeviceStateChanged},setSilentCall(a){this.silentCall=a,a?k.Z.setItem("silentCall_"+this.token,"true"):k.Z.removeItem("silentCall_"+this.token)},closeModalAndApplySettings(){this.updatedBackground&&this.handleUpdateBackground(this.updatedBackground),this.audioDeviceStateChanged&&(0,W.j8)("local-audio-control-button:toggle-audio"),this.videoDeviceStateChanged&&(0,W.j8)("local-video-control-button:toggle-video"),this.closeModal()},handleUpdateBackground(a){a==="none"?this.clearBackground():a==="blur"?this.blurBackground():this.setBackgroundImage(a)},handleUpdateVirtualBackground(a){this.updatedBackground=a,a==="none"?this.clearVirtualBackground():a==="blur"?this.blurVirtualBackground():this.setVirtualBackgroundImage(a)},clearVirtualBackground(){this.virtualBackground.setEnabled(!1)},clearBackground(){this.isInCall?K.kL.disableVirtualBackground():k.Z.removeItem("virtualBackgroundEnabled_"+this.token)},blurVirtualBackground(){this.virtualBackground.setEnabled(!0),this.virtualBackground.setVirtualBackground({backgroundType:D.m7.BACKGROUND_TYPE.BLUR,blurValue:D.m7.BLUR_STRENGTH.DEFAULT})},blurBackground(){this.isInCall?(K.kL.enableVirtualBackground(),K.kL.setVirtualBackgroundBlur(D.m7.BLUR_STRENGTH.DEFAULT)):(k.Z.setItem("virtualBackgroundEnabled_"+this.token,"true"),k.Z.setItem("virtualBackgroundType_"+this.token,D.m7.BACKGROUND_TYPE.BLUR),k.Z.setItem("virtualBackgroundBlurStrength_"+this.token,D.m7.BLUR_STRENGTH.DEFAULT))},setVirtualBackgroundImage(a){this.virtualBackground.setEnabled(!0),this.virtualBackground.setVirtualBackground({backgroundType:D.m7.BACKGROUND_TYPE.IMAGE,virtualSource:a})},setBackgroundImage(a){this.isInCall?(K.kL.enableVirtualBackground(),K.kL.setVirtualBackgroundImage(a)):(k.Z.setItem("virtualBackgroundEnabled_"+this.token,"true"),k.Z.setItem("virtualBackgroundType_"+this.token,D.m7.BACKGROUND_TYPE.IMAGE),k.Z.setItem("virtualBackgroundUrl_"+this.token,a))},toggleTab(a){this.tabContent!==a?this.tabContent=a:this.tabContent="none"},setShowMediaSettings(a){this.settingsStore.setShowMediaSettings(this.token,a)},setRecordingConsentGiven(a){this.$emit("update:recording-consent-given",a)},handleAudioInputIdChange(a){this.audioInputId=a,this.updatePreferences("audioinput")},handleVideoInputIdChange(a){this.videoInputId=a,this.updatePreferences("videoinput")}}};var Je=r(34701),ve={};ve.styleTagTransform=I(),ve.setAttributes=R(),ve.insert=L().bind(null,"head"),ve.domAPI=O(),ve.insertStyleElement=P();var kc=w()(Je.Z,ve);const Tc=Je.Z&&Je.Z.locals?Je.Z.locals:void 0;var gd=(0,h.Z)(md,il,rl,!1,null,"7e02ecb2",null);const hd=gd.exports;var Cd=function(){var e=this,s=e._self._c;return e.id?s("NcModal",{attrs:{size:"small",container:e.container},on:{close:e.dismissModal}},[e.poll?s("div",{staticClass:"poll-modal"},[s("div",{staticClass:"poll-modal__header"},[s("PollIcon",{attrs:{size:20}}),e._v(" "),s("span",{attrs:{role:"heading","aria-level":"2"}},[e._v(`
				`+e._s(e.name)+`
			`)])],1),e._v(" "),s("p",{staticClass:"poll-modal__summary"},[e._v(`
			`+e._s(e.pollSummaryText)+`
		`)]),e._v(" "),e.modalPage==="voting"?s("div",{staticClass:"poll-modal__options"},e._l(e.poll.options,function(i,o){return s("NcCheckboxRadioSwitch",{key:"option-"+o,attrs:{checked:e.checked,value:o.toString(),type:e.isMultipleAnswers?"checkbox":"radio",name:"answerType"},on:{"update:checked":function(l){e.checked=l}}},[e._v(`
				`+e._s(i)+`
			`)])}),1):e.modalPage==="results"?s("div",{staticClass:"results__options"},e._l(e.poll.options,function(i,o){return s("div",{key:o,staticClass:"results__option"},[s("div",{staticClass:"results__option-title"},[s("p",[e._v(e._s(i))]),e._v(" "),s("p",{staticClass:"percentage"},[e._v(`
						`+e._s(e.getVotePercentage(o)+"%")+`
					`)])]),e._v(" "),e.getFilteredDetails(o).length>0||e.selfHasVotedOption(o)?s("div",{staticClass:"results__option__details"},[e.poll.details?s("PollVotersDetails",{attrs:{token:e.token,container:e.container,details:e.getFilteredDetails(o)}}):e._e(),e._v(" "),e.selfHasVotedOption(o)?s("p",{staticClass:"results__option-subtitle"},[e._v(`
						`+e._s(e.t("spreed","You voted for this option"))+`
					`)]):e._e()],1):e._e(),e._v(" "),s("NcProgressBar",{staticClass:"results__option-progress",attrs:{value:e.getVotePercentage(o),size:"medium"}})],1)}),0):e._e(),e._v(" "),e.isPollOpen?s("div",{staticClass:"poll-modal__actions"},[e.modalPage==="voting"?s("NcButton",{attrs:{type:"primary",disabled:e.disabled},on:{click:e.submitVote}},[e._v(`
				`+e._s(e.t("spreed","Submit vote"))+`
			`)]):s("NcButton",{attrs:{type:"secondary"},on:{click:function(i){e.modalPage="voting"}}},[e._v(`
				`+e._s(e.t("spreed","Change your vote"))+`
			`)]),e._v(" "),e.canEndPoll?s("NcActions",{attrs:{"force-menu":"",container:e.container}},[s("NcActionButton",{staticClass:"critical",on:{click:e.endPoll},scopedSlots:e._u([{key:"icon",fn:function(){return[s("FileLock",{attrs:{size:20}})]},proxy:!0}],null,!1,1793525573)},[e._v(`
					`+e._s(e.t("spreed","End poll"))+`
					`)])],1):e._e()],1):e._e()]):s("NcLoadingIcon",{staticClass:"poll-modal__loading"})],1):e._e()},vd=[],fd=function(){var e=this,s=e._self._c;return s("span",e._b({staticClass:"material-design-icon file-lock-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M18 13C16.6 13 15.2 14.1 15.2 15.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17V15.5C20.8 14.1 19.4 13 18 13M18 14.2C18.8 14.2 19.5 14.7 19.5 15.5V17H16.5V15.5C16.5 14.7 17.2 14.2 18 14.2M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H12V18.2C12 17.2 12.4 16.5 13 16C13.1 15.9 13.2 15.9 13.2 15.8V15.5C13.2 12.8 15.6 11 18 11C18.7 11 19.4 11.2 20 11.4V8L14 2H6M13 3.5L18.5 9H13V3.5Z"}},[e.title?s("title",[e._v(e._s(e.title))]):e._e()])])])},Dd=[];const yd={name:"FileLockIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var bd=(0,h.Z)(yd,fd,Dd,!1,null,null,null);const Ed=bd.exports;var Fd=r(29094),Md=function(){var e=this,s=e._self._c;return s("NcPopover",{staticClass:"poll-voters-details",attrs:{trigger:"hover",container:e.container},scopedSlots:e._u([{key:"trigger",fn:function(){return[s("NcButton",{staticClass:"poll-voters-details__button",attrs:{type:"tertiary-no-background","aria-label":e.t("spreed","Voted participants")},scopedSlots:e._u([{key:"icon",fn:function(){return e._l(e.details.slice(0,8),function(i,o){return s("AvatarWrapper",{key:o,attrs:{id:i.actorId,token:e.token,name:e.getDisplayName(i),source:i.actorType,size:e.AVATAR.SIZE.EXTRA_SMALL,condensed:"","disable-menu":"","disable-tooltip":""}})})},proxy:!0}])})]},proxy:!0}])},[e._v(" "),s("div",{staticClass:"poll-voters-details__popover",attrs:{tabindex:"0"}},e._l(e.details,function(i,o){return s("div",{key:o,staticClass:"poll-voters-details__list-item"},[s("AvatarWrapper",{attrs:{id:i.actorId,token:e.token,name:e.getDisplayName(i),source:i.actorType,size:e.AVATAR.SIZE.EXTRA_SMALL,"disable-menu":""}}),e._v(" "),s("p",{staticClass:"poll-voters-details__display-name"},[e._v(`
				`+e._s(e.getDisplayName(i))+`
			`)])],1)}),0)])},Bd=[];const xd={name:"PollVotersDetails",components:{AvatarWrapper:je.Z,NcButton:V.Z,NcPopover:jt.Z},props:{token:{type:String,required:!0},details:{type:Array,required:!0},container:{type:String,required:!0}},setup(){return{AVATAR:D.pA}},methods:{getDisplayName(a){return a.actorDisplayName===""&&a.actorType===D.DM.ACTOR_TYPE.GUESTS?t("spreed","Guest"):a.actorType==="deleted_users"?t("spreed","Deleted user"):a.actorDisplayName}}};var Qe=r(28379),fe={};fe.styleTagTransform=I(),fe.setAttributes=R(),fe.insert=L().bind(null,"head"),fe.domAPI=O(),fe.insertStyleElement=P();var Oc=w()(Qe.Z,fe);const Lc=Qe.Z&&Qe.Z.locals?Qe.Z.locals:void 0;var kd=(0,h.Z)(xd,Md,Bd,!1,null,"11505399",null);const Td=kd.exports,Sd={name:"PollViewer",components:{NcActions:rt.Z,NcActionButton:it.Z,NcCheckboxRadioSwitch:Gt.Z,NcLoadingIcon:Te.Z,NcModal:X.Z,NcButton:V.Z,NcProgressBar:Fd.Z,PollVotersDetails:Td,FileLock:Ed,PollIcon:Pt.Z},setup(){return{isInCall:(0,Ie.E)()}},data(){return{voteToSubmit:[],modalPage:"",loading:!1}},computed:{activePoll(){return this.$store.getters.activePoll},name(){return this.activePoll?.name},id(){return this.activePoll?.id},token(){return this.activePoll?.token},container(){return this.$store.getters.getMainContainerSelector()},poll(){return this.$store.getters.getPoll(this.token,this.id)},selfHasVoted(){return this.poll?.votedSelf?.length>0},isPollPublic(){return this.poll?.resultMode===D.PD.MODE.PUBLIC},isPollOpen(){return this.poll?.status===D.PD.STATUS.OPEN},isPollClosed(){return this.poll?.status===D.PD.STATUS.CLOSED},isMultipleAnswers(){return this.poll?.maxVotes===D.PD.ANSWER_TYPE.MULTIPLE},checked:{get(){return this.voteToSubmit},set(a){this.voteToSubmit=Array.isArray(a)?a:[a]}},disabled(){return this.loading||this.voteToSubmit.length===0},selfIsOwnerOrModerator(){return this.$store.getters.isModerator||this.poll?.actorType===this.$store.getters.getActorType()&&this.poll?.actorId===this.$store.getters.getActorId()},pollSummaryText(){return this.isPollClosed?n("spreed","Poll results \u2022 %n vote","Poll results \u2022 %n votes",this.poll?.numVoters):this.selfIsOwnerOrModerator||this.isPollPublic&&this.selfHasVoted?n("spreed","Open poll \u2022 %n vote","Open poll \u2022 %n votes",this.poll?.numVoters):!this.isPollPublic&&this.selfHasVoted?t("spreed","Open poll \u2022 You voted already"):t("spreed","Open poll")},canEndPoll(){return this.isPollOpen&&this.selfIsOwnerOrModerator}},watch:{modalPage(a){a==="voting"&&this.setVoteData()},id(a){this.$store.dispatch("hidePollToast",a)},isInCall(a){a||this.$store.dispatch("hideAllPollToasts")},poll:{immediate:!0,handler(a){a?this.selfHasVoted||this.isPollClosed?this.modalPage="results":this.modalPage="voting":this.modalPage=""}}},mounted(){Z.N.$on("talk:poll-added",this.showPollToast)},beforeDestroy(){Z.N.$off("talk:poll-added",this.showPollToast)},methods:{getPollData(){this.poll||this.$store.dispatch("getPollData",{token:this.token,pollId:this.id})},setVoteData(){this.voteToSubmit=this.selfHasVoted?this.poll?.votedSelf.map(a=>a.toString()):[]},showPollToast({token:a,message:e}){this.isInCall&&this.$store.dispatch("addPollToast",{token:a,message:e})},dismissModal(){this.$store.dispatch("removeActivePoll"),this.voteToSubmit=[]},async submitVote(){this.loading=!0;try{await this.$store.dispatch("submitVote",{token:this.token,pollId:this.id,vote:this.voteToSubmit.map(a=>+a)}),this.modalPage="results"}catch(a){console.error(a),this.modalPage="voting"}this.loading=!1},async endPoll(){this.loading=!0;try{await this.$store.dispatch("endPoll",{token:this.token,pollId:this.id}),this.modalPage="results"}catch(a){console.error(a)}this.loading=!1},selfHasVotedOption(a){return this.poll?.votedSelf.includes(a)},getFilteredDetails(a){return(this.poll?.details||[]).filter(e=>e.optionId===a)},getVotePercentage(a){return!this.poll?.votes["option-"+a]||!this.poll?.numVoters?0:parseInt(this.poll?.votes["option-"+a]/this.poll?.numVoters*100)}}};var qe=r(62765),De={};De.styleTagTransform=I(),De.setAttributes=R(),De.insert=L().bind(null,"head"),De.domAPI=O(),De.insertStyleElement=P();var Pc=w()(qe.Z,De);const Ic=qe.Z&&qe.Z.locals?qe.Z.locals:void 0;var wd=(0,h.Z)(Sd,Cd,vd,!1,null,"7d225646",null);const Od=wd.exports,Ld={name:"FilesSidebarChatView",components:{CallButton:ut.Z,ChatView:nl,MediaSettings:hd,PollViewer:Od},data(){return{recordingConsentGiven:!1}}};var et=r(33679),ye={};ye.styleTagTransform=I(),ye.setAttributes=R(),ye.insert=L().bind(null,"head"),ye.domAPI=O(),ye.insertStyleElement=P();var jc=w()(et.Z,ye);const $c=et.Z&&et.Z.locals?et.Z.locals:void 0;var Rd=(0,h.Z)(Ld,f,g,!1,null,"51e3042b",null);const Pd=Rd.exports}}]);})();

//# sourceMappingURL=talk-files-sidebar-tab-chunk.js.map?v=c52507042cc5dea9dfec