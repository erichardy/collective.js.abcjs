/* must create a new js in custom and register it,
 *  which contains this for use with example2.pt */
window.onload = function() {
	abc_editor = new ABCJS.Editor("abc", { canvas_id: "canvas0", midi_id:"midi", warnings_id:"warnings" });
}
