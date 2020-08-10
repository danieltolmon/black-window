const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

export async function fetchYoutubeList(listId) {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${listId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  return await res.json();
}
