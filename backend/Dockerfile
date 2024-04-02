# syntax=docker/dockerfile:1

FROM python:3.10-slim-bullseye
ARG PDM_PYPI_URL=${PIP_INDEX_URL:-https://pypi.org/simple}
ENV PYTHONPATH=/app

# Install S.O. packages prereqs
RUN rm -f /etc/apt/apt.conf.d/docker-clean; echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache
RUN \
  --mount=type=cache,target=/var/cache/apt,sharing=locked \
  --mount=type=cache,target=/var/lib/apt,sharing=locked \
  apt-get update && apt-get install -y --no-install-recommends \
  curl build-essential \
  libpango-1.0-0 libpangoft2-1.0-0 libjpeg-dev libopenjp2-7-dev libffi-dev

# Install PDM
# https://pdm.fming.dev/
RUN pip install -U pip setuptools wheel
RUN pip install pdm


# Configure APP
WORKDIR /app

# Install dependencies
COPY backend/pyproject.toml backend/pdm.lock /app/
RUN pdm sync -G :all --no-editable --no-self

# Copy app files
COPY backend/src/ /app

VOLUME [ "/data" ]

EXPOSE 8000

CMD ["/app/.venv/bin/uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]