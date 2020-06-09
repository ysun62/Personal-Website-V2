import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import PropTypes from "prop-types"

import { StyledHtmlLink } from "../../styles/sharedStyle"

const useStyles = makeStyles({
  root: {
    minWidth: 135,
    // maxWidth: 550,
    minHeight: 370,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "var(--cardBg)",
    color: "var(--textNormal)",
  },
  bullet: {},
  numbering: {
    fontSize: 14,
  },
  title: {
    fontSize: "1.4rem",
    color: "var(--textTitle)",
  },
  desc: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 15,
  },
  mb: {
    marginBottom: 50,
  },
  action: {
    color: "var(--social)",
    marginRight: "12px",
    fontSize: "1.3rem",
  },
  bottomRight: {
    position: "absolute",
    bottom: "8px",
    right: "5px",
  },
  ul: {
    margin: "0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  li: {
    // paddingRight: 13,
    fontSize: 15,
    color: "var(--textSubTitle)",
    fontStyle: "italic",

    "&::before": {
      content: '""',
    },
  },
})

export default function Project({ data }) {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  const { frontmatter, html } = data.node
  const { numbering, title, github, demo, tech } = frontmatter
  const techLen = tech.length - 1

  return (
    <Card className={`${classes.root} ${classes.mb}`}>
      <CardContent style={{ width: "88%" }}>
        <Typography
          className={classes.numbering}
          style={{
            color: "var(--textSpecial)",
            fontSize: "0.9rem",
            fontWeight: "600",
          }}
          gutterBottom
        >
          {numbering}
        </Typography>
        <Typography variant="h5" component="h1" className={classes.title}>
          {title}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          component="div"
        >
          <ul className={classes.ul}>
            {tech.map((t, i) => {
              if (techLen !== i && i !== 0) {
                return (
                  <li className={classes.li} key={i}>
                    &nbsp;{t} {bull}
                  </li>
                )
              } else if (i === 0) {
                return (
                  <li className={classes.li} key={i}>
                    {t} {bull}
                  </li>
                )
              } else {
                return (
                  <li className={classes.li} key={i}>
                    &nbsp;{t}
                  </li>
                )
              }
            })}
          </ul>
        </Typography>
        <Typography variant="body2" component="div" className={classes.desc}>
          <StyledHtmlLink dangerouslySetInnerHTML={{ __html: html }} />
        </Typography>
      </CardContent>
      <CardActions className={classes.bottomRight}>
        <Tippy content="Demo" arrow="">
          {demo && (
            <a
              href={demo}
              target="_blank"
              className={classes.action}
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          )}
        </Tippy>
        <Tippy content="Github" arrow="">
          {github && (
            <a
              href={github}
              target="_blank"
              className={classes.action}
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}
        </Tippy>
      </CardActions>
    </Card>
  )
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
}
