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

const useStyles = makeStyles({
  root: {
    minWidth: 135,
    // maxWidth: 550,
    minHeight: 370,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  numbering: {
    fontSize: 14,
  },
  title: {
    fontSize: "1.4rem",
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
  link: {
    color: "black",
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
    paddingRight: 13,
    fontSize: 15,

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

  return (
    <Card className={`${classes.root} ${classes.mb}`}>
      <CardContent style={{ width: "88%" }}>
        <Typography
          className={classes.numbering}
          color="textSecondary"
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
              return (
                <li className={classes.li} key={i}>
                  {t}
                </li>
              )
            })}
          </ul>
        </Typography>
        <Typography variant="body2" component="div" className={classes.desc}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Typography>
      </CardContent>
      <CardActions className={classes.bottomRight}>
        <Tippy content="Demo" arrow="">
          {demo && (
            <a href={demo} target="_blank" className={classes.link}>
              <FiExternalLink />
            </a>
          )}
        </Tippy>
        <Tippy content="Github" arrow="">
          {github && (
            <a href={github} target="_blank" className={classes.link}>
              <FaGithub />
            </a>
          )}
        </Tippy>
      </CardActions>
    </Card>
  )
}
