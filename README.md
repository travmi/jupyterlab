**[Installation](#installation)** |
**[Documentation](http://jupyterlab.readthedocs.io)** |
**[Contributing](#contributing)** |
**[License](#license)** |
**[Team](#team)** |
**[Getting help](#getting-help)** |

# [JupyterLab](http://jupyterlab.github.io/jupyterlab/)

[![PyPI version](https://badge.fury.io/py/jupyterlab.svg)](https://badge.fury.io/py/jupyterlab)
[![Downloads](https://pepy.tech/badge/jupyterlab/month)](https://pepy.tech/project/jupyterlab/month)
[![Build Status](https://dev.azure.com/jupyterlab/jupyterlab/_apis/build/status/jupyterlab.jupyterlab?branchName=master)](https://dev.azure.com/jupyterlab/jupyterlab/_build/latest?definitionId=1&branchName=master)
[![Documentation Status](https://readthedocs.org/projects/jupyterlab/badge/?version=stable)](http://jupyterlab.readthedocs.io/en/stable/)
[![GitHub](https://img.shields.io/badge/issue_tracking-github-blue.svg)](https://github.com/jupyterlab/jupyterlab/issues)
[![Discourse](https://img.shields.io/badge/help_forum-discourse-blue.svg)](https://discourse.jupyter.org/c/jupyterlab)
[![Gitter](https://img.shields.io/badge/social_chat-gitter-blue.svg)](https://gitter.im/jupyterlab/jupyterlab)

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jupyterlab/jupyterlab-demo/master?urlpath=lab/tree/demo)

An extensible environment for interactive and reproducible computing, based on the
Jupyter Notebook and Architecture. [Currently ready for users.](https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906)

[JupyterLab](http://jupyterlab.readthedocs.io/en/stable/) is the next-generation user interface for [Project Jupyter](https://jupyter.org) offering
all the familiar building blocks of the classic Jupyter Notebook (notebook,
terminal, text editor, file browser, rich outputs, etc.) in a flexible and
powerful user interface.
JupyterLab will eventually replace the classic Jupyter Notebook.

JupyterLab can be extended using [npm](https://www.npmjs.com/) packages
that use our public APIs. To find JupyterLab extensions, search for the npm keyword [jupyterlab-extension](https://www.npmjs.com/search?q=keywords:jupyterlab-extension) or the GitHub topic [jupyterlab-extension](https://github.com/topics/jupyterlab-extension). To learn more about extensions, see the [user documentation](https://jupyterlab.readthedocs.io/en/latest/user/extensions.html).

The current JupyterLab releases are suitable for general
usage, and the extension APIs will continue to
evolve for JupyterLab extension developers.

Read the latest version's documentation on [ReadTheDocs](http://jupyterlab.readthedocs.io/en/latest/).

---

## Getting started

### Installation

JupyterLab can be installed using `conda` or `pip`. For more detailed instructions, consult the [installation guide](http://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html).

Project installation instructions from the git sources are available in the [contributor documentation](CONTRIBUTING.md).

### conda

If you use `conda`, you can install it with:

```shell
conda install -c conda-forge jupyterlab
```

### pip

If you use `pip`, you can install it with:

```shell
pip install jupyterlab
```

If installing using `pip install --user`, you must add the user-level `bin` directory to your `PATH` environment variable in order to launch `jupyter lab`.

#### Installing with Previous Versions of Jupyter Notebook

When using a version of Jupyter Notebook earlier than 5.3, the following command must be run
after installation to enable the JupyterLab server extension:

```bash
jupyter serverextension enable --py jupyterlab --sys-prefix
```

### Running

Start up JupyterLab using:

```bash
jupyter lab
```

JupyterLab will open automatically in the browser. See the [documentation](http://jupyterlab.readthedocs.io/en/stable/getting_started/starting.html) for additional details.

### Prerequisites and Supported Browsers

Jupyter notebook version 4.3 or later is required. To check the notebook version, run the command:

```bash
jupyter notebook --version
```

The latest versions of the following browsers are currently _known to work_:

- Firefox
- Chrome
- Safari

See our [documentation](http://jupyterlab.readthedocs.io/en/latest/getting_started/installation.html) for additional details.

---

## Development

### Contributing

To contribute to the project, please read the [contributor documentation](CONTRIBUTING.md).

JupyterLab follows the Jupyter [Community Guides](https://jupyter.readthedocs.io/en/latest/community/content-community.html).

### Extending JupyterLab

To start developing an extension, see the [developer documentation](https://jupyterlab.readthedocs.io/en/latest/developer/extension_dev.html) and the [API docs](http://jupyterlab.github.io/jupyterlab/index.html).

### License

JupyterLab uses a shared copyright model that enables all contributors to maintain the
copyright on their contributions. All code is licensed under the terms of the revised [BSD license](https://github.com/jupyterlab/jupyterlab/blob/master/LICENSE).

### Team

JupyterLab is part of [Project Jupyter](http://jupyter.org/) and is developed by an open community. The maintenance team is assisted by a much larger group of contributors to JupyterLab and Project Jupyter as a whole.

JupyterLab's current maintainers are listed in alphabetical order, with affiliation, and main areas of contribution:

- Afshin Darian, Two Sigma (co-creator, application/high-level architecture,
  prolific contributions throughout the code base).
- Tim George, Cal Poly (UI/UX design, strategy, management, user needs analysis)
- Brian Granger, AWS (co-creator, strategy, vision, management, UI/UX design,
  architecture).
- Jason Grout, Bloomberg (co-creator, vision, general development).
- Fernando Perez, UC Berkeley (co-creator, vision).
- Ian Rose, Quansight/City of LA (general core development, extensions).
- Saul Shanabrook, Quansight (general development, extensions)
- Steven Silvester, AWS (co-creator, release management, packaging,
  prolific contributions throughout the code base).
- Vidar T. Fauske, JPMorgan Chase (general development, extensions).
- Max Klein, JPMorgan Chase (UI Package, build system, general development, extensions).

Maintainer emeritus:

- Chris Colbert, Project Jupyter (co-creator, application/low-level architecture,
  technical leadership, vision, PhosphorJS)
- Cameron Oelsen, Cal Poly (UI/UX design).
- Jessica Forde, Project Jupyter (demo, documentation)

This list is provided to give the reader context on who we are and how our team functions.
To be listed, please submit a pull request with your information.

---

## Getting help

We encourage you to ask questions on the [Discourse forum](https://discourse.jupyter.org/c/jupyterlab). A question answered there can become a useful resource for others.

Please use the [GitHub issues page](https://github.com/jupyterlab/jupyterlab/issues) to provide feedback or submit a bug report. To keep resolved issues self-contained, the [lock bot](https://github.com/apps/lock) will lock closed issues as resolved after a period of inactivity. If related discussion is still needed after an issue is locked, please open a new issue and reference the old issue.

### Weekly Dev Meeting

We have videoconference meetings every week where we discuss what we have been working on and get feedback from one another.

Anyone is welcome to attend, if they would like to discuss a topic or just to listen in.

- When: Wednesdays [9AM Pacific Time](https://www.thetimezoneconverter.com/?t=9%3A00%20am&tz=San%20Francisco&)
- Where: [`calpoly/jupyter` Zoom](https://calpoly.zoom.us/my/jupyter)
- What: [Meeting notes](https://hackmd.io/Uscrk0N1RhCtX-p6ZHUuWQ?both)
