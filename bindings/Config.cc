#include "./Config.hh"

#include <yoga/Yoga.h>

/* static */ Config* Config::create(void) {
  return new Config();
}

/* static */ void Config::destroy(Config* node) {
  delete node;
}

Config::Config(void) : m_config(YGConfigNew()) {}

Config::~Config(void) {
  YGConfigFree(m_config);
}

void Config::setExperimentalFeatureEnabled(int feature, bool enabled) {
  YGConfigSetExperimentalFeatureEnabled(
      m_config, static_cast<YGExperimentalFeature>(feature), enabled);
}

void Config::setPointScaleFactor(float pixelsInPoint) {
  YGConfigSetPointScaleFactor(m_config, pixelsInPoint);
}

bool Config::isExperimentalFeatureEnabled(int feature) const {
  return YGConfigIsExperimentalFeatureEnabled(
      m_config, static_cast<YGExperimentalFeature>(feature));
}
