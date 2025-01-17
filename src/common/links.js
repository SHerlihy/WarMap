const imgrTest = /^(https:\/\/)?imgur\.com\/.*\/.......$/mi
const twitterTest = /^(https:\/\/)twitter\.com/mi
const tumblrTest = /^(https:\/\/).*\.tumblr\.com\/post\//mi

const linkLabel = function(link){

    if (imgrTest.test(link)) return "Imgur"
    if (twitterTest.test(link)) return "Twitter"
    if (tumblrTest.test(link)) return "Tumblr"
    return "Link"
}

const cubariLink = function(link){

    const imgurIDPart = /\/(a|gallery)\/.......$/i
    var parts = link.match(imgurIDPart)
    
    if(parts === null) return ""
    var id = parts[0].split('/')[2]
    return `https://cubari.moe/read/imgur/${id}/`
}

const isNotALink = function(link){
    return link.toLowerCase().includes("[no submission]") || link.trim() === "na"
}

const showCubari = function(link){
    return imgrTest.test(link)
}

const buildTwitterLink = function(userHandle){
    const cleanHandle = userHandle.replace('@', '')
    return `https://www.twitter.com/${cleanHandle}`
}

const buildInstagramLink = function(userHandle){
    const cleanHandle = userHandle.replace('@', '')
    return `https://www.instagram.com/${cleanHandle}`
}

export {showCubari, cubariLink, linkLabel, buildTwitterLink, buildInstagramLink, isNotALink}