__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1])(3901),n=17,s={fontSize:'25px',height:'25px',margin:'8px',width:'25px'},o={right:'53px',bottom:'355px'},p=295,u=t=>{const n=a(d[2]).createElement(i(d[3]),{href:r(d[4]).buildLoginLink(i(d[5]).location.pathname,{source:'post_comment_input'})},r(d[1])(2872));return a(d[2]).createElement("span",null,r(d[1])(513,{loginLink:n}))},h=t=>a(d[2]).createElement("span",null,r(d[1])(2549,{username:t.username})),l=t=>a(d[2]).createElement("div",{className:"up_hg"},a(d[2]).createElement("span",null,r(d[1])(2672,{username:t.username})),a(d[2]).createElement(r(d[6]).Button,{borderless:!0,color:"ig-secondary-button",onClick:t.onClearReply},"✕"));class c extends a(d[2]).Component{constructor(t){super(t),this.$PostCommentInput1=null,this.focusAndScroll=(()=>{const t=()=>{const t=i(d[7])(this.$PostCommentInput2);t.focus(),r(d[8]).isMobile()&&setTimeout(()=>{'function'==typeof t.scrollIntoView&&(t.scrollIntoView(!0),window.scrollBy(0,-200))},10)};this.setState({hasBeenFocused:!0},()=>{setTimeout(()=>t())})}),this.$PostCommentInput5=(t=>{t.preventDefault(),this.$PostCommentInput4()||(this.props.onCommentChange(this.state.pendingComment),this.setState({needsFlush:!1}),this.props.onCommentSubmit().then(()=>{this.$PostCommentInput2&&this.$PostCommentInput2.blur()}))}),this.$PostCommentInput6=(t=>{'Enter'!==t.key||t.shiftKey||this.$PostCommentInput5(t)}),this.$PostCommentInput7=(t=>{t.stopPropagation()}),this.$PostCommentInput8=((t,n)=>{this.state.commentAttempt||r(d[9]).logAction_DEPRECATED('commentAttempt',{source:this.props.analyticsContext,type:!0===this.props.isVideo?'video':'photo',isLoggedIn:this.props.isLoggedIn}),this.setState({commentAttempt:!0,cursorIndex:n,isEmojiTrayOpen:null!=this.$PostCommentInput3,needsFlush:!0,pendingComment:t})}),this.$PostCommentInput9=(t=>{this.closeEmojiTrayIfOpen()}),this.$PostCommentInput10=(t=>{this.$PostCommentInput2=t,i(d[10])._("292")&&(null!=t?this.$PostCommentInput1=i(d[11]).trackTypingPerf(t,'PostCommentInput'):null!=this.$PostCommentInput1&&(this.$PostCommentInput1(),this.$PostCommentInput1=null))}),this.$PostCommentInput11=(t=>{this.setState({hasBeenFocused:!0,hasFocus:!0})}),this.$PostCommentInput12=(t=>{this.setState({hasFocus:!1}),t.relatedTarget!==this.emojiPickerButton.current&&this.closeEmojiTrayIfOpen()}),this.$PostCommentInput13=(()=>{const{analyticsContext:t,id:n,ownerId:s}=this.props;r(d[12]).logInteractionAction({containerModule:t,eventName:'instagram_organic_comment_button',mediaId:n,mediaAuthorId:s})}),this.$PostCommentInput14=((t,n)=>{const{updatedCursorIndex:s,updatedText:o}=i(d[13])(t,n,this.state.pendingComment,this.state.cursorIndex);this.$PostCommentInput8(o,s)}),this.$PostCommentInput15=(t=>{var n,s;this.$PostCommentInput3=t;const o=(null===(n=this.$PostCommentInput2)||void 0===n?void 0:n.selectionStart)||0,p=(null===(s=this.$PostCommentInput2)||void 0===s?void 0:s.selectionEnd)||0,u=this.state.pendingComment.substring(0,o)+t+this.state.pendingComment.substring(p),h=o+t.length;this.$PostCommentInput8(u,h)}),this.$PostCommentInput16=(t=>{!0===t&&r(d[9]).logAction_DEPRECATED('emojiButtonClicked',{source:this.props.analyticsContext,type:!0===this.props.isVideo?'video':'photo',isLoggedIn:this.props.isLoggedIn}),this.setState({isEmojiTrayOpen:t})}),this.$PostCommentInput17=(()=>r(d[8]).isDesktop()&&!0===i(d[14])._("118","0")),this.emojiPickerButton=a(d[2]).createRef(),this.state={commentAttempt:!1,hasBeenFocused:!1,needsFlush:!1,pendingComment:t.pendingComment,cursorIndex:t.pendingComment.length,isEmojiTrayOpen:!1}}componentDidMount(){!0===this.props.willFocusAndScrollToInput&&this.focusAndScroll()}componentWillUnmount(){!this.props.commentSaveIsInFlight&&this.state.needsFlush&&this.state.pendingComment.length>0&&this.props.onCommentChange(this.state.pendingComment)}componentDidUpdate(t,n){const{commentSaveIsInFlight:s,pendingComment:o}=this.props;this.$PostCommentInput2&&!n.hasBeenFocused&&this.state.hasBeenFocused&&this.$PostCommentInput2.focus(),t.pendingComment!==o&&(this.setState({pendingComment:o,cursorIndex:o.length}),this.$PostCommentInput2&&this.$PostCommentInput2.focus());const p=n.isEmojiTrayOpen!==this.state.isEmojiTrayOpen;(null!=this.$PostCommentInput3||p)&&(this.$PostCommentInput3=null,this.$PostCommentInput2&&(p&&this.setState({cursorIndex:this.$PostCommentInput2.selectionEnd}),this.$PostCommentInput2.focus())),t.commentSaveIsInFlight&&!s&&''===o&&this.setState({pendingComment:'',needsFlush:!0})}shouldComponentUpdate(t,n){return this.props.className!==t.className||this.props.commentSaveIsInFlight!==t.commentSaveIsInFlight||this.props.pendingComment!==t.pendingComment||this.state.pendingComment!==n.pendingComment||this.state.hasBeenFocused!==n.hasBeenFocused||this.state.hasFocus!==n.hasFocus||this.state.isEmojiTrayOpen!==n.isEmojiTrayOpen}$PostCommentInput4(){return 0===this.state.pendingComment.trim().length||this.props.commentSaveIsInFlight}closeEmojiTrayIfOpen(){this.setState(t=>t.isEmojiTrayOpen?{isEmojiTrayOpen:!1}:{})}displayForm(){return a(d[2]).createElement("form",{className:"X7cDz",method:"POST",onSubmit:this.$PostCommentInput5},this.props.commentSaveIsInFlight&&a(d[2]).createElement(r(d[6]).Spinner,{position:"absolute"}),this.$PostCommentInput17()&&a(d[2]).createElement(i(d[15]),{emojiArrowLeftOffset:n,emojiIconStyles:s,emojiTrayPositionStyles:o,emojiTrayWidth:p,isEmojiTrayOpen:this.state.isEmojiTrayOpen,onEmojiClick:this.$PostCommentInput15,ref:this.emojiPickerButton,setEmojiTrayOpen:this.$PostCommentInput16}),a(d[2]).createElement(i(d[16]),{"aria-label":t,autosize:!0===this.props.forceTextareaAutosize||!0===this.props.willFocusAndScrollToInput||this.state.hasBeenFocused||''!==this.state.pendingComment,className:"Ypffh",cursorIndex:this.state.cursorIndex,disabled:this.props.commentSaveIsInFlight,inputRef:this.$PostCommentInput10,onBlur:this.$PostCommentInput12,onChange:this.$PostCommentInput8,onClick:this.$PostCommentInput9,onFocus:this.$PostCommentInput11,onKeyPress:this.$PostCommentInput6,onKeyUp:this.$PostCommentInput7,onTypeaheadResultSelect:this.$PostCommentInput14,placeholder:t,value:this.state.pendingComment}),this.props.hasPostButton&&a(d[2]).createElement(r(d[6]).Button,{borderless:!0,disabled:this.$PostCommentInput4(),onClick:this.$PostCommentInput13,type:"submit"},r(d[1])(3267)))}$PostCommentInput18(){return!this.$PostCommentInput2||this.props.viewportHeight-this.$PostCommentInput2.getBoundingClientRect().bottom>200}render(){const{canViewerProvideFeedback:t,className:n,hasRichCommentInput:s,isLoggedIn:o,onClearReply:p,ownerUsername:c,repliedToUsername:C,viewerProfilePicture:I}=this.props;return a(d[2]).createElement("section",{className:i(d[17])(`sH9wk ${!0===s?"n1LTb":""}`,n)},a(d[2]).createElement("div",{className:"RxpZH"},!0===s&&null!=I&&''!==I&&a(d[2]).createElement(i(d[18]),{className:"_8tZ3C",isLink:!1,profilePictureUrl:I,size:r(d[6]).CORE_CONSTANTS.AVATAR_SIZES.small}),o?t?this.displayForm():a(d[2]).createElement(h,{username:i(d[7])(c)}):a(d[2]).createElement(u,null)),null!=C&&''!==C&&r(d[8]).isMobile()&&a(d[2]).createElement(l,{onClearReply:p,username:C}),o&&t&&!0===this.state.hasFocus&&a(d[2]).createElement(i(d[19]),{className:`${r(d[8]).isMobile()?"q6Mjn":""} ${r(d[8]).isMobile()?"":"Mfkwx"} ${r(d[8]).isMobile()||this.$PostCommentInput18()?"":"wUsz1"}`,cursorIndex:this.state.cursorIndex,inputString:this.state.pendingComment,onResultSelect:this.$PostCommentInput14,showResultsCondensed:!0,useSearchTriggers:!0}))}}c.defaultProps={forceTextareaAutosize:r(d[8]).isMobile(),hasRichCommentInput:!1};var C=r(d[23]).connect(function(t,n){const s=t.pendingComments.get(n.id);return{analyticsContext:t.navigation.pageIdentifier||'',commentSaveIsInFlight:(null===s||void 0===s?void 0:s.committing)||!1,loading:t.search.loading,ownerUsername:i(d[7])(r(d[20]).getUserById(t,n.ownerId).username),pendingComment:(null===s||void 0===s?void 0:s.text)||'',repliedToCommentAuthorId:null===s||void 0===s?void 0:s.repliedToCommentAuthorId,repliedToCommentId:null===s||void 0===s?void 0:s.repliedToCommentId,repliedToUsername:null===s||void 0===s?void 0:s.repliedToUsername,results:t.search.results,searchedForQuery:t.search.searchedForQuery,selectedIndex:t.search.selectedIndex,viewportHeight:t.displayProperties.viewportHeight}},function(t,n){return{onCommentChange(s,o,p,u){t(r(d[21]).changePendingComment(n.id,s,o,p,u))},onClearReply(){t(r(d[21]).clearPendingComment(n.id))},onCommentSubmit:()=>t(r(d[21]).commitPendingComment(n.id,n.ownerId,n.analyticsContext)),onTypeaheadResultHighlight(n,s){t(r(d[22]).selectResult(n,s))}}},function(t,n,s){return{...t,...n,...s,onCommentChange:s=>n.onCommentChange(s,t.repliedToCommentId,t.repliedToCommentAuthorId,t.repliedToUsername)}},{forwardRef:!0})(c);e.default=C,e.PostCommentInput=c},12910592,[12910593,20250684,3,20316217,20250883,20251001,20316204,20316188,20250631,20250716,20250681,20250816,10354725,20054420,20250777,20054422,20054421,20316210,20316250,20054315,20250964,12910594,20251261,5]);
__d(function() {},12910593,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(o,n,s){return(c,l)=>{var u;c({type:r(d[0]).COMMIT_PENDING_COMMENT_REQUESTED,postId:o}),r(d[1]).logAction_DEPRECATED('comment',{source:s});const C=l(),{text:E,repliedToCommentId:I,repliedToCommentAuthorId:p}=C.pendingComments.get(o,r(d[2]).EMPTY_PENDING_COMMENT),{hasRankedComments:_}=C.posts.byId.get(o,{hasRankedComments:!1}),T=Boolean(null===(u=r(d[3]).getViewer(C))||void 0===u?void 0:u.isVerified);return i(d[4])(r(d[5]).commentOnPost(o,E,I).then(t=>{const u=i(d[6])(r(d[3]).getViewer(l())).id,M=t.id;c({type:r(d[0]).COMMIT_PENDING_COMMENT_SUCCEEDED,postId:o,commentText:E,hasRankedComments:_,commentAuthorId:u,commentAuthorIsVerified:T,commentId:M,postedAt:Math.round(Date.now()/1e3),repliedToCommentId:I}),r(d[1]).logAction_DEPRECATED('commentSuccess',{source:s}),r(d[7]).logOrganicComment({commentAuthorId:u,commentId:M,containerModule:s,mediaId:o,mediaAuthorId:n,mediaType:r(d[8]).getMediaTypeById(C,o),parentCommentId:I,parentCommentAuthorId:p})},l=>{var u;const C=(null===(u=l.responseObject)||void 0===u?void 0:u.spam)||!1;if(C){var E,I,p,_;const t=null===(E=l.responseObject)||void 0===E?void 0:E.feedback_title,o=null===(I=l.responseObject)||void 0===I?void 0:I.feedback_message,n=null===(p=l.responseObject)||void 0===p?void 0:p.feedback_url,s=null===(_=l.responseObject)||void 0===_?void 0:_.feedback_action;c(r(d[9]).showSentryFeedback({title:t,message:o,url:n,action:s}))}c({type:r(d[0]).COMMIT_PENDING_COMMENT_FAILED,postId:o,toast:C?void 0:{text:r(d[10])(2114),actionText:r(d[10])(282),actionHandler:()=>c(t(o,n,s))}}),r(d[1]).logAction_DEPRECATED('commentFailure',{source:s})}))}}Object.defineProperty(e,'__esModule',{value:!0}),e.changePendingComment=function(t,o,n,s,c){return{type:r(d[0]).CHANGE_PENDING_COMMENT,postId:t,text:o,repliedToCommentId:n,repliedToCommentAuthorId:s,repliedToUsername:c}},e.clearPendingComment=function(t){return{type:r(d[0]).CLEAR_PENDING_COMMENT,postId:t}},e.commitPendingComment=t},12910594,[20250850,20250716,20054152,20250964,20250714,20250800,20316188,10354722,10354731,20251225,20250684]);