import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";

import ReplayIcon from "@mui/icons-material/Replay";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

import bgm from "./bgm_curr.ogg";

export default function ActionButtons() {
  const [PlayMusic, setPlayMusic] = React.useState(false);
  const audioRef = React.useRef(new Audio(bgm));

  const togglePlayPause = () => {
    const audio_1 = audioRef.current;
    if (PlayMusic) {
      audio_1.pause();
    } else {
      audio_1.play();
    }
    setPlayMusic(!PlayMusic);
  };

  React.useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
  }, []);

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        color="info"
        aria-label="add"
        size="small"
        sx={{
          position: "fixed",
          bottom: (theme) => theme.spacing(19),
          right: (theme) => theme.spacing(0),
        }}
        onClick={() => window.location.reload()}
      >
        <ReplayIcon />
      </Fab>

      <Fab
        color="error"
        aria-label="add"
        size="small"
        id="tst"
        sx={{
          position: "fixed",
          bottom: (theme) => theme.spacing(12),
          right: (theme) => theme.spacing(0),
        }}
        onClick={() => {
          console.log("Yes Clicked");
          togglePlayPause();
          // setPlayMusic(!PlayMusic);
        }}
      >
        {!PlayMusic ? <MusicNoteIcon /> : <MusicOffIcon />}
      </Fab>

      <Fab
        color="warning"
        variant="circular"
        size="small"
        sx={{
          position: "fixed",
          bottom: (theme) => theme.spacing(5),
          right: (theme) => theme.spacing(0),
        }}
        onClick={() => window.open("https://maps.app.goo.gl/4FsU6AWiY3W8bLHQ8")}
      >
        <NavigationIcon />
      </Fab>
    </Box>
  );
}
