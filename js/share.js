function openShareDialog() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("#サステナハニー公園プロジェクト");
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
}
