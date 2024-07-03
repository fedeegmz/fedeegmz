export default async function copyClipboard(text) {
    await navigator.clipboard.writeText(text);
    console.log("Copied to clipboard");
}
