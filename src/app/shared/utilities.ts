export class utilities {
  public static serverUrl = 'https://localhost:7019';
  public static getPath(isMultiplayer: boolean): string {
    return isMultiplayer ? 'multiplayer' : 'singleplayer';
  }
}